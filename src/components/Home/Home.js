import React, { useState } from 'react';
import "./Home.css";
import Me from "../../assets/logo.png"

import Socials from './Social/Socials';
import ScrollDown from './ScrollDown/ScrollDown';

function Home({ toggleTheme }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
    toggleTheme();
  };

  return (
    <section className="home container" id="home">
      <a className='home__button-navigate' href="https://portfolio-v3-sepia-three.vercel.app/" target='_blank' rel="noreferrer">Check out Portfolio v3</a>
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Wassup! I'm Nguyen Cao Thang</h1>
        <span className="home__education">I'm a Front-End Developer</span>
        <ul data-theme={isDarkMode ? 'dark-mode' : 'light-mode'}>
          <li className="nav__item" onClick={handleToggleTheme}>
            <a href="#Nothing" className="nav__link" onClick={e => e.preventDefault()}>
              <i className={isDarkMode ? "fa-solid fa-moon" : "fa-solid fa-sun"}></i>
            </a>
          </li>
        </ul>
        <Socials></Socials>
        <a href="#contact">
          <a href="https://drive.google.com/file/d/1BHBJq65b1sQBx2UbzQ6XxvjoScLp9_2F/view?usp=sharing" className='home__button-profile' target='_blank' rel="noreferrer" >Resume</a>
          {isDarkMode ? <span style={{ color: 'white', fontweight: '600' }}> | </span> : <span style={{ color: 'black', fontweight: '600' }}> | </span>}
          <a href="https://drive.google.com/file/d/1m6_xLzbcGnwl66HsUkUHtMY4cLrH-Oo_/view?usp=sharing" className='home__button-profile' target='_blank' rel="noreferrer">CV</a>
        </a>
        <ScrollDown></ScrollDown>
      </div>
    </section>
  )
}

export default Home