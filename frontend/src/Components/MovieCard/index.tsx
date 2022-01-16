import './styles.css';
import MovieScore from 'Components/MovieScore';
import { Link } from 'react-router-dom';
import { Movie } from 'Types/movie';

type Props = {
    movie: Movie;
}

function MovieCard( { movie } : Props ) {
    return (
        <div className='project-card-container'>
            <div className='project-card-box'>
                <img src={movie.image} alt={movie.title} className='project-card-image' />
                <p className='project-card-title'>{movie.title}</p>
                <div className='card'>
                    <MovieScore movie={movie}/>
                </div>
                <Link to={`/form/${movie.id}`}> 
                    <div className='btn btn-primary mt-3 project-card-buttom'>Avaliar</div>
                </Link>
            </div>
        </div>
    );
}
export default MovieCard;