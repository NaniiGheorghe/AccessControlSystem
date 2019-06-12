package com.acs.configuration;


import com.acs.configuration.socket.SocketServerProvider;
import com.acs.jmx.LoggerMXBean;
import com.acs.jmx.LoggerMXBeanImpl;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.event.EventListener;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import javax.management.*;
import java.lang.management.ManagementFactory;

@SpringBootApplication
@EnableConfigurationProperties
@ComponentScan(basePackages = "com.acs")
@EnableJpaRepositories("com.acs.repository")
@EntityScan(basePackages = {"com.acs.model"})
public class AccessControlSystemApplication extends SpringBootServletInitializer {

	@Autowired
	private SocketServerProvider socketServerProvider;


	public static void main(String[] args) throws Exception {
		SpringApplication.run(AccessControlSystemApplication.class, args);

		LoggerMXBeanImpl logger = new LoggerMXBeanImpl() ;
		ObjectName objName = new ObjectName("ACS:name=ACS");
		MBeanServer server = ManagementFactory.getPlatformMBeanServer();
		server.registerMBean(logger, objName);

	}

	@Bean
	public BCryptPasswordEncoder bCryptPasswordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Bean
	public ModelMapper modelMapper() {
		return new ModelMapper();
	}


	@EventListener(ApplicationReadyEvent.class)
	public void doSomethingAfterStartup() {
		socketServerProvider.start(2002);
	}


}

