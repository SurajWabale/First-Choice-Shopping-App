package com.example.demo.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.entities.Brand;
import com.example.demo.entities.Category;
import com.example.demo.entities.Login;
import com.example.demo.entities.Product;
import com.example.demo.entities.ProductReg;
import com.example.demo.entities.Role;
import com.example.demo.entities.Size;
import com.example.demo.entities.Vendor;
import com.example.demo.services.BrandService;
import com.example.demo.services.CategoryService;
import com.example.demo.services.ProductService;
import com.example.demo.services.SizeService;
import com.example.demo.services.VendorServices;

@CrossOrigin("*")
@RestController
public class ProductController {
	@Autowired
	ProductService pserv;
	
	@Autowired
	CategoryService cservice;
	
	@Autowired
	BrandService bserv;
	
	@Autowired
	VendorServices vserv;
	
	@Autowired
	SizeService sserve;

	@GetMapping("/getallproducts")
	public List<Product> getAllProducts() {
		return pserv.allProduct();
	}
	
	@DeleteMapping("deleteProductById/{id}")
    public void deleteCategory(@PathVariable int id) {
        pserv.deleteProductById(id);
    }
	@PostMapping("/addProduct")
	public Product  saveProducts(@RequestBody ProductReg p)
	{
		System.out.println(p);
		Category c=cservice.getCategory(p.getC_id());
		System.out.println(c);
		Brand b=bserv.getBrandById(p.getB_id());
		Vendor v=vserv.getVendor(p.getV_id());
		Size s=sserve.getSize(p.getS_id());
		Product pr=new Product(p.getP_name(), p.getP_desc(),p.getPrice(), s, b, c, v, p.getQuantity()); 
		//Product pd=new Product(p.getName(), p.getDescription(), p.getPrice(), p.getStock_level(), c, br, v);
		//return pservice.saveProduct(pd);
		return pserv.addProduct(pr);
	
	
    }	

	
	@PostMapping(value="/uploadImage/{p_id}",consumes = "multipart/form-data")
	public boolean uploadImages(@PathVariable("p_id") int p_id,@RequestBody MultipartFile file)
	{
		boolean flag=true;
		try
		{
			flag=pserv.uploadImage(p_id,file.getBytes());
		}
		catch(Exception e)
		{
			flag=false;
		}
		return flag;
	}
	
	@GetMapping("/getAllProductOfVendor")
	public List<Product> getProductForVendor(@RequestParam("v_id") int id)
	{
		System.out.println("Request received");
		return pserv.getProductforvendor(id);
	}
	
	@GetMapping("/getOutOfstock")
	public List<Product> getOutOfStock(@RequestParam("v_id") int id)
	{
		System.out.println("Request received");
		return pserv.getOutOfstock(id);
	}
}
