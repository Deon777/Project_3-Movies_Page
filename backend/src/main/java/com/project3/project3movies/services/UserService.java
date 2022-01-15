package com.project3.project3movies.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.project3.project3movies.dtos.UserDTO;
import com.project3.project3movies.entities.User;
import com.project3.project3movies.repositories.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;
	
	@Transactional(readOnly = true)
	public UserDTO findById(Long id) {
		User user = userRepository.findById(id).get();
		UserDTO result = new UserDTO(user);
		
		return result;
	}
	
}
