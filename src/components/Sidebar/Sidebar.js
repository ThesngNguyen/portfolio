import React, { useState } from 'react';
import "./Sidebar.css";
import Logo from "../../assets/logo.png";

function Sidebar({ toggleTheme }) {
    const [toggle, showMenu] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleToggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
        toggleTheme();
    };
    
    return (
    <>
    <aside className={toggle ? "aside show-menu" : "aside"}>
        <a href='#home' className='nav__logo'>
            <img src={Logo} alt="" />
        </a>
        <nav className="nav">
            <div className="nav__menu">
                <ul className="nav__list">
                    <li className="nav__item">
                        <a href='#home' className="nav__link">
                            <i className="fa-solid fa-house"></i>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#about" className="nav__link">
                            <i className="fa-solid fa-user"></i>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#experience" className="nav__link">
                            <i className="fa-solid fa-chalkboard-user"></i>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#gallery" className="nav__link">
                            <i className="fa-solid fa-image"></i>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#services" className="nav__link">
                            <i className="fa-solid fa-briefcase"></i>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#skill" className="nav__link">
                            <i className="fa-solid fa-code"></i>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#project" className="nav__link">
                            <i className="fa-solid fa-file"></i>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#Nothing" className="nav__link" onClick={e => e.preventDefault()}>
                            <i className={isDarkMode ? "fa-solid fa-moon" : "fa-solid fa-sun"} onClick={handleToggleTheme}></i>
                        </a>
                    </li>
                </ul>    
            </div>
        </nav>

        <div className="nav__footer">
            <span className="copyright">&copy; 2023 - 2024.</span>
        </div>
    </aside>
    <div className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"} onClick={() => showMenu(!toggle)}>
        <i className="icon-menu"></i>
    </div>
    </>
  )
}

export default Sidebar