import TechIcon from './TechIcon/TechIcon';

const TechStack = ({ title, items }) => {
    return (
      <div className='tech-stack'>
        <h4>{title}</h4>
        <TechIcon items={items} />
      </div>
    );
  };

export default TechStack;