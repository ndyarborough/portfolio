import { Link } from 'react-scroll';
import aboutMe from '../imgs/about-me.png';
import projects from '../imgs/projects.png';
import techStack from '../imgs/tech-stack.png';
import contact from '../imgs/contact.png';

const SideNav = () => {
    return (
        <div className='side-nav'>
            <div className="roww">
                <img src={aboutMe}></img>
                <Link to="main" duration={500} offset={-80}>About Me</Link>
            </div>
            <div className="roww">
                <img src={techStack}></img>
                <Link to="tech-stack" duration={500} offset={-80}>Tech Stack</Link>
            </div>
            <div className="roww">
                <img src={projects}></img>
                <Link to="projects" duration={500} offset={-80}>Projects</Link>
            </div>
            <div className="roww">
                <img src={contact}></img>
                <Link to="contact" duration={500} offset={-80}>Contact</Link>
            </div>
        </div>
    );
}

export default SideNav;