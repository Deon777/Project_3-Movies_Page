import './styles.css'

const movie = {
    id: 1,
    image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
    title: "The Witcher",
    count: 2,
    score: 4.5
};

function Form() {
    return (
        <div className="project-form-container">
            <img src={movie.image} alt={movie.title} className='project-form-img' />
            <div className="project-formbottom">
                <h1>{movie.title}</h1>
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
                    <button className="project-formbottom-button" id="cancel">Cancelar</button>
                </div>
            </div>
        </div>
    );
}
export default Form;