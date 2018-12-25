package com.acs.jmx;

import ch.qos.logback.classic.Level;
import ch.qos.logback.classic.LoggerContext;
import org.slf4j.LoggerFactory;
import org.slf4j.Logger;

import javax.management.MXBean;
import java.util.List;

@MXBean
public class LoggerMXBeanImpl implements LoggerMXBean {

    Logger LOGGER = LoggerFactory.getLogger("service-request");

    @Override
    public void setLoggingLevel(String level) {
        LOGGER.info("Setting logging level to: " + level);
        LoggerContext loggerContext = (LoggerContext) LoggerFactory.getILoggerFactory();
        List<ch.qos.logback.classic.Logger> loggerList = loggerContext.getLoggerList();
        loggerList.stream().forEach(tmpLogger -> tmpLogger.setLevel(Level.valueOf(level)));
    }

    @Override
    public String getLoggingLevel() {
        ch.qos.logback.classic.Logger root = (ch.qos.logback.classic.Logger) LoggerFactory.getLogger(ch.qos.logback.classic.Logger.ROOT_LOGGER_NAME);
        return root.getLevel().toString();
    }
}
