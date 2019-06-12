package com.example.springytest;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan(basePackages = "com.intelligrated.cacheservice")
public class SpringyTestConfiguration {
    @Bean
    public SpringyTestService SpringyTestService() {
        return new SpringyTestService();
    }
}
