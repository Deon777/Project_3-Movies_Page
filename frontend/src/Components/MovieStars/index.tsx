import './styles.css'
import { ReactComponent as StarFull } from 'Assets/img/star-full.svg';
import { ReactComponent as StarHalf } from 'Assets/img/star-half.svg';
import { ReactComponent as StarEmpty } from 'Assets/img/star-empty.svg';

type Props = {
    score: number;
}

type StarProps = {
    starType: number;
}

function getFills(score: number) {

    const fills = [0, 0, 0, 0, 0];

    const integerPart = Math.floor(score);

    for (let i = 0; i < integerPart; i++) {
        fills[i] = 1;
    }

    const diff = score - integerPart;
    if (diff > 0) {
        fills[integerPart] = 0.5;
    }

    return fills;
}

function Star( { starType } : StarProps) {
    if (starType === 1) {
        return <StarFull />
    }
    if (starType === 0) {
        return <StarEmpty />
    }
    return <StarHalf />
}

function MovieStars({ score }: Props) {

    const fills = getFills(score);

    return (
        <div className='project-stars-container'>
            <Star starType={fills[0]}/>
            <Star starType={fills[1]}/>
            <Star starType={fills[2]}/>
            <Star starType={fills[3]}/>
            <Star starType={fills[4]}/>
        </div>
    );
}
export default MovieStars;