import profilePic from '../imgs/profilePic.jpg';
import githubBlack from '../imgs/github-black.png';
import linkedIn from '../imgs/linkedIn.png';

const AboutMe = ({handleClick}) => {
    return (
        <>
            <div className='row h3'>
                <div className='column'>
                    <h1>Noah Yarborough</h1>
                    <div className="social-buttons">
                        <a target='_blank' href='https://www.linkedin.com/in/noah-yarborough/'><img src={linkedIn}></img></a>
                        <a target='_blank' href='https://github.com/ndyarborough'><img src={githubBlack}></img></a>
                    </div>
                </div>
                <div className='column c2'>
                    <img onClick={handleClick} className='profilePic' src={profilePic} alt="Profile"></img>
                </div>

            </div>
            <p className='leftAlign topMarg botMarg'>I’m a recent college graduate (12/2023) with a BSCS with a concentration in Software
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
                now… 📍
            </p>
        </>
    );
}

export default AboutMe;