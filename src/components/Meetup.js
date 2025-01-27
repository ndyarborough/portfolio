import meetupLandscape from '../imgs/meetup-landscape.png';
import meetupEvents from '../imgs/meetup-events.png';
import chvenue from '../imgs/chvenue.png';
import amazons3 from '../imgs/amazons3.jpg';
import amazonec2 from '../imgs/amazonec2.png';
import moping from '../imgs/moping.jpg';
import expo from '../imgs/expo.svg';
import reactnative from '../imgs/react-native.png';
import newTab from '../imgs/newTab.png';
import eventsherenow from '../imgs/eventsherenow.png';
import mongodb from '../imgs/mongodb.png';
import github from '../imgs/github.png';
import yardland from '../imgs/yardland.png';

const Meetup = ({handleClick}) => {
    return (
        <div className='meetup'>
            <h2 className='themed-header'>Here Is What I Am Working on Right Now...</h2>
            <div className='row'>
                <div className='d8'>
                    <p className='leftAlign'>
                        My current project is called Meetup, a social media web and smartphone app dedicated to
                        getting college students with similar interests together in-person.
                    </p>
                    <p className='leftAlign'>The app allows students to
                        create their own “events” for other students to see, show interest in, pursue, and confirm their
                        participation in. </p>
                    <p className='leftAlign'>These events could include almost anything students would be interested in,
                        such as midterm study groups, informal clubs, leisure activities, hobbies, exercise/sports, career
                        connections, team building, entrepreneurial activities, etc.</p>
                </div>
                <img src={meetupEvents} alt="Meetup Dashboard" className="image-right" onClick={handleClick}></img>
            </div>

            <h2 className='themed-header'>The Idea Behind <strong className='reallyStrong'>MeetUp</strong></h2>
            <p className='leftAlign'>I noticed a disturbing trend while attending college. My freshman year, students were
                interacting, making friends, developing relationships, and most importantly, having group
                conversations: those intellectual debates about life that exposed us to ideas different from our
                own and taught us to think critically.</p>
            <img className='specialImg' alt='Moping college student' src={moping}></img>
            <p>Then COVID hit, shut things down, and isolated us from
                one another. School became much more virtual, relying heavily on technology to connect us all.
                When the pandemic ended, things did not return to normal. The isolation continued as the
                social, video conferencing, and classroom apps we used during the pandemic largely continued.<br></br><br></br>
                This online approach to college robbed students of face-to-face interactions, personal and
                professional relationships, and the free exchange of differing points of view among colleagues
                that leads to personal growth and lifelong connections. My solution: <strong className='reallyStrong'>MeetUp</strong>.</p>
            <h2 className='themed-header'>Developing the App</h2>
            <p className='leftAlign'>MeetUp became my senior project. Working with my professor and several classmates, we
                navigated through the discovery phase as we researched competitors, defined features,
                gathered requirements and specified deadlines. We then began the design phase using learned
                techniques such as sketching, wireframing, and rapid prototyping.<br></br><br></br> Upon approval, I
                began the development phase, and I was now on my own. I used a variety of tools to complete
                the front-end and back-end coding, some of which I had been using for more than 5 years,
                some that I recently learned , including AI, and one, React Native, that I had never used before.
                <br></br><br></br>Within 10 days, I had a minimum viable product in hand ready for review. After receiving
                feedback from the class, I was able to release the application to my professor on schedule.
                Since graduation, I have continued to enhance MeetUp in hopes that one day, it might be used
                on college campuses everywhere for students to find lifelong friends, peers, cohorts, and
                partnerships that make this world a better place for everyone..</p>

            <h2 className='themed-header'>The Tools I’m Using for This Particular Project</h2>

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

            <div className='projects h2' id='projects'>
                <h2 className='themed-header'>Take a Look at <strong className='reallyStrong'>MeetUp</strong></h2>

                <div className='project-container'>

                    <div className='project' id='meetup'>
                        <div className='column'>
                            <img onClick={handleClick} className='project-pic' src={meetupLandscape}></img>
                        </div>
                        <div className='column c3'>
                            <h6>Meetup</h6>
                            <p>My most recent showcase of my capabilities as a full-stack developer.</p>
                            <p>Make an account or log in as Parker to check it out:</p>
                            <ul className='project-techs'>
                                <li>Username: <strong className='reallyStrong'>Parker</strong></li>
                                <li>Password: <strong className='reallyStrong'>password</strong></li>
                            </ul>
                            <ul className='project-techs c5'>
                                <li>React Native</li>
                                <li>Express</li>
                                <li>MongoDb Atlas</li>
                                <li>Amazon S3</li>
                                <li>Amazon EC2</li>
                            </ul>
                            <ul className='project-techs c3'>
                                <li>
                                    <a target='_blank' href="https://github.com/ndyarborough/Meetup_2.0">Code<img src={github}></img></a>
                                </li>
                                <li>
                                    <a target='_blank' href='http://meetup-ndyarborough.s3-website.us-east-2.amazonaws.com/'>Live Demo<img src={newTab}></img></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <h2 className='themed-header'>Other Projects</h2>

                    <div className='project' id='chvenue'>
                        <div className='column'>
                            <img onClick={handleClick} className='project-pic' src={chvenue}></img>
                        </div>
                        <div className='column c3'>
                            <h6>CHVenue</h6>
                            <p>Most recent project. Used to practice Sass and show off my current ability to turn a design into a real React Application. (Landing Page Only)</p>
                            <ul className='project-techs'>
                                <li>React</li>
                                <li>NodeJs</li>
                                <li>Sass</li>
                            </ul>
                            <ul className='project-techs c3'>
                                <li>
                                    <a target='_blank' href="https://github.com/ndyarborough/chvenue">Code<img src={github}></img></a>
                                </li>
                                <li>
                                    <a target='_blank' href='https://ndyarborough.github.io/chvenue'>Live Demo<img src={newTab}></img></a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='project' id='eventsherenow'>
                        <div className='column'>
                            <img onClick={handleClick} className='project-pic' src={eventsherenow}></img>
                        </div>
                        <div className='column c3'>
                            <h6>Events Here Now 🗓️</h6>
                            <p>This project demonstrates my ability to tie together data from multiple different APIs in order to create a powerful application.</p>
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

                    <div className='project' id='yardland'>
                        <div className='column'>
                            <img onClick={handleClick} className='project-pic' src={yardland}></img>
                        </div>
                        <div className='column c3'>
                            <h6>YardLand 🪴</h6>
                            <p>I completed this small-business website in one business day.</p>
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
    );
}

export default Meetup;