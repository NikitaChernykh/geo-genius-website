import { motion } from 'framer-motion'
import styles from './about.module.scss'

export default function About() {
  const text = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
    },
  }

  const images = {
    hidden: { opacity: 0, x: 30 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.5,
      },
    },
  }

  const imagesLeft = {
    hidden: { opacity: 0, x: -30 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.5,
      },
    },
  }

  return (
    <section className={styles.about}>
      <div>
        <div className={`${styles.section}`}>
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={text}
            viewport={{ once: true }}
          >
            <h2 className={`${styles.title}`}>Learn the World</h2>
            <p className={`${styles.text}`}>
              Geo Genius transforming learning into an engaging adventure. As
              you progress, earn points and advance through levels and
              continents, enhancing your knowledge of the world and improving
              your geographical knowledge.
            </p>
          </motion.div>
          <motion.img
            src="/assets/world-map.png"
            className={styles.image}
            alt="map"
            width={423}
            height={224}
            variants={images}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          />
        </div>
        <div className={` ${styles.reverseDirection} ${styles.section}`}>
          <motion.img
            src="/assets/continents.png"
            className={styles.image}
            alt="continents"
            width={461}
            height={176}
            variants={imagesLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          />
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={text}
            viewport={{ once: true }}
          >
            <h2 className={`${styles.title}`}>Geographical Data</h2>
            <p className={`${styles.text}`}>
              We use manual data entry where our countries and capitals are
              meticulously entered by hand. Using the most up to date knowledge
              we provide you with the most reliable geographic data.
            </p>
          </motion.div>
        </div>
        <div className={styles.section}>
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={text}
            viewport={{ once: true }}
          >
            <h2 className={`${styles.title}`}>Say Hi to Geo!</h2>
            <p className={`${styles.text}`}>
              Geo is your kind companion who will be supporting your world
              learning journey.
            </p>
          </motion.div>
          <motion.img
            src="/assets/geo.png"
            className={styles.image}
            alt="geo"
            width={330}
            height={260}
            variants={images}
            initial="hidden"
            animate="show"
            viewport={{ once: true }}
          />
        </div>
      </div>
    </section>
  )
}
