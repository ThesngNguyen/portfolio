import './App.css';
import React from 'react';

import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Services from "./components/Services/Services";
import Skill from "./components/Skill/Skill";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";


function App() {
  return (
    <div>
      <Sidebar></Sidebar>
      <main className="home">
        <Home></Home>
        <About></About>
        <Experience></Experience>
        <Services></Services>
        <Skill></Skill>
        <Project></Project>
        <Contact></Contact>
      </main>
    </div>
  );
}

export default App;
