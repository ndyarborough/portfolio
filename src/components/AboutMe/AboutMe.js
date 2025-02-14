import { TypeAnimation } from 'react-type-animation';
import profilePic from '../../imgs/profilePic.jpg';
import SocialButtons from '../SocialButtons/SocialButtons';
import './AboutMe.css';

const AboutMe = ({ activeStyle }) => {
    return (
        <div className='aboutMe' id='about-me'>
            <div className='info'>
                <h1>
                    <TypeAnimation
                        sequence={[
                            1500,
                            'Noah Yarborough', // Text to type out
                        ]}
                        wrapper="span"
                        speed={50} // Speed of typing
                        repeat={0} // Stops after one loop
                        cursor={{show: false}}
                    />
                </h1>
                <SocialButtons activeStyle={activeStyle} />
            </div>

            <div className='pic'>
                <img className='profilePic' src={profilePic} alt="Profile" />
            </div>
        </div>
    );
};

export default AboutMe;
