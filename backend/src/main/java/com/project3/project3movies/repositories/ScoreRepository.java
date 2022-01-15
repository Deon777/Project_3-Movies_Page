package com.project3.project3movies.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project3.project3movies.entities.Score;

public interface ScoreRepository extends JpaRepository<Score, Long> {
	
}
