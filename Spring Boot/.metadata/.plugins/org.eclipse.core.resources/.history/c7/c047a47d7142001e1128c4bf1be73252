package com.example.demo.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Category;
import com.example.demo.services.CategoryService;



@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class CategoryController
{

	@Autowired
	 private CategoryService categoryservice;
	 
	@PostMapping("/addcategory")
	public Category registerCategory(@RequestBody Category category)
	{
		return categoryservice.registerCategory(category);
	}
	
	@GetMapping("/getallcategory")
	public List<Category> allCategory()
	{
		return categoryservice.allCategory();
	}
	
	@DeleteMapping("deleteCategoryById/{id}")
    public void deleteCategory(@PathVariable int id) {
        categoryservice.deleteCategoryById(id);
    }
	 
}
