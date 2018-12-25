package com.acs.configuration;


import com.acs.jmx.LoggerMXBean;
import com.acs.jmx.LoggerMXBeanImpl;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import javax.management.*;
import java.lang.management.ManagementFactory;

@SpringBootApplication
@EnableConfigurationProperties
@ComponentScan(basePackages = "com.acs")
@EnableJpaRepositories("com.acs.repository")
@EntityScan(basePackages = {"com.acs.model"})
public class AccessControlSystemApplication {

	public static void main(String[] args) throws Exception {
		SpringApplication.run(AccessControlSystemApplication.class, args);

		LoggerMXBeanImpl logger = new LoggerMXBeanImpl() ;
		ObjectName objName = new ObjectName("ACS:name=ACS");
		MBeanServer server = ManagementFactory.getPlatformMBeanServer();
		server.registerMBean(logger, objName);
	}

}

