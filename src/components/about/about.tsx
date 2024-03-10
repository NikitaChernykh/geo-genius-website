import Image from 'next/image'
import styles from './about.module.scss'

export default function About() {
  return (
    <section className={styles.columnSection}>
      <div className={styles.column}>
        <Image
          src="/assets/map.png"
          className={styles.columnImage}
          alt="map"
          width={300}
          height={200}
        />
        <h2 className={`${styles.columnTitle}`}>Explore the world map</h2>
        <p className={`${styles.columnText}`}>
          Explore an entirely new world map designed for geography learning!
          Each continent serves as a distinct learning section, allowing you to
          focus on individual regions.
        </p>
      </div>
      <div className={styles.column}>
        <Image
          src="/assets/canada.png"
          className={styles.columnImage}
          alt="map"
          width={300}
          height={200}
        />
        <h2 className={`${styles.columnTitle}`}>Learn Capitals</h2>
        <p className={`${styles.columnText}`}>
          Discover a fun and interactive way to learn the capitals of countries
          from around the world, where you can test your knowledge of global
          city names.
        </p>
      </div>

      <div className={styles.column}>
        <Image
          src="/assets/geo.png"
          className={styles.geoImage}
          alt="geo"
          width={200}
          height={200}
        />
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
