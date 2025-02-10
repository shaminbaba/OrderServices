package com.orderService.service;

import java.util.List;

import com.orderService.exception.FoodCartException;
import com.orderService.exception.OrderException;
import com.orderService.model.Customer;
import com.orderService.model.OrderDetails;

public interface OrderDetailService {
	
	public OrderDetails addOrder(OrderDetails order) throws OrderException;

	public OrderDetails removeOrder(Integer OrderId) throws OrderException;

	public OrderDetails updateOrder(OrderDetails order) throws OrderException;

	public OrderDetails viewOrder(Integer OrderId) throws OrderException;

//	public List<OrderDetails> viewAllOrders(Restaurant res) throws OrderException;

	public List<OrderDetails> viewAllOrders(Customer customer) throws OrderException,FoodCartException;

}
