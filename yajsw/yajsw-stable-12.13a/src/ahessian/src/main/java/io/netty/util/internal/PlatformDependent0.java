/*
 * Copyright 2013 The Netty Project
 *
 * The Netty Project licenses this file to you under the Apache License,
 * version 2.0 (the "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at:
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */
package io.netty.util.internal;

import io.netty.util.internal.logging.InternalLogger;
import io.netty.util.internal.logging.InternalLoggerFactory;
import sun.misc.Unsafe;

import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.nio.Buffer;
import java.nio.ByteBuffer;
import java.security.AccessController;
import java.security.PrivilegedAction;

import static io.netty.util.internal.ObjectUtil.checkNotNull;

/**
 * The {@link PlatformDependent} operations which requires access to {@code sun.misc.*}.
 */
final class PlatformDependent0 {

    private static final InternalLogger logger = InternalLoggerFactory.getInstance(PlatformDependent0.class);
    private static final long ADDRESS_FIELD_OFFSET;
    private static final long BYTE_ARRAY_BASE_OFFSET;
    private static final Constructor<?> DIRECT_BUFFER_CONSTRUCTOR;
    private static final boolean IS_EXPLICIT_NO_UNSAFE = explicitNoUnsafe0();
    private static final Method ALLOCATE_ARRAY_METHOD;

    private static final Object INTERNAL_UNSAFE;
    static final Unsafe UNSAFE;

    /**
     * Limits the number of bytes to copy per {@link Unsafe#copyMemory(long, long, long)} to allow safepoint polling
     * during a large copy.
     */
    private static final long UNSAFE_COPY_THRESHOLD = 1024L * 1024L;

    private static final boolean UNALIGNED;

