import githubBlack from '../../imgs/github_dark.png';
import github from '../../imgs/github.png';
import linkedIn from '../../imgs/linkedIn.png';
import './SocialButtons.css';

const SocialButtons = ({ activeStyle }) => {
  const socialLinks = [
    { 
      href: "https://www.linkedin.com/in/noah-yarborough/", 
      img: linkedIn, 
      alt: "LinkedIn", 
      label: "View my LinkedIn" 
    },
    { 
      href: "https://github.com/ndyarborough", 
      img: activeStyle === 'light' ? githubBlack : github, 
      alt: "GitHub", 
      label: "View my Github" 
    }
  ];

  return (
    <div className="social-buttons">
      {socialLinks.map(({ href, img, alt, label }) => (
        <a
          key={alt}
          className="social-button"
          target="_blank"
          rel="noopener noreferrer"
          href={href}
        >
          <img src={img} alt={alt} />
          <h6>{label}</h6>
        </a>
      ))}
    </div>
  );
};

export default SocialButtons;
