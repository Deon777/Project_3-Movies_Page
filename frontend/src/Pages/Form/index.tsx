import FormCard from 'Components/FormCard';
import { useParams } from 'react-router-dom';

function Form() {

    const params = useParams();

    return (
        <FormCard movieId={`${params.movieId}`} previousPage={`${params.previousPage}`}/>
    );
}
export default Form;