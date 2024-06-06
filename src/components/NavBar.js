import './NavBar.css';
import React from "react";
import { Link } from 'react-scroll';
import { FaDownload } from 'react-icons/fa';


const Navbar = () => {
    return(
        <nav className='navbar'>
            <div className='navbar-Menu'>
                <Link className='Menu-ListItem'>Home</Link>
                <Link className='Menu-ListItem'>Skills</Link>
                <Link className='Menu-ListItem'>Projects</Link>
            </div>
            <a href="/portfolio/CV_NGUYEN-CAO-THANG.pdf" download className='Menu-Btn'>
                <FaDownload className='Menu-Btn-Img'/>Download CV
            </a>
        </nav>
    )
}

export default Navbar;