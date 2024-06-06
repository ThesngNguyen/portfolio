import React from 'react';
import './Intro.css';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Intro = () => {
  return (
    <div id="intro">
        <div className='intro-Container'>
          <div className='intro-Content'>
            <div className='welcome-container'>
              <span className='welcome' data-text="Welcome!!!">Welcome!!!</span>
            </div>
            <p>My name is Nguyen Cao Thang, I'm a front-end developer based in Ho Chi Minh City, Viet Nam.</p>
            <p>I'm passionate about cutting-edge, pixel-perfect, beautiful interfaces and intuitively implemented UX.</p>
            <div>
              <button className='intro-Icon'><FaFacebook></FaFacebook></button>
              <button className='intro-Icon'><FaGithub></FaGithub></button>
              <button className='intro-Icon'><FaLinkedin></FaLinkedin></button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Intro