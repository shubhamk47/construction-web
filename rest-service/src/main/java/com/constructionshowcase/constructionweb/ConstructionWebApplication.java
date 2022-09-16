package com.constructionshowcase.constructionweb;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class ConstructionWebApplication {

	public static void main(String[] args) {
		SpringApplication.run(ConstructionWebApplication.class, args);
	}

	// @Configuration
	// public class WebConfig implements WebMvcConfigurer {
	// 	@Override
	// 	public void addViewControllers(ViewControllerRegistry registry) {
	// 		registry.addViewController("/").setViewName("forward:/index.html");
	// 		registry.addViewController("/{x:[\\w\\-]+}").setViewName("forward:/index.html");
	// 		registry.addViewController("/{x:^(?!api$).*$}/**").setViewName("forward:/index.html");
	// 	}
	// }

}
