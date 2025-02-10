package com.orderService.model;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;

public class LoginDto {
	
	private String mobileNo;
	
	private String password;
	
	@Enumerated(EnumType.STRING)
	private LoginType loginType;

	public String getMobileNo() {
		return mobileNo;
	}

	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public LoginType getLoginType() {
		return loginType;
	}

	public void setLoginType(LoginType loginType) {
		this.loginType = loginType;
	}

	
	
	
	

}
