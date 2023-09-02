package com.example.demo.entities;

public class ProductReg {
	int c_id;
	String p_name;
	String p_desc;
	int b_id;
	int s_id;
	int quantity;
	double price;
	int v_id;
	public ProductReg() {
		super();
		// TODO Auto-generated constructor stub
	}
	public ProductReg(int c_id, String p_name, String p_desc, int b_id, int s_id, int quantity,
			double price,int v_id) {
		super();
		this.c_id = c_id;
		this.p_name = p_name;
		this.p_desc = p_desc;
		this.b_id = b_id;
		this.s_id = s_id;
		this.quantity = quantity;
		this.price = price;
		this.v_id=v_id;
	}
	public int getC_id() {
		return c_id;
	}
	public void setC_id(int c_id) {
		this.c_id = c_id;
	}
	public String getP_name() {
		return p_name;
	}
	public void setP_name(String p_name) {
		this.p_name = p_name;
	}
	public String getP_desc() {
		return p_desc;
	}
	public void setP_desc(String p_desc) {
		this.p_desc = p_desc;
	}
	public int getB_id() {
		return b_id;
	}
	public void setB_name(int b_id) {
		this.b_id = b_id;
	}
	public int getS_id() {
		return s_id;
	}
	public void setS_id(int s_id) {
		this.s_id = s_id;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	
	public int getV_id() {
		return v_id;
	}
	public void setV_id(int v_id) {
		this.v_id = v_id;
	}
	@Override
	public String toString() {
		return "ProductReg [c_id=" + c_id + ", p_name=" + p_name + ", p_desc=" + p_desc + ", b_id=" + b_id
				+ ", s_id=" + s_id + ", quantity=" + quantity + ", price=" + price + ", v_id="+v_id+"]";
	}
	
	
	
	

}
