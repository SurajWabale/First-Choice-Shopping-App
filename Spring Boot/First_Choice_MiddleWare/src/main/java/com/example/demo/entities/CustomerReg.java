package com.example.demo.entities;

public class CustomerReg {
	int l_id;
    String uid;
	String pwd;
	int c_id;
	String c_name;
	String email;
	String contact;
	String address;
	
	
	public CustomerReg() {
		super();
	}


	public CustomerReg(int l_id, String uid, String pwd, int c_id, String c_name, String email, String contact,
			String address) {
		super();
		this.l_id = l_id;
		this.uid = uid;
		this.pwd = pwd;
		this.c_id = c_id;
		this.c_name = c_name;
		this.email = email;
		this.contact = contact;
		this.address = address;
	}


	public int getL_id() {
		return l_id;
	}


	public void setL_id(int l_id) {
		this.l_id = l_id;
	}


	public String getUid() {
		return uid;
	}


	public void setUid(String uid) {
		this.uid = uid;
	}


	public String getPwd() {
		return pwd;
	}


	public void setPwd(String pwd) {
		this.pwd = pwd;
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

	public String toString() {
		return "CustomerReg [l_id=" + l_id + ", uid=" + uid + ", pwd=" + pwd + ", c_id=" + c_id + ", c_name=" + c_name
				+ ", email=" + email + ", contact=" + contact + ", address=" + address + "]";
	}
}
