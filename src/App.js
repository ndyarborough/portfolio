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
import parker from './imgs/parker.png';
import reactnative from './imgs/reactnative.png';
import meetupEvents from './imgs/meetup-events.png';
import meetupDashboard from './imgs/meetup-dashboard.png';
import meetupMessages from './imgs/meetup-messages.png';
import meetupDetails from './imgs/meetup-details.png';
import meetupSendMessage from './imgs/meetup-send-message.png';
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
              <h1>Noah Yarborough</h1>
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
          <div className='column'>
            <div className='visit-meetup'>
              <h2>Try out my Latest Creation, Meetup!</h2>
              <div className='row'>
                <div className='left'>
                  <h3>Login as Parker to check it out!</h3>
                  <div className='column'>
                    <h4>Username: Parker</h4>
                    <h4>Password: password</h4>
                  </div>
                  <div className='icon-row'>
                    <img src={newTab} alt="New Tab Icon"></img>
                    <a target="_blank" href="http://meetup-ndyarborough.s3-website.us-east-2.amazonaws.com/">Visit Meetup</a>
                  </div>
                </div>
                <div className='right'>
                  <img src={parker} alt='screenshot of parkers dashboard'></img>
                </div>
              </div>
            </div>
            <br></br>
            <div className='meetup'>
              <h2>The Birth of MeetUp</h2>
              <div className='imgContainer'>
                <img src={meetupEvents}></img>
                <img src={meetupDashboard}></img>
                <img src={meetupDetails}></img>
                <img src={meetupSendMessage}></img>
                <img src={meetupMessages}></img>
              </div>
              <p>My Senior project was born from a disturbing trend I noticed while attending college. When I entered college, students were interacting, making new friends, developing relationships, and most importantly, having group conversations: those intellectual debates about life that exposed us to ideas different from our own and taught us to think critically. Then COVID hit, shut things down, and isolated us from one another. And when the pandemic was over, the isolation only continued as the social, video conferencing, and classroom apps we all continued to use every day emphasized virtual connections only. This online-only approach robbed students of face-to-face interactions, personal and professional relationships, and the free exchange of differing points of view among colleagues that leads to personal growth and lifelong connections. </p>
              <br></br>
              <p>In response, I came up with the idea for MeetUp, a social media web and smartphone app dedicated to getting people with similar interests together in-person. The app would allow students to create their own “events” for other students with similar interests to see, show interest in, and confirm their attendance. These events could include almost anything students would be interested in, such as midterm study groups, informal clubs, leisure activities, hobbies, exercise/sports, career connections, team building, entrepreneurial activities, etc. </p>
              <h2>From Idea to Prototype</h2>
              <p>Working in a team of 5, we quickly developed the concept for the app using learned techniques and tools. In a matter of weeks, we had a complete roadmap to develop and promote this application.</p>
              <h2>Coding the Application</h2>
              <p>For this coding project, time was short, and I was responsible for 100% of the coding. I went to my strengths, some of which I have been using since I attended the UNC Code Camp in 2016, while others I have added to my toolbox over the past two years. With a clear set of specifications, I was able to code the initial application in just ten days, giving the team time to review the app and provide feedback, and me time to make the necessary tweaks before our final presentation.</p>
              <div className='techniques'>
                <h2>Techniques and tools</h2>

              </div>
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
                <img className='project-pic' src={yardland}></img>
              </div>
              <div className='column c3'>
                <h6>YardLand 🪴</h6>
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