    static {
        final ByteBuffer direct;
        Field addressField = null;
        Method allocateArrayMethod = null;
        Unsafe unsafe;
        Object internalUnsafe = null;

        if (isExplicitNoUnsafe()) {
            direct = null;
            addressField = null;
            unsafe = null;
            internalUnsafe = null;
        } else {
            direct = ByteBuffer.allocateDirect(1);

            // attempt to access field Unsafe#theUnsafe
            final Object maybeUnsafe = AccessController.doPrivileged(new PrivilegedAction<Object>() {
                @Override
                public Object run() {
                    try {
                        final Field unsafeField = Unsafe.class.getDeclaredField("theUnsafe");
                        Throwable cause = ReflectionUtil.trySetAccessible(unsafeField);
                        if (cause != null) {
                            return cause;
                        }
                        // the unsafe instance
                        return unsafeField.get(null);
                    } catch (NoSuchFieldException e) {
                        return e;
                    } catch (SecurityException e) {
                        return e;
                    } catch (IllegalAccessException e) {
                        return e;
                    }
                }
            });

            // the conditional check here can not be replaced with checking that maybeUnsafe
            // is an instanceof Unsafe and reversing the if and else blocks; this is because an
            // instanceof check against Unsafe will trigger a class load and we might not have
            // the runtime permission accessClassInPackage.sun.misc
            if (maybeUnsafe instanceof Exception) {
                unsafe = null;
                logger.debug("sun.misc.Unsafe.theUnsafe: unavailable", (Exception) maybeUnsafe);
            } else {
                unsafe = (Unsafe) maybeUnsafe;
                logger.debug("sun.misc.Unsafe.theUnsafe: available");
            }

            // ensure the unsafe supports all necessary methods to work around the mistake in the latest OpenJDK
            // https://github.com/netty/netty/issues/1061
            // http://www.mail-archive.com/jdk6-dev@openjdk.java.net/msg00698.html
            if (unsafe != null) {
                final Unsafe finalUnsafe = unsafe;
                final Object maybeException = AccessController.doPrivileged(new PrivilegedAction<Object>() {
                    @Override
                    public Object run() {
                        try {
                            finalUnsafe.getClass().getDeclaredMethod(
                                    "copyMemory", Object.class, long.class, Object.class, long.class, long.class);
                            return null;
                        } catch (NoSuchMethodException e) {
                            return e;
                        } catch (SecurityException e) {
                            return e;
                        }
                    }
                });

                if (maybeException == null) {
                    logger.debug("sun.misc.Unsafe.copyMemory: available");
                } else {
                    // Unsafe.copyMemory(Object, long, Object, long, long) unavailable.
                    unsafe = null;
                    logger.debug("sun.misc.Unsafe.copyMemory: unavailable", (Throwable) maybeException);
                }
            }

            if (unsafe != null) {
                final Unsafe finalUnsafe = unsafe;

                // attempt to access field Buffer#address
                final Object maybeAddressField = AccessController.doPrivileged(new PrivilegedAction<Object>() {
                    @Override
                    public Object run() {
                        try {
                            final Field field = Buffer.class.getDeclaredField("address");
                            // Use Unsafe to read value of the address field. This way it will not fail on JDK9+ which
                            // will forbid changing the access level via reflection.
                            final long offset = finalUnsafe.objectFieldOffset(field);
                            final long address = finalUnsafe.getLong(direct, offset);

                            // if direct really is a direct buffer, address will be non-zero
                            if (address == 0) {
                                return null;
                            }
                            return field;
                        } catch (NoSuchFieldException e) {
                            return e;
                        } catch (SecurityException e) {
                            return e;
                        }
                    }
                });

                if (maybeAddressField instanceof Field) {
                    addressField = (Field) maybeAddressField;
                    logger.debug("java.nio.Buffer.address: available");
                } else {
                    logger.debug("java.nio.Buffer.address: unavailable", (Throwable) maybeAddressField);

                    // If we cannot access the address of a direct buffer, there's no point of using unsafe.
                    // Let's just pretend unsafe is unavailable for overall simplicity.
                    unsafe = null;
                }
            }

            if (unsafe != null) {
                // There are assumptions made where ever BYTE_ARRAY_BASE_OFFSET is used (equals, hashCodeAscii, and
                // primitive accessors) that arrayIndexScale == 1, and results are undefined if this is not the case.
                long byteArrayIndexScale = unsafe.arrayIndexScale(byte[].class);
                if (byteArrayIndexScale != 1) {
                    logger.debug("unsafe.arrayIndexScale is {} (expected: 1). Not using unsafe.", byteArrayIndexScale);
                    unsafe = null;
                }
            }
        }
        UNSAFE = unsafe;

        if (unsafe == null) {
            BYTE_ARRAY_BASE_OFFSET = -1;
            ADDRESS_FIELD_OFFSET = -1;
            UNALIGNED = false;
            DIRECT_BUFFER_CONSTRUCTOR = null;
            ALLOCATE_ARRAY_METHOD = null;
        } else {
            Constructor<?> directBufferConstructor;
            long address = -1;
            try {
                final Object maybeDirectBufferConstructor =
                        AccessController.doPrivileged(new PrivilegedAction<Object>() {
                            @Override
                            public Object run() {
                                try {
                                    final Constructor<?> constructor =
                                            direct.getClass().getDeclaredConstructor(long.class, int.class);
                                    Throwable cause = ReflectionUtil.trySetAccessible(constructor);
                                    if (cause != null) {
                                        return cause;
                                    }
                                    return constructor;
                                } catch (NoSuchMethodException e) {
                                    return e;
                                } catch (SecurityException e) {
                                    return e;
                                }
                            }
                        });

                if (maybeDirectBufferConstructor instanceof Constructor<?>) {
                    address = UNSAFE.allocateMemory(1);
                    // try to use the constructor now
                    try {
                        ((Constructor<?>) maybeDirectBufferConstructor).newInstance(address, 1);
                        directBufferConstructor = (Constructor<?>) maybeDirectBufferConstructor;
                        logger.debug("direct buffer constructor: available");
                    } catch (InstantiationException e) {
                        directBufferConstructor = null;
                    } catch (IllegalAccessException e) {
                        directBufferConstructor = null;
                    } catch (InvocationTargetException e) {
                        directBufferConstructor = null;
                    }
                } else {
                    logger.debug(
                            "direct buffer constructor: unavailable",
                            (Throwable) maybeDirectBufferConstructor);
                    directBufferConstructor = null;
                }
            } finally {
                if (address != -1) {
                    UNSAFE.freeMemory(address);
                }
            }
            DIRECT_BUFFER_CONSTRUCTOR = directBufferConstructor;
            ADDRESS_FIELD_OFFSET = objectFieldOffset(addressField);
            boolean unaligned;
            Object maybeUnaligned = AccessController.doPrivileged(new PrivilegedAction<Object>() {
                @Override
                public Object run() {
                    try {
                        Class<?> bitsClass =
                                Class.forName("java.nio.Bits", false, getSystemClassLoader());
                        Method unalignedMethod = bitsClass.getDeclaredMethod("unaligned");
                        Throwable cause = ReflectionUtil.trySetAccessible(unalignedMethod);
                        if (cause != null) {
                            return cause;
                        }
                        return unalignedMethod.invoke(null);
                    } catch (NoSuchMethodException e) {
                        return e;
                    } catch (SecurityException e) {
                        return e;
                    } catch (IllegalAccessException e) {
                        return e;
                    } catch (ClassNotFoundException e) {
                        return e;
                    } catch (InvocationTargetException e) {
                        return e;
                    }
                }
            });

            if (maybeUnaligned instanceof Boolean) {
                unaligned = (Boolean) maybeUnaligned;
                logger.debug("java.nio.Bits.unaligned: available, {}", unaligned);
            } else {
                String arch = SystemPropertyUtil.get("os.arch", "");
                //noinspection DynamicRegexReplaceableByCompiledPattern
                unaligned = arch.matches("^(i[3-6]86|x86(_64)?|x64|amd64)$");
                Throwable t = (Throwable) maybeUnaligned;
                logger.debug("java.nio.Bits.unaligned: unavailable {}", unaligned, t);
            }

            UNALIGNED = unaligned;
            BYTE_ARRAY_BASE_OFFSET = arrayBaseOffset();

            Object maybeException = AccessController.doPrivileged(new PrivilegedAction<Object>() {
                @Override
                public Object run() {
                    try {
                        // Java9 has jdk.internal.misc.Unsafe and not all methods are propagated to
                        // sun.misc.Unsafe
                        Class<?> internalUnsafeClass = getClassLoader(PlatformDependent0.class)
                                .loadClass("jdk.internal.misc.Unsafe");
                        Method method = internalUnsafeClass.getDeclaredMethod("getUnsafe");
                        return method.invoke(null);
                    } catch (Throwable e) {
                        return e;
                    }
                }
            });

            if (!(maybeException instanceof Throwable)) {
                internalUnsafe = maybeException;
                final Object finalInternalUnsafe = internalUnsafe;
                maybeException = AccessController.doPrivileged(new PrivilegedAction<Object>() {
                    @Override
                    public Object run() {
                        try {
                            return finalInternalUnsafe.getClass().getDeclaredMethod(
                                    "allocateUninitializedArray", Class.class, int.class);
                        } catch (NoSuchMethodException e) {
                            return e;
                        } catch (SecurityException e) {
                            return e;
                        }
                    }
                });

                if (maybeException instanceof Method) {
                    try {
                        Method m = (Method) maybeException;
                        byte[] bytes = (byte[]) m.invoke(finalInternalUnsafe, byte.class, 8);
                        assert bytes.length == 8;
                        allocateArrayMethod = m;
                    } catch (IllegalAccessException e) {
                        maybeException = e;
                    } catch (InvocationTargetException e) {
                        maybeException = e;
                    }
                }
            }
            ALLOCATE_ARRAY_METHOD = allocateArrayMethod;

            if (maybeException instanceof Throwable) {
                logger.debug("jdk.internal.misc.Unsafe.allocateUninitializedArray(int): unavailable",
                        (Throwable) maybeException);
            } else {
                logger.debug("jdk.internal.misc.Unsafe.allocateUninitializedArray(int): available");
            }
        }

        INTERNAL_UNSAFE = internalUnsafe;

        logger.debug("java.nio.DirectByteBuffer.<init>(long, int): {}",
                DIRECT_BUFFER_CONSTRUCTOR != null ? "available" : "unavailable");
    }

