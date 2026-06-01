import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaBalanceScale, FaSeedling, FaHeartbeat, FaBolt, FaStar, FaHandsHelping } from 'react-icons/fa';
import styles from './Services.module.css';


export const programs = [
  {
    id: 'weight', icon: <FaBalanceScale />, title: 'Weight Loss & Gain', subtitle: 'Transform Your Body',
    desc: 'Lose fat or gain healthy weight in 90 days or less — with a personalized plan built for your body, not a generic diet.',
    benefits: ['Personalised meal plan', 'Goal-oriented strategy', 'Sustainable habits'],
    img: '/images/hero_wellness.png',
  },
  {
    id: 'pcos', icon: <FaSeedling />, title: 'PCOS & Hormonal Balance', subtitle: 'PCOS, Simplified',
    desc: 'Support your cycles, hormones, and energy naturally — with food-first nutrition designed for Indian women.',
    benefits: ['Hormone support', 'Food-first approach', 'Energy regulation'],
    img: '/images/blog_nutrition.png',
  },
  {
    id: 'diabetes', icon: <FaHeartbeat />, title: 'Diabetes-Friendly Nutrition', subtitle: 'Sugar-Smart Living',
    desc: 'Build simple everyday eating habits that support a healthy, active lifestyle — designed around real Indian routines.',
    benefits: ['Blood sugar management', 'Indian diet focused', 'Active lifestyle support'],
    img: '/images/blog_mindfulness.png',
  },
  {
    id: 'fitness', icon: <FaBolt />, title: 'Fitness & Energy', subtitle: 'Energy For Life',
    desc: 'Feel strong and energetic all day with nutrition that powers your workouts and your everyday hustle.',
    benefits: ['Workout nutrition', 'All-day energy', 'Strength building'],
    img: '/images/blog_fitness.png',
  },
  {
    id: 'skin', icon: <FaStar />, title: 'Skin, Beauty & Immunity', subtitle: 'Glow From Within',
    desc: 'Healthier skin, hair, and stronger immunity — powered by nutrition that works from the inside out.',
    benefits: ['Skin & hair health', 'Immunity boost', 'Internal nourishment'],
    img: '/images/hero_wellness.png',
  },
  {
    id: 'coaching', icon: <FaHandsHelping />, title: 'Personalized Coaching & Support', subtitle: 'Your Coach, Always',
    desc: 'A custom plan made just for you, plus regular check-ins and follow-up until you hit your goal.',
    benefits: ['Custom plan', 'Regular check-ins', 'Goal tracking'],
    img: '/images/blog_nutrition.png',
  },
];

export default function Services() {
  const refs = useRef([]);
  useEffect(() => {
    const obs = new IntersectionObserver(e => e.forEach(en => { if (en.isIntersecting) en.target.classList.add(styles.visible); }), { threshold: 0.08 });
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
          <span className={styles.badge}>Services & Programs</span>
          <h1>Find the Right <em>Programme</em> for You</h1>
          <p>From nutrition to mindfulness, every programme is designed to create real, lasting transformation in your life.</p>
        </div>
      </section>

      {/* Programs */}
      <section className={styles.programsSection}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.centered}`} ref={ref}>
            <span className={`${styles.badge} ${styles.badgeSage}`}>What I Offer</span>
            <div className={`${styles.divider} ${styles.dividerCenter}`} />
            <h2>Our Signature <em>Programmes</em></h2>
          </div>
          {programs.map((p, i) => (
            <div key={p.id} id={p.id} className={`${styles.programRow} ${i % 2 !== 0 ? styles.programRowReverse : ''} ${styles.fadeUp}`} ref={ref} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className={styles.programImg}>
                <img src={p.img} alt={p.title} />
              </div>
              <div className={styles.programText}>
                <span className={styles.programIcon}>{p.icon}</span>
                <h2>{p.title}</h2>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--sage)', marginBottom: '1rem', marginTop: '-0.5rem', fontWeight: '500' }}>{p.subtitle}</h3>
                <p className={styles.programDesc}>{p.desc}</p>
                <ul className={styles.benefitsList}>
                  {p.benefits.map(b => <li key={b}><span className={styles.bCheck}>✓</span>{b}</li>)}
                </ul>
                <Link to="/services#booking" className={styles.btnPrimary} style={{ marginTop: '28px', display: 'inline-flex' }}>Know More</Link>
              </div>
            </div>
          ))}
          <div className={styles.disclaimer} style={{ marginTop: '4rem', padding: '1.5rem', background: 'var(--bg-card)', borderRadius: '12px', textAlign: 'center', fontSize: '0.9rem', color: 'var(--text-muted)', border: '1px solid var(--border-light)' }}>
            <p><strong>Disclaimer:</strong> Nutrition and wellness guidance only. Not a substitute for professional medical advice — please consult your doctor for any medical condition.</p>
          </div>
        </div>
      </section>


      {/* FAQ */}
      <section className={styles.faqSection}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.centered}`} ref={ref}>
            <span className={`${styles.badge} ${styles.badgeSage}`}>Questions</span>
            <div className={`${styles.divider} ${styles.dividerCenter}`} />
            <h2>Frequently Asked <em>Questions</em></h2>
          </div>
          <div className={styles.faqGrid}>
            {[
              { q: 'How does online coaching work?', a: 'All sessions are conducted via video call (Zoom/Google Meet). You\'ll receive personalised plans, ongoing support via WhatsApp, and regular check-ins to track your progress.' },
              { q: 'How quickly will I see results?', a: 'Most clients notice meaningful changes within 2-4 weeks — more energy, better sleep, reduced cravings. Physical transformations typically become visible within 6-8 weeks of consistent effort.' },
              { q: 'Do I need any equipment?', a: 'No! We design programmes based on what you have available, whether that\'s a fully equipped gym or just a yoga mat at home.' },
              { q: 'Are the meal plans vegetarian/vegan friendly?', a: 'Absolutely. We create plans that respect your dietary preferences, cultural background, and any food allergies or intolerances.' },
              { q: 'What if I miss a session?', a: 'Life happens! Sessions can be rescheduled with 24 hours notice. We\'re flexible and understanding — your success is our priority.' },
              { q: 'Is there a refund policy?', a: 'We offer a full refund within 7 days of starting if you\'re not satisfied. Your wellness journey should feel safe and risk-free.' },
            ].map((faq, i) => (
              <div key={faq.q} className={`${styles.faqItem} ${styles.fadeUp}`} ref={ref} style={{ transitionDelay: `${i * 0.08}s` }}>
                <h4>Q: {faq.q}</h4>
                <p>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
