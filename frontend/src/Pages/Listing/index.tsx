import axios from 'axios';
import MovieCard from 'Components/MovieCard';
import Pagination from 'Components/Pagination';
import { useEffect, useState } from 'react';
import { MoviePage } from 'Types/movie';
import { BASE_URL } from 'Utils/requests';
import './styles.css';

function Listing() {

    const [currentPage, setCurrentPage] = useState(0);
    const [moviesPage, setMoviesPage] = useState<MoviePage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 0,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true
    });
    
    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
    }

    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&sort=title&page=${currentPage}`).then(response => {
            setMoviesPage(response.data);
        });
    }, [currentPage]);

    return (
        <div>
            <Pagination page={moviesPage} onChange={handlePageChange}/>
            <div className='project-listing-container'>
                <div className='row'>
                    {moviesPage.content.map(movie => {
                        return (
                            <div key={movie.id} className='col-sm-6 col-lg-4 col-xl-3 mb-4'>
                                <MovieCard movie={movie}/>
                            </div>
                        );
                    })}
                </div>
            </div>
            <Pagination page={moviesPage} onChange={handlePageChange}/>
        </div>
    );
}
export default Listing;