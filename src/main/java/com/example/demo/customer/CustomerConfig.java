package com.example.demo.customer;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@Configuration
public class CustomerConfig {

    @Bean
    CommandLineRunner commandLineRunner(CustomerRepository repository){
        return args -> {

            Customer peter = new Customer(
                    "Peter",
                    "peti@mail.com",
                    LocalDate.of(2000, Month.APRIL, 7));
            Customer adam = new Customer(
                    "Adam",
                    "adam@mail.com",
                    LocalDate.of(1987, Month.JANUARY, 16));

            repository.saveAll(List.of(peter,adam));
        };
    }
}
