import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email && email.includes('@')) {
      alert('🌿 Thank you for subscribing! Your first wellness tip arrives soon.');
      setEmail('');
    } else {
      alert('Please enter a valid email address.');
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>

          {/* Brand */}
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoMain}>TransformWithTusar</span>
              <span className={styles.logoSub}>Holistic Wellness Coaching</span>
            </div>
            <p>Empowering individuals to transform their health and reclaim their vitality through holistic, personalised wellness coaching.</p>
            <div className={styles.social}>
              <a href="#" aria-label="Instagram">📸</a>
              <a href="#" aria-label="YouTube">▶</a>
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="WhatsApp">💬</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4>Quick Links</h4>
            <ul className={styles.links}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Tusar</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><a href="/#testimonials">Testimonials</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4>Legal</h4>
            <ul className={styles.links}>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/privacy#terms">Terms of Service</Link></li>
              <li><Link to="/privacy#disclaimer">Disclaimer</Link></li>
              <li><Link to="/privacy#refund">Refund Policy</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className={styles.newsletter}>
            <h4>Weekly Wellness Tips</h4>
            <p>Join 2,000+ subscribers for free weekly wellness insights.</p>
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <button onClick={handleSubscribe}>Subscribe ✦</button>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© 2026 TransformWithTusar. All rights reserved.</span>
          <div className={styles.bottomLinks}>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/privacy#terms">Terms</Link>
            <Link to="/privacy#disclaimer">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
