package com.project3.project3movies.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.project3.project3movies.dtos.MovieDTO;
import com.project3.project3movies.dtos.ScoreDTO;
import com.project3.project3movies.entities.Movie;
import com.project3.project3movies.entities.Score;
import com.project3.project3movies.entities.User;
import com.project3.project3movies.repositories.MovieRepository;
import com.project3.project3movies.repositories.ScoreRepository;
import com.project3.project3movies.repositories.UserRepository;

@Service
public class ScoreService {

	@Autowired
	private UserRepository userRepository;
	@Autowired
	private MovieRepository movieRepository;
	@Autowired
	private ScoreRepository scoreRepository;
	
	@Transactional
	public MovieDTO SaveScore(ScoreDTO dto) {
		User user = userRepository.findByEmail(dto.getEmail());
		Movie movie = movieRepository.getById(dto.getMovieId());
		
		if (user == null) {
			user = new User();
			user.setEmail(dto.getEmail());
			userRepository.saveAndFlush(user);
		}
		
		Score score = new Score();
		score.setMovie(movie);
		score.setUser(user);
		score.setValue(dto.getValue());
		
		score = scoreRepository.saveAndFlush(score);
		
		
		Double sum = 0.0;
		for (Score scr : movie.getScoreList()) {
			sum += scr.getValue();
		}
		Double avg = sum / movie.getScoreList().size();
		
		movie.setScore(avg);
		movie.setCount(movie.getScoreList().size());
		movie = movieRepository.saveAndFlush(movie);
		
		
		return new MovieDTO(movie);
	}
	
}
