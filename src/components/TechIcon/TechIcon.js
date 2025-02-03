import './TechIcon.css';

const TechIcon = ({ items }) => {
    return (
      <ul className='tech-icons'>
        {items.map((item, index) => (
          <li key={index}>
            <img className='tech-icon-img' src={item.src} alt={item.name} />
            <p className={item.className || ''}>{item.name}</p>
          </li>
        ))}
      </ul>
    );
  };

export default TechIcon;