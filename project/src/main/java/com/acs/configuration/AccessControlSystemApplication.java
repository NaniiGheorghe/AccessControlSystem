package com.acs.configuration;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableConfigurationProperties
@ComponentScan(basePackages = "com.acs")
@EnableJpaRepositories("com.acs.repository")
@EntityScan(basePackages = {"com.acs.model"})
public class AccessControlSystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(AccessControlSystemApplication.class, args);
	}

}

