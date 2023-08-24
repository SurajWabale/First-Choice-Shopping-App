package com.example.demo.entities;


import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="role")
public class Role {
	@Id
	int r_id;
	String role_name;
	public int getRole_id() {
		return r_id;
	}
	public void setRole_id(int r_id) {
		this.r_id = r_id;
	}
	public String getRole_name() {
		return role_name;
	}
	public void setRole_name(String role_name) {
		this.role_name = role_name;
	}
	
	

}
