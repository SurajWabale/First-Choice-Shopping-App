package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Login;
import com.example.demo.entities.LoginCheck;
import com.example.demo.services.LoginService;

@CrossOrigin("*")
@RestController
public class LoginController {

	@Autowired
	LoginService lservice;
	
	@PostMapping("/loginCheck")
	public Login loginCheck(@RequestBody LoginCheck logincheck)
	{
		return lservice.getLogin(logincheck.getUid(), logincheck.getPwd());
		
	}
	
	@GetMapping("/getAdminByUId")
	public Login getDoctorByUId(@RequestParam("l_id")int l_id)
	{
		return lservice.getAdminByUId(l_id);
	}
}
