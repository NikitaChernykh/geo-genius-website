import Image from 'next/image'
import map from '../../assets/canada.png'
import geo from '../../assets/geo.png'
import canada from '../../assets/map.png'
import styles from './about.module.scss'

export default function About() {
  return (
    <section className={styles.columnSection}>
      <div className={styles.column}>
        <Image src={map} className={styles.columnImage} alt="map" />
        <h2 className={`${styles.columnTitle}`}>Explore the world map</h2>
        <p className={`${styles.columnText}`}>
          Explore an entirely new world map designed for geography learning!
          Each continent serves as a distinct learning section, allowing you to
          focus on individual regions.
        </p>
      </div>
      <div className={styles.column}>
        <Image src={canada} className={styles.columnImage} alt="map" />
        <h2 className={`${styles.columnTitle}`}>Learn Capitals</h2>
        <p className={`${styles.columnText}`}>
          Discover a fun and interactive way to learn the capitals of countries
          from around the world, where you can test your knowledge of global
          city names.
        </p>
      </div>

      <div className={styles.column}>
        <Image src={geo} className={styles.geoImage} alt="geo" />
        <h2 className={`${styles.columnTitle}`}>Become the Geo Genius</h2>
        <p className={`${styles.columnText}`}>
          Pass all the tests and test your knowledge to claim the Geo Genius
          status as you embark on a journey to master world geography,
          identifying capitals and more through exciting challenges and quizzes.
        </p>
      </div>
    </section>
  )
}
