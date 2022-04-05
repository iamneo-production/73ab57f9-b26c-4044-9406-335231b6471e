package com.springapp.db;

import org.springframework.data.jpa.repository.JpaRepository;

import com.javainuse.model.Furnitue;

public interface FurnitureRepository extends JpaRepository<Furniture, Long> {
}

