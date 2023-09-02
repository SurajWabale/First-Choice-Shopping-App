package com.example.demo.reposiratories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Customer;
import com.example.demo.entities.Order;
import com.example.demo.entities.OrderedItems;
@Repository
public interface OrderRepository extends JpaRepository<Order, Integer> {

	
	@Query("select o from Order o where c_id= :cid")
	public List<Order> getOrdersByCustId(Customer cid);
}
