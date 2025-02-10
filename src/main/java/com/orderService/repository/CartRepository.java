package com.orderService.repository;

import com.orderService.model.Customer;
import com.orderService.model.FoodCart;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CartRepository extends JpaRepository<FoodCart, Integer> {

	public FoodCart findByCustomer(Customer customer);
	
}
