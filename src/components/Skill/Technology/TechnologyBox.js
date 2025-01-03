import React from 'react'
import "./TechnologyBox.css";

const TechnologyBox = (props) => {
  return (
    <div className="technology__item">
        <a className="technology__box" href={props.techURL} alt='' target='_blank'  rel="noreferrer">
            <i className={props.icon}></i>
            <p className="technology__title">{props.title}</p>
        </a>
    </div>
  )
}

export default TechnologyBox