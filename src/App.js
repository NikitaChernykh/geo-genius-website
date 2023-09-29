import React from 'react';
import Globe from './Globe';
import Stars from './Stars';
import RepeatingImage from './RepeatingImage';
import Logo from './Logo';
import './App.css';

function App() {
  return (
    <div className="App">   
      <div className="background"></div>
      <RepeatingImage />
    
      <div className="content-container">
        <div className="stars-container">
          <Stars />
        </div>
        <div className="globe-container">
          <Logo />
          <Globe />
        </div>
      </div>
    </div>
  );
}

export default App;
