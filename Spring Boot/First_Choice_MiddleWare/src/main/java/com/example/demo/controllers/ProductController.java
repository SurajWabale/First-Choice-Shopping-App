package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Product;
import com.example.demo.services.ProductService;

@CrossOrigin("*")
@RestController
public class ProductController {
	@Autowired
	ProductService pserv;

	@GetMapping("/getallproducts")
	public List<Product> getAllProducts() {
		return pserv.allProduct();
	}
	
	@DeleteMapping("deleteProductById/{id}")
	public void deleteProduct(@PathVariable int id) {
		pserv.deleteProductById(id);
	}

	
}
