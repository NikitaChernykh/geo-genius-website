'use client'
import Image from 'next/image'
import About from '../components/about/about'
import Footer from '../components/footer'
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
              <Image
                src="/assets/logo.png"
                alt="geo genius"
                width={362}
                height={256}
                priority={true}
              />
            </div>

            <div className={styles.title}>
              <h2>The best way to learn geography</h2>
            </div>
          </div>

          <div className={styles.mid}>
            <div className={styles.planet}>
              <Image
                src="/assets/planet.png"
                alt="planet earth"
                width={200}
                height={200}
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

          <Newsletter />
        </div>
      </div>
      <About />
      <Footer />
    </main>
  )
}
