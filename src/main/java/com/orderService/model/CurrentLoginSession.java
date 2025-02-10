package com.orderService.model;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;


@Entity
public class CurrentLoginSession {
	
	
	@Id
	@Column(unique =  true)
	private Integer userId;
	
	private String uuid;
	
	private LocalDateTime localDateTime;

	public CurrentLoginSession(Integer customerId, String key, LocalDateTime now) {
		this.userId=customerId;
		this.uuid=key;
		this.localDateTime=now;
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public String getUuid() {
		return uuid;
	}

	public void setUuid(String uuid) {
		this.uuid = uuid;
	}

	public LocalDateTime getLocalDateTime() {
		return localDateTime;
	}

	public void setLocalDateTime(LocalDateTime localDateTime) {
		this.localDateTime = localDateTime;
	}
	
	
	
	
	

}
