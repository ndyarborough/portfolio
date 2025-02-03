import { useEffect, useState } from 'react';
import SideNav from './components/SideNav/SideNav.js';
import TechStack from './components/TechStack';
import AboutMe from './components/AboutMe/AboutMe.js';
import Projects from './components/Projects';
import Contact from './components/Contact';
import lightMode from './imgs/light_mode.svg';
import darkMode from './imgs/dark_mode.svg';
import { mainStack, mostExperience, quiteComfortable } from './data/techItems.js';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('main');
  const [activeStyle, setActiveStyle] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    const mainElement = document.getElementById("main");
    const handleScroll = () => {
      const sections = ['main', 'tech-stack', 'projects', 'contact'];
      let currentSection = '';
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          console.log(`${section} rect: `, rect);
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = section;
          }
        }
      });
      setActiveSection(currentSection);
    };
    if (mainElement) {
      mainElement.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (mainElement) {
        mainElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('light-mode', activeStyle === 'light');
    localStorage.setItem('theme', activeStyle);
  }, [activeStyle]);

  const toggleActiveStyle = () => {
    setActiveStyle(prevStyle => (prevStyle === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="app">
      <SideNav activeSection={activeSection} activeStyle={activeStyle} />
      <main id="main">
        <img 
          className='style-toggle' 
          onClick={toggleActiveStyle} 
          src={activeStyle === 'light' ? lightMode : darkMode} 
          alt="Theme Toggle"
        />
        <AboutMe activeStyle={activeStyle} />
        <section id="tech-stack">
          <h2 className="themed-header">Skills</h2>
          <div id="mainSkills">
            <TechStack title="Main Stack" items={mainStack} />
            <TechStack title="5+ Years" items={mostExperience} />
            <TechStack title="2+ years" items={quiteComfortable} />
          </div>
        </section>
        <section id="projects">
          <h2 className="themed-header">Projects</h2>
          <Projects />
        </section>
        <section id="contact">
          <h2 className="themed-header">Contact</h2>
          <Contact activeStyle={activeStyle} />
        </section>
      </main>
    </div>
  );
};

export default App;