    static boolean isExplicitNoUnsafe() {
        return IS_EXPLICIT_NO_UNSAFE;
    }

    private static boolean explicitNoUnsafe0() {
    	// yajsw: do not use unsafe
    	//final boolean noUnsafe = SystemPropertyUtil.getBoolean("io.netty.noUnsafe", false);
    	final boolean noUnsafe = SystemPropertyUtil.getBoolean("io.netty.noUnsafe", true);
        logger.debug("-Dio.netty.noUnsafe: {}", noUnsafe);

        if (noUnsafe) {
            logger.debug("sun.misc.Unsafe: unavailable (io.netty.noUnsafe)");
            return true;
        }

        // Legacy properties
        boolean tryUnsafe;
        if (SystemPropertyUtil.contains("io.netty.tryUnsafe")) {
            tryUnsafe = SystemPropertyUtil.getBoolean("io.netty.tryUnsafe", true);
        } else {
            tryUnsafe = SystemPropertyUtil.getBoolean("org.jboss.netty.tryUnsafe", true);
        }

        if (!tryUnsafe) {
            logger.debug("sun.misc.Unsafe: unavailable (io.netty.tryUnsafe/org.jboss.netty.tryUnsafe)");
            return true;
        }

        return false;
    }

    static boolean isUnaligned() {
        return UNALIGNED;
    }

