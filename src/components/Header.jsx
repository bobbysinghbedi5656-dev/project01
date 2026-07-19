import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import '../styles/components/header.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page transition
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Company', path: '/company' },
    { label: 'Projects', path: '/projects' },
    { label: 'Investors', path: '/investors' },
    { label: 'CSR', path: '/csr' },
    { label: 'Careers', path: '/careers' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={`header-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* Brand/Logo Section */}
        <Link to="/" className="logo-link">
          <div className="logo-icon-wrapper">
            <div className="logo-graphic">G</div>
          </div>
          <div className="logo-text">
            <div className="logo-title">G<span>CC</span></div>
            <div className="logo-subtitle">Elevating Infrastructure</div>
          </div>
          <div className="logo-parenthesis">
            (Erstwhile known as Goel Construction Company Private Limited)
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="nav-menu">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-item-link ${location.pathname === item.path ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="nav-cta">
          <Link to="/contact" className="btn btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.75rem' }}>
            <Phone size={14} /> Get in Touch
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Navigation Menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Overlay Menu */}
        <div className={`mobile-overlay ${isOpen ? 'active' : ''}`}>
          <div className="mobile-nav-links">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <Link to="/contact" className="btn btn-primary" style={{ width: '100%' }}>
            <Phone size={16} /> Get in Touch
          </Link>
        </div>
      </div>
    </nav>
  );
}
