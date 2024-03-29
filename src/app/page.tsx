'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import About from '../components/about'
import Container from '../components/container'
import Footer from '../components/footer'
import Newsletter from '../components/newsletter/newsletter'
import Preview from '../components/preview'
import StarsCanvas from '../components/stars'
import '../styles/globals.css'
import styles from './page.module.scss'

export default function HomePage() {
  return (
    <main className={styles.homepage}>
      <div className={styles.background}>
        <StarsCanvas />
        <Container>
          <div className={styles.content}>
            <div>
              <motion.div
                initial={{ scale: 0, opacity: 0, y: 15 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                <div className={styles.logo}>
                  <Image
                    src="/assets/logo.png"
                    alt="geo genius"
                    width={362}
                    height={256}
                    priority={true}
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ scale: 0, opacity: 0, y: 15 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className={styles.title}>
                  <h2>The best way to learn geography</h2>
                </div>
              </motion.div>
            </div>

            <div className={styles.mid}>
              <div className={styles.planet}>
                <Image
                  src="/assets/planet.png"
                  alt="planet earth"
                  width={200}
                  height={200}
                  priority={true}
                />
              </div>
              <div className={styles.plane}>
                <Image
                  src="/assets/plane.png"
                  alt="geo"
                  width={140}
                  height={140}
                />
              </div>
            </div>
            <motion.div
              initial={{ scale: 0, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <Newsletter />

              <p className={styles.subText}>Coming soon to iOS</p>
            </motion.div>
          </div>
        </Container>
      </div>
      <Container>
        <About />
      </Container>
      <Preview />
      <Container>
        <Footer />
      </Container>
    </main>
  )
}
