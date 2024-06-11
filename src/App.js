import './App.css';
import Navbar from './components/NavBar';
import Intro from './components/Intro';
import Abouts from './components/Abouts';
import React from 'react';
import { Parallax } from 'react-parallax';
import { ParallaxProvider } from 'react-scroll-parallax';
import backgroundImage from './assets/images/background.jpg';


function App() {
  return (
    <ParallaxProvider>
      <div className="App">
        <header>
          <div className='Navbar'>
            <Navbar/>
          </div>
        </header>
        <div id='title' className='parallax-container' >
          <Parallax bgImage={backgroundImage} bgImageStyle={{ width: '100%', height: '100%', objectFit: 'cover' }} className='background-Image' strength={500}>
            <section className="parallax-content" id="Home">
              <Intro />
            </section>
          </Parallax>
          <Parallax strength={500}>
            <section className="parallax-content-2" id="Abouts">
              <Abouts />
            </section>
          </Parallax>
          <Parallax strength={500}>
            <section className="parallax-content-2" id="Projects">
              <Abouts />
            </section>
          </Parallax>
        </div>
      </div>
    </ParallaxProvider>
  );
}

export default App;
