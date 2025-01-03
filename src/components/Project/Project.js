import React from 'react'
import "./Project.css"
import projectData from "../../data/projects.json";
import ProjectBox from './ProjectBox/ProjectBox';

function Project() {
  return (
    <section className="project container section" id="project">
      <h2 className="section__title">Check out what I’ve built</h2>
      <div className="project__container grid">
        <div className='project__title'>
          <h3>Here are only my featured projects.</h3>
        </div>
        <div className='project__list'>
          {
            projectData.map((value, projectID) => {
              return(
                <ProjectBox
                  key = {projectID}
                  projectTitle = {value.projectTitle}
                  projectImage = {value.projectImage}
                  projectDescription = {value.projectDescription}
                  projectTechnologies = {value.projectTechnologies}
                  projectSource = {value.projectSource}
                  projectTeamSize = {value.projectTeamSize}
                  projectRole = {value.projectRole}
                  projectFeatures = {value.projectFeatures}
                />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Project