    static boolean hasUnsafe() {
        return UNSAFE != null;
    }

    static void throwException(Throwable cause) {
        // JVM has been observed to crash when passing a null argument. See https://github.com/netty/netty/issues/4131.
        UNSAFE.throwException(checkNotNull(cause, "cause"));
    }

    static boolean hasDirectBufferNoCleanerConstructor() {
        return DIRECT_BUFFER_CONSTRUCTOR != null;
    }

    static ByteBuffer reallocateDirectNoCleaner(ByteBuffer buffer, int capacity) {
        return newDirectBuffer(UNSAFE.reallocateMemory(directBufferAddress(buffer), capacity), capacity);
    }

    static ByteBuffer allocateDirectNoCleaner(int capacity) {
        return newDirectBuffer(UNSAFE.allocateMemory(capacity), capacity);
    }

    static boolean hasAllocateArrayMethod() {
        return ALLOCATE_ARRAY_METHOD != null;
    }

    static byte[] allocateUninitializedArray(int size) {
        try {
            return (byte[]) ALLOCATE_ARRAY_METHOD.invoke(INTERNAL_UNSAFE, byte.class, size);
        } catch (IllegalAccessException e) {
            throw new Error(e);
        } catch (InvocationTargetException e) {
            throw new Error(e);
        }
    }

    static ByteBuffer newDirectBuffer(long address, int capacity) {
        ObjectUtil.checkPositiveOrZero(capacity, "capacity");

        try {
            return (ByteBuffer) DIRECT_BUFFER_CONSTRUCTOR.newInstance(address, capacity);
        } catch (Throwable cause) {
            // Not expected to ever throw!
            if (cause instanceof Error) {
                throw (Error) cause;
            }
            throw new Error(cause);
        }
    }

    static long directBufferAddress(ByteBuffer buffer) {
        return getLong(buffer, ADDRESS_FIELD_OFFSET);
    }

    static long arrayBaseOffset() {
        return UNSAFE.arrayBaseOffset(byte[].class);
    }

    static Object getObject(Object object, long fieldOffset) {
        return UNSAFE.getObject(object, fieldOffset);
    }

    static int getInt(Object object, long fieldOffset) {
        return UNSAFE.getInt(object, fieldOffset);
    }

    private static long getLong(Object object, long fieldOffset) {
        return UNSAFE.getLong(object, fieldOffset);
    }

    static long objectFieldOffset(Field field) {
        return UNSAFE.objectFieldOffset(field);
    }

    static byte getByte(long address) {
        return UNSAFE.getByte(address);
    }

    static short getShort(long address) {
        return UNSAFE.getShort(address);
    }

    static int getInt(long address) {
        return UNSAFE.getInt(address);
    }

    static long getLong(long address) {
        return UNSAFE.getLong(address);
    }

    static byte getByte(byte[] data, int index) {
        return UNSAFE.getByte(data, BYTE_ARRAY_BASE_OFFSET + index);
    }

    static short getShort(byte[] data, int index) {
        return UNSAFE.getShort(data, BYTE_ARRAY_BASE_OFFSET + index);
    }

    static int getInt(byte[] data, int index) {
        return UNSAFE.getInt(data, BYTE_ARRAY_BASE_OFFSET + index);
    }

    static long getLong(byte[] data, int index) {
        return UNSAFE.getLong(data, BYTE_ARRAY_BASE_OFFSET + index);
    }

    static void putByte(long address, byte value) {
        UNSAFE.putByte(address, value);
    }

