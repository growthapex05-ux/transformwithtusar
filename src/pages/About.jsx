import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './About.module.css';



import { FaWhatsapp } from 'react-icons/fa';

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
          <span className={styles.badge}>About Tushar</span>
          <h1>A Passion for <em>Transforming Lives</em></h1>
          <p>Meet the certified wellness coach on a mission to help you rediscover your healthiest, happiest self.</p>
        </div>
      </section>

      {/* Story Section */}
      <section className={styles.storySection}>
        <div className={styles.container}>
          <div className={styles.storyGrid}>
            <div className={`${styles.imgCol} ${styles.fadeUp}`} ref={ref}>
              <div className={styles.imgWrap}>
                <img src="/images/hero.png" alt="Tushar Ranjan Sahoo" className={styles.mainImg} />
                <div className={styles.imgAccent} />
              </div>
            </div>
            <div className={`${styles.textCol} ${styles.fadeUp}`} ref={ref}>
              <span className={`${styles.badge} ${styles.badgeSage}`}>My Story</span>
              <div className={styles.divider} />
              <h2>I'm Tushar Ranjan Sahoo<br /><em>Senior Wellness Coach ❤️</em></h2>
              <p>I share my journey for one reason — to inspire you that an ordinary person can build an extraordinary life. I believe in good energy, hard work, and lifting up the people around me. I hope my story gives you the one thing I once needed most: belief. Let's connect.</p>
              
              <h3 style={{ marginTop: '24px', marginBottom: '12px', fontSize: '1.2rem', color: '#1e2a1e' }}>Who I Am</h3>
              <p>I come from an ordinary middle-class family. For years, I served in the Indian Army — proud work, but a life of around ₹30,000 a month, with very little time and almost no freedom. Like most families, we kept going, but something was always missing.</p>
              
              <p>The real wake-up call was my wife, Pinky. She had gained a lot of weight, and it was affecting her confidence and energy. We tried everything we knew — doctors, diets, exercise — but nothing really stuck. It was frustrating to watch someone you love struggle and feel helpless to fix it.</p>
              
              <p>Then one day, I attended a simple nutrition class. What I learned there changed our lives. I decided to start with myself first — and within weeks, I felt a level of energy I hadn't felt in years. Then Pinky began her journey, and the results spoke for themselves: she lost 10 kg in just 2 months.</p>
              
              <p>That was the moment everything clicked. If it could transform my own family, it could transform anyone's. I started with myself, then my whole family — and as we changed, people around us began to notice. They started asking, "What are you doing?" So I began sharing what worked. That sharing slowly became my mission, and then my business.</p>
              
              <p>Today, my life looks nothing like before. I have time freedom — real time with my family, including vacations abroad we once only dreamed of. I have income freedom. My children study in one of the best schools. And most importantly, my health and my family's wellbeing keep getting stronger every day.</p>
              
              <p>I love what I do — because it's not just a business, it's who I am.</p>
              
              <div style={{ marginTop: '32px' }}>
                <p style={{ fontWeight: '600', color: '#1e2a1e', marginBottom: '16px' }}>Let's start your transformation. Message me on WhatsApp to begin.</p>
                <a href="https://wa.me/918280461526" target="_blank" rel="noopener noreferrer" className={styles.btnPrimary} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  <FaWhatsapp size={20} /> WhatsApp Me
                </a>
              </div>

              <div style={{ marginTop: '32px', fontSize: '0.8rem', color: '#6b7280', lineHeight: '1.5', borderTop: '1px solid #e8e0d5', paddingTop: '16px' }}>
                <strong>Disclaimer:</strong> Results vary from person to person and are not typical. Income and lifestyle depend on individual effort and are not guaranteed. This content is for wellness and informational purposes only and is not a substitute for professional medical advice.
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaBox} ref={ref}>
            <h2>Ready to Write Your Own <em>Success Story?</em></h2>
            <p>Let's have a conversation about your goals and how I can help you get there.</p>
            <Link to="/book" className={styles.btnGold}>Book a Free Discovery Call ✦</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
