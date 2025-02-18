import TechStack from './TechStack';

const Project = ({ images, title, description, techs, codeLink, liveLink, handleClick }) => (
  <div className="project">
    <div className="project-pic-container" style={{ "--image-count": images.length }}>
      {images.map((imgSrc, index) => (
        <img
          key={index}
          onClick={handleClick}
          className="project-pic"
          src={imgSrc}
          alt={`${title} ${index + 1}`}
        />
      ))}

      {/* Hover container over the entire image grid */}
      <div className="hover-container">
        <a target="_blank" href={codeLink} rel="noreferrer" className="hover-button">
          View Code
        </a>
        <a target="_blank" href={liveLink} className="hover-button" rel="noreferrer">
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
