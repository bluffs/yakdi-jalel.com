import React from 'react';

import Header from './Components/Header/Header';
import './App.css';
import Wrapper from './Components/Containers/Wrapper/Wrapper';

const app = () => {
  return (
    <div className="App">
      <Header />
      <Wrapper />
        <div>
          This is the App
        </div>
    </div>
  );
}

export default app;