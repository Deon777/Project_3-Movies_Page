package com.project3.project3movies.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.project3.project3movies.dtos.MovieDTO;
import com.project3.project3movies.entities.Movie;
import com.project3.project3movies.repositories.MovieRepository;

@Service
public class MovieService {

	@Autowired
	private MovieRepository movieRepository;
	
	@Transactional(readOnly = true)
	public Page<MovieDTO> findAll(Pageable pageable) {
		Page<Movie> movies = movieRepository.findAll(pageable);
		Page<MovieDTO> result = movies.map(x -> new MovieDTO(x));
		
		return result;
	}
	
	@Transactional(readOnly = true)
	public MovieDTO findById(Long id) {
		Movie movie = movieRepository.findById(id).get();
		MovieDTO result = new MovieDTO(movie);
		
		return result;
	}
	
}
