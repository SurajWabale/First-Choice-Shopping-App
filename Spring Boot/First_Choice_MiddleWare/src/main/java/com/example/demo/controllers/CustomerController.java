package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Customer;
import com.example.demo.entities.CustomerReg;
import com.example.demo.entities.Login;
import com.example.demo.entities.Role;
import com.example.demo.services.CustomerService;
import com.example.demo.services.LoginService;
import com.example.demo.services.RoleService;


@CrossOrigin("*")
@RestController
public class CustomerController {
	@Autowired
	CustomerService cserv;
	
	@Autowired
	LoginService lserv;
	
	@Autowired
	RoleService rserv;
	@PostMapping("/regCustomer")
	public Customer regCustomer(@RequestBody CustomerReg cr)
	{
	
		Role r =rserv.getRole(1);
		Login l=new Login(cr.getUid(),cr.getPwd(),r,true);
		Login saved=lserv.save(l);
		
		Customer c=new Customer(cr.getC_name(),cr.getEmail(),cr.getContact(),cr.getAddress(),saved);
		return cserv.saveCustomer(c);
	}
	
	@GetMapping("/getallcustomers")
	public List<Customer> getAll()
	{
		return cserv.getAll();
	}
}
