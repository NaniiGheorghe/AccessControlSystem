package com.acs.aop.logging;


import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.aspectj.lang.reflect.MethodSignature;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.lang.reflect.Method;
import java.util.Arrays;

@Aspect
@Component
public class LoggingAspect {

    Logger LOGGER_SERVICE = LoggerFactory.getLogger("service-request");
    Logger LOGGER_REPOSITORY = LoggerFactory.getLogger("repository-request");
    Logger LOGGER_WEB = LoggerFactory.getLogger("web-requests");
    Logger LOGGER_ERR = LoggerFactory.getLogger("errOut");


    /**
     * Pointcut that matches all repositories
     */
    @Pointcut("within(@org.springframework.stereotype.Repository *)")
    public void getRepositoriesPointcut() {
    }

    /**
     * Pointcut that matches all Services
     */
    @Pointcut("within(@org.springframework.stereotype.Service *)")
    public void getServicePointcut() {
    }

    /**
     * Pointcut that matches all RestControllers
     */
    @Pointcut("within(@org.springframework.web.bind.annotation.RestController *)")
    public void getWebPointcut() {
    }

    /**
     * Advice that logs methods throwing exceptions.
     *
     * @param joinPoint join point for advice
     * @param e         exception
     */
    @AfterThrowing(pointcut = "getWebPointcut() && getServicePointcut() && getRepositoriesPointcut()", throwing = "e")
    public void logAfterThrowing(JoinPoint joinPoint, Throwable e) {
        LOGGER_ERR.error("Exception in " + joinPoint.getSignature().getDeclaringTypeName() + "." + joinPoint.getSignature().getName() + "() with cause = \'" + ((e.getCause() != null) ? e.getCause() : "NULL") + "\' and exception = \'" + e.getMessage() + "\'", e);
    }

    /**
     * Advice that logs when a method is entered and exited.
     *
     * @param joinPoint join point for advice
     * @return result
     * @throws Throwable throws IllegalArgumentException
     */
    @Around("getRepositoriesPointcut()")
    public Object logAroundRepositories(ProceedingJoinPoint joinPoint) throws Throwable {
        if (LOGGER_REPOSITORY.isDebugEnabled()) {
            LOGGER_REPOSITORY.debug("Enter: " + joinPoint.getSignature().getDeclaringTypeName() + "." + joinPoint.getSignature().getName() + "() with argument[s] = " + Arrays.toString(joinPoint.getArgs()));
        }
        try {
            Object result = joinPoint.proceed();
            if (LOGGER_REPOSITORY.isDebugEnabled()) {
                LOGGER_REPOSITORY.debug("Exit: " + joinPoint.getSignature().getDeclaringTypeName() + "." + joinPoint.getSignature().getName() + "() with result = " + result);
            }
            return result;
        } catch (IllegalArgumentException e) {
            LOGGER_REPOSITORY.error("Illegal argument: " + Arrays.toString(joinPoint.getArgs()) + " in " + joinPoint.getSignature().getDeclaringTypeName() + "." + joinPoint.getSignature().getName() + "()");
            throw e;
        }
    }


    @Around("getServicePointcut()")
    public Object logAroundServices(ProceedingJoinPoint joinPoint) throws Throwable {
        if (LOGGER_SERVICE.isDebugEnabled()) {
            LOGGER_SERVICE.debug("Enter: " + joinPoint.getSignature().getDeclaringTypeName() + "." + joinPoint.getSignature().getName() + "() with argument[s] = " + Arrays.toString(joinPoint.getArgs()));
        }
        try {
            Object result = joinPoint.proceed();
            if (LOGGER_SERVICE.isDebugEnabled()) {
                LOGGER_SERVICE.debug("Exit: " + joinPoint.getSignature().getDeclaringTypeName() + "." + joinPoint.getSignature().getName() + "() with result = " + result);
            }
            return result;
        } catch (IllegalArgumentException e) {
            LOGGER_SERVICE.error("Illegal argument: " + Arrays.toString(joinPoint.getArgs()) + " in " + joinPoint.getSignature().getDeclaringTypeName() + "." + joinPoint.getSignature().getName() + "()");
            throw e;
        }
    }


    @Around("getWebPointcut()")
    public Object logAroundWeb(ProceedingJoinPoint joinPoint) throws Throwable {
        String finalPath = "";
        MethodSignature methodSignature = (MethodSignature) joinPoint.getSignature();
        Method method = methodSignature.getMethod();
        if (method != null && method.getAnnotation(RequestMapping.class) != null) {
            String[] path = method.getAnnotation(RequestMapping.class).value();
            if(method.getDeclaringClass().getAnnotation(RequestMapping.class) != null) {
                String[] classPath = method.getDeclaringClass().getAnnotation(RequestMapping.class).value();
                if (classPath.length > 0) {
                    finalPath += classPath[0];
                }
            }

            RequestMethod[] requestMethods = method.getAnnotation(RequestMapping.class).method();
            if (path.length > 0) {
                finalPath += path[0];
            }
            LOGGER_WEB.debug("Executing end point [" + finalPath + "] and method [" + requestMethods[0] + "]");

            if (LOGGER_WEB.isDebugEnabled()) {
                LOGGER_WEB.debug("Enter: " + joinPoint.getSignature().getDeclaringTypeName() + "." + joinPoint.getSignature().getName() + "() with argument[s] = " + Arrays.toString(joinPoint.getArgs()));
            }
            try {
                Object result = joinPoint.proceed();
                if (LOGGER_WEB.isDebugEnabled()) {
                    LOGGER_WEB.debug("Exit: " + joinPoint.getSignature().getDeclaringTypeName() + "." + joinPoint.getSignature().getName() + "() with result = " + result);
                }
                return result;
            } catch (IllegalArgumentException e) {
                LOGGER_WEB.error("Illegal argument: " + Arrays.toString(joinPoint.getArgs()) + " in " + joinPoint.getSignature().getDeclaringTypeName() + "." + joinPoint.getSignature().getName() + "()");
                throw e;
            }
        }
        return null;
    }
}
