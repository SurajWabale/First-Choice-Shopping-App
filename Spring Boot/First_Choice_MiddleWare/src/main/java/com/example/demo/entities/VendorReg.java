package com.example.demo.entities;


public class VendorReg {
	int l_id;
    String uid;
	String pwd;
	int v_id;
	String v_name;
	String email;
	String contact;
	String address;
	String shop_licence_id;
	public VendorReg() {
		super();
		// TODO Auto-generated constructor stub
	}
	public VendorReg(int l_id, String uid, String pwd, int v_id, String v_name, String email, String contact,
			String address, String shop_licence_id) {
		super();
		this.l_id = l_id;
		this.uid = uid;
		this.pwd = pwd;
		this.v_id = v_id;
		this.v_name = v_name;
		this.email = email;
		this.contact = contact;
		this.address = address;
		this.shop_licence_id = shop_licence_id;
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
	public int getV_id() {
		return v_id;
	}
	public void setV_id(int v_id) {
		this.v_id = v_id;
	}
	public String getV_name() {
		return v_name;
	}
	public void setV_name(String v_name) {
		this.v_name = v_name;
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
	public String getShop_licence_id() {
		return shop_licence_id;
	}
	public void setShop_licence_id(String shop_licence_id) {
		this.shop_licence_id = shop_licence_id;
	}
	
	
}
