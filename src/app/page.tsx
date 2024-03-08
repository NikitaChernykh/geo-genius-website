'use client'
import Image from 'next/image'
import logo from '../assets/logo.png'
import plane from '../assets/plane.png'
import planet from '../assets/planet.png'
import About from '../components/about/about'
import Footer from '../components/footer/footer'
import Newsletter from '../components/newsletter/newsletter'
import StarsCanvas from '../components/stars'
import '../styles/globals.css'
import styles from './page.module.scss'

export default function HomePage() {
  return (
    <main className={`homepage`}>
      <div className={styles.background}>
        <StarsCanvas />
        <div className={styles.content}>
          <div>
            <div className={styles.logo}>
              <Image src={logo} alt="geo genius" priority={true} />
            </div>

            <div className={styles.title}>
              <h2>The best way to learn geography</h2>
            </div>
          </div>

          <div className={styles.mid}>
            <div className={styles.planet}>
              <Image src={planet} alt="planet earth" />
            </div>
            <div className={styles.plane}>
              <Image src={plane} alt="geo" />
            </div>
          </div>

          <Newsletter />
        </div>
      </div>
      <About />
      <Footer />
    </main>
  )
}
