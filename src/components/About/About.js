import React from 'react'
import "./About.css"

function About() {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">Explore my story</h2>
      <div className="about__container grid">
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">I am a web developer from Vietnam, and you can call me Theng, which is my nickname on social media and in games. </p>
            <p className="about__description">I am studying Software Engineering and expect to graduate at the end of 2024. I am also interested in the Internet of Things and Machine Learning. Currently, I am self-studying and improving my programming skills with help from club members and experts at workshops held at my school. </p>
            <p className="about__description">My goal is to become a Fullstack Web Developer and DevOps specialist. I am in the process of learning these skills on my own.</p>
          </div>
        </div>
        <img src='https://emoji.discadia.com/emojis/c74ea7f7-2a99-4051-a1e7-424e39892900.gif' alt='' className='about__gif'></img>
      </div>
    </section>
  )
}

export default About