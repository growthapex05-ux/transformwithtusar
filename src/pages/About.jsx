import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './About.module.css';
import { FaWhatsapp, FaMedal, FaHeart, FaStar } from 'react-icons/fa';

export default function About() {
  const refs = useRef([]);
  useEffect(() => {
    const obs = new IntersectionObserver(e => e.forEach(en => { if (en.isIntersecting) en.target.classList.add(styles.visible); }), { threshold: 0.1 });
    refs.current.forEach(el => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);
  const ref = el => { if (el && !refs.current.includes(el)) refs.current.push(el); };

  return (
    <main className={styles.aboutPage}>
      {/* Page Hero Redesigned */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.container}>
          <div className={`${styles.heroContent} ${styles.fadeUp}`} ref={ref}>
            <span className={styles.heroBadge}>My Journey</span>
            <h1>A Passion for <em>Transforming Lives</em></h1>
            <p>Meet the certified wellness coach on a mission to help you rediscover your healthiest, happiest self through holistic nutrition and fitness.</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.container}>
          <div className={`${styles.statsGrid} ${styles.fadeUp}`} ref={ref}>
            <div className={styles.statItem}>
              <span className={styles.statNum}>20,000+</span>
              <span className={styles.statLabel}>Lives Transformed</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNum}>10+</span>
              <span className={styles.statLabel}>Years Experience</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNum}>98%</span>
              <span className={styles.statLabel}>Success Rate</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Story Grid Redesigned */}
      <section className={styles.storySection}>
        <div className={styles.container}>
          <div className={styles.storyGrid}>
            <div className={`${styles.imageWrapper} ${styles.fadeUp}`} ref={ref}>
              <div className={styles.imageBox}>
                <img src="/images/hero.png" alt="Tushar Ranjan Sahoo" className={styles.mainImage} />
                <div className={styles.floatingCard}>
                  <FaStar className={styles.goldStar} />
                  <span>Certified Senior Coach</span>
                </div>
                <div className={styles.imageBackdrop}></div>
              </div>
            </div>
            <div className={`${styles.textContent} ${styles.fadeUp}`} ref={ref}>
              <span className={styles.subtitle}>Who I Am</span>
              <h2>I'm Tushar Ranjan Sahoo</h2>
              <h3 className={styles.goldTitle}>Senior Wellness Coach</h3>
              
              <div className={styles.storyParagraphs}>
                <p>I come from an ordinary middle-class family. For years, I served in the Indian Army — proud work, but a life of around ₹30,000 a month, with very little time and almost no freedom.</p>
                <p>The real wake-up call was my wife, Pinky. She had gained a lot of weight, and it was affecting her confidence and energy. We tried everything we knew, but nothing really stuck. Then one day, I attended a simple nutrition class.</p>
                <p>What I learned changed our lives. I started with myself, then Pinky began her journey, losing 10 kg in just 2 months. That was the moment everything clicked. If it could transform my family, it could transform anyone's.</p>
                <p>Today, I have time and income freedom. But more importantly, my health and my family's wellbeing keep getting stronger. I love what I do — because it's not just a business, it's who I am.</p>
              </div>

              <div className={styles.ctaWrapper}>
                <p className={styles.ctaPrompt}>Let's start your transformation today.</p>
                <a href="https://wa.me/918280461526" target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>
                  <FaWhatsapp size={22} /> WhatsApp Me
                </a>
              </div>

              <div className={styles.disclaimer}>
                <strong>Disclaimer:</strong> Results vary from person to person. Income and lifestyle depend on individual effort. Content is for wellness purposes only.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className={styles.philosophySection}>
         <div className={styles.container}>
           <div className={styles.sectionHeader} ref={ref}>
             <span className={styles.subtitle}>My Approach</span>
             <h2>Core <em>Philosophy</em></h2>
             <div className={styles.dividerCenter} />
           </div>
           <div className={styles.philosophyGrid}>
             <div className={`${styles.philosophyCard} ${styles.fadeUp}`} ref={ref}>
               <div className={styles.iconBox}><FaMedal /></div>
               <h3>Evidence-Based</h3>
               <p>No fads, no extreme diets. Just proven nutritional science and sustainable habits that work in the real world.</p>
             </div>
             <div className={`${styles.philosophyCard} ${styles.fadeUp}`} ref={ref} style={{transitionDelay: '0.1s'}}>
               <div className={styles.iconBox}><FaHeart /></div>
               <h3>Holistic Care</h3>
               <p>We don't just look at what you eat. We look at how you sleep, move, and manage stress for total wellbeing.</p>
             </div>
             <div className={`${styles.philosophyCard} ${styles.fadeUp}`} ref={ref} style={{transitionDelay: '0.2s'}}>
               <div className={styles.iconBox}><FaStar /></div>
               <h3>Personalized</h3>
               <p>Your body is unique. Your lifestyle is unique. Your program should be uniquely designed for you.</p>
             </div>
           </div>
         </div>
      </section>

      {/* CTA */}
      <section className={styles.finalCta}>
        <div className={styles.container}>
          <div className={`${styles.ctaInner} ${styles.fadeUp}`} ref={ref}>
            <h2>Ready to Write Your Own <em>Success Story?</em></h2>
            <p>Let's have a conversation about your goals and how I can help you get there.</p>
            <Link to="/book" className={styles.btnGold}>Book a Free Discovery Call ✦</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
