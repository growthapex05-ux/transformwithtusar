import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const services = [
  { icon: '🥗', title: 'Nutrition Coaching', desc: 'Personalised meal planning and mindful eating practices aligned with your goals, lifestyle and cultural preferences.', perks: ['Custom meal plans', 'Grocery & snack guidance', 'Mindful eating practices'], id: 'nutrition' },
  { icon: '🌟', title: '1-on-1 Wellness Coaching', desc: 'Deep-dive personalised coaching covering all dimensions of health — physical, mental, emotional and spiritual.', perks: ['Weekly 1-on-1 sessions', '24/7 WhatsApp support', 'Full wellness assessment'], id: 'coaching', featured: true },
  { icon: '🧘', title: 'Mindfulness & Movement', desc: 'Yoga, breathwork and meditation techniques that reduce stress and build lasting mental resilience.', perks: ['Custom yoga routines', 'Breathwork & meditation', 'Stress management tools'], id: 'mindfulness' },
  { icon: '💪', title: 'Fitness & Body Transformation', desc: 'Science-backed workout plans tailored to your body type, fitness level and goals — no fads, just results.', perks: ['Custom workout plans', 'Progress tracking', 'Body composition coaching'], id: 'fitness' },
];

const privileges = [
  '1-on-1 Coaching Sessions', '24/7 Motivational Chat', 'Custom Workout Routine',
  'Personalised Meal Plan', 'Weekly Grocery List', 'Healthy Snack Ideas',
  'Progress Reviews & Adjustments', 'Mindfulness Resources Library',
];

const testimonials = [
  { name: 'Priya Sharma', location: 'Delhi, India', initial: 'P', quote: '"Working with Tusar completely changed my relationship with food and my body. I lost 18kg in 5 months — but more importantly, I finally feel free."' },
  { name: 'Rohan Mehta', location: 'Mumbai, India', initial: 'R', quote: '"Tusar\'s holistic approach is unlike anything I\'ve tried. She doesn\'t just give you a plan — she helps you understand WHY. Game changer!"', featured: true },
  { name: 'Aisha Patel', location: 'Dubai, UAE', initial: 'A', quote: '"After years of yo-yo dieting, Tusar helped me build a sustainable lifestyle. My energy is through the roof and I actually enjoy working out now!"' },
  { name: 'Sarah Johnson', location: 'London, UK', initial: 'S', quote: '"The mindfulness sessions alone were worth it. My anxiety has reduced dramatically and I feel more present in my daily life. Thank you, Tusar!"' },
  { name: 'Kavya Reddy', location: 'Bangalore, India', initial: 'K', quote: '"I was sceptical about online coaching but Tusar\'s personalised approach made it feel like she was right there with me every step of the way."' },
  { name: 'Vikram Singh', location: 'Toronto, Canada', initial: 'V', quote: '"Lost 12kg and built real muscle. But the best transformation is mental — I have a healthy mindset about food and fitness that will last a lifetime."' },
];

const blogs = [
  { id: 1, img: '/images/blog_nutrition.png', cat: 'Nutrition', date: 'May 2, 2026', read: '6 min read', title: 'The Ultimate Guide to Mindful Eating (And Why It Works)', desc: 'Discover how slowing down and paying attention to your meals can transform your relationship with food forever.' },
  { id: 2, img: '/images/blog_mindfulness.png', cat: 'Mindfulness', date: 'Apr 24, 2026', read: '5 min read', title: 'Build a Morning Routine That Actually Sticks', desc: 'A step-by-step guide to designing a morning ritual that energises your body and grounds your mind.' },
  { id: 3, img: '/images/blog_fitness.png', cat: 'Fitness', date: 'Apr 15, 2026', read: '7 min read', title: '5 Fitness Myths Debunked by Science', desc: 'From "no pain no gain" to spot reduction — we bust the most common fitness myths so you can train smarter.' },
];

