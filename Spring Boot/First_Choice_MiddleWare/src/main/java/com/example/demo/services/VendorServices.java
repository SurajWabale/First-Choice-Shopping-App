package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.example.demo.entities.Vendor;
import com.example.demo.repositories.VendorReposiratory;

@Service
public class VendorServices {
	@Autowired
	VendorReposiratory vrepo;
	
	@Autowired
	LoginService lserv;
	
	public Vendor saveVendor(Vendor v)
	{
		return vrepo.save(v);
	}
	
	public List<Vendor> getall()
	{
		return vrepo.findAll();
		
	}
	
	public Vendor getVendor(int id)
	{
		return vrepo.findById(id).get();

	}


}
