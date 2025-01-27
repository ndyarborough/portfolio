import { useState } from 'react';
import './App.css';

import TopNav from './components/TopNav';
import Modal from './components/Modal';
import TechStack from './components/TechStack';
import Meetup from './components/Meetup';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';

import { mostExperience, quiteComfortable } from './data/techItems.js';


function App() {
  const [modalSrc, setModalSrc] = useState(null);


  const handleClick = (event) => {
    setModalSrc(event.target.src);
    console.log(modalSrc)
  };

  const closeModal = () => {
    setModalSrc(null);
  };

  return (
    <div className='app'>
      <TopNav />
      <main id="main">
        {modalSrc && <Modal src={modalSrc} onClose={closeModal} />}
        <div id='home' className='home'>
          <AboutMe handleClick={handleClick} />
          <div className='column ar' id="tech-stack">
            <TechStack title='Most Experience' items={mostExperience} />
            <TechStack title='Quite Comfortable' items={quiteComfortable} />
          </div>
          <Meetup handleClick={handleClick} />
        </div>
        <Contact />
      </main>
      <footer>
        <h2>Copyright © 2024 All rights are reserved</h2>
      </footer>
    </div>
  );
}

export default App;
