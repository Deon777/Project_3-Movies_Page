import './styles.css';
import { ReactComponent as Arrow } from 'Assets/img/arrow.svg';
import { MoviePage } from 'Types/movie';

type Props = {
    page: MoviePage;
    onChange: Function;
}

function Pagination( { page, onChange } : Props ) {
    return (
        <div className='project-pagination-container'>
            <div className='project-pagination-box'>
                <button className='project-pagination-bttarrow' id='left' 
                    disabled={page.first} onClick={() => onChange(page.number-1)}>
                        <Arrow />
                </button>
                <p className='project-pagination-numberpage'>{page.number + 1} de {page.totalPages}</p>
                <button className='project-pagination-bttarrow' id='right' 
                    disabled={page.last} onClick={() => onChange(page.number+1)}>
                        <Arrow />
                </button>
            </div>  
        </div>
    );
}
export default Pagination;