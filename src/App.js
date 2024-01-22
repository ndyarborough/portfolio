import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import profilePic from './imgs/profilePic.jpg';
import linkedIn from './imgs/linkedIn.png';
import github from './imgs/github.png';
import html from './imgs/html.png';
import css from './imgs/css.png';
import js from './imgs/js.png';
import sql from './imgs/sql.png';
import react from './imgs/react.jpg';
import mongodb from './imgs/mongodb.png';
import nodejs from './imgs/nodejs.png';
import python from './imgs/python.png';
import setup from './imgs/setup.jpg';
import c from './imgs/c.png';
import cplusplus from './imgs/cplusplus.png';
import csharp from './imgs/csharp.png';
import aws from './imgs/aws.png';
import java from './imgs/java.png';
import reactnative from './imgs/reactnative.png';
import mail from './imgs/mail.png';
import location from './imgs/location.png';
import newTab from './imgs/newTab.png';
import eventsherenow from './imgs/eventsherenow.png';
import yardland from './imgs/yardland.png';
import menu from './imgs/menu.png';
import { Link } from 'react-scroll';

function App() {
  const [isMenuVisible, setMenuVisibility] = useState(false);

  const toggleMenu = () => {
    setMenuVisibility(!isMenuVisible);
  };

  return (
    <div className='app'>
      <div className={`nav-menu ${isMenuVisible ? 'visible' : ''}`}>
        <ul>
          <li>
            <Link onClick={toggleMenu} to="home" smooth={true} duration={500} offset={-80}>Home</Link>
          </li>
          <li>
            <Link onClick={toggleMenu} to="about" smooth={true} duration={500} offset={-80}>About</Link>
          </li>
          <li>
            <Link onClick={toggleMenu} to="projects" smooth={true} duration={500} offset={-80}>Projects</Link>
          </li>
          <li>
            <Link onClick={toggleMenu} to="contact" smooth={true} duration={500} offset={-80}>Contact</Link>
          </li>
        </ul>
      </div>
      <div className='navbar'>
        <div className='logo'>Noah.dev</div>
        <ul className='nav-items'>
          <li>
            <Link onClick={toggleMenu} to="home" smooth={true} duration={500} offset={-80}>Home</Link>
          </li>
          <li>
            <Link onClick={toggleMenu} to="about" smooth={true} duration={500} offset={-80}>About</Link>
          </li>
          <li>
            <Link onClick={toggleMenu} to="projects" smooth={true} duration={500} offset={-80}>Projects</Link>
          </li>
          <li>
            <Link onClick={toggleMenu} to="contact" smooth={true} duration={500} offset={-80}>Contact</Link>
          </li>
        </ul>
        <img className='menu-icon' src={menu} onClick={toggleMenu} alt="menu icon"></img>
      </div>
      <main>
        <div id='home' className='home'>
          <div className='row'>
            <div className='column'>
              <h1>My name is Noah Yarborough 👋🏼</h1>
              <p>I'm a passionate, Full-Stack Software Engineer based in Raleigh, North Carolina. 📍</p>
              <div className="social-buttons">
                <a target='_blank' href='https://www.linkedin.com/in/noah-yarborough/'><img src={linkedIn}></img></a>
                <a target='_blank' href='https://github.com/ndyarborough'><img src={github}></img></a>
              </div>
            </div>
            <div className='column c2'>
              <img className='profilePic' src={profilePic}></img>
            </div>
          </div>
          <div className='tech-stack'>
            <h4>Main Tech Stack </h4>
            <ul className='tech-icons'>
              <li><img src={html}></img><p>HTML5</p></li>
              <li><img src={css}></img><p>CSS3</p></li>
              <li><img src={js}></img><p>JavaScript</p></li>
              <li><img src={react}></img><p className='special'>React</p></li>
              <li><img src={mongodb}></img><p>MongoDb</p></li>
              <li><img src={nodejs}></img><p>NodeJs</p></li>
              <li><img src={aws}></img><p className='special'>Amazon Web Services</p></li>
            </ul>
          </div>
          <div className='tech-stack'>
            <h4>Have used before</h4>
            <ul className='tech-icons'>
              <li><img src={sql}></img><p>MySql</p></li>
              <li><img src={python}></img><p>Python</p></li>
              <li><img src={java}></img><p>Java</p></li>
              <li><img src={reactnative}></img><p className='special'>React Native</p></li>
              <li><img src={c}></img><p>C</p></li>
              <li><img src={cplusplus}></img><p>C++</p></li>
              <li><img src={csharp}></img><p>C#</p></li>

            </ul>
          </div>
        </div>
        <div className='about' id='about'>
          <div className='column'>
            <h2 className='blue-header'>About Me</h2>
            <h4>A dedicated Software Engineer based in Raleigh, North Carolina 📍</h4>
            <p>
              As a Software Engineer, I possess an impressive aresenal of skills in HTML, CSS, JavaScript, React, NodeJs, MongoDb, Restful APIs. I excel in all facets of building applications from design to deployment. My expertise lies in engaging with coworkers and clients in order to create the best possible end-product in the given period of time. I thrive in team enviroments, but am not afraid to start with individual projects.
            </p>
          </div>
          <div className='column'>
            <img className='setup' src={setup}></img>
          </div>
        </div>
        <div className='projects' id='projects'>
          <h2 className='blue-header'>Portfolio</h2>
          <h4>Each project is a unique piece of development 🧩</h4>
          <div className='project-container'>
            <div className='project'>
              <div className='column'>
                <img className='project-pic' src={eventsherenow}></img>
              </div>
              <div className='column c3'>
                <h6>Events Here Now 🗓️</h6>
                <p>Find an event here, across the world, now, or any time in the future for that matter. This app optimizes results from multiple APIs to help users find out what is happening.</p>
                <ul className='project-techs'>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>Firebase</li>
                </ul>
                <ul className='project-techs c3'>
                  <li>
                    <a target='_blank' href="https://github.com/ndyarborough/Events-Here-Now">Code<img src={github}></img></a>
                  </li>
                  <li>
                    <a target='_blank' href='https://ndyarborough.github.io/Events-Here-Now/index.html'>Live Demo<img src={newTab}></img></a>
                  </li>
                </ul>
              </div>
              <div className='project'>
                <div className='column'>
                  <img className='project-pic' src={yardland}></img>
                </div>
                <div className='column c3'>
                  <h6>YardLand</h6>
                  <p>My cousin Chase and I ran a landscaping business together and this is our website. Check out all our services, hours, and contact information.</p>
                  <ul className='project-techs'>
                    <li>React</li>
                    <li>NodeJs</li>
                    <li>CSS Flex</li>
                  </ul>
                  <ul className='project-techs c3'>
                    <li>
                      <a target='_blank' href="https://github.com/ndyarborough/yardland">Code<img src={github}></img></a>
                    </li>
                    <li>
                      <a target='_blank' href='https://ndyarborough.github.io/yardland'>Live Demo<img src={newTab}></img></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='contact' id='contact'>
          <h2 className='blue-header'>Contact</h2>
          <h4>Don't Be shy! Hit me up! 👇</h4>
          <ul>
            <li>
              <img src={location}></img>
              <div>
                <h5>Location</h5>
                <p>Raleigh, North Carolina</p>
              </div>
            </li>
            <li>
              <img src={mail}></img>
              <div>
                <h5>Mail</h5>
                <p>noahdyarborough@gmail.com</p>
              </div>
            </li>
          </ul>
        </div>
      </main>
      <footer>
        <h2>Copyright © 2024 All rights are reserved</h2>
      </footer>
    </div>
  );
}

export default App;
