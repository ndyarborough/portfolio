import { Link } from 'react-scroll';
import Icon from '../Icon';
import './SideNav.css';

const SideNav = ({ activeSection, activeStyle }) => {
  const sections = [
    { id: 'about-me', icon: 'account_circle', label: 'About Me' },
    { id: 'experience', icon: 'business', label: 'Experience' },
    { id: 'projects', icon: 'apps', label: 'Projects' },
    { id: 'tech-stack', icon: 'settings', label: 'Skills' },
    { id: 'contact', icon: 'mail', label: 'Contact' },
  ];

  return (
    <div className='side-nav'>
      {sections.map(({ id, icon, label }) => (
        <Link
          key={id}
          to={id}
          containerId="main"
          smooth
          duration={500}
          offset={-80}
          className={`roww ${activeSection === id ? 'active' : ''}`}
        >
          <Icon name={icon} className="nav-icon" size={24} />
          <span>{label}</span>
        </Link>
      ))}
    </div>
  );
};

export default SideNav;
