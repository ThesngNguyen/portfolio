import React from 'react';
import "./Home.css";
import Me from "../../assets/logo.png"

import Socials from './Social/Socials';
import ScrollDown from './ScrollDown/ScrollDown';

function Home() {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Wassup! I'm Nguyen Cao Thang</h1>
        <span className="home__education">I'm a Front-End Developer</span>
        <Socials></Socials>
        <a href="#contact">
          <a href="https://drive.google.com/file/d/1BHBJq65b1sQBx2UbzQ6XxvjoScLp9_2F/view?usp=drive_link" className='home__button-profile' target='_blank' rel="noreferrer" >Resume</a>
          <span style={{color: 'black', fontweight: '600'}}> | </span>
          <a href="https://drive.google.com/file/d/1m6_xLzbcGnwl66HsUkUHtMY4cLrH-Oo_/view?usp=drive_link" className='home__button-profile' target='_blank' rel="noreferrer">CV</a>
        </a>
        <ScrollDown></ScrollDown>
      </div>
    </section>
  )
}

export default Home