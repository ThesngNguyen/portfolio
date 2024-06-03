import './NavBar.css';
import React from "react";
import { Link } from 'react-scroll';
import { FaDownload } from 'react-icons/fa';

const Navbar = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/CV_NGUYEN-CAO-THANG.pdf';
        link.download = 'CV_NGUYEN-CAO-THANG.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return(
        <nav className='navbar'>
            <div className='navbar-Menu'>
                <Link className='Menu-ListItem'>Home</Link>
                <Link className='Menu-ListItem'>About</Link>
                <Link className='Menu-ListItem'>Skills</Link>
                <Link className='Menu-ListItem'>Projects</Link>
            </div>
            <button className='Menu-Btn' onClick={handleDownload}>
                <FaDownload className='Menu-Btn-Img'/>Download CV
            </button>
        </nav>
    )
}

export default Navbar;