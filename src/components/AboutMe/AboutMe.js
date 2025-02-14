import { TypeAnimation } from 'react-type-animation';
import profilePic from '../../imgs/profilePic.jpg';
import Pin from '../../imgs/pin.png';
import Wave from '../../imgs/wave.png';
import SocialButtons from '../SocialButtons/SocialButtons';
import './AboutMe.css';

const AboutMe = ({ activeStyle }) => {
    return (
        <div className='aboutMe' id='about-me'>
            <div className='info'>
                <TypeAnimation
                    className='name-header'
                    sequence={[
                        1500,
                        'Noah Yarborough', // Text to type out
                    ]}
                    wrapper="span"
                    speed={50} // Speed of typing
                    repeat={0} // Stops after one loop
                    cursor={{ show: false }}
                />
                <h2>Full-Stack Software Engineer</h2>
                <div className='row'>
                    <div className='row'>
                        <img src={Pin} alt='Location Pin Icon' />
                        <h2>Raleigh, NC</h2>
                    </div>
                    {/* <img src={Wave} alt='wave icon' className='wave'/> */}

                </div>

                <SocialButtons activeStyle={activeStyle} />
            </div>

            <div className='pic'>
                <img className='profilePic' src={profilePic} alt="Profile" />
            </div>
        </div>
    );
};

export default AboutMe;
