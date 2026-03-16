import { experience } from '@/lib/data'
import styles from './Experience.module.css'

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <p className="section-label">Experience</p>
        <h2 className="section-heading">Where I've worked.</h2>

        <div className={styles.timeline}>
          {experience.map((job, i) => (
            <div key={i} className={styles.job}>
              <div className={styles.jobMeta}>
                <span className={styles.jobPeriod}>{job.period}</span>
                <span className={styles.jobLocation}>{job.location}</span>
              </div>
              <div className={styles.jobContent}>
                <div className={styles.jobHeader}>
                  <h3 className={styles.jobRole}>{job.role}</h3>
                  <span className={styles.jobCompany}>{job.company}</span>
                </div>
                <p className={styles.jobDesc}>{job.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
