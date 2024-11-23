import React from 'react';
import "./Services.css";
import servicesData from "../../data/services.json";

function Services() {
  return (
    <section className="services container section" id="services">
      <h2 className="section__title">What I can do</h2>
      <div className="services__container grid">
        {servicesData.map(({serviceID, serviceImage, serviceTitle, serviceDescription}) => {
          return(
            <div className="services__card" key={serviceID}>
              <img src={serviceImage} alt="" className='services__img' />
              <h3 className="services__title">{serviceTitle}</h3>
              <p className="services__description">{serviceDescription}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Services