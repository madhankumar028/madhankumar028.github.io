import { blogPosts } from '@/lib/data'
import styles from './Blog.module.css'

export default function Blog() {
  const hasPosts = blogPosts.length > 0

  return (
    <section id="blog">
      <div className="container">
        <p className="section-label">Blog</p>
        <h2 className="section-heading">Writing & thoughts.</h2>

        {hasPosts ? (
          <div className={styles.list}>
            {blogPosts.map((post) => (
              <a key={post.slug} href={`/blog/${post.slug}`} className={styles.post}>
                <div className={styles.postMeta}>
                  <span className={styles.postDate}>{post.date}</span>
                  <span className={styles.postRead}>{post.readTime}</span>
                </div>
                <div className={styles.postContent}>
                  <h3 className={styles.postTitle}>{post.title}</h3>
                  <p className={styles.postExcerpt}>{post.excerpt}</p>
                </div>
                <span className={styles.postArrow}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14M13 6l6 6-6 6"/>
                  </svg>
                </span>
              </a>
            ))}
          </div>
        ) : (
          <div className={styles.empty}>
            <div className={styles.emptyIcon}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--text-3)" strokeWidth="1.2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
              </svg>
            </div>
            <p className={styles.emptyTitle}>Writing in progress.</p>
            <p className={styles.emptyDesc}>
              Articles on full-stack engineering, performance, automation, and building in public — coming soon.
            </p>
            <div className={styles.emptyTags}>
              {['Next.js', '.NET', 'Testing', 'AI', 'DevTools', 'Career'].map((tag) => (
                <span key={tag} className={styles.emptyTag}>{tag}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
