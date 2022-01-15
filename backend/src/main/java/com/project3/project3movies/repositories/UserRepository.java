package com.project3.project3movies.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project3.project3movies.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {
	User findByEmail(String email);
}
