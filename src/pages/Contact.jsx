import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Globe } from 'lucide-react';
import '../styles/pages.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', subject: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Your message has been sent to GCC. We will contact you at ${formData.email} shortly.`);
    setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
  };

  return (
    <div>
      {/* Page Header */}
      <header className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with GCC. Reach out to our head offices, tender desks, or submit a general business inquiry form.</p>
        </div>
      </header>

      {/* Grid Content */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            
            {/* Contact details sidebar */}
            <div className="contact-info-panel">
              {/* Head Office Address Box */}
              <div className="contact-card-box">
                <h3>Corporate Head Office</h3>
                <div className="contact-card-details">
                  <div className="contact-detail-row">
                    <MapPin size={20} />
                    <div>
                      <strong>Address</strong>
                      <span>104, Corporate Tower, Sector 62, Noida, Uttar Pradesh - 201301, India</span>
                    </div>
                  </div>
                  <div className="contact-detail-row">
                    <Phone size={20} />
                    <div>
                      <strong>Telephone</strong>
                      <span>+91 120 4567890 / +91 120 4567891</span>
                    </div>
                  </div>
                  <div className="contact-detail-row">
                    <Mail size={20} />
                    <div>
                      <strong>Email Dispatches</strong>
                      <span>info@goelconstruction.co.in</span>
                    </div>
                  </div>
                  <div className="contact-detail-row">
                    <Clock size={20} />
                    <div>
                      <strong>Working Hours</strong>
                      <span>Mon - Sat: 09:30 AM - 06:30 PM (IST)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Regional Tender Desk Box */}
              <div className="contact-card-box">
                <h3>Tender & Procurement Desk</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted-dark)', marginBottom: '1rem', lineHeight: '1.5' }}>
                  For joint bidding agreements, government expressway EPC sub-contracts, or supplier registrations:
                </p>
                <div className="contact-card-details">
                  <div className="contact-detail-row">
                    <Globe size={18} />
                    <div>
                      <strong>Email</strong>
                      <span>procurement@goelconstruction.co.in</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Contact Form Panel */}
            <div className="contact-form-panel">
              <h3>Send a Message</h3>
              <p style={{ color: 'var(--color-text-muted-dark)', marginBottom: '1.5rem', fontSize: '0.92rem' }}>
                Fill out the form details below. Our corporate relations team will redirect your request to the appropriate department.
              </p>
              
              <form onSubmit={handleFormSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Your Name</label>
                    <input type="text" name="name" className="form-input" required value={formData.name} onChange={handleInputChange} />
                  </div>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Email Address</label>
                    <input type="email" name="email" className="form-input" required value={formData.email} onChange={handleInputChange} />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Phone Number</label>
                    <input type="tel" name="phone" className="form-input" required value={formData.phone} onChange={handleInputChange} />
                  </div>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Company Name</label>
                    <input type="text" name="company" className="form-input" value={formData.company} onChange={handleInputChange} />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Subject</label>
                  <input type="text" name="subject" className="form-input" required value={formData.subject} onChange={handleInputChange} />
                </div>

                <div className="form-group">
                  <label className="form-label">Your Message</label>
                  <textarea name="message" className="form-input form-textarea" required value={formData.message} onChange={handleInputChange}></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Submit Inquiry <Send size={14} />
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
