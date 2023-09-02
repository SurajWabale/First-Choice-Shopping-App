package com.example.demo.entities;

import java.util.Date;

public class OrderReg {
	
	int c_id;
	Double total_amount;
	String shipping_address;
	public OrderReg() {
		super();
		// TODO Auto-generated constructor stub
	}
	public OrderReg(int c_id, Double total_amount, String shipping_address) {
		super();
		this.c_id = c_id;
		this.total_amount = total_amount;
		this.shipping_address = shipping_address;
	}
	public int getC_id() {
		return c_id;
	}
	public void setC_id(int c_id) {
		this.c_id = c_id;
	}
	public Double getTotal_amount() {
		return total_amount;
	}
	public void setTotal_amount(Double total_amount) {
		this.total_amount = total_amount;
	}
	public String getShipping_address() {
		return shipping_address;
	}
	public void setShipping_address(String shipping_address) {
		this.shipping_address = shipping_address;
	}
	@Override
	public String toString() {
		return "OrderReg [c_id=" + c_id + ", total_amount=" + total_amount + ", shipping_address=" + shipping_address
				+ "]";
	}
	
	
	

}
