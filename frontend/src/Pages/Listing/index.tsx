import axios from 'axios';
import MovieCard from 'Components/MovieCard';
import Pagination from 'Components/Pagination';
import { useEffect } from 'react';
import { BASE_URL } from 'Utils/requests';
import './styles.css';

function Listing() {

    useEffect(() => {
        axios.get(`${BASE_URL}/movies?page=1&size=12&sort=title`).then(response => 
            console.log(response.data)
        );
    }, []);

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