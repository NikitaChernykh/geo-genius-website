import { motion } from 'framer-motion'
import Image from 'next/image'
import Container from '../container'
import styles from './preview.module.scss'

export default function Preview() {
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

  return (
    <section className={styles.preview}>
      <div className={`${styles.maps}`}>
        <motion.div
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Image
            className={`${styles.bgImage}`}
            src="/assets/left-map.png"
            alt="asia"
            width={422}
            height={852}
          />
        </motion.div>
        <motion.div
          initial={{ x: 100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Image
            className={`${styles.bgImage}`}
            src="/assets/right-map.png"
            alt="north america"
            width={422}
            height={852}
          />
        </motion.div>
      </div>
      <Container>
        <motion.div initial="hidden" whileInView="show" variants={text}>
          <h2 className={`${styles.title}`}>Easy and Fun</h2>
          <p className={`${styles.text}`}>
            We made it easy by separating learning in small lessons for each
            continent.
          </p>
        </motion.div>
        <motion.div
          initial={{ scale: 0, y: 15 }}
          whileInView={{ scale: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            className={`${styles.image}`}
            src="/assets/preview.png"
            alt="preview"
            width={422}
            height={852}
          />
        </motion.div>
      </Container>
    </section>
  )
}
