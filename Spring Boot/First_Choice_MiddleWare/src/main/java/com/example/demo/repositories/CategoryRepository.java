package com.example.demo.repositories;


import java.util.List;

import javax.transaction.Transactional;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Category;
import com.example.demo.entities.Customer;
import com.example.demo.entities.Login;

@Transactional
@Repository
public interface CategoryRepository extends JpaRepository<Category, Integer> 
{
	@Query(value="select * from Category  WHERE c_id=? ",nativeQuery = true)
	Login findById(int c_id);
	
	@Query("select c from Category c")
	public List<Customer>getAllCategory();
}
