package com.orderService.repository;

import com.orderService.model.Customer;

import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepo extends JpaRepositoryImplementation<Customer, Integer>{

	public Customer findByEmail(String email);

	public Customer findByMobileNumber(String mobileNo);
	
}
