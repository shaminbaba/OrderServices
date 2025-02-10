package com.orderService.repository;

import com.orderService.model.CurrentLoginSession;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface SessionRepo extends JpaRepository<CurrentLoginSession, Integer>{

	public CurrentLoginSession findByUuid(String uuid);
	
}