    static void putShort(long address, short value) {
        UNSAFE.putShort(address, value);
    }

    static void putInt(long address, int value) {
        UNSAFE.putInt(address, value);
    }

    static void putLong(long address, long value) {
        UNSAFE.putLong(address, value);
    }

    static void putByte(byte[] data, int index, byte value) {
        UNSAFE.putByte(data, BYTE_ARRAY_BASE_OFFSET + index, value);
    }

    static void putShort(byte[] data, int index, short value) {
        UNSAFE.putShort(data, BYTE_ARRAY_BASE_OFFSET + index, value);
    }

    static void putInt(byte[] data, int index, int value) {
        UNSAFE.putInt(data, BYTE_ARRAY_BASE_OFFSET + index, value);
    }

    static void putLong(byte[] data, int index, long value) {
        UNSAFE.putLong(data, BYTE_ARRAY_BASE_OFFSET + index, value);
    }

    static void copyMemory(long srcAddr, long dstAddr, long length) {
        //UNSAFE.copyMemory(srcAddr, dstAddr, length);
        while (length > 0) {
            long size = Math.min(length, UNSAFE_COPY_THRESHOLD);
            UNSAFE.copyMemory(srcAddr, dstAddr, size);
            length -= size;
            srcAddr += size;
            dstAddr += size;
        }
    }

    static void copyMemory(Object src, long srcOffset, Object dst, long dstOffset, long length) {
        //UNSAFE.copyMemory(src, srcOffset, dst, dstOffset, length);
        while (length > 0) {
            long size = Math.min(length, UNSAFE_COPY_THRESHOLD);
            UNSAFE.copyMemory(src, srcOffset, dst, dstOffset, size);
            length -= size;
            srcOffset += size;
            dstOffset += size;
        }
    }

    static void setMemory(long address, long bytes, byte value) {
        UNSAFE.setMemory(address, bytes, value);
    }

    static void setMemory(Object o, long offset, long bytes, byte value) {
        UNSAFE.setMemory(o, offset, bytes, value);
    }

    static boolean isZero(byte[] bytes, int startPos, int length) {
        if (length <= 0) {
            return true;
        }
        final long baseOffset = BYTE_ARRAY_BASE_OFFSET + startPos;
        int remainingBytes = length & 7;
        final long end = baseOffset + remainingBytes;
        for (long i = baseOffset - 8 + length; i >= end; i -= 8) {
            if (UNSAFE.getLong(bytes, i) != 0) {
                return false;
            }
        }

        if (remainingBytes >= 4) {
            remainingBytes -= 4;
            if (UNSAFE.getInt(bytes, baseOffset + remainingBytes) != 0) {
                return false;
            }
        }
        if (remainingBytes >= 2) {
            return UNSAFE.getChar(bytes, baseOffset) == 0 &&
                    (remainingBytes == 2 || bytes[startPos + 2] == 0);
        }
        return bytes[startPos] == 0;
    }

    static ClassLoader getClassLoader(final Class<?> clazz) {
        if (System.getSecurityManager() == null) {
            return clazz.getClassLoader();
        } else {
            return AccessController.doPrivileged(new PrivilegedAction<ClassLoader>() {
                @Override
                public ClassLoader run() {
                    return clazz.getClassLoader();
                }
            });
        }
    }

    static ClassLoader getContextClassLoader() {
        if (System.getSecurityManager() == null) {
            return Thread.currentThread().getContextClassLoader();
        } else {
            return AccessController.doPrivileged(new PrivilegedAction<ClassLoader>() {
                @Override
                public ClassLoader run() {
                    return Thread.currentThread().getContextClassLoader();
                }
            });
        }
    }

    static ClassLoader getSystemClassLoader() {
        if (System.getSecurityManager() == null) {
            return ClassLoader.getSystemClassLoader();
        } else {
            return AccessController.doPrivileged(new PrivilegedAction<ClassLoader>() {
                @Override
                public ClassLoader run() {
                    return ClassLoader.getSystemClassLoader();
                }
            });
        }
    }

    static int addressSize() {
        return UNSAFE.addressSize();
    }

    static long allocateMemory(long size) {
        return UNSAFE.allocateMemory(size);
    }

    static void freeMemory(long address) {
        UNSAFE.freeMemory(address);
    }

    private PlatformDependent0() {
    }

}
