import { toolsSpotlight } from '@/lib/data'
import styles from './ToolsSpotlight.module.css'

export default function ToolsSpotlight() {
  return (
    <section id="tools" className={styles.section}>
      <div className="container">
        <div className={styles.card}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            Side Project Spotlight
          </div>

          <div className={styles.content}>
            <div className={styles.left}>
              <h2 className={styles.heading}>
                <span className={styles.headingAccent}>⌘</span>
                {toolsSpotlight.name}
              </h2>
              <p className={styles.tagline}>{toolsSpotlight.tagline}</p>
              <p className={styles.desc}>{toolsSpotlight.description}</p>

              <div className={styles.toolList}>
                {toolsSpotlight.tools.map((tool) => (
                  <div key={tool.name} className={styles.tool}>
                    <span className={styles.toolName}>{tool.name}</span>
                    <span className={styles.toolDesc}>{tool.desc}</span>
                  </div>
                ))}
              </div>

              <a
                href={toolsSpotlight.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cta}
              >
                Visit {toolsSpotlight.name}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"/>
                </svg>
              </a>
            </div>

            <div className={styles.right} aria-hidden="true">
              <div className={styles.mockup}>
                <div className={styles.mockupBar}>
                  <span /><span /><span />
                  <div className={styles.mockupUrl}>yourtools.dev</div>
                </div>
                <div className={styles.mockupBody}>
                  <div className={styles.mockupGrid}>
                    {['PDF Editor', 'Merge PDFs', 'Split PDF', 'Form Fill', '+ More soon', ''].map((t, i) => (
                      <div key={i} className={`${styles.mockupCard} ${t === '' ? styles.mockupCardEmpty : ''}`}>
                        {t && (
                          <>
                            <div className={styles.mockupCardIcon}>
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                                <polyline points="14 2 14 8 20 8"/>
                              </svg>
                            </div>
                            <span>{t}</span>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
