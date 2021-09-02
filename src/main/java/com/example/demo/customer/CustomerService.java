package com.example.demo.customer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class CustomerService {

    private final CustomerRepository customerRepository;

    @Autowired
    public CustomerService(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    public List<Customer> getCustomers(){
        return this.customerRepository.findAll();
    }

    public Customer getCustomerById(Long id){ return this.customerRepository.findById(id).orElseThrow();}

    public void addCustomer(Customer customer) {
        Optional<Customer> studentByEmail = this.customerRepository.findByEmail(customer.getEmail());
        if(studentByEmail.isPresent()){
            throw new IllegalStateException("Email Taken!");
        }
        this.customerRepository.save(customer);
    }

    public void deleteCustomer(Long id) {
        Optional<Customer> customer = this.customerRepository.findById(id);
        if (customer.isPresent()){
            this.customerRepository.delete(customer.get());
        }
        else{
            throw new IllegalStateException("Customer Not Found!");
        }
    }

    @Transactional
    public void updateCustomer(Long id, String name, String email) {
        Customer customer = this.customerRepository.findById(id)
                .orElseThrow(()->new IllegalStateException("student does not exist"));
        if (name != null &&
        name.length() > 0 &&
        !Objects.equals(customer.getName(), name)){
            customer.setName(name);
        }

        if (email != null &&
                email.length() > 0 &&
                !Objects.equals(customer.getEmail(), email)){
            Optional<Customer> studentOptional = this.customerRepository.findByEmail(email);
            if (studentOptional.isPresent()){
                throw new IllegalStateException("Email Taken!");
            }
            customer.setEmail(email);
        }
    }
}
