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
                <p>Recently using TypeScript with Next.js and Postgres with Prisma.</p>

                <p>Spent 5 years in the MERN stack (MongoDB, Express.js, React.js, Node.js).</p>

                <p>Strong CSS/Tailwind/Sass skills</p>
            </div>
            <div className='pic'>
                <img className='profilePic' src={profilePic} alt="Profile" />
            </div>

        </div>
    );
};

export default AboutMe;
