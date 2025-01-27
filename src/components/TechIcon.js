// TechIcons Component
const TechIcon = ({ items }) => {
    return (
      <ul className='tech-icons'>
        {items.map((item, index) => (
          <li key={index}>
            <img src={item.src} alt={item.name} />
            <p className={item.className || ''}>{item.name}</p>
          </li>
        ))}
      </ul>
    );
  };

export default TechIcon;