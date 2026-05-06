import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './About.module.css';

const timeline = [
  { year: '2016', title: 'The Spark', desc: 'After years of struggling with her own health, Tusar discovered the transformative power of holistic wellness and committed to making it her life\'s work.' },
  { year: '2017', title: 'IIN Certification', desc: 'Enrolled at the Institute for Integrative Nutrition (IIN), graduating as a certified Health Coach with a focus on nutrition and lifestyle medicine.' },
  { year: '2018', title: 'Yoga Alliance RYT-500', desc: 'Completed 500-hour yoga teacher training, deepening expertise in movement, breathwork and the mind-body connection.' },
  { year: '2020', title: 'Going Global', desc: 'Launched online coaching programmes, expanding reach to clients across 12 countries and building a thriving wellness community.' },
  { year: '2022', title: 'NASM & ACE Certified', desc: 'Added personal training credentials to the portfolio, combining nutrition and fitness coaching into truly holistic programmes.' },
  { year: '2024', title: '500+ Lives Transformed', desc: 'A proud milestone — 500+ clients coached across wellness, fitness, nutrition and mindfulness with a 98% satisfaction rate.' },
];

const values = [
  { icon: '🌱', title: 'Holistic Approach', desc: 'True wellness encompasses body, mind and spirit. We never treat symptoms in isolation.' },
  { icon: '❤️', title: 'Compassion First', desc: 'Every client\'s journey is unique and deserves personalised, judgement-free support.' },
  { icon: '🔬', title: 'Science-Backed', desc: 'Every recommendation is grounded in evidence-based research and proven methodologies.' },
  { icon: '🌍', title: 'Cultural Sensitivity', desc: 'Wellness is deeply personal. We honour cultural backgrounds and individual preferences.' },
  { icon: '📈', title: 'Sustainable Results', desc: 'We build lasting lifestyle changes, not quick fixes that don\'t serve you long-term.' },
  { icon: '✨', title: 'Empowerment', desc: 'Our goal is to make you independent — giving you the tools to thrive on your own.' },
];

export default function About() {
  const refs = useRef([]);
  useEffect(() => {
    const obs = new IntersectionObserver(e => e.forEach(en => { if (en.isIntersecting) en.target.classList.add(styles.visible); }), { threshold: 0.1 });
    refs.current.forEach(el => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);
  const ref = el => { if (el && !refs.current.includes(el)) refs.current.push(el); };

  return (
    <main>
      {/* Page Hero */}
      <section className={styles.pageHero}>
        <div className={styles.heroBg} />
        <div className={styles.container}>
          <span className={styles.badge}>About Tusar</span>
          <h1>A Passion for <em>Transforming Lives</em></h1>
          <p>Meet the certified wellness coach on a mission to help you rediscover your healthiest, happiest self.</p>
        </div>
      </section>

      {/* Story Section */}
      <section className={styles.storySection}>
        <div className={styles.container}>
          <div className={styles.storyGrid}>
            <div className={styles.imgCol} ref={ref}>
              <div className={styles.imgWrap}>
                <img src="/images/coach_portrait.png" alt="Tusar" className={styles.mainImg} />
                <div className={styles.imgAccent} />
              </div>
              <div className={styles.statsRow}>
                <div className={styles.statBox}><span className={styles.statN}>500+</span><span className={styles.statL}>Clients Coached</span></div>
                <div className={styles.statBox}><span className={styles.statN}>12</span><span className={styles.statL}>Countries Reached</span></div>
                <div className={styles.statBox}><span className={styles.statN}>8+</span><span className={styles.statL}>Years Experience</span></div>
              </div>
            </div>
            <div className={styles.textCol} ref={ref}>
              <span className={`${styles.badge} ${styles.badgeSage}`}>My Story</span>
              <div className={styles.divider} />
              <h2>From Struggle to <em>Strength</em></h2>
              <p>Hi, I'm Tusar — and my journey into wellness coaching began not in a classroom, but in a moment of personal crisis. For years, I battled chronic fatigue, digestive issues, and anxiety that no doctor seemed to fully address. I tried every diet, every workout programme, every quick fix — and nothing lasted.</p>
              <p>It was only when I discovered the power of a holistic approach — one that honoured the deep connection between nutrition, movement, mindset, and rest — that everything changed. Within months, I had more energy than I'd had in years. My anxiety eased. My body felt strong and capable. And I found a joy in daily life that I hadn't known was possible.</p>
              <p>That transformation ignited a fire in me. I became obsessed with understanding the science of wellness and, more importantly, sharing it with others. I trained with the world's leading institutions, earned multiple certifications, and have spent the last 8 years helping 500+ individuals experience the same kind of transformation I did.</p>
              <div className={styles.certBadges}>
                {['🏅 ACE Certified', '💪 NASM-CPT', '🍃 IIN Health Coach', '🧘 Yoga Alliance RYT-500', '🌿 Ayurveda Practitioner'].map(c => (
                  <span key={c} className={styles.certChip}>{c}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className={styles.timelineSection}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.centered}`} ref={ref}>
            <span className={`${styles.badge} ${styles.badgeGold}`}>My Journey</span>
            <div className={`${styles.divider} ${styles.dividerCenter}`} />
            <h2>The Road to <em>Here</em></h2>
            <p>A decade of learning, growing and helping others transform their lives.</p>
          </div>
          <div className={styles.timeline}>
            {timeline.map((t, i) => (
              <div key={t.year} className={`${styles.timelineItem} ${i % 2 === 0 ? styles.left : styles.right} ${styles.fadeUp}`} ref={ref} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className={styles.timelineCard}>
                  <span className={styles.timelineYear}>{t.year}</span>
                  <h3>{t.title}</h3>
                  <p>{t.desc}</p>
                </div>
                <div className={styles.timelineDot} />
              </div>
            ))}
            <div className={styles.timelineLine} />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.centered}`} ref={ref}>
            <span className={`${styles.badge} ${styles.badgeSage}`}>Core Beliefs</span>
            <div className={`${styles.divider} ${styles.dividerCenter}`} />
            <h2>What I Stand For</h2>
            <p>These values guide every programme, every session, and every interaction.</p>
          </div>
          <div className={styles.valuesGrid}>
            {values.map((v, i) => (
              <div key={v.title} className={`${styles.valueCard} ${styles.fadeUp}`} ref={ref} style={{ transitionDelay: `${i * 0.08}s` }}>
                <span className={styles.valueIcon}>{v.icon}</span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaBox} ref={ref}>
            <h2>Ready to Write Your Own <em>Success Story?</em></h2>
            <p>Let's have a conversation about your goals and how I can help you get there.</p>
            <Link to="/services" className={styles.btnGold}>Book a Free Discovery Call ✦</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
