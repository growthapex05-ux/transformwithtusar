import { useState, useEffect, useRef } from 'react';
import { FaWhatsapp, FaCalendarCheck, FaUserCircle } from 'react-icons/fa';
import styles from './Book.module.css';

export default function Book() {
  const [formData, setFormData] = useState({
    name: '',
    goal: '',
    time: ''
  });

  const refs = useRef([]);
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.opacity = 1;
          e.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });
    refs.current.forEach(el => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);
  const ref = el => { if (el && !refs.current.includes(el)) refs.current.push(el); };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBook = (e) => {
    e.preventDefault();
    if (!formData.name) {
      alert("Please enter your name.");
      return;
    }
    const message = `Hi Tusar! My name is ${formData.name}. I'm reaching out because my goal is: ${formData.goal || 'General Wellness'}. I'd prefer to have a session around ${formData.time || 'anytime'}. Let's connect!`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/918280461526?text=${encodedMessage}`, '_blank');
  };

  return (
    <main className={styles.bookMain}>
      <section className={styles.bookSection}>
        <div className={styles.container}>
          <div className={styles.bookInner}>
            
            <div className={styles.bookContent} ref={ref}>
              <span className={`${styles.badge} ${styles.badgeSage}`}>Let's Connect</span>
              <h1>Start Your <em>Transformation</em> Today</h1>
              <p>Taking the first step is always the hardest. Whether you want to lose weight, gain energy, or simply build a sustainable, healthy lifestyle — I'm here to guide you.</p>
              
              <div className={styles.features}>
                <div className={styles.feature}>
                  <div className={styles.featureIcon}><FaCalendarCheck /></div>
                  <div>
                    <strong>Flexible Scheduling</strong>
                    <p>We'll find a time that works perfectly for your busy routine.</p>
                  </div>
                </div>
                <div className={styles.feature}>
                  <div className={styles.featureIcon}><FaUserCircle /></div>
                  <div>
                    <strong>1-on-1 Attention</strong>
                    <p>Every session is completely dedicated to you and your unique goals.</p>
                  </div>
                </div>
              </div>

              <div className={styles.directContact}>
                <p>Need immediate assistance?</p>
                <a href="https://wa.me/918280461526" target="_blank" rel="noopener noreferrer" className={styles.btnOutline}>
                  <FaWhatsapp size={18} /> Message Directly
                </a>
              </div>
            </div>

            <div className={styles.bookFormCard} ref={ref}>
              <h3>Book a Free Consultation</h3>
              <p>Fill out the details below and we will connect on WhatsApp to confirm your slot.</p>
              
              <form onSubmit={handleBook} className={styles.form}>
                <div className={styles.inputGroup}>
                  <label htmlFor="name">Your Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="e.g. John Doe" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className={styles.inputGroup}>
                  <label htmlFor="goal">Your Main Goal</label>
                  <select id="goal" name="goal" value={formData.goal} onChange={handleChange}>
                    <option value="" disabled>Select a goal...</option>
                    <option value="Weight Loss">Weight Loss</option>
                    <option value="Energy & Vitality">Energy & Vitality</option>
                    <option value="Muscle Building">Muscle Building</option>
                    <option value="Stress & Mindfulness">Stress & Mindfulness</option>
                    <option value="General Health">General Health</option>
                  </select>
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="time">Preferred Time of Day</label>
                  <select id="time" name="time" value={formData.time} onChange={handleChange}>
                    <option value="" disabled>Select a time...</option>
                    <option value="Morning (8AM - 11AM)">Morning (8AM - 11AM)</option>
                    <option value="Afternoon (12PM - 4PM)">Afternoon (12PM - 4PM)</option>
                    <option value="Evening (5PM - 8PM)">Evening (5PM - 8PM)</option>
                  </select>
                </div>

                <button type="submit" className={styles.submitBtn}>
                  Request Session via WhatsApp
                </button>
                <span className={styles.secureText}>🔒 No payment required for the initial consultation.</span>
              </form>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
