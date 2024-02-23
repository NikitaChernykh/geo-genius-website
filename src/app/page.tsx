'use client'
import Image from 'next/image'
import logo from '../assets/logo.png'
import planet from '../assets/planet.png'
import About from '../components/about/about'
import Footer from '../components/footer/footer'
import Newsletter from '../components/newsletter/newsletter'
import '../styles/globals.css'
import fontKanit from './fonts'
import styles from './page.module.scss'

export default function HomePage() {
  return (
    <main className="homepage">
      <div className={styles.background}>
        <div className={styles.content}>
          <div className={styles.titleSection}>
            <Image
              src={logo}
              className={styles.logo}
              alt="geogenius"
              priority={true}
            />
            <h2 className={`${styles.title} ${fontKanit.variable} font-sans`}>
              Best way to learn geography.
            </h2>
          </div>
          <Image
            src={planet}
            className={styles.planet}
            alt="planet earth"
            priority={true}
          />
          <Newsletter />
        </div>
      </div>
      <About />
      <Footer />
    </main>
  )
}
