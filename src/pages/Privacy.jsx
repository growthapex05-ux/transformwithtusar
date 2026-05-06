import styles from './Privacy.module.css';

const sections = [
  {
    id: 'privacy', title: '1. Privacy Policy', icon: '🔐',
    content: [
      { heading: 'Information We Collect', text: 'We collect information you voluntarily provide when booking sessions, subscribing to our newsletter, or contacting us. This includes your name, email address, phone number, and health goals. We may also collect non-personal information such as browser type, device information, and website usage data through cookies and analytics tools.' },
      { heading: 'How We Use Your Information', text: 'Your information is used to: provide and personalise our coaching services; communicate with you about appointments, programmes, and updates; send you wellness tips and resources (if subscribed); improve our website and services; and comply with legal obligations. We do not sell, rent, or share your personal information with third parties for marketing purposes.' },
      { heading: 'Data Security', text: 'We implement industry-standard security measures to protect your personal information. Your data is stored securely and access is restricted to authorised personnel only. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.' },
      { heading: 'Cookies', text: 'Our website uses cookies to improve your browsing experience, analyse website traffic, and personalise content. You can disable cookies through your browser settings, though this may affect website functionality.' },
      { heading: 'Your Rights', text: 'You have the right to access, correct, or delete your personal data at any time. To exercise these rights, please contact us at privacy@transformwithtusar.com.' },
    ],
  },
  {
    id: 'terms', title: '2. Terms of Service', icon: '📋',
    content: [
      { heading: 'Acceptance of Terms', text: 'By accessing or using TransformWithTusar\'s website and services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use our services.' },
      { heading: 'Services', text: 'TransformWithTusar provides holistic wellness coaching services including nutrition coaching, fitness programming, mindfulness training, and personalised wellness planning. All services are provided for informational and educational purposes and do not constitute medical advice.' },
      { heading: 'Client Responsibilities', text: 'You are responsible for: providing accurate health information; consulting with healthcare professionals before making significant health changes; following the programme as advised; and communicating openly with your coach about your progress and any concerns.' },
      { heading: 'Payment Terms', text: 'All fees are payable in advance unless otherwise agreed. Payment plans may be available upon request. Prices are subject to change with 30 days notice to existing clients.' },
      { heading: 'Intellectual Property', text: 'All content on this website, including text, images, videos, and programme materials, is the intellectual property of TransformWithTusar and is protected by copyright law. You may not reproduce, distribute, or use our content without prior written permission.' },
    ],
  },
  {
    id: 'disclaimer', title: '3. Health Disclaimer', icon: '⚕️',
    content: [
      { heading: 'Not Medical Advice', text: 'The information provided by TransformWithTusar is for educational and informational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.' },
      { heading: 'No Guarantees', text: 'Results vary from person to person. While we share success stories and testimonials, these represent individual experiences and we make no guarantee of specific results. Your health journey is unique and outcomes depend on many factors including genetics, adherence to the programme, and existing health conditions.' },
      { heading: 'Pre-existing Conditions', text: 'If you have any pre-existing medical conditions, injuries, or are pregnant, please consult your healthcare provider before starting any new nutrition or fitness programme. Our coaches are not medical professionals and cannot diagnose or treat medical conditions.' },
      { heading: 'Limitation of Liability', text: 'TransformWithTusar shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use of our services or information. Your use of our services is entirely at your own risk.' },
    ],
  },
  {
    id: 'refund', title: '4. Refund Policy', icon: '💰',
    content: [
      { heading: '7-Day Money-Back Guarantee', text: 'We stand behind the quality of our services. If you are not satisfied with your coaching programme within the first 7 days of starting, we will provide a full refund, no questions asked.' },
      { heading: 'Session Cancellation', text: 'Individual sessions may be rescheduled with at least 24 hours notice. Late cancellations (less than 24 hours) may be charged at 50% of the session fee. No-shows are charged at the full session rate.' },
      { heading: 'Refund Process', text: 'Refund requests must be submitted in writing to refunds@transformwithtusar.com. Approved refunds will be processed within 5-7 business days to the original payment method.' },
      { heading: 'Non-Refundable Items', text: 'Digital downloads, recorded sessions, and programme materials that have been accessed are non-refundable. Customised meal plans and workout programmes that have been delivered are non-refundable.' },
    ],
  },
];

export default function Privacy() {
  return (
    <main>
      {/* Page Hero */}
      <section className={styles.pageHero}>
        <div className={styles.heroBg} />
        <div className={styles.container}>
          <span className={styles.badge}>Legal</span>
          <h1>Policies & <em>Terms</em></h1>
          <p>Transparency is at the heart of everything we do. Please read these policies carefully.</p>
          <p className={styles.lastUpdated}>Last updated: May 6, 2026</p>
        </div>
      </section>

      <section className={styles.pageBody}>
        <div className={styles.container}>
          <div className={styles.layout}>

            {/* TOC Sidebar */}
            <aside className={styles.toc}>
              <div className={styles.tocBox}>
                <h4>Contents</h4>
                <nav>
                  {sections.map(s => (
                    <a key={s.id} href={`#${s.id}`} className={styles.tocLink}>
                      {s.icon} {s.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <div className={styles.content}>
              {sections.map(section => (
                <section key={section.id} id={section.id} className={styles.policySection}>
                  <div className={styles.sectionHeader}>
                    <span className={styles.sectionIcon}>{section.icon}</span>
                    <h2>{section.title}</h2>
                  </div>
                  {section.content.map(item => (
                    <div key={item.heading} className={styles.policyItem}>
                      <h3>{item.heading}</h3>
                      <p>{item.text}</p>
                    </div>
                  ))}
                </section>
              ))}

              {/* Contact Box */}
              <div className={styles.contactBox}>
                <h3>Questions About Our Policies?</h3>
                <p>If you have any questions about these policies or how we handle your information, please don't hesitate to reach out.</p>
                <div className={styles.contactMethods}>
                  <div className={styles.contactMethod}><span>📧</span><div><strong>Email</strong><p>privacy@transformwithtusar.com</p></div></div>
                  <div className={styles.contactMethod}><span>💬</span><div><strong>WhatsApp</strong><p>+91 98765 43210</p></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
