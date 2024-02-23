import Image from 'next/image'
import fontKanit from '../../app/fonts'
import map from '../../assets/canada.png'
import geo from '../../assets/geo.png'
import canada from '../../assets/map.png'
import styles from './about.module.scss'

export default function About() {
  return (
    <section className={styles.columnSection}>
      <div className={styles.column}>
        <Image src={map} className={styles.columnImage} alt="map" />
        <h2 className={`${styles.columnTitle} ${fontKanit.variable} font-sans`}>
          Explore the world map
        </h2>
        <p className={`${styles.columnText} ${fontKanit.variable} font-sans`}>
          Explore an entirely new world map designed for geography learning!
          Each continent serves as a distinct learning section, allowing you to
          focus on individual regions.
        </p>
      </div>
      <div className={styles.column}>
        <Image src={canada} className={styles.columnImage} alt="map" />
        <h2 className={`${styles.columnTitle} ${fontKanit.variable} font-sans`}>
          Learn Capitals
        </h2>
        <p className={`${styles.columnText} ${fontKanit.variable} font-sans`}>
          Discover a fun and interactive way to learn the capitals of countries
          from around the world, where you can test your knowledge of global
          city names.
        </p>
      </div>

      <div className={styles.column}>
        <Image src={geo} className={styles.geoImage} alt="geo" />
        <h2 className={`${styles.columnTitle} ${fontKanit.variable} font-sans`}>
          Become the Geo Genius
        </h2>
        <p className={`${styles.columnText} ${fontKanit.variable} font-sans`}>
          Pass all the tests and test your knowledge to claim the Geo Genius
          status as you embark on a journey to master world geography,
          identifying capitals and more through exciting challenges and quizzes.
        </p>
      </div>
    </section>
  )
}
