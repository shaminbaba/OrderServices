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
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;


@Entity
public class Restaurant {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer restaurantId;
	
	@NotNull(message = "Restaurant Name should not be null")
	@Size(min = 3,max=30,message = "Restaurant name of min length should be 3 and max be 30")
	private String restaurantName;
	
	@NotNull(message = "Address should not be null")
	@OneToOne(cascade = CascadeType.ALL)
	private Address address;
	
	
	@ManyToMany(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
	private List<Item> items = new ArrayList<>();
	
	
	@NotNull(message = "manager Name should not be null")
	@Size(min = 3,max=30,message = "name of min length should be 3 and max be 30")
	private String manager;
	
	@NotNull(message = "mobileNumber field should not be null")
	private String mobileNumber;
	
	@NotNull(message = "Address field should not be null")
	@Size(min = 8,max=15,message = "Password size of min length should be 3 and max be 30")
//	@Pattern(regexp = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#&()–[{}]:;',?/*~$^+=<>]).{8,20}$", message = "Invalid Password pattern. Password must contain 8 to 20 characters at least one digit, lower, upper case and one special character.")
	private String password;

	public Integer getRestaurantId() {
		return restaurantId;
	}

	public void setRestaurantId(Integer restaurantId) {
		this.restaurantId = restaurantId;
	}

	public String getRestaurantName() {
		return restaurantName;
	}

	public void setRestaurantName(String restaurantName) {
		this.restaurantName = restaurantName;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	public List<Item> getItems() {
		return items;
	}

	public void setItems(List<Item> items) {
		this.items = items;
	}

	public String getManager() {
		return manager;
	}

	public void setManager(String manager) {
		this.manager = manager;
	}

	public String getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}



}
