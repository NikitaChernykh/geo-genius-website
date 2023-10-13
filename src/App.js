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
      <section className="column-section">
        <div className="column">
          <img src={require('./Images/Map.png')} alt="map" />
          <h2>Explore the world map</h2>
          <p>Explore an entirely new world map designed for geography learning! Each continent serves as a distinct learning section, allowing you to focus on individual regions.</p>
        </div>
        <div className="column">
          <img src={require('./Images/Canada.png')} alt="capital" />
          <h2>Learn Capitals</h2>
          <p>Discover a fun and interactive way to learn the capitals of countries from around the world, where you can test your knowledge of global city names.</p>
        </div>
    
        <div className="column">
          <img src={require('./Images/Geo.png')} alt="geo" />
          <h2>Become the Geo Genius</h2>
          <p>Pass all the tests and test your knowledge to claim the Geo Genius status as you embark on a journey to master world geography, identifying capitals and more through exciting challenges and quizzes.</p>
        </div>
      </section>
      <footer className="footer">
        <div className="divider"></div>
        <div className="links">
          {/* <div class="social-icons">
            <a href="#">i</a>
            <a href="#">b</a>
            <a href="#">c</a>
            <a href="#">d</a>
          </div> */}
          {/* <div className="footer-links">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
            <a href="#">Link 4</a>
            <a href="#">Link 5</a>
          </div> */}
        </div>
        <div className="copyright">
          &copy; 2023 Chernika Digital - FZCO. All Rights Reserved.
            <a href="https://www.chernikadigital.com/privacy-policy" target='_blank' rel="noreferrer" className='legal-link'>Privacy Policy</a>
            <a href="https://www.chernikadigital.com/terms-of-service" target='_blank' rel="noreferrer" className='legal-link'>Terms of Use</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
