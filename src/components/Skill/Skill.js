import React from 'react'
import "./Skill.css"
import technologyData from "../../data/technologies.json";
import TechnologyBox from './Technology/TechnologyBox';

function Skill() {
  return (
    <section className="skill container section" id="skill">
      <h2 className="section__title">Allow me to display my confident</h2>
      <div className="skill__container grid">
        <div className='skill__name'>
          <p>Library / Framework</p>
        </div>
        {technologyData.filter((value) => value.techCategory === "Library/Framework")
        .map((value, techID) => (
          <>
          <TechnologyBox
            key = {techID}
            icon = {value.techIcon}
            title = {value.techName}
            techURL = {value.techURL}
          />
          </>
        ))
        }
      </div>

      <div className="skill__container grid">
        <div className='skill__name'>
          <p>Languages</p>
        </div>
        {technologyData.filter((value) => value.techCategory === "Languages")
        .map((value, techID) => (
          <>
          <TechnologyBox
            key = {techID}
            icon = {value.techIcon}
            title = {value.techName}
            techURL = {value.techURL}
          />
          </>
        ))
        }
      </div>

      <div className="skill__container grid">
        <div className='skill__name'>
          <p>Database</p>
        </div>
        {technologyData.filter((value) => value.techCategory === "Databases")
        .map((value, techID) => (
          <>
          <TechnologyBox
            key = {techID}
            icon = {value.techIcon}
            title = {value.techName}
            techURL = {value.techURL}
          />
          </>
        ))
        }
      </div>

      <div className="skill__container grid">
        <div className='skill__name'>
          <p>Tools / Platforms</p>
        </div>
        {technologyData.filter((value) => value.techCategory === "Tools/Platforms")
        .map((value, techID) => (
          <>
          <TechnologyBox
            key = {techID}
            icon = {value.techIcon}
            title = {value.techName}
            techURL = {value.techURL}
          />
          </>
        ))
        }
      </div>
    </section>
  )
}

export default Skill