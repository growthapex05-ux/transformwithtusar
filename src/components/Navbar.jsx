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
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''} ${!scrolled && location.pathname === '/' ? styles.lightText : ''}`}>
        <div className={styles.container}>
          <Link to="/" className={styles.logo}>
            <img src={(scrolled || location.pathname !== '/') ? "/dark_logo.png" : "/logo.png"} alt="TransformWithTusar Logo" className={styles.logoImage} />
          </Link>

          <ul className={styles.navLinks}>
            <li><NavLink to="/" end className={({ isActive }) => isActive ? styles.active : ''}>Home</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? styles.active : ''}>About</NavLink></li>
            <li><NavLink to="/services" className={({ isActive }) => isActive ? styles.active : ''}>Services</NavLink></li>
            <li><NavLink to="/blog" className={({ isActive }) => isActive ? styles.active : ''}>Blog</NavLink></li>
            <li><NavLink to="/testimonials" className={({ isActive }) => isActive ? styles.active : ''}>Testimonials</NavLink></li>
          </ul>

          <Link to="/book" className={styles.cta}>Book a Session</Link>

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
        <Link to="/testimonials" onClick={() => setMobileOpen(false)}>Testimonials</Link>
        <Link to="/book" className={styles.mobileCta} onClick={() => setMobileOpen(false)}>Book a Session ✦</Link>
      </div>
    </>
  );
}
