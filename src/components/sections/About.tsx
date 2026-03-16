import { about } from '@/lib/data'
import styles from './About.module.css'

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <p className="section-label">About</p>
        <h2 className="section-heading">The story so far.</h2>

        <div className={styles.grid}>
          <div className={styles.bio}>
            {about.bio.map((para, i) => (
              <p key={i} className={styles.para}>{para}</p>
            ))}
          </div>

          <div className={styles.skills}>
            {about.skills.map((group) => (
              <div key={group.category} className={styles.skillGroup}>
                <h4 className={styles.skillCategory}>{group.category}</h4>
                <ul className={styles.skillList}>
                  {group.items.map((item) => (
                    <li key={item} className={styles.skillItem}>
                      <span className={styles.skillDot} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
