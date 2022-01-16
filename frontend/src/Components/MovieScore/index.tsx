import MovieStars from 'Components/MovieStars';
import { Movie } from 'Types/movie';
import './styles.css';

type Props = {
    movie: Movie;
}

function MovieScore( {movie} : Props) {
    return (
        <div className='project-score-container'>
            <p className='project-score-score'>{movie.score > 0 ? movie.score.toFixed(1) : '-'}</p>
            <MovieStars score={movie.score}/>
            <p className='project-score-count'>{movie.count} avaliações</p>
        </div>
    );
}
export default MovieScore;