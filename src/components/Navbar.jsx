import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.container}>
          <Link to="/" className={styles.logo}>
            <span className={styles.logoMain}>TransformWithTusar</span>
            <span className={styles.logoSub}>Holistic Wellness Coaching</span>
          </Link>

          <ul className={styles.navLinks}>
            <li><NavLink to="/" end className={({ isActive }) => isActive ? styles.active : ''}>Home</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? styles.active : ''}>About</NavLink></li>
            <li><NavLink to="/services" className={({ isActive }) => isActive ? styles.active : ''}>Services</NavLink></li>
            <li><NavLink to="/blog" className={({ isActive }) => isActive ? styles.active : ''}>Blog</NavLink></li>
            <li><a href="/#testimonials">Testimonials</a></li>
          </ul>

          <Link to="/services" className={styles.cta}>Book a Session</Link>

          <button className={styles.hamburger} onClick={() => setMobileOpen(true)} aria-label="Open menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      <div className={`${styles.mobileNav} ${mobileOpen ? styles.mobileOpen : ''}`}>
        <button className={styles.closeBtn} onClick={() => setMobileOpen(false)}>✕</button>
        <Link to="/" onClick={() => setMobileOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setMobileOpen(false)}>About</Link>
        <Link to="/services" onClick={() => setMobileOpen(false)}>Services</Link>
        <Link to="/blog" onClick={() => setMobileOpen(false)}>Blog</Link>
        <a href="/#testimonials" onClick={() => setMobileOpen(false)}>Testimonials</a>
        <Link to="/services" className={styles.mobileCta} onClick={() => setMobileOpen(false)}>Book a Session ✦</Link>
      </div>
    </>
  );
}
