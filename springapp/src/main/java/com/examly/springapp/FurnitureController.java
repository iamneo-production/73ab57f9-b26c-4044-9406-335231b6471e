package com.springapp.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.springapp.db.FurnitureRepository;
import com.springapp.model.Furniture;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "dashboard")
public class FurnitureController {

	private byte[] bytes;

	@Autowired
	private FurnitureRepository furnitureRepository;

	@GetMapping("/get")
	public List<Furniture> getdashboard() {
		return furnitureRepository.findAll();
	}

	@PostMapping("/upload")
	public void uploadImage(@RequestParam("imageFile") MultipartFile file) throws IOException {
		this.bytes = file.getBytes();
	}

	@PostMapping("/add")
	public void createFurniture (@RequestBody Furniture furniture) throws IOException {
		furniture.setPicByte(this.bytes);
		furnitureRepository.save(furniture);
		this.bytes = null;
	}

	@PutMapping("/update")
	public void updateFurniture (@RequestBody Furniture furniture) {
		furnitureRepository.save(furniture);
	}

	@DeleteMapping(path = { "/{id}" })
	public Furniture deleteFurniture (@PathVariable("id") long id) {
		Furniture furniture = furnitureRepository.getOne(id);
		furnitureRepository.deleteById(id);
		return furniture;
	}

}
