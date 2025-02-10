package com.orderService.model;



import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;
import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnore;

import org.springframework.stereotype.Service;


@Entity
@Service
public class Item {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer itemId;
	
	@NotNull(message = "Please Enter Item Name...")
	@Size(min = 3 ,max = 20)
	private String itemName;
	
	
	@OneToOne(cascade = CascadeType.ALL)
	private Category category;
	
	
	@NotNull(message = "Please Enter quantity..")
	@Min(1)
	private Integer quantity;
	
	
	@DecimalMin("1.00")
	private Double cost;
	
	@JsonIgnore
	@ManyToMany(cascade = CascadeType.ALL,mappedBy = "items",fetch =  FetchType.EAGER)
	private List<Restaurant> resturants = new ArrayList<>();

	public Integer getItemId() {
		return itemId;
	}

	public void setItemId(Integer itemId) {
		this.itemId = itemId;
	}

	public String getItemName() {
		return itemName;
	}

	public void setItemName(String itemName) {
		this.itemName = itemName;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public Integer getQuantity() {
		return quantity;
	}

	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}

	public Double getCost() {
		return cost;
	}

	public void setCost(Double cost) {
		this.cost = cost;
	}

	public List<Restaurant> getResturants() {
		return resturants;
	}

	public void setResturants(List<Restaurant> resturants) {
		this.resturants = resturants;
	}


	
	
	

	
}
