import { siteConfig } from '@/lib/data'
import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.built}>
          Built with{' '}
          <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className={styles.link}>Next.js</a>
          {' '}· Deployed on{' '}
          <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className={styles.link}>Vercel</a>
        </p>

        <p className={styles.copy}>
          <span className={styles.copySymbol}>©</span> {year} {siteConfig.name}
        </p>

        <a
          href="#hero"
          className={styles.toTop}
          aria-label="Back to top"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 19V5M5 12l7-7 7 7"/>
          </svg>
          top
        </a>
      </div>
    </footer>
  )
}
