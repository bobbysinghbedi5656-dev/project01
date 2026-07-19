import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ChevronRight, Send } from 'lucide-react';
import '../styles/components/footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to the GCC newsletter!');
    e.target.reset();
  };

  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="footer-grid">
          {/* Brand & Mission */}
          <div className="footer-column">
            <Link to="/" className="logo-link" style={{ display: 'inline-flex', marginBottom: '1rem' }}>
              <div className="logo-graphic" style={{ width: '36px', height: '36px', fontSize: '1.2rem', color: 'white', background: 'var(--color-primary)' }}>G</div>
              <div className="logo-text" style={{ marginLeft: '10px' }}>
                <div className="logo-title" style={{ fontSize: '1.3rem', color: 'white' }}>G<span>CC</span></div>
                <div className="logo-subtitle" style={{ fontSize: '0.5rem', color: 'var(--color-text-muted-light)' }}>Elevating Infrastructure</div>
              </div>
            </Link>
            <p className="footer-brand-text">
              GCC (Goel Construction Company Private Limited) is one of the nation's premier construction and infrastructure engineering firms, building landmarks with integrity, skill, and care.
            </p>
            <div className="footer-contact-info">
              <div className="footer-contact-item">
                <MapPin size={16} />
                <span>104, Corporate Tower, Sector 62, Noida, UP, India</span>
              </div>
              <div className="footer-contact-item">
                <Phone size={16} />
                <span>+91 120 4567890</span>
              </div>
              <div className="footer-contact-item">
                <Mail size={16} />
                <span>info@goelconstruction.co.in</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul className="footer-links-list">
              <li className="footer-link-item">
                <Link to="/"><ChevronRight size={14} /> Home</Link>
              </li>
              <li className="footer-link-item">
                <Link to="/company"><ChevronRight size={14} /> Company</Link>
              </li>
              <li className="footer-link-item">
                <Link to="/projects"><ChevronRight size={14} /> Projects</Link>
              </li>
              <li className="footer-link-item">
                <Link to="/investors"><ChevronRight size={14} /> Investors</Link>
              </li>
              <li className="footer-link-item">
                <Link to="/csr"><ChevronRight size={14} /> CSR</Link>
              </li>
              <li className="footer-link-item">
                <Link to="/careers"><ChevronRight size={14} /> Careers</Link>
              </li>
              <li className="footer-link-item">
                <Link to="/contact"><ChevronRight size={14} /> Contact</Link>
              </li>
            </ul>
          </div>

          {/* Core Verticals */}
          <div className="footer-column">
            <h3>Our Services</h3>
            <ul className="footer-links-list">
              <li className="footer-link-item">
                <a href="#infra"><ChevronRight size={14} /> Infrastructure</a>
              </li>
              <li className="footer-link-item">
                <a href="#industrial"><ChevronRight size={14} /> Industrial Plants</a>
              </li>
              <li className="footer-link-item">
                <a href="#commercial"><ChevronRight size={14} /> Commercial Hubs</a>
              </li>
              <li className="footer-link-item">
                <a href="#residential"><ChevronRight size={14} /> Residential Complexes</a>
              </li>
              <li className="footer-link-item">
                <a href="#sustainability"><ChevronRight size={14} /> Green Building</a>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscribe */}
          <div className="footer-column">
            <h3>Newsletter</h3>
            <p className="footer-newsletter-text">
              Subscribe to stay updated with GCC's latest projects, financial disclosures, and corporate initiatives.
            </p>
            <form className="footer-newsletter-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Enter email address"
                className="footer-newsletter-input"
                required
              />
              <button type="submit" className="footer-newsletter-btn" aria-label="Subscribe to newsletter">
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom copyright & terms */}
        <div className="footer-bottom">
          <div>
            &copy; {currentYear} Goel Construction Company Private Limited (GCC). All rights reserved.
          </div>
          <div className="footer-bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Use</a>
            <a href="#sitemap">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
