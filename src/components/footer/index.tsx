import styles from './footer.module.scss'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.divider}></div>
      <div className={styles.content}>
        <div className={styles.copyright}>
          &copy; {currentYear} Chernika Digital - FZCO
          <span className={styles.spacer}> &bull; </span>
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
        <div className={styles.links}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.tiktok.com/@getgeogenius"
          >
            <img
              alt="Tik Tok"
              loading="lazy"
              width="20"
              height="20"
              src="/assets/social/tik-tok.svg"
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/getgeogenius/"
          >
            <img
              alt="instagram"
              loading="lazy"
              width="20"
              height="20"
              src="/assets/social/instagram.svg"
            />
          </a>
          {/* <a target="_blank" rel="noopener noreferrer" href="">
            <img
              alt="X / Twitter"
              loading="lazy"
              width="20"
              height="20"
              src="/assets/social/x.svg"
            />
          </a> */}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://discord.gg/xPamzDpxBS"
          >
            <img
              alt="discord"
              loading="lazy"
              width="20"
              height="20"
              src="/assets/social/discord.svg"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}
