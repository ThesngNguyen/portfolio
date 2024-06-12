import React from 'react';
import './Abouts.css';
import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg';
import image3 from '../assets/images/image3.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

const Abouts = () => {
  return (
    <div id="abouts">
      <div className='abouts-Component'>
        <div className='title-Abouts'>
          <h1>Abouts</h1>
          <p>These are some of my dope memories from back when I was grindin' and hustlin' with my amazing crew, tryin' to smash our goals as college homies.<br></br> Feelin' blessed to have such a tight fam to ride with on this wild journey.</p>
        </div>
        <div className='slider-Container'>
          <div className='slide slider-1'>
            <img src={image1} alt="Google Solution Challenge 2022" />
            <h5 className='slide-Description'>Google Solution Challenge 2022</h5>/
          </div>
          <div className='slide slider-2'>
            <img src={image2} alt="Hoa Sen University TechDev Challenge 2023" />
            <h5 className='slide-Description'>Hoa Sen University TechDev Challenge 2023</h5>
          </div>
          <div className='slide slider-3'>
            <img src={image3} alt="Sponsored Hoa Sen Champion - Season 1" />
            <h5 className='slide-Description'>Sponsored Hoa Sen Champion - Season 1</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Abouts