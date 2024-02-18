'use client'
import Image from 'next/image'
import logo from '../assets/logo.png'
import planet from '../assets/planet.png'
import About from '../components/about/about'
import Footer from '../components/footer/footer'
import Newsletter from '../components/newsletter/newsletter'
import '../styles/globals.css'
import styles from './page.module.scss'

export default function HomePage() {
  return (
    <main className="homepage">
      <div className={styles.background}>
        <div className={styles.content}>
          <Image src={logo} className={styles.logo} alt="geogenius" />
          <Image src={planet} className={styles.planet} alt="planet earth" />
          <Newsletter />
        </div>
      </div>
      <About />
      <Footer />
    </main>
  )
}
