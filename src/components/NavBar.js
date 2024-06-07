import './NavBar.css';
import React, {useState} from "react";
import { Link } from 'react-scroll';
import { FaDownload } from 'react-icons/fa';


const Navbar = () => {
    const [currentComponent, setCurrentComponent] = useState('Home');
    return(
        <header>
            <nav className='navbar'>
                <div className='navbar-Menu'>
                    <Link
                        activeClass="active"
                        to="Home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className={currentComponent === 'Home' ? 'Menu-ListItem active' : 'Menu-ListItem'}
                        onClick={() => setCurrentComponent('Home')}
                    >
                        Home
                    </Link>
                    <Link
                        activeClass="active"
                        to="Abouts"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className={currentComponent === 'Abouts' ? 'Menu-ListItem active' : 'Menu-ListItem'}
                        onClick={() => setCurrentComponent('Abouts')}
                    >
                        Abouts
                    </Link>
                    <Link
                        activeClass="active"
                        to="Projects"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className={currentComponent === 'Projects' ? 'Menu-ListItem active' : 'Menu-ListItem'}
                        onClick={() => setCurrentComponent('Projects')}
                    >
                        Projects
                    </Link>
                </div>
                <a href="/portfolio/CV_NGUYEN-CAO-THANG.pdf" download className='Menu-Btn'>
                    <FaDownload className='Menu-Btn-Img'/>Resume
                </a>
            </nav>
        </header>
    )
}

export default Navbar;