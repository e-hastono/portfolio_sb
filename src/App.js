import React, { Component } from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import About from './Components/About';
import Experience from './Components/Experience';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Interests from './Components/Interests';
import Awards from './Components/Awards';

export default class App extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <div className="container-fluid p-0">
          <About />
          <hr className="m-0" />
          <Experience />
          <hr className="m-0" />
          <Education />
          <hr className="m-0" />
          <Skills />
          <hr className="m-0" />
          <Interests />
          <hr className="m-0" />
          <Awards />
        </div>
      </div>
    );
  }
}

