package com.nikhilcodes.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nikhilcodes.repository.EmployeeRepository;
import com.nikhilcodes.entities.Employee;
import com.nikhilcodes.exceptions.*;

import java.util.*;

@RestController
@RequestMapping("/api/v1/")
public class HomeController {
	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	//list of employees
	@GetMapping("/employees")
	public List<Employee> getAllEmployees(){
		
		return employeeRepository.findAll();
	}

	//creating employees
	@PostMapping("/employees")
	public Employee createEmployee(@RequestBody Employee employee) {
		//System.out.println(employee.getFirstName()+" "+employee.getLastName()+" "+employee.getEmailId());
		return employeeRepository.save(employee);
	}
	
	//fetching by id
	@GetMapping("/employees/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable("id")int id) {
		Employee employee = employeeRepository.findById(id)
				.orElseThrow(()->new ResorceNotFoundException("Employee Not found in database "+id));
		return ResponseEntity.ok(employee);
	}
	
	@PutMapping("/employees/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable("id")int id,@RequestBody Employee employee) {
		Employee emp = employeeRepository.findById(id)
				.orElseThrow(()->new ResorceNotFoundException("Employee Not found in database "+id));
		emp.setFirstName(employee.getFirstName());
		emp.setEmailId(employee.getEmailId());
		emp.setLastName(employee.getLastName());
		employeeRepository.save(emp);
		return ResponseEntity.ok(emp);
		
	}
}
