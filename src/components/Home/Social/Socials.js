import React from 'react';
import "./Socials.css";

const Socials = () => {
  return (
    <div className="home__socials">
        <a href="facebook.com/Shu.Dwayne" className="home__social-link" target='_blank'>
            <i class="fa-brands fa-facebook"></i>
        </a>

        <a href="https://github.com/ThesngNguyen" className="home__social-link" target='_blank'>
            <i class="fa-brands fa-github"></i>
        </a>

        <a href="https://www.linkedin.com/in/williamnguyeenx/" className="home__social-link" target='_blank'>
            <i class="fa-brands fa-linkedin"></i>
        </a>

        <a href="https://dev.to/williamnguyeenx" className="home__social-link" target='_blank'>
            <i class="fa-brands fa-dev"></i>
        </a>
    </div>
  )
}

export default Socials