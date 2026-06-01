import { useEffect } from 'react';
import styles from './Testimonials.module.css';

const textTestimonials = [
  { name: 'Priya Sharma', location: 'Delhi, India', initial: 'P', quote: '"Working with Tusar completely changed my relationship with food and my body. I lost 18kg in 5 months — but more importantly, I finally feel free."' },
  { name: 'Rohan Mehta', location: 'Mumbai, India', initial: 'R', quote: '"Tusar\'s holistic approach is unlike anything I\'ve tried. She doesn\'t just give you a plan — she helps you understand WHY. Game changer!"' },
  { name: 'Aisha Patel', location: 'Dubai, UAE', initial: 'A', quote: '"After years of yo-yo dieting, Tusar helped me build a sustainable lifestyle. My energy is through the roof and I actually enjoy working out now!"' },
  { name: 'Sarah Johnson', location: 'London, UK', initial: 'S', quote: '"The mindfulness sessions alone were worth it. My anxiety has reduced dramatically and I feel more present in my daily life. Thank you, Tusar!"' },
  { name: 'Kavya Reddy', location: 'Bangalore, India', initial: 'K', quote: '"I was sceptical about online coaching but Tusar\'s personalised approach made it feel like she was right there with me every step of the way."' },
  { name: 'Vikram Singh', location: 'Toronto, Canada', initial: 'V', quote: '"Lost 12kg and built real muscle. But the best transformation is mental — I have a healthy mindset about food and fitness that will last a lifetime."' },
];

export default function Testimonials() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      {/* Page Hero */}
      <section className={styles.pageHero}>
        <div className={styles.heroBg} />
        <div className={styles.container}>
          <span className={styles.badge}>Real Stories</span>
          <h1>Client <em>Transformations</em></h1>
          <p>These are real results from real people who committed to their wellness journey.</p>
        </div>
      </section>

      {/* WhatsApp Screenshots Gallery */}
      <section className={styles.sectionPad} style={{ background: 'var(--bg-light)' }}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.centered}`}>
            <h2>Client <em>Love</em></h2>
            <div className={`${styles.divider} ${styles.dividerCenter}`} />
            <p>Everyday messages and progress updates from the community.</p>
          </div>
          <div className={styles.galleryGrid}>
            {[1, 2, 3, 4, 5, 6, 7].map((num) => (
              <div key={num} className={styles.galleryItem}>
                <img src={`/images/testo/result${num}.jpg`} alt={`Client Result ${num}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Text Testimonials */}
      <section className={styles.sectionPad}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.centered}`}>
            <h2>What They <em>Say</em></h2>
            <div className={`${styles.divider} ${styles.dividerCenter}`} />
          </div>
          <div className={styles.testiGrid}>
            {textTestimonials.map((t) => (
              <div key={t.name} className={styles.testiCard}>
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
    </main>
  );
}
