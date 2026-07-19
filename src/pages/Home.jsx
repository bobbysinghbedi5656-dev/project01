import React from 'react';
import { Link } from 'react-router-dom';
import { HardHat, Award, ShieldCheck, Flame, ArrowRight, Briefcase, Users, FileText } from 'lucide-react';
import '../styles/pages.css';

export default function Home() {
  const stats = [
    { number: '35', title: 'Years of Excellence' },
    { number: '240', title: 'Completed Projects' },
    { number: '1500', title: 'Skilled Workforce' },
    { number: '100', title: 'Safety Record (%)' }
  ];

  const services = [
    {
      icon: <HardHat size={28} />,
      title: 'Infrastructure & Highways',
      desc: 'Building national expressways, flyovers, and elevated corridors using modern prefabricated concrete and pre-stressed steel.'
    },
    {
      icon: <ShieldCheck size={28} />,
      title: 'Industrial Complexes',
      desc: 'Delivering robust heavy machinery plants, storage yards, and refinery civil works with precise structural integrity.'
    },
    {
      icon: <Award size={28} />,
      title: 'Commercial Infrastructure',
      desc: 'Developing state-of-the-art corporate headquarters, IT parks, and tech hubs that redefine urban workspaces.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <span className="hero-subtitle">Elevating Infrastructure Since 1991</span>
              <h1 className="hero-title">
                BUILDING THE ONES <span>THAT BUILD THE NATION</span>
              </h1>
              <div className="hero-accent-line"></div>
              <p className="hero-desc">
                We build strong and reliable structures with skill, care, and integrity, ensuring quality you can trust for years to come.
              </p>
              <div className="hero-ctas">
                <Link to="/projects" className="btn btn-primary">
                  Explore Projects <ArrowRight size={16} />
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* Showcase Visual Element */}
            <div className="hero-image-showcase">
              <div className="hero-img-box hero-img-box-1">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=500&q=80"
                  alt="GCC Construction Site"
                />
              </div>
              <div className="hero-img-box hero-img-box-2">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=500&q=80"
                  alt="GCC Industrial Plant"
                />
              </div>
              <div className="hero-img-box-badge">
                <div className="hero-badge-number">35+</div>
                <div className="hero-badge-text">Years Building India</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section section-dark">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, idx) => (
              <div key={idx} className="stat-card" style={{ backgroundColor: 'var(--color-bg-dark-soft)', borderBottomColor: 'var(--color-border-dark)' }}>
                <div className="stat-number" style={{ color: 'white' }}>{stat.number}</div>
                <div className="stat-title" style={{ color: 'var(--color-text-muted-light)' }}>{stat.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Our Core Expertise</h2>
            <div className="accent-line"></div>
            <p>
              From complex transport networks to large-scale industrial sites, we combine engineering innovation with safety to execute projects on time.
            </p>
          </div>

          <div className="home-services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon-box">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <Link to="/projects" className="service-link">
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Pillars Section */}
      <section className="section" style={{ backgroundColor: 'white' }}>
        <div className="container">
          <div className="hero-grid" style={{ gridTemplateColumns: '0.9fr 1.1fr' }}>
            <div className="hero-image-showcase" style={{ height: '400px' }}>
              <div className="hero-img-box hero-img-box-1" style={{ gridColumn: '2 / 12', gridRow: '1 / 11' }}>
                <img
                  src="https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=500&q=80"
                  alt="GCC Quality Assurance"
                />
              </div>
            </div>
            <div className="hero-content">
              <span className="hero-subtitle">Our Corporate Philosophy</span>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: 'var(--spacing-md)' }}>Quality, Integrity, Skill & Care</h2>
              <div className="accent-line"></div>
              <p style={{ color: 'var(--color-text-muted-dark)', marginBottom: 'var(--spacing-lg)' }}>
                Since our inception, Goel Construction Company (GCC) has stood for uncompromising engineering quality. We approach each project not just as a builder, but as an infrastructure partner dedicated to creating assets that stand the test of time.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <div style={{ color: 'var(--color-primary)' }}><ShieldCheck size={20} /></div>
                  <div>
                    <h4 style={{ fontSize: '1rem' }}>ISO Certified</h4>
                    <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted-dark)' }}>Adhering to strict ISO 9001:2015 standards.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <div style={{ color: 'var(--color-primary)' }}><Users size={20} /></div>
                  <div>
                    <h4 style={{ fontSize: '1rem' }}>Eco Friendly</h4>
                    <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted-dark)' }}>Executing LEED green construction designs.</p>
                  </div>
                </div>
              </div>
              <Link to="/company" className="btn btn-secondary">
                Our History & Vision
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section section-dark" style={{ textAlign: 'center', position: 'relative' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-sm)' }}>Ready to Build the Future?</h2>
          <p style={{ color: 'var(--color-text-muted-light)', maxWidth: '600px', margin: '0 auto var(--spacing-xl) auto', fontSize: '1.1rem' }}>
            Collaborate with GCC on your next infrastructure project. Let's create strong, reliable landmarks together.
          </p>
          <Link to="/contact" className="btn btn-primary" style={{ boxShadow: 'none' }}>
            Work With Us
          </Link>
        </div>
      </section>
    </div>
  );
}
