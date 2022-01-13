import './styles.css';
import { ReactComponent as Arrow } from 'Assets/img/arrow.svg';

function Pagination() {
    return (
        <div className='project-pagination-container'>
            <div className='project-pagination-box'>
                <button className='project-pagination-bttarrow' id='left' disabled={true}>
                    <Arrow />
                </button>
                <p className='project-pagination-numberpage'>{1} de {3}</p>
                <button className='project-pagination-bttarrow' id='right' disabled={false}>
                    <Arrow />
                </button>
            </div>
        </div>
    );
}
export default Pagination;