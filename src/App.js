import React from 'react';

import Header from './Components/Header/Header';
import './App.css';
import Wrapper from './Containers/Wrapper/Wrapper';
import Projects from './Containers/Projects/Projects';
import Footer from './Components/Footer/Footer';

const app = () => {
  return (
    <div className="App">
      <Header />
      <Wrapper />
      <div className="Polygontop" ></div>
      <Projects />
      <div className="Polygonbot" ></div>
      <Footer />
    </div>
  );
}

export default app;