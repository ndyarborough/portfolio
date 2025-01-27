import { useState } from 'react';
import { Link } from 'react-scroll';
import menu from '../imgs/menu.png';

const TopNav = () => {
    const [isMenuVisible, setMenuVisibility] = useState(false);

    const toggleMenu = () => {
        setMenuVisibility(!isMenuVisible);
    };

    return (
        // <SideNav />
        <div className='navbar'>
            <div className='logo'>Noah.dev</div>
            <ul className='nav-items'>
                <li>
                    <Link onClick={toggleMenu} to="home" smooth={true} duration={500} offset={-80}>Home</Link>
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
    );
}

export default TopNav;