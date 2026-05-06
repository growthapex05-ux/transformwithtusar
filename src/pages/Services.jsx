import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './Services.module.css';

const plans = [
  {
    name: 'Spark', price: '₹4,999', period: '/month', tag: null,
    desc: 'Perfect to get started with your wellness journey.',
    features: ['2 x 1-on-1 coaching sessions', 'Personalised meal plan', 'Grocery list', 'Email support', 'Access to resource library'],
    cta: 'Get Started',
  },
  {
    name: 'Transform', price: '₹8,999', period: '/month', tag: 'Most Popular',
    desc: 'The full experience — everything you need to truly transform.',
    features: ['4 x 1-on-1 coaching sessions', 'Custom nutrition plan', 'Custom workout routine', '24/7 WhatsApp support', 'Weekly check-ins', 'Grocery & snack guide', 'Progress tracking dashboard'],
    cta: 'Start Transforming',
  },
  {
    name: 'Elite', price: '₹14,999', period: '/month', tag: null,
    desc: 'For those who want an all-encompassing premium experience.',
    features: ['8 x 1-on-1 sessions (bi-weekly)', 'Full wellness assessment', 'Advanced nutrition coaching', 'Custom yoga & meditation plan', '24/7 priority support', 'Monthly body composition review', 'Unlimited plan adjustments', 'Supplement guidance'],
    cta: 'Go Elite',
  },
];

const programs = [
  {
    id: 'nutrition', icon: '🥗', title: 'Nutrition Coaching',
    desc: 'Science-backed, culturally sensitive nutrition coaching that goes beyond "eat less, move more." We build a sustainable relationship with food that nourishes and delights you.',
    benefits: ['Personalised macro & calorie targets', 'Culturally adapted meal plans', 'Mindful eating strategies', 'Supplement guidance', 'Grocery lists & snack ideas', 'Dining out strategies'],
    img: '/images/blog_nutrition.png',
  },
  {
    id: 'coaching', icon: '🌟', title: '1-on-1 Wellness Coaching',
    desc: 'The full TransformWithTusar experience. Deep, personalised coaching that addresses every dimension of your health — physical, mental, emotional and spiritual.',
    benefits: ['Comprehensive wellness assessment', 'Goal setting & roadmapping', 'Weekly accountability sessions', 'Mindset & habit coaching', 'Lifestyle optimisation', 'Sleep & stress management'],
    img: '/images/hero_wellness.png',
  },
  {
    id: 'mindfulness', icon: '🧘', title: 'Mindfulness & Movement',
    desc: 'Yoga, breathwork, and meditation designed specifically for your lifestyle and needs. Build a sustainable mind-body practice that reduces stress and cultivates inner peace.',
    benefits: ['Custom yoga sequences', 'Daily breathwork practices', 'Guided meditation sessions', 'Stress reduction techniques', 'Sleep optimisation rituals', 'Mind-body journaling prompts'],
    img: '/images/blog_mindfulness.png',
  },
  {
    id: 'fitness', icon: '💪', title: 'Fitness & Body Transformation',
    desc: 'No cookie-cutter plans here. Your workout programme is built specifically for your body, goals, and schedule — whether you\'re at the gym or at home.',
    benefits: ['Full body composition assessment', 'Custom training programme', 'Home & gym workout options', 'Technique guidance & videos', 'Progressive overload planning', 'Recovery & mobility protocols'],
    img: '/images/blog_fitness.png',
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
                <p className={styles.programDesc}>{p.desc}</p>
                <ul className={styles.benefitsList}>
                  {p.benefits.map(b => <li key={b}><span className={styles.bCheck}>✓</span>{b}</li>)}
                </ul>
                <Link to="/services#booking" className={styles.btnPrimary} style={{ marginTop: '28px', display: 'inline-flex' }}>Book This Programme</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className={styles.pricingSection} id="booking">
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.centered}`} ref={ref}>
            <span className={`${styles.badge} ${styles.badgeGold}`}>Pricing Plans</span>
            <div className={`${styles.divider} ${styles.dividerCenter}`} />
            <h2>Simple, Transparent <em>Pricing</em></h2>
            <p>No hidden fees. Choose the plan that fits your goals and budget. All plans include a free 30-min discovery call.</p>
          </div>
          <div className={styles.plansGrid}>
            {plans.map((plan, i) => (
              <div key={plan.name} className={`${styles.planCard} ${plan.tag ? styles.planFeatured : ''} ${styles.fadeUp}`} ref={ref} style={{ transitionDelay: `${i * 0.12}s` }}>
                {plan.tag && <div className={styles.planTag}>{plan.tag}</div>}
                <h3 className={styles.planName}>{plan.name}</h3>
                <div className={styles.planPrice}>
                  <span className={styles.priceNum}>{plan.price}</span>
                  <span className={styles.pricePer}>{plan.period}</span>
                </div>
                <p className={styles.planDesc}>{plan.desc}</p>
                <ul className={styles.planFeatures}>
                  {plan.features.map(f => <li key={f}><span>✓</span>{f}</li>)}
                </ul>
                <button className={plan.tag ? styles.btnWhite : styles.btnPrimary}>{plan.cta}</button>
              </div>
            ))}
          </div>
          <p className={styles.pricingNote}>💬 Not sure which plan is right for you? <Link to="/services#booking">Book a free discovery call</Link> and we'll figure it out together.</p>
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
