package com.orderService.repository;

import java.util.List;

import com.orderService.model.FoodCart;
import com.orderService.model.OrderDetails;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface OrderDetailRepo extends JpaRepository<OrderDetails, Integer>{
	
	public List<OrderDetails >findByCart(FoodCart cart);

}
