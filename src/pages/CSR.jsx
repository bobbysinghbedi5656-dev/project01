import React from 'react';
import { ShieldCheck, Trees, GraduationCap, Sun } from 'lucide-react';
import '../styles/pages.css';

export default function CSR() {
  const initiatives = [
    {
      icon: <ShieldCheck size={32} />,
      tag: 'Health & Safety',
      title: 'Target Zero Incident Protocol',
      desc: 'Our on-site crews undergo rigorous safety drills, machinery checkouts, and first aid training. We have maintained a zero fatality record across all major expressway contracts for 5 consecutive years.',
      img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=500&q=80'
    },
    {
      icon: <Trees size={32} />,
      tag: 'Sustainability',
      title: 'Low Carbon Concrete & Flyash Mix',
      desc: 'GCC integrates recycled flyash into our precast structure mixers, reducing overall cement reliance by 25% and preventing local industrial slag pileups in thermal plant proximities.',
      img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=500&q=80'
    },
    {
      icon: <GraduationCap size={32} />,
      tag: 'Community',
      title: 'Primary School Sponsorship Program',
      desc: 'Through our rural site support funds, we sponsor textbooks, desks, and solar lighting for primary schools situated in the villages surrounding our major national corridor sectors.',
      img: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=500&q=80'
    },
    {
      icon: <Sun size={32} />,
      tag: 'Clean Energy',
      title: 'Solar Driven Precast Yards',
      desc: 'Our central manufacturing factories in Noida and Vadodara operate 400KW roof solar panels, offsetting 30% of our daily power requirements and minimizing carbon footprint during casting.',
      img: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9c?auto=format&fit=crop&w=500&q=80'
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <header className="page-header">
        <div className="container">
          <h1>Corporate Social Responsibility</h1>
          <p>Building the nation responsibly. Discover how GCC supports green engineering, local education, and worker safety.</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          {/* CSR Headline Card */}
          <div className="csr-hero-card">
            <span className="hero-subtitle" style={{ color: 'var(--color-primary)' }}>Constructing Responsibly</span>
            <h2>Sustainability Integrated into Concrete</h2>
            <p>
              We believe true progress is measured by the safety of our workers, the replenishment of our environment, and the prosperity of the rural communities surrounding our construction zones.
            </p>
          </div>

          {/* CSR Initiatives Grid */}
          <div className="csr-stories-grid">
            {initiatives.map((init, index) => (
              <div key={index} className="csr-story-card">
                <div className="csr-story-img" style={{ backgroundImage: `url(${init.img})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '240px' }}></div>
                <div className="csr-story-content">
                  <span className="csr-story-tag" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    {init.icon} {init.tag}
                  </span>
                  <h3 className="csr-story-title" style={{ marginTop: '0.5rem' }}>{init.title}</h3>
                  <p className="csr-story-desc">{init.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
