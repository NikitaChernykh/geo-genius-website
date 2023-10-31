import React from "react"
import Image from "next/image";
import logo from "../assets/logo.png";
import canada from "../assets/canada.png";
import geo from "../assets/geo.png";
import RepeatingImage from "../components/repeating-image/repeating-image"
import Stars from "../components/stars/stars";
import Globe from "../components/globe/globe";
import Logo from "../components/logo/logo"; 
import styles from "./index.module.css"

function HomePage() {
  return (
    <div className="homepage">
    <div className={styles.background}></div>
    <RepeatingImage />
    <div className={styles.contentContainer}>
      <div className={styles.starsContainer}>
        <Stars />
      </div>
      <div className={styles.globeContainer}>
        <Logo />
        <Globe />
      </div>
    </div>
    <section className={styles.columnSection}>
      <div className={styles.column}>
        <Image
          src={logo}
          className={styles.columnImage}
          alt="logo"
        />
        <h2 className={styles.columnTitle}>Explore the world map</h2>
        <p className={styles.columnText}>Explore an entirely new world map designed for geography learning! Each continent serves as a distinct learning section, allowing you to focus on individual regions.</p>
      </div>
      <div className={styles.column}>
        <Image
          src={canada}
          className={styles.columnImage}
          alt="map"
        />
        <h2 className={styles.columnTitle}>Learn Capitals</h2>
        <p className={styles.columnText}>Discover a fun and interactive way to learn the capitals of countries from around the world, where you can test your knowledge of global city names.</p>
      </div>
  
      <div className={styles.column}>
        <Image
          src={geo}
          className={styles.geoImage}
          alt="geo"
        />
        <h2 className={styles.columnTitle}>Become the Geo Genius</h2>
        <p className={styles.columnText}>Pass all the tests and test your knowledge to claim the Geo Genius status as you embark on a journey to master world geography, identifying capitals and more through exciting challenges and quizzes.</p>
      </div>
    </section>
    <footer className={styles.footer}>
      <div className={styles.divider}></div>
      <div className={styles.links}>
        {/* TODO: Add social links */}
      </div>
      {/* TODO: convert copyright to component with function to auto-update the year */}
      <div className={styles.copyright}>
        &copy; 2023 Chernika Digital - FZCO. All Rights Reserved. 
          <a 
          href="https://www.chernikadigital.com/privacy-policy" 
          target='_blank' 
          rel="noreferrer" 
          className='legalLink'>Privacy Policy</a>
          <a href="https://www.chernikadigital.com/terms-of-service" 
          target='_blank' 
          rel="noreferrer" 
          className='legalLink'>Terms of Use</a>
      </div>
    </footer>
  </div>
  );
}

export default HomePage;
