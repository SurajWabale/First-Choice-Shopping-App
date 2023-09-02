package com.example.demo.reposiratories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Size;

public interface SizeReposiratory extends JpaRepository<Size, Integer> {

}