export default function Home() {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add(styles.visible);
      });
    }, { threshold: 0.1 });
    sectionRefs.current.forEach(el => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const addRef = el => { if (el && !sectionRefs.current.includes(el)) sectionRefs.current.push(el); };

  return (
    <main>
      {/* ── Hero ────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <img src="/images/hero_wellness.png" alt="Wellness coaching" className={styles.heroImg} />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.badge}>✦ Your Wellness Journey Starts Here</span>
          <h1 className={styles.heroH1}>
            Transform Your Life,<br /><em>Holistically.</em>
          </h1>
          <p className={styles.heroDesc}>
            Personalised wellness coaching that nourishes your body, calms your mind,
            and awakens your potential. Let's build the healthiest version of you — together.
          </p>
          <div className={styles.heroCtas}>
            <Link to="/services" className={styles.btnPrimary}>Explore Programs ↗</Link>
            <Link to="/about" className={styles.btnWhite}>Meet Tusar</Link>
          </div>
          <div className={styles.heroStats}>
            <div className={styles.stat}><span className={styles.statNum}>500+</span><span className={styles.statLabel}>Lives Transformed</span></div>
            <div className={styles.statDiv} />
            <div className={styles.stat}><span className={styles.statNum}>8+</span><span className={styles.statLabel}>Years Experience</span></div>
            <div className={styles.statDiv} />
            <div className={styles.stat}><span className={styles.statNum}>98%</span><span className={styles.statLabel}>Client Satisfaction</span></div>
          </div>
        </div>
        <div className={styles.scrollHint}>
          <span>Scroll to explore</span>
          <div className={styles.scrollLine} />
        </div>
      </section>

      {/* ── Trust Bar ─────────────────── */}
      <section className={styles.trustBar}>
        <div className={styles.trustInner}>
          <p className={styles.trustLabel}>Certified & recognised by</p>
          <div className={styles.trustLogos}>
            {['🏅 ACE Certified','🌿 Ayurveda Council','🧘 Yoga Alliance RYT-500','🍃 IIN Health Coach','💪 NASM-CPT'].map(t => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ──────────────────── */}
      <section className={styles.sectionPad} id="services">
        <div className={styles.container}>
          <div className={styles.sectionHeader} ref={addRef}>
            <span className={`${styles.badge} ${styles.badgeSage}`}>What I Offer</span>
            <div className={styles.divider} />
            <h2>Holistic Programs<br />Designed <em>for You</em></h2>
            <p>Every programme is crafted to meet you exactly where you are — with science-backed strategies and compassionate guidance.</p>
          </div>
          <div className={styles.servicesGrid}>
            {services.map((s, i) => (
              <div key={s.id} className={`${styles.serviceCard} ${s.featured ? styles.featuredCard : ''} ${styles.fadeUp}`} ref={addRef} style={{ transitionDelay: `${i * 0.1}s` }}>
                {s.featured && <div className={styles.popularBadge}>Most Popular</div>}
                <div className={styles.serviceIcon}>{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul className={styles.perks}>
                  {s.perks.map(p => <li key={p}>✓ {p}</li>)}
                </ul>
                <Link to={`/services#${s.id}`} className={styles.serviceLink}>Learn more →</Link>
              </div>
            ))}
          </div>
          <div className={styles.center} style={{ marginTop: '48px' }}>
            <Link to="/services" className={styles.btnOutline}>View All Programs</Link>
          </div>
        </div>
      </section>

      {/* ── Client Privileges ─────────── */}
      <section className={`${styles.privileges} ${styles.sectionPadSm}`}>
        <div className={styles.container}>
          <div className={styles.privilegesInner}>
            <div className={styles.privilegesText} ref={addRef}>
              <span className={`${styles.badge} ${styles.badgeGold}`}>Client Experience</span>
              <div className={styles.divider} />
              <h2>Privileges You Get<br />as a <em>Client</em></h2>
              <p>When you join the TransformWithTusar family, you gain access to a full ecosystem of support designed to make your wellness journey seamless and sustainable.</p>
              <Link to="/services" className={styles.btnPrimary} style={{ marginTop: '28px', display: 'inline-flex' }}>Start Your Journey</Link>
            </div>
            <div className={styles.privilegesList} ref={addRef}>
              {privileges.map(p => (
                <div key={p} className={`${styles.privilegeItem} ${styles.fadeUp}`}>
                  <span className={styles.piCheck}>✔</span> {p}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── About Snippet ─────────────── */}
      <section className={`${styles.aboutSection} ${styles.sectionPad}`}>
        <div className={styles.container}>
          <div className={styles.aboutInner}>
            <div className={styles.aboutImgWrap} ref={addRef}>
              <img src="/images/coach_portrait.png" alt="Tusar — Wellness Coach" className={styles.aboutImg} />
              <div className={styles.aboutBadge}>
                <span className={styles.aibNum}>8+</span>
                <span className={styles.aibLabel}>Years of<br />Coaching</span>
              </div>
              <div className={`${styles.dot} ${styles.dot1}`} />
              <div className={`${styles.dot} ${styles.dot2}`} />
            </div>
            <div className={styles.aboutText} ref={addRef}>
              <span className={`${styles.badge} ${styles.badgeSage}`}>About Tusar</span>
              <div className={styles.divider} />
              <h2>Your Guide to a<br /><em>Balanced, Vibrant Life</em></h2>
              <p>Hi! I'm Tusar — a certified holistic wellness coach, yoga practitioner and nutrition specialist with a passion for helping people reconnect with their healthiest selves.</p>
              <p style={{ marginTop: '16px' }}>My approach blends modern science with ancient wisdom — creating programmes that are not just effective, but deeply nourishing for your body, mind and soul.</p>
              <div className={styles.aboutHighlights}>
                <div className={styles.hlItem}><span className={styles.hlIcon}>🎓</span><div><strong>Certified Expert</strong><p>ACE, NASM, IIN & Yoga Alliance certified</p></div></div>
                <div className={styles.hlItem}><span className={styles.hlIcon}>🌍</span><div><strong>Global Community</strong><p>Clients across 12 countries</p></div></div>
              </div>
              <Link to="/about" className={styles.btnOutline} style={{ marginTop: '32px', display: 'inline-flex' }}>Read My Story →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ──────────────── */}
      <section className={`${styles.testiSection} ${styles.sectionPad}`} id="testimonials">
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.centered}`} ref={addRef}>
            <span className={`${styles.badge} ${styles.badgeSage}`}>Real Stories</span>
            <div className={`${styles.divider} ${styles.dividerCenter}`} />
            <h2>What My Clients Say</h2>
            <p>These are real transformations from real people who committed to the journey.</p>
          </div>
          <div className={styles.testiGrid}>
            {testimonials.map((t, i) => (
              <div key={t.name} className={`${styles.testiCard} ${t.featured ? styles.testiCardFeatured : ''} ${styles.fadeUp}`} ref={addRef} style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className={styles.stars}>★★★★★</div>
                <p className={styles.quote}>{t.quote}</p>
                <div className={styles.testiAuthor}>
                  <div className={styles.avatar}>{t.initial}</div>
                  <div><strong>{t.name}</strong><span>{t.location}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog Preview ──────────────── */}
      <section className={`${styles.blogSection} ${styles.sectionPad}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader} ref={addRef}>
            <span className={`${styles.badge} ${styles.badgeGold}`}>Wellness Wisdom</span>
            <div className={styles.divider} />
            <h2>From the <em>Blog</em></h2>
            <p>Practical tips, evidence-based insights and soulful stories to inspire your wellness journey.</p>
          </div>
          <div className={styles.blogGrid}>
            {blogs.map((b, i) => (
              <article key={b.id} className={`${styles.blogCard} ${styles.fadeUp}`} ref={addRef} style={{ transitionDelay: `${i * 0.1}s` }}>
                <Link to={`/blog/${b.id}`} className={styles.blogImgWrap}>
                  <img src={b.img} alt={b.title} />
                  <span className={styles.blogCat}>{b.cat}</span>
                </Link>
                <div className={styles.blogBody}>
                  <div className={styles.blogMeta}><span>{b.date}</span> · <span>{b.read}</span></div>
                  <h3><Link to={`/blog/${b.id}`}>{b.title}</Link></h3>
                  <p>{b.desc}</p>
                  <Link to={`/blog/${b.id}`} className={styles.readMore}>Read Article →</Link>
                </div>
              </article>
            ))}
          </div>
          <div className={styles.center} style={{ marginTop: '48px' }}>
            <Link to="/blog" className={styles.btnOutline}>View All Articles</Link>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ────────────────── */}
      <section className={styles.ctaBanner}>
        <div className={styles.ctaBannerBg} />
        <div className={styles.container}>
          <div className={styles.ctaInner} ref={addRef}>
            <span className={`${styles.badge} ${styles.badgeGold}`}>Ready to Begin?</span>
            <h2>Start Your Transformation<br /><em>Today</em></h2>
            <p>Book a free 30-minute discovery call and let's map out your personalised wellness roadmap.</p>
            <Link to="/services" className={styles.btnGold} style={{ marginTop: '16px', display: 'inline-flex' }}>Book Free Discovery Call ✦</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
