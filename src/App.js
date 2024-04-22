import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import searchIcon from './imgs/searchIcon.png';
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
import amazons3 from './imgs/amazons3.jpg';
import amazonec2 from './imgs/amazonec2.png';
import mui from './imgs/mui.png';
import googleplaces from './imgs/google-places.png';
import expo from './imgs/expo.svg';
import reactnative from './imgs/react-native.png';
import meetupEvents from './imgs/meetup-events.png';
import meetup2 from './imgs/meetup-2.png';

import meetupDashboard from './imgs/meetup-dashboard.png';
import meetupMessages from './imgs/yup.jpg';
import meetupDetails from './imgs/meetup-details.png';
import meetupSendMessage from './imgs/meetup-send-message.png';
import mail from './imgs/mail.png';
import location from './imgs/location.png';
import newTab from './imgs/newTab.png';
import eventsherenow from './imgs/eventsherenow.png';
import yardland from './imgs/yardland.png';
import menu from './imgs/menu.png';
import { Link } from 'react-scroll';
import Modal from './components/Modal';
function App() {
  const [isMenuVisible, setMenuVisibility] = useState(false);
  const [modalSrc, setModalSrc] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const toggleMenu = () => {
    setMenuVisibility(!isMenuVisible);
  };
  const handleClick = (event) => {
    setModalSrc(event.target.src);
    console.log(modalSrc)
  };

  const closeModal = () => {
    setModalSrc(null);
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
        {modalSrc && <Modal src={modalSrc} onClose={closeModal} />}
        <div id='home' className='home'>
          <div className='row h3'>
            <div className='column'>
              <h1>Noah Yarborough</h1>
              <div className="social-buttons">
                <a target='_blank' href='https://www.linkedin.com/in/noah-yarborough/'><img src={linkedIn}></img></a>
                <a target='_blank' href='https://github.com/ndyarborough'><img src={github}></img></a>
              </div>
            </div>
            <div className='column c2'>
              <img onClick={handleClick} className='profilePic' src={profilePic} alt="Profile"></img>
            </div>

          </div>
          <p className='leftAlign topMarg'>I’m a recent college graduate (12/2023) with a BSCS with a concentration in Software
            Engineering, but I also have 7 years of coding experience. At 27, I’m a little older than most
            recent college grads, and honestly, more mature, experienced, and hardworking than most.
            <br></br>
            <br></br>
            I am looking to develop software for a company where I can make a difference, be a solid contributor,
            continue to gain experience and grow my skillset. I prefer working in a team environment, but
            most of my experience is as a solo practitioner.

            <br></br>
            <br></br>
            Either way, I’m ready to go to work. I&#39;m
            passionate about my work. I’m seeking a position as a Full-Stack Software Engineer. I am
            based in Raleigh, North Carolina. Read on to see and experience what I’m working on right
            now… 📍</p>
          <div className='column'>
            <div className='meetup'>
              <h2>Here Is What I Am Working on Right Now...</h2>
              <p className='leftAlign'>My current project is called <strong className='reallyStrong'>MeetUp</strong>, a social media web and smartphone app dedicated to
                getting college students with similar interests together in-person. <br></br><br></br>The app allows students to
                create their own “events” for other students to see, show interest in, pursue, and confirm their
                participation in. <br></br><br></br>These events could include almost anything students would be interested in,
                such as midterm study groups, informal clubs, leisure activities, hobbies, exercise/sports, career
                connections, team building, entrepreneurial activities, etc.</p>
              <img src={meetupEvents} alt="Meetup Dashboard" className="image-right" onClick={handleClick}></img>

              <h2>The Idea Behind <strong className='reallyStrong'>MeetUp</strong></h2>
              <p className='leftAlign'>I noticed a disturbing trend while attending college. My freshman year, students were
                interacting, making friends, developing relationships, and most importantly, having group
                conversations: those intellectual debates about life that exposed us to ideas different from our
                own and taught us to think critically. <br></br><br></br>Then COVID hit, shut things down, and isolated us from
                one another. School became much more virtual, relying heavily on technology to connect us all.
                When the pandemic ended, things did not return to normal. The isolation continued as the
                social, video conferencing, and classroom apps we used during the pandemic largely continued.<br></br><br></br>
                This online approach to college robbed students of face-to-face interactions, personal and
                professional relationships, and the free exchange of differing points of view among colleagues
                that leads to personal growth and lifelong connections. My solution: <strong className='reallyStrong'>MeetUp</strong>.</p>
              <h2>Developing the App</h2>
              <p>I developed this app with pure tired aggression.</p>
              <h2>The Tools I’m Using for This Particular Project</h2>

              <div className='meetup-tech'>
                <div className='icon-item'>
                  <img src={reactnative} alt="React Native"></img>
                  <h3>React Native</h3>
                </div>
                <div className='plus-icon'>+</div>
                <div className='icon-item'>
                  <img src={mongodb} alt="MongoDB"></img>
                  <h3>MongoDB Atlas</h3>
                </div>
                <div className='plus-icon'>+</div>
                <div className='icon-item'>
                  <img src={expo} alt="Expo"></img>
                  <h3>Expo</h3>
                </div>

                {/* Front-end and back-end hosting sections */}
                <div className='plus-icon'>+</div>
                <div className='icon-item'>
                  <img src={amazons3} alt="Amazon S3"></img>
                  <h3>Amazon S3</h3>
                </div>
                <div className='plus-icon'>+</div>
                <div className='icon-item'>
                  <img src={amazonec2} alt="Amazon EC2"></img>
                  <h3>Amazon EC2</h3>
                </div>
              </div>
              <h2>Take a Look at <strong className='reallyStrong'>MeetUp</strong></h2>
              <div className='take-a-look'>
                <div className='left'>
                  <p className='leftAlign'>I have continued to develop the <strong className='reallyStrong'>MeetUp</strong> app. It is a work-in-progress, but I invite you to take it
                    for a spin. It shows, in part, the type of work I’m capable of. May I suggest you save a little time
                    and sign in with the following credentials:</p>

                  <p className='leftAlign'>Username – <strong className='reallyStrong'>Parker</strong> <br></br> Password – <strong className='reallyStrong'>password</strong> (I know, I know, but this is just a test environment).</p>
                  <p className='leftAlign'>Click <a href="http://meetup-ndyarborough.s3-website.us-east-2.amazonaws.com/">here</a> to try out <strong className='reallyStrong'>MeetUp</strong> on you PC or smartphone:</p>
                  
                </div>
                <img
                  src={meetup2}
                  alt="Meetup Events"
                  className="image-left a76"
                  onClick={handleClick}
                />
              </div>


              <div className="row c3">
              </div>
              <div className="row c3">
                <img src={meetupMessages} alt="Meetup Messages" className="image-left" onClick={handleClick}></img>
                <p>I quickly developed the concept for the app using React Native for the first time. In a matter of weeks, I had a complete roadmap to develop and promote this application.</p>
              </div>
              <div className="row c3">
                <p>For this coding project, time was short, and I was responsible for 100% of the coding. I went to my strengths, some of which I have been using since I attended the UNC Code Camp in 2016, while others I have added to my toolbox over the past two years. With a clear set of specifications, I was able to code the initial application in just ten days, giving the team time to review the app and provide feedback, and me time to make the necessary tweaks before our final presentation.</p>
                <img src={meetupDetails} alt="Meetup Details" className="image-right" onClick={handleClick}></img>
              </div>


              <div className='visit-meetup'>
                <h2>Try out my Latest Creation, <strong className='reallyStrong'>Meetup!</strong></h2>
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
                    <img onClick={handleClick} src={parker} alt='screenshot of parkers dashboard'></img>
                  </div>
                </div>
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
        {/* <div className='about' id='about'>
          <div className='column'>
            <h2 className='blue-header'>About Me</h2>
            <h4>A dedicated Software Engineer based in Raleigh, North Carolina 📍</h4>
            <p>
              As a Software Engineer, I possess an impressive aresenal of skills in HTML, CSS, JavaScript, React, NodeJs, MongoDb, Restful APIs. I excel in all facets of building applications from design to deployment. My expertise lies in engaging with coworkers and clients in order to create the best possible end-product in the given period of time. I thrive in team enviroments, but am not afraid to start with individual projects.
            </p>
          </div>
          <div className='column'>
            <img onClick={handleClick} className='setup' src={setup}></img>
          </div>
        </div> */}
        <div className='projects' id='projects'>
          <h2 className='blue-header'>Portfolio</h2>
          <h4>Each project is a unique piece of development 🧩</h4>
          <div className='project-container'>
            <div className='project'>
              <div className='column'>
                <img onClick={handleClick} className='project-pic' src={yardland}></img>
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
                <img onClick={handleClick} className='project-pic' src={eventsherenow}></img>
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
