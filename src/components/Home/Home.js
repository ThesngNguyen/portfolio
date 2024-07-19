import React from 'react';
import "./Home.css";
import Socials from './Social/Socials';
import Me from "../../assets/avatar-1.svg"

function Home() {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Nguyen Cao Thang</h1>
        <span className="home__education">I'm a Front-End Developer</span>
        <Socials></Socials>
        <a href="#contact" className="btn"></a>
      </div>
    </section>
  )
}

export default Home