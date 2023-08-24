package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="customer")
public class Customer {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int c_id;
	@Column
	String c_name;
	@Column
	String email;
	@Column
	String contact;
	@Column
	String address;
	
	@OneToOne
	@JoinColumn(name="l_id")
	Login l_id;

	public Customer() {
		super();
	
	}

	public Customer(String c_name, String email, String contact, String address, Login l_id) {
		super();
		this.c_name = c_name;
		this.email = email;
		this.contact = contact;
		this.address = address;
		this.l_id = l_id;
	}

	public Customer(String c_name, String email, String contact, String address) {
		super();
		this.c_name = c_name;
		this.email = email;
		this.contact = contact;
		this.address = address;
	}

	public int getC_id() {
		return c_id;
	}

	public void setC_id(int c_id) {
		this.c_id = c_id;
	}

	public String getC_name() {
		return c_name;
	}

	public void setC_name(String c_name) {
		this.c_name = c_name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Login getL_id() {
		return l_id;
	}

	public void setL_id(Login l_id) {
		this.l_id = l_id;
	}

	@Override
	public String toString() {
		return "Customer [c_id=" + c_id + ", c_name=" + c_name + ", email=" + email + ", contact=" + contact
				+ ", address=" + address + ", l_id=" + l_id + "]";
	}
	
}
