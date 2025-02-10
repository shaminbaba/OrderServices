package com.orderService.service;


import com.orderService.exception.FoodCartException;
import com.orderService.model.FoodCart;
import com.orderService.model.Item;

public interface CartService {
	
	public FoodCart addItemToCart(FoodCart foodCart, Item item) throws FoodCartException;

	public FoodCart increaseQuantityOfItem(FoodCart foodCart, Item item, Integer quantity) throws FoodCartException;
	
	public FoodCart reduceQuantityOfItem(FoodCart foodCart, Item item, Integer quantity) throws FoodCartException;
	
	public FoodCart removeItemFromCart(FoodCart foodCart, Item item) throws FoodCartException;
	
	public FoodCart clearCart(FoodCart foodCart) throws FoodCartException;
	
}
