import MovieStars from 'Components/MovieStars';
import './styles.css';

const movie = {
    id: 1,
    image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
    title: "The Witcher",
    count: 2,
    score: 4.5
};

function MovieScore() {
    return (
        <div className='project-score-container'>
            <p className='project-score-score'>{movie.score > 0 ? movie.score.toFixed(1) : '-'}</p>
            <MovieStars />
            <p className='project-score-count'>{movie.count} avaliações</p>
        </div>
    );
}
export default MovieScore;