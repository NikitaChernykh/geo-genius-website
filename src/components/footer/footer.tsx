import React from 'react'
import styles from './footer.module.scss'

export default function Globe() {
  return (
    <footer className={styles.footer}>
      <div className={styles.divider}></div>
      <div className={styles.links}>{/* TODO: Add social links */}</div>
      <div className={styles.copyright}>
        &copy; 2024 Chernika Digital - FZCO. All Rights Reserved.
        <a
          href="https://www.chernikadigital.com/privacy-policy"
          target="_blank"
          rel="noreferrer"
          className="legalLink"
        >
          Privacy Policy
        </a>
        <a
          href="https://www.chernikadigital.com/terms-of-service"
          target="_blank"
          rel="noreferrer"
          className="legalLink"
        >
          Terms of Use
        </a>
      </div>
    </footer>
  )
}
