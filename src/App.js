import React from 'react';

import Header from './Components/Header/Header';
import './App.css';
import Wrapper from './Containers/Wrapper/Wrapper';
import Projects from './Containers/Projects/Projects';

const app = () => {
  return (
    <div className="App">
      <Header />
      <Wrapper />
      <div className="Polygontop" ></div>
      <Projects />
      <div className="Polygonbot" ></div>
    </div>
  );
}

export default app;