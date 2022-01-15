package com.project3.project3movies.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project3.project3movies.dtos.MovieDTO;
import com.project3.project3movies.dtos.ScoreDTO;
import com.project3.project3movies.services.ScoreService;

@RestController
@RequestMapping(value="/score")
public class ScoreController {
	
	@Autowired
	private ScoreService scoreService;
	
	@PutMapping
	public MovieDTO saveScore(@RequestBody ScoreDTO dto) {
		return scoreService.SaveScore(dto);
	}
	
}
