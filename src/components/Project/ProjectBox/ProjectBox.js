import React, { useState } from 'react'
import "./ProjectBox.css";
import { getImageUrl } from '../../../data/utils';

const ProjectBox = (props) => {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
    <div className="project__item">
        <h3>{props.projectTitle}</h3>
        <ul className='project__tech'>
          {props.projectTechnologies.map((technology, index) => (
            <li className='project__tech-name' key={index}>{technology}</li>
          ))}
        </ul>
        <p>{props.projectDescription}</p>
        <div className="project__link">
            <a href={props.projectSource} className='project__icon' target='_blank' rel='noreferrer'> 
                <i className="fa-brands fa-github"></i>
            </a>

            <span className="project__button" onClick={() => toggleTab(1)}>View More {" "}
                <i className="fa-solid fa-arrow-right project__button-icon"></i>
            </span>

            <div className={toggleState === 1 ? "project__modal active-modal" : "project__modal"}>
                <div className="project__modal-content">
                    <i className="fa-solid fa-circle-xmark project__modal-close" onClick={() => toggleTab(0)}></i>
                    <h3 className="project__modal-title">{props.projectTitle}</h3>
                    <img src={getImageUrl(props.projectImage)} alt="" className="project__modal-image"/>
                    <div className="project__modal-feature">
                      <p><b>Team Size :</b> {props.projectTeamSize}</p>
                      <p><b>Role :</b> {props.projectRole}</p>
                      <p><u><b>Features :</b></u></p>
                      <ul className="project__scrollable-features">
                        {props.projectFeatures.map((features, index) => (
                          <li key={index}>{features}</li>
                        ))}
                      </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectBox