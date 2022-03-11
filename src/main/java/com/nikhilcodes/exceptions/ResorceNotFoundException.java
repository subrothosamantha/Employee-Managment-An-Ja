package com.nikhilcodes.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResorceNotFoundException extends RuntimeException {
	
	
	
	public ResorceNotFoundException(String message) {
		super();
	}

}
