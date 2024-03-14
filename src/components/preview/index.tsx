import Image from 'next/image'
import Container from '../container'
import styles from './preview.module.scss'

export default function Preview() {
  return (
    <section className={styles.preview}>
      <div className={`${styles.maps}`}>
        <Image
          className={`${styles.bgImage}`}
          src="/assets/left-map.png"
          alt="preview"
          width={422}
          height={852}
        />
        <Image
          className={`${styles.bgImage}`}
          src="/assets/right-map.png"
          alt="preview"
          width={422}
          height={852}
        />
      </div>
      <Container>
        <h2 className={`${styles.title}`}>Easy and Fun</h2>
        <p className={`${styles.text}`}>
          We made it easy by separating learning in small lessons for each
          continent.
        </p>
        <Image
          className={`${styles.image}`}
          src="/assets/preview.png"
          alt="preview"
          width={422}
          height={852}
        />
      </Container>
    </section>
  )
}
