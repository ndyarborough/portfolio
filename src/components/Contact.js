import githubBlack from '../imgs/github-black.png';
import mail from '../imgs/mail.png';
import linkedIn from '../imgs/linkedIn.png';
import location from '../imgs/location.png';

const Contact = () => {
    return (
        <div className='contact' id='contact'>
            <h2 className='themed-header'>Contact</h2>
            <h4>Don't Be shy! Hit me up! 👇</h4>
            <ul>
                <li>
                    <div>
                        <h5>Noah Yarborough</h5>
                        <div className='row'>
                            <a target='_blank' href='https://www.linkedin.com/in/noah-yarborough/'><img src={linkedIn}></img></a>
                            <a target='_blank' href='https://github.com/ndyarborough'><img src={githubBlack}></img></a>
                        </div>
                    </div>
                </li>
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
    );
}

export default Contact;