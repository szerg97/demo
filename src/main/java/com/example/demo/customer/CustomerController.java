package com.example.demo.customer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/customers")
@CrossOrigin(origins = "http://localhost:3000")
public class CustomerController {

    private final CustomerService customerService;

    @Autowired
    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @GetMapping
    public List<Customer> getCustomers(){
        return this.customerService.getCustomers();
    }

    @GetMapping(path = "{customerId}")
    public Customer getCustomerById(@PathVariable("customerId") Long id){
        return this.customerService.getCustomerById(id);
    }


    @PostMapping(path="new")
    public void addCustomer(@RequestBody CustomerDTO customer){
        this.customerService.addCustomer(new Customer(customer.getName(), customer.getEmail(), customer.getDob()));
    }

    @DeleteMapping(path = "delete/{customerId}")
    public void deleteCustomer(@PathVariable("customerId") Long id){
        this.customerService.deleteCustomer(id);
    }

    @PutMapping(path = "{customerId}")
    public void updateCustomer(@PathVariable("customerId") Long id,
                              @RequestParam(required = false) String name,
                              @RequestParam(required = false) String email){
        this.customerService.updateCustomer(id, name, email);
    }
}
