package com.orderService.repository;

import java.util.List;

import com.orderService.model.Address;
import com.orderService.model.Restaurant;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RestaurantDao extends JpaRepository<Restaurant, Integer>{

	public List<Restaurant> findByAddress(Address address);

	public Restaurant findByMobileNumber(String mobileNo);
	
	
}
