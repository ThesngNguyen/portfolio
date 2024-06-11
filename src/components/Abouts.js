import React, {useState} from 'react';
import './Abouts.css';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../assets/images/image1.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

const Abouts = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div id="abouts">
        <div className='abouts-Container'>
          <Carousel activeIndex={index} onSelect={handleSelect} className='carousel-Container'>
            <Carousel.Item>
              <img
                className="carousel-Image"
                src={image1}
                alt="First slide"
              />
              <Carousel.Caption className='carousel-Caption'>
                <h3>First slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-Image"
                src={image1}
                alt="Second slide"
              />
              <Carousel.Caption className='carousel-Caption'>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
    </div>
  )
}

export default Abouts