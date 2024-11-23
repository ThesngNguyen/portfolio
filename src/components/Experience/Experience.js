import React from 'react'
import "./Experience.css"
import experienceData from "../../data/experience.json";
import ExperienceCard from './ExperienceCard/ExperienceCard';

function Experience() {
  return (
    <section className="experience container section" id="experience">
      <h2 className="section__title">Take a look at my journey</h2>
      <div className="experience__container grid">
        <div className="timeline grid">
          {experienceData
            .filter((value) => value.experienceCategory === "Education")
            .map((value, experienceID) => (
              <ExperienceCard
                key={experienceID}
                icon={value.experienceIcon}
                src={value.experienceLogo}
                title={value.experienceTitle}
                year={value.experienceYear}
                desc={value.experienceDescription}
              />
            ))}
        </div>

        <div className="timeline grid">
        {experienceData
            .filter((value) => value.experienceCategory === "Work")
            .map((value, experienceID) => (
              <ExperienceCard
                key={experienceID}
                icon={value.experienceIcon}
                src={value.experienceLogo}
                title={value.experienceTitle}
                year={value.experienceYear}
                desc={value.experienceDescription}
              />
            ))}
        </div>
      </div>
    </section>
  )
}

export default Experience