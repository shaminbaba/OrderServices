package com.orderService.service;

import com.orderService.exception.LoginException;
import com.orderService.model.LoginDto;

public interface LoginService {
	
	public String loginAccount(LoginDto dto) throws LoginException;
	
	public String LogOutFromAccount(String key) throws LoginException;

}
