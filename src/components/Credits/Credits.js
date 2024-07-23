import React from 'react'
import "./Credits.css"

function Credits() {
  return (
    <section className="credits container section" id="credits">
        <div className='credits__container'>
            <div className='credits__icon'>
                <a href="https://github.com/ThesngNguyen/portfolio" target='_blank' rel='noreferrer'>
                    <i className="fa-brands fa-github"></i>
                </a>
            </div>
            <p className='credits__text'>Built by Cao Thang Nguyen with React and JavaScript.<br/>Copyright © 2023-2024 All Rights Reserved.</p>
        </div>
    </section>
  )
}

export default Credits