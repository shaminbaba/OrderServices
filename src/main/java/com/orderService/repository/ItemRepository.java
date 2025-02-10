package com.orderService.repository;


import java.util.List;

import com.orderService.model.Item;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemRepository extends JpaRepository<Item, Integer> {

	public List<Item> findByItemName(String itemName);
	
	
	
}
