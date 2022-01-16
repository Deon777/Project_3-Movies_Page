import './styles.css'
import { Link } from 'react-router-dom';
import { Movie } from 'Types/movie';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from 'Utils/requests';

type Props = {
    movieId: string;
}

function Form( { movieId } : Props ) {

    const [movie, setMovie] = useState<Movie>();

    useEffect(() => {
        axios.get(`${BASE_URL}/movies/${movieId}`).then(response => {
            setMovie(response.data as Movie);
        })
    }, [movieId]);

    return (
        <div className="project-form-container">
            <img src={movie?.image} alt={movie?.title} className='project-form-img' />
            <div className="project-formbottom">
                <h1>{movie?.title}</h1>
                <form className="project-formbottom-form">
                    <div className="project-formbottom-formgroup">
                        <label htmlFor="email">Informe seu email</label>
                        <input type="email" className="project-formbottom-formgroup-control" id="email" />
                    </div>
                    <div className="project-formbottom-formgroup">
                        <label htmlFor="score">Informe sua avaliação</label>
                        <select className="project-formbottom-formgroup-control" id="score">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="project-formbottom-button-container">
                        <button className="project-formbottom-button" id="save">Salvar</button>
                    </div>
                </form>
                <div className="project-formbottom-button-container">
                    <Link to="/">
                        <button className="project-formbottom-button" id="cancel">Cancelar</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default Form;