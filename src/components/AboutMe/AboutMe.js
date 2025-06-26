import profilePic from '../../imgs/profilePic.jpg';
import Pin from '../../imgs/pin.png';
import './AboutMe.css';

const AboutMe = ({ activeStyle }) => {
    return (
        <div className='aboutMe' id='about-me'>
            <div className='info-group'>
                <div className='row'>
                    <h1>Noah Yarborough</h1>

                </div>
                <h2>Full-Stack Software Engineer</h2>
                <div className='row'>
                    <div className='row'>
                        <img src={Pin} alt='Location Pin Icon' />
                        <h3>Raleigh, NC</h3>
                    </div>

                </div>
                <p>Full Stack Developer specializing in scalable React and TypeScript applications, with strong backend experience in Node.js and cloud-native solutions. Skilled at solving complex problems, building maintainable codebases, and driving projects from concept to production. Seeking a full-time role to leverage and grow technical expertise.</p>
            </div>
            <div className='pic'>
                <img className='profilePic' src={profilePic} alt="Profile" />
            </div>

        </div>
    );
};

export default AboutMe;
