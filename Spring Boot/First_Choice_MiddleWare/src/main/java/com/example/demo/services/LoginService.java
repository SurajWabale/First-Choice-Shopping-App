package com.example.demo.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Login;
import com.example.demo.repositories.LoginRepository;

@Service
public class LoginService {

	@Autowired
	LoginRepository lrepo;
	
	public Login getLogin(String uid ,String pwd)
	{
		Login login;
		Optional<Login> ologin = lrepo.getLogin(uid, pwd);
		try
		{
			login= ologin.get();
		}
		catch(Exception e)
		{
			login=null;
		}
		return login;
	}
	
	public Login save(Login l)
	{
		return lrepo.save(l);
	}
	public Optional<Login> getUser(int l_id)
	{
		return lrepo.findById(l_id);
	}
	
	public Login getAdminByUId(int l_id)
	{
		Login u=lrepo.findById(l_id).get();  //findById returns optional---use get method to retrieve
		
		return lrepo.getAdminByUId(u);
	}
}