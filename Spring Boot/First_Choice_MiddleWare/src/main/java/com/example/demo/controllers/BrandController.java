package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Brand;
import com.example.demo.entities.Category;
import com.example.demo.services.BrandService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class BrandController {

	@Autowired
	BrandService bserv;
	
	@GetMapping("/getallbrands")
	public List<Brand> allBrand()
	{
		return bserv.allBrands();
	}
}
