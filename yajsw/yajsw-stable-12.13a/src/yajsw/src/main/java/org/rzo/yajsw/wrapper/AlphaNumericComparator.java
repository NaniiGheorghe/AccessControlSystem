/*
 * Copyright 2014 Daniel Sawano
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * 
 * https://github.com/sawano/alphanumeric-comparator
 */

package org.rzo.yajsw.wrapper;

import java.nio.CharBuffer;
import java.text.Collator;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.Locale;

import static java.nio.CharBuffer.wrap;

public class AlphaNumericComparator implements Comparator<CharSequence> {

    private final Collator collator;

    /**
     * Creates a comparator that will use lexicographical sorting of the non-numerical parts of the compared strings.
     */
    public AlphaNumericComparator() {
        collator = null;
    }

    /**
     * Creates a comparator that will use locale-sensitive sorting of the non-numerical parts of the compared strings.
     *
     * @param locale
     *         the locale to use
     */
    public AlphaNumericComparator(final Locale locale) {
        this(Collator.getInstance(requireNonNull(locale)));
    }

    /**
     * Creates a comparator that will use the given collator to sort the non-numerical parts of the compared strings.
     *
     * @param collator
     *         the collator to use
     */
    public AlphaNumericComparator(final Collator collator) {
        this.collator = requireNonNull(collator);
    }

    @Override
    public int compare(final CharSequence s1, final CharSequence s2) {
        final CharBuffer b1 = wrap(s1);
        final CharBuffer b2 = wrap(s2);

        while (b1.hasRemaining() && b2.hasRemaining()) {
            moveWindow(b1);
            moveWindow(b2);

            final int result = compare(b1, b2);
            if (result != 0) {
                return result;
            }

            prepareForNextIteration(b1);
            prepareForNextIteration(b2);
        }

        return s1.length() - s2.length();
    }

    private void moveWindow(final CharBuffer buffer) {
        int start = buffer.position();
        int end = buffer.position();
        final boolean isNumerical = isDigit(buffer.get(start));
        while (end < buffer.limit() && isNumerical == isDigit(buffer.get(end))) {
            ++end;
            if (isNumerical && (start + 1 < buffer.limit()) && isZero(buffer.get(start)) && isDigit(buffer.get(end))) {
                ++start; // trim leading zeros
            }
        }

        buffer.position(start)
              .limit(end);
    }

    private int compare(final CharBuffer b1, final CharBuffer b2) {
        if (isNumerical(b1) && isNumerical(b2)) {
            return compareNumerically(b1, b2);
        }

        return compareAsStrings(b1, b2);
    }

    private boolean isNumerical(final CharBuffer buffer) {
        return isDigit(buffer.charAt(0));
    }

    private boolean isDigit(final char c) {
        if (collator == null) {
            final int intValue = (int) c;
            return intValue >= 48 && intValue <= 57;
        }
        return isDigit(c);
    }

    private int compareNumerically(final CharBuffer b1, final CharBuffer b2) {
        final int diff = b1.length() - b2.length();
        if (diff != 0) {
            return diff;
        }
        for (int i = 0; i < b1.remaining() && i < b2.remaining(); ++i) {
            final int result = compare(b1.charAt(i), b2.charAt(i));
            if (result != 0) {
                return result;
            }
        }
        return 0;
    }

    private void prepareForNextIteration(final CharBuffer buffer) {
        buffer.position(buffer.limit())
              .limit(buffer.capacity());
    }

    private int compareAsStrings(final CharBuffer b1, final CharBuffer b2) {
        if (collator != null) {
            return collator.compare(b1.toString(), b2.toString());
        }
        return b1.toString().compareTo(b2.toString());
    }

    private boolean isZero(final char c) {
        return c == '0';
    }


	public static void main(String[] args)
	{
		List x = Arrays.asList("a.20","a.1", "a.10", "a.2", "a.03" );
		Collections.sort(x, new AlphaNumericComparator());
		System.out.println(x);
	}
	
    public static <T> T requireNonNull(T obj) {
        if (obj == null)
            throw new NullPointerException();
        return obj;
    }
    
    public static int compare(char x, char y) {
        return x - y;
    }



}
