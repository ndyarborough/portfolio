import './Experience.css';

const ExperienceItem = ({ title, company, location, period, description, link }) => (
    <div className="experience-item">
        <div className="experience-header">
            <div>
                <h3 className="experience-title">{title}</h3>
                <p className="experience-company">
                    {link ? (
                        <a href={link} target="_blank" rel="noopener noreferrer" className="company-link">
                            {company}
                        </a>
                    ) : (
                        company
                    )} • {location}
                </p>
            </div>
            <p className="experience-period">{period}</p>
        </div>
        <ul className="experience-description">
            {description.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
);

const Experience = ({ experiences }) => {
    return (
        <div className="experience-container">
            {experiences.map((exp, index) => (
                <ExperienceItem key={index} {...exp} />
            ))}
        </div>
    );
};

export default Experience;
