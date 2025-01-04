import React from 'react';
import "./Socials.css";

const Socials = () => {
    return (
        <div className="home__socials">
            <a href="https://github.com/ThesngNguyen" className="home__social-link" target='_blank' rel="noreferrer">
                <i className="fa-brands fa-github"></i>
            </a>

            <a href="https://www.linkedin.com/in/williamnguyeenx/" className="home__social-link" target='_blank' rel="noreferrer">
                <i className="fa-brands fa-linkedin"></i>
            </a>

            <a href="https://dev.to/williamnguyeenx" className="home__social-link" target='_blank' rel="noreferrer">
                <i className="fa-brands fa-dev"></i>
            </a>

            <a href="https://discordapp.com/users/315123170006925312 " className="home__social-link" target='_blank' rel="noreferrer">
                <i className="fa-brands fa-discord"></i>
            </a>

            <a href="mailto:ncthang151002@gmail.com" className="home__social-link" target='_blank' rel="noreferrer">
                <i className="fa-brands fa-google"></i>
            </a>
        </div>
    )
}

export default Socials