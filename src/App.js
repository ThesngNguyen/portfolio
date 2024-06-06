import './App.css';
import Navbar from './components/NavBar';
import Intro from './components/Intro';
import Abouts from './components/Abouts';
import React from 'react';
import { Parallax } from 'react-parallax';
import backgroundImage from './assets/images/background.jpg';

function App() {

  return (
    <div className="App">
      <div className='Navbar'>
        <Navbar/>
      </div>
      <div id='title' className='parallax-container'>
        <Parallax bgImage={backgroundImage} bgImageStyle={{ // Thêm style cho background image
          width: '150%', // Chiều rộng của hình ảnh là 100%
          height: 'auto', // Chiều cao tự động điều chỉnh để giữ tỷ lệ hình ảnh
          backgroundRepeat: 'no-repeat', // Ngăn chặn hình ảnh lặp lại
          backgroundSize: 'cover',
        }} strength={500}>
          <div className="parallax-content">
            <Intro />
          </div>
        </Parallax>
        <Parallax strength={500}>
          <div className="parallax-content-2">
            <Abouts />
          </div>
        </Parallax>
        <Parallax strength={500}>
          <div className="parallax-content-2">
            <Abouts />
          </div>
        </Parallax>
        <Parallax strength={500}>
          <div className="parallax-content-2">
            <Abouts />
          </div>
        </Parallax>
      </div>
      
    </div>
  );
}

export default App;
