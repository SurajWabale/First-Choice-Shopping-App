package com.example.demo.entities;

import java.sql.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.GeneratorType;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name = "orders")
public class Order {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int o_id;
	

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "c_id")
	private Customer c_id;
	
	@Column
	private Date date;
	
	@Column
	private double total_amount;
	
	@Column
	private String shipping_address;
	
	@JsonIgnoreProperties("o_id")
	@OneToMany(mappedBy = "o_id", cascade = CascadeType.ALL)
	private List<OrderedItems> orderitemlist;

	public Order() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Order(Customer c_id, Date date, double total_amount, String shipping_address) {
		super();
		this.c_id = c_id;
		this.date = date;
		this.total_amount = total_amount;
		this.shipping_address = shipping_address;
	}
	
	

	public Order(Customer c_id, Date date, double total_amount, String shipping_address,
			List<OrderedItems> orderitemlist) {
		super();
		this.c_id = c_id;
		this.date = date;
		this.total_amount = total_amount;
		this.shipping_address = shipping_address;
		this.orderitemlist = orderitemlist;
	}

	public int getO_id() {
		return o_id;
	}

	public void setO_id(int o_id) {
		this.o_id = o_id;
	}

	public Customer getC_id() {
		return c_id;
	}

	public void setC_id(Customer c_id) {
		this.c_id = c_id;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public double getTotal_amount() {
		return total_amount;
	}

	public void setTotal_amount(double total_amount) {
		this.total_amount = total_amount;
	}

	public String getShipping_address() {
		return shipping_address;
	}

	public void setShipping_address(String shipping_address) {
		this.shipping_address = shipping_address;
	}

	public List<OrderedItems> getOrderitemlist() {
		return orderitemlist;
	}

	public void setOrderitemlist(List<OrderedItems> orderitemlist) {
		this.orderitemlist = orderitemlist;
	}

	
	

}
