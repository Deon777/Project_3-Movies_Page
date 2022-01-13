import './styles.css';
import { ReactComponent as GitLogo } from 'Assets/img/github-icon.svg';

function NavBar() {
    return (
        <header>
            <nav className='container'>
                <h1>DSMovie</h1>
                <a href="https://github.com/devsuperior" target="_blank" rel="noreferrer" className='project-gitlink'>
                    <GitLogo />
                    <p className='project-gitlink-text'>/devsuperior</p>
                </a>
            </nav>
        </header>
    );
}
export default NavBar;