package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Category;
import com.example.demo.entities.Size;
import com.example.demo.services.BrandService;
import com.example.demo.services.SizeService;
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class SizeController {
	@Autowired
	SizeService serv;
	
	@GetMapping("/getallsizes")
	public List<Size> allSize()
	{
		return serv.allsize();
	}

}
