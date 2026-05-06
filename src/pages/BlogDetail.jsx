import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { blogPosts } from './Blog';
import styles from './BlogDetail.module.css';

export default function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.id === Number(id));
  const related = blogPosts.filter(p => p.id !== Number(id)).slice(0, 3);

  useEffect(() => { if (!post) navigate('/blog'); }, [post, navigate]);
  if (!post) return null;

  // Simple markdown-ish renderer
  const renderContent = (text) => {
    return text.split('\n\n').map((para, i) => {
      if (para.startsWith('**') && para.endsWith('**') && para.indexOf('\n') === -1) {
        return <h3 key={i} className={styles.contentH3}>{para.replace(/\*\*/g, '')}</h3>;
      }
      const formatted = para
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>');
      if (para.startsWith('- ') || para.match(/^\d+\./)) {
        const items = para.split('\n').filter(Boolean);
        return (
          <ul key={i} className={styles.contentList}>
            {items.map((item, j) => (
              <li key={j} dangerouslySetInnerHTML={{ __html: item.replace(/^[-\d.]+\s*/, '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
            ))}
          </ul>
        );
      }
      return <p key={i} className={styles.contentP} dangerouslySetInnerHTML={{ __html: formatted }} />;
    });
  };

  return (
    <main>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroImg}>
          <img src={post.img} alt={post.title} />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <div className={styles.container}>
            <div className={styles.breadcrumb}><Link to="/blog">Blog</Link> / <span>{post.cat}</span></div>
            <span className={styles.cat}>{post.cat}</span>
            <h1>{post.title}</h1>
            <div className={styles.meta}>
              <div className={styles.author}>
                <div className={styles.authorAvatar}>T</div>
                <div><strong>Tusar</strong><span>Wellness Coach</span></div>
              </div>
              <div className={styles.metaRight}>
                <span>📅 {post.date}</span>
                <span>⏱ {post.read}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.articleLayout}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* Main Article */}
            <article className={styles.article}>
              <p className={styles.leadText}>{post.excerpt}</p>
              <div className={styles.divider} />
              <div className={styles.content}>{renderContent(post.content)}</div>

              {/* Tags */}
              <div className={styles.tagRow}>
                {post.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
              </div>

              {/* Author Box */}
              <div className={styles.authorBox}>
                <div className={styles.authorBoxAvatar}>T</div>
                <div className={styles.authorBoxText}>
                  <h4>Written by Tusar</h4>
                  <p>Certified holistic wellness coach, yoga practitioner and nutrition specialist helping people transform their health and reclaim their vitality.</p>
                  <Link to="/about" className={styles.authorLink}>Learn more about Tusar →</Link>
                </div>
              </div>

              {/* Nav */}
              <div className={styles.postNav}>
                <Link to="/blog" className={styles.navBtn}>← Back to Blog</Link>
                <Link to="/services" className={styles.navBtnPrimary}>Work with Tusar ✦</Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className={styles.sidebar}>
              {/* CTA Card */}
              <div className={styles.sidebarCta}>
                <div className={styles.sidebarCtaIcon}>🌿</div>
                <h4>Ready to Transform?</h4>
                <p>Book a free 30-min discovery call and let's create your personalised wellness roadmap.</p>
                <Link to="/services" className={styles.sidebarCtaBtn}>Book Free Call ✦</Link>
              </div>

              {/* Related Posts */}
              <div className={styles.sidebarSection}>
                <h4 className={styles.sidebarTitle}>More Articles</h4>
                {related.map(r => (
                  <Link key={r.id} to={`/blog/${r.id}`} className={styles.relatedItem}>
                    <img src={r.img} alt={r.title} />
                    <div>
                      <span className={styles.relatedCat}>{r.cat}</span>
                      <p className={styles.relatedTitle}>{r.title}</p>
                      <span className={styles.relatedMeta}>{r.read}</span>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Privileges */}
              <div className={styles.sidebarPrivileges}>
                <h4 className={styles.sidebarTitle}>Client Privileges</h4>
                {['1-on-1 Coaching', '24/7 Motivational Chat', 'Workout Routine', 'Meal Plan', 'Grocery List', 'Snack Ideas'].map(p => (
                  <div key={p} className={styles.privItem}><span className={styles.privCheck}>✔</span>{p}</div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}
