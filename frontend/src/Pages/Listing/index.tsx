import MovieCard from 'Components/MovieCard';
import Pagination from 'Components/Pagination';
import './styles.css';

function Listing() {
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