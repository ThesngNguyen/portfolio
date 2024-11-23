import React from 'react'
import "./ExperienceCard.css"

const ExperienceCard = (props) => {
    const descriptionElements = [];
  
    for (let i = 0; i < props.desc.length; i++) {
        descriptionElements.push(<p key={i}>{props.desc[i]}</p>);
    }
    return (
        <div className="timeline__item">
            <div className='timeline__description'>
                <i className={props.icon}></i>
                <h3 className="timeline__title">{props.title}</h3>
                <span className="timeline__date">{props.year}</span>
                <div className="timeline__text">
                    {descriptionElements}
                </div>
            </div>
            <img className="timeline__logo" src={props.src} alt=''></img>
        </div>
    )
}

export default ExperienceCard