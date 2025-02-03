import { Link } from 'react-scroll';
import aboutMe from '../../imgs/about-me.png';
import aboutMeDark from '../../imgs/about-me-black.png';
import projects from '../../imgs/projects.png';
import projectsDark from '../../imgs/projects-black.png';
import techStack from '../../imgs/tech-stack.png';
import techStackDark from '../../imgs/tech-stack-black.png';
import contact from '../../imgs/contact.png';
import contactDark from '../../imgs/contact-black.png';
import './SideNav.css';

const SideNav = ({ activeSection, activeStyle }) => {
  const sections = [
    { id: 'main', light: aboutMe, dark: aboutMeDark, label: 'About Me' },
    { id: 'tech-stack', light: techStack, dark: techStackDark, label: 'Skills' },
    { id: 'projects', light: projects, dark: projectsDark, label: 'Projects' },
    { id: 'contact', light: contact, dark: contactDark, label: 'Contact' },
  ];

  return (
    <div className='side-nav'>
      {sections.map(({ id, light, dark, label }) => (
        <Link
          key={id}
          to={id}
          containerId="main"
          smooth
          duration={500}
          offset={-80}
          className={`roww ${activeSection === id ? 'active' : ''}`}
        >
          <img src={activeStyle === 'dark' ? light : dark} alt={label} />
          <span>{label}</span>
        </Link>
      ))}
    </div>
  );
};

export default SideNav;
