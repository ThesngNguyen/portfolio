import React from 'react';
import './Intro.css';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { BiLogoGmail } from "react-icons/bi";

const Intro = () => {
  return (
    <div id="intro">
        <div className='intro-Container'>
          <div className='welcome-container'>
            <span className='welcome' data-text="Welcome !!!">Welcome !!!</span>
          </div>
          <div className='intro-Content'>
            <p>My name is Nguyen Cao Thang, I'm a front-end developer based in Ho Chi Minh City, Viet Nam.</p>
            <p>I'm passionate about cutting-edge, pixel-perfect, beautiful interfaces and intuitively implemented UX.</p>
            <div className='intro-Icon-Container'>
              <button className='intro-Icon'>
                <a href="https://facebook.com/Shu.Dwayne" target="_blank" rel="noopener noreferrer">
                  <FaFacebook/>
                </a>
              </button>
              <button className='intro-Icon'><FaGithub/></button>
              <button className='intro-Icon'><FaLinkedin/></button>
              <button className='intro-Icon'><BiLogoGmail/></button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Intro