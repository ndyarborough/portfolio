import { projectsData } from '../../data/projectsData';
import Project from '../Project';
import './Projects.css';

const Projects = ({ handleClick }) => (
    <div className='projects' id='projects'>
        <Project {...projectsData[0]} handleClick={handleClick} />

        {projectsData.slice(1).map((project, index) => (
            <Project key={index} {...project} handleClick={handleClick} />
        ))}
    </div>
);

export default Projects;