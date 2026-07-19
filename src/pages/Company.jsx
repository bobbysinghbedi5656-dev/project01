import React from 'react';
import { Target, Eye, Shield, Award, CheckCircle } from 'lucide-react';
import '../styles/pages.css';

export default function Company() {
  const values = [
    {
      icon: <Shield size={36} />,
      title: 'Integrity First',
      desc: 'We uphold the highest ethical standards, delivering exactly what we promise with absolute transparency.'
    },
    {
      icon: <Award size={36} />,
      title: 'Engineering Skill',
      desc: 'Our team comprises top tier civil engineers, planners, and architects with world class expertise.'
    },
    {
      icon: <Target size={36} />,
      title: 'Uncompromised Quality',
      desc: 'We never cut corners, utilizing premium materials and double-checking safety metrics at every turn.'
    }
  ];

  const leaders = [
    {
      name: 'Shri S. P. Goel',
      role: 'Founder & Chairman Emeritus',
      bio: 'Visionary entrepreneur with over 45 years in corporate management, pioneering the firm\'s expansion across highway contracts.'
    },
    {
      name: 'Rajesh Goel',
      role: 'Managing Director',
      bio: 'Leading structural engineer with a passion for modern steel bridges and eco-sustainable building formats.'
    },
    {
      name: 'Amit Goel',
      role: 'Director of Operations',
      bio: 'Oversees on-site resource management, project planning schedules, and strict adherence to safety benchmarks.'
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <header className="page-header">
        <div className="container">
          <h1>Our Company</h1>
          <p>Erstwhile known as Goel Construction Company Private Limited. Elevating infrastructure since 1991.</p>
        </div>
      </header>

      {/* History & Timeline */}
      <section className="section">
        <div className="container">
          <div className="history-section">
            <div className="hero-content">
              <span className="hero-subtitle">Our Legacy</span>
              <h2>Building Value for 3 Decades</h2>
              <div className="accent-line"></div>
              <p style={{ color: 'var(--color-text-muted-dark)', marginBottom: 'var(--spacing-md)' }}>
                Founded in 1991 by Shri S. P. Goel, Goel Construction Company (GCC) began as a regional contractor executing municipal drainage systems and local roads. Through persistent dedication to high-quality craftsmanship, the firm earned state-level government registrations.
              </p>
              <p style={{ color: 'var(--color-text-muted-dark)', marginBottom: 'var(--spacing-lg)' }}>
                Over the decades, we restructured into a Private Limited entity and diversified our engineering expertise. Today, we handle major national highway projects, large commercial office developments, and specialized industrial structures, expanding our footprint across Northern and Western India.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <CheckCircle size={18} style={{ color: 'var(--color-primary)' }} />
                  <span style={{ fontWeight: 600 }}>1991: Founded as Goel Construction Company</span>
                </div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <CheckCircle size={18} style={{ color: 'var(--color-primary)' }} />
                  <span style={{ fontWeight: 600 }}>2004: Restructured into Private Limited Corporation</span>
                </div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <CheckCircle size={18} style={{ color: 'var(--color-primary)' }} />
                  <span style={{ fontWeight: 600 }}>2018: Awarded National Expressway EPC Contracts</span>
                </div>
              </div>
            </div>

            <div className="history-img-wrapper">
              <img
                src="https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=600&q=80"
                alt="Construction Planning"
                className="history-img"
              />
              <div className="history-floating-quote">
                "We don't just pour concrete; we build assets that elevate lives and sustain progress."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section section-dark">
        <div className="container">
          <div className="history-section" style={{ gap: 'var(--spacing-xxl)' }}>
            <div style={{ backgroundColor: 'var(--color-bg-dark-soft)', padding: '2.5rem', borderRadius: 'var(--radius-md)', borderTop: '3px solid var(--color-primary)' }}>
              <div style={{ display: 'inline-flex', alignSelf: 'flex-start', color: 'var(--color-primary)', marginBottom: '1rem' }}><Target size={36} /></div>
              <h3 style={{ fontSize: '1.6rem', color: 'white', marginBottom: '1rem' }}>Our Mission</h3>
              <p style={{ color: 'var(--color-text-muted-light)', lineHeight: '1.7' }}>
                To design and build high-quality infrastructure assets that promote economic growth and improve community mobility, ensuring we set engineering safety benchmarks with every milestone.
              </p>
            </div>
            <div style={{ backgroundColor: 'var(--color-bg-dark-soft)', padding: '2.5rem', borderRadius: 'var(--radius-md)', borderTop: '3px solid var(--color-primary)' }}>
              <div style={{ display: 'inline-flex', alignSelf: 'flex-start', color: 'var(--color-primary)', marginBottom: '1rem' }}><Eye size={36} /></div>
              <h3 style={{ fontSize: '1.6rem', color: 'white', marginBottom: '1rem' }}>Our Vision</h3>
              <p style={{ color: 'var(--color-text-muted-light)', lineHeight: '1.7' }}>
                To become India's most trusted, sustainable, and innovative engineering partner, renowned for constructing complex infrastructural wonders with maximum care and integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Our Core Values</h2>
            <div className="accent-line"></div>
            <p>Our work values guide how we plan projects, protect our site crews, and interact with stakeholders.</p>
          </div>

          <div className="values-grid">
            {values.map((val, idx) => (
              <div key={idx} className="value-card">
                <div className="value-icon">{val.icon}</div>
                <h3>{val.title}</h3>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section" style={{ backgroundColor: 'white' }}>
        <div className="container">
          <div className="section-header">
            <h2>Board of Directors</h2>
            <div className="accent-line"></div>
            <p>Meet the dynamic leaders driving GCC's structural engineering excellence and corporate growth.</p>
          </div>

          <div className="leadership-grid">
            {leaders.map((leader, idx) => (
              <div key={idx} className="leader-card">
                <div className="leader-image">
                  <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#eaeaea', color: '#999', fontSize: '3rem', fontFamily: 'var(--font-heading)', fontWeight: 'bold' }}>
                    {leader.name.split(' ').filter(n => n !== 'Shri' && n !== 'S.' && n !== 'P.').map(n => n[0]).join('')}
                  </div>
                </div>
                <div className="leader-info">
                  <div className="leader-name">{leader.name}</div>
                  <div className="leader-role">{leader.role}</div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted-dark)', marginTop: '1rem', lineHeight: '1.5' }}>
                    {leader.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
