package com.example.demo.reposiratories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Brand;
@Repository
public interface BrandReposiratory extends JpaRepository<Brand, Integer> {

}
