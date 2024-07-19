import React from 'react';
import "./Sidebar.css";
import Logo from "../../assets/logo.png";

function Sidebar() {
  return (
    <aside className='aside'>
        <a href='#home' className='nav__logo'>
            <img src={Logo} alt="" />
        </a>
        <nav className="nav">
            <div className="nav__menu">
                <ul className="nav__list">
                    <li className="nav__item">
                        <a href='#home' className="nav__link">
                            <i class="fa-solid fa-house"></i>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#about" className="nav__link">
                            <i class="fa-solid fa-user"></i>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#services" className="nav__link">
                            <i class="fa-solid fa-briefcase"></i>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#experience" className="nav__link">
                            <i class="fa-solid fa-chalkboard-user"></i>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#skill" className="nav__link">
                            <i class="fa-solid fa-code"></i>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#project" className="nav__link">
                            <i class="fa-solid fa-file"></i>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#contact" className="nav__link">
                            <i class="fa-solid fa-address-card"></i>
                        </a>
                    </li>
                </ul>    
            </div>
        </nav>

        <div className="nav__footer">
            <span className="copyright">&copy; 2023 - 2024.</span>
        </div>
    </aside>
  )
}

export default Sidebar