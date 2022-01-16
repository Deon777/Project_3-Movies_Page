import axios from 'axios';
import MovieCard from 'Components/MovieCard';
import Pagination from 'Components/Pagination';
import { useEffect, useState } from 'react';
import { Movie, MoviePage } from 'Types/movie';
import { BASE_URL } from 'Utils/requests';
import './styles.css';

function Listing() {

    const [currentPage, setCurrentPage] = useState(0);
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&sort=title&${currentPage}`).then(response => {
            let responseMovies = response.data as MoviePage;
            setMovies(responseMovies.content);
        });
    }, [currentPage]);

    return (
        <div>
            <Pagination />
            <div className='project-listing-container'>
                <div className='row'>
                    <div className='col-sm-6 col-lg-4 col-xl-3 mb-4'>
                        <MovieCard />
                    </div>
                    <div className='col-sm-6 col-lg-4 col-xl-3 mb-4'>
                        <MovieCard />
                    </div>
                    <div className='col-sm-6 col-lg-4 col-xl-3 mb-4'>
                        <MovieCard />
                    </div>
                    <div className='col-sm-6 col-lg-4 col-xl-3 mb-4'>
                        <MovieCard />
                    </div>
                    <div className='col-sm-6 col-lg-4 col-xl-3 mb-4'>
                        <MovieCard />
                    </div>
                    <div className='col-sm-6 col-lg-4 col-xl-3 mb-4'>
                        <MovieCard />
                    </div>
                    <div className='col-sm-6 col-lg-4 col-xl-3 mb-4'>
                        <MovieCard />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Listing;