package com.example.demo.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
@Entity
@Table(name = "ordereditems")
public class OrderedItems {
	
		
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private int oiid;
		
		@JsonIgnoreProperties("orderitemlist")
	    @ManyToOne(cascade = CascadeType.ALL)
	    @JoinColumn(name = "o_id")
	    private Order o_id;
	    
	    @OneToOne
	    @JoinColumn(name="p_id")
	    private Product p_id;
	    
	    @Column
	    private int quantity;
	    
	    @Column
	    private double price;

		public OrderedItems() {
			super();
			// TODO Auto-generated constructor stub
		}

		public OrderedItems(Order o_id, Product p_id, int quantity, double price) {
			super();
			this.o_id = o_id;
			this.p_id = p_id;
			this.quantity = quantity;
			this.price = price;
		}

	

		public int getOiid() {
			return oiid;
		}

		public void setOiid(int oiid) {
			this.oiid = oiid;
		}

		public Order getO_id() {
			return o_id;
		}

		public void setO_id(Order o_id) {
			this.o_id = o_id;
		}

		public Product getP_id() {
			return p_id;
		}

		public void setP_id(Product p_id) {
			this.p_id = p_id;
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

	    
	    
	    
	    
	    
}
