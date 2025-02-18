import TechStack from './TechStack';

const Project = ({ image, title, description, techs, codeLink, liveLink, handleClick }) => (
  <div className="project">
    <div className="project-pic-container">
      <img
        onClick={handleClick}
        className="project-pic"
        src={image}
        alt={title}
      />
      {/* Hover container with buttons */}
      <div className="hover-container">
        <a
          target="_blank"
          href={codeLink}
          rel="noreferrer"
          className="hover-button"
        >
          View Code
        </a>
        <a
          target="_blank"
          href={liveLink}
          className="hover-button"
          rel="noreferrer"
        >
          Live Demo
        </a>
      </div>
    </div>

    <div className="project-info">
      <h6>{title}</h6>
      <p>{description}</p>
      <TechStack items={techs} />
    </div>
  </div>
);

export default Project;
