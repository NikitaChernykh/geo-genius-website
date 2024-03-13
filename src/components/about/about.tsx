import Image from 'next/image'
import styles from './about.module.scss'

export default function About() {
  return (
    <section className={styles.about}>
      <div className={`${styles.section}`}>
        <div>
          {' '}
          <h2 className={`${styles.title}`}>Learn the World</h2>
          <p className={`${styles.text}`}>
            Geo Genius transforming learning into an engaging adventure. As you
            progress, earn points and advance through levels and continents,
            enhancing your knowledge of the world and improving your
            geographical knowledge.
          </p>
        </div>
        <Image
          src="/assets/world-map.png"
          className={styles.image}
          alt="map"
          width={423}
          height={224}
        />
      </div>
      <div className={` ${styles.reverseDirection} ${styles.section}`}>
        <Image
          src="/assets/continents.png"
          className={styles.image}
          alt="continents"
          width={360}
          height={256}
        />
        <div>
          <h2 className={`${styles.title}`}>Geographical Data</h2>
          <p className={`${styles.text}`}>
            We use manual data entry where our countries and capitals are
            meticulously entered by hand. Using the most up to date knowledge we
            provide you with the most reliable geographic data.
          </p>
        </div>
      </div>
      <div className={styles.section}>
        <div>
          <h2 className={`${styles.title}`}>Say Hi to Geo!</h2>
          <p className={`${styles.text}`}>
            Geo is your kind companion who will be supporting your world
            learning journey.
          </p>
        </div>
        <Image
          src="/assets/geo.svg"
          className={styles.image}
          alt="geo"
          width={330}
          height={260}
        />
      </div>
    </section>
  )
}
