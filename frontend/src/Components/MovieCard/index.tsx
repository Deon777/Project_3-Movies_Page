import './styles.css';
import MovieScore from 'Components/MovieScore';

const movie = {
    id: 1,
    image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
    title: "The Witcher",
    count: 2,
    score: 4.5
};

function MovieCard() {
    return (
        <div className='project-card-container'>
            <div className='project-card-box'>
                <img src={movie.image} alt={movie.title} className='project-card-image' />
                <p className='project-card-title'>{movie.title}</p>
                <div className='card'>
                    <MovieScore />
                </div>
                <div className='btn btn-primary project-card-buttom'>Avaliar</div>
            </div>
        </div>
    );
}
export default MovieCard;