import React from 'react'
import "./About.css"

function About() {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">Explore my story</h2>
      <div className="about__container grid">
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">Hi there! I'm Thang but you can also call me Theng, a web developer from Vietnam. This nickname is used on any social media platforms and in games.</p>
            <p className="about__description">I'm currently studying Software Engineering and will have hoped to graduate by the end of 2024. Besides , I'm really interested in the Internet of Things and Machine Learning. now, I'm self-studying and working to improve my programming skills with some helps from club members and experts at workshops held at my school.</p>
            <p className="about__description">My ultimate goal is to become a Fullstack Web Developer and a DevOps specialist. I'm actively learning these stuff on my own.</p>
          </div>
        </div>
        <img src='https://emoji.discadia.com/emojis/c74ea7f7-2a99-4051-a1e7-424e39892900.gif' alt='' className='about__gif'></img>
      </div>
    </section>
  )
}

export default About