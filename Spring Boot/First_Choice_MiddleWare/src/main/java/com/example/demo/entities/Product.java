package com.example.demo.entities;

import javax.persistence.CascadeType;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "products")
public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	private int p_id;
	private String p_name;
	private String p_desc;
	private float price;
	
	@JsonIgnoreProperties("products")

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "s_id")
	private Size s_id;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "b_id")
	private Brand b_id;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "c_id")
	private Category c_id;

	@JsonIgnoreProperties("v_id")
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "v_id")
	private Vendor v_id;

	private byte[] p_image;

	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Product(int p_id, String p_name, String p_desc, float price, byte[] p_image, Size s_id, Brand b_id,
			Category c_id, Vendor v_id) {
		super();
		this.p_id = p_id;
		this.p_name = p_name;
		this.p_desc = p_desc;
		this.price = price;
		this.p_image = p_image;
		this.s_id = s_id;
		this.b_id = b_id;
		this.c_id = c_id;
		this.v_id = v_id;
	}

	public int getP_id() {
		return p_id;
	}

	public void setP_id(int p_id) {
		this.p_id = p_id;
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

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public byte[] getP_image() {
		return p_image;
	}

	public void setP_img(byte[] p_image) {
		this.p_image = p_image;
	}

	public Size getS_id() {
		return s_id;
	}

	public void setS_id(Size s_id) {
		this.s_id = s_id;
	}

	public Brand getB_id() {
		return b_id;
	}

	public void setB_id(Brand b_id) {
		this.b_id = b_id;
	}

	public Category getC_id() {
		return c_id;
	}

	public void setC_id(Category c_id) {
		this.c_id = c_id;
	}

	public Vendor getV_id() {
		return v_id;
	}

	public void setV_id(Vendor v_id) {
		this.v_id = v_id;
	}

}
