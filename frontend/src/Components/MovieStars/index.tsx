import './styles.css'
import { ReactComponent as StarFull } from 'Assets/img/star-full.svg';
import { ReactComponent as StarHalf } from 'Assets/img/star-half.svg';
import { ReactComponent as StarEmpty } from 'Assets/img/star-empty.svg';

function MovieStars() {
    return (
        <div className='project-stars-container'>
            <StarFull />
            <StarFull />
            <StarFull />
            <StarHalf />
            <StarEmpty />
        </div>
    );
}
export default MovieStars;