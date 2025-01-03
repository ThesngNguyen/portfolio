import React from 'react'
import "./Contact.css"

function Contact() {
  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Feel free to contact</h2>
      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about everything!
          </h3>
        </div>
        <div>
          <p className="contact__details">I’m mainly around on LinkedIn, Discord, GitHub, Gmail, and Facebook. But you can also catch me on DEV Community if you want to connect!</p>
          <a href="#home" className="contact__socials">Feel free to connect with me :3</a>
        </div>
      </div>
    </section>
  )
}

export default Contact