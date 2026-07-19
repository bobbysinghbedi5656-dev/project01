import React, { useState } from 'react';
import { Briefcase, Award, GraduationCap, Heart, Send } from 'lucide-react';
import '../styles/pages.css';

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', cvUrl: '', coverLetter: '' });

  const benefits = [
    { icon: <Heart size={28} />, title: 'Health Insurance', desc: 'Comprehensive medical benefits coverage for workers and immediate families.' },
    { icon: <Award size={28} />, title: 'Skill Seminars', desc: 'Sponsorship for structural engineering courses and software certifications.' },
    { icon: <GraduationCap size={28} />, title: 'Provident Fund', desc: 'Generous corporate matches for long-term financial security plans.' }
  ];

  const jobs = [
    { id: 1, title: 'Senior Project Manager (Steel Bridges)', dept: 'Infrastructure EPC', location: 'Rajasthan Site', type: 'Full-Time', exp: '10+ Years' },
    { id: 2, title: 'Safety Health Coordinator', dept: 'Quality Assurance', location: 'Gujarat Project Site', type: 'Full-Time', exp: '4-7 Years' },
    { id: 3, title: 'Civil Billing & Estimation Engineer', dept: 'Finance & Accounts', location: 'Head Office (Noida)', type: 'Full-Time', exp: '3+ Years' },
    { id: 4, title: 'Land Surveyor Specialist', dept: 'Pre-Planning & Design', location: 'UP Highway Site', type: 'Contractual', exp: '5+ Years' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Application for "${selectedJob.title}" submitted successfully! We will get back to you soon.`);
    setSelectedJob(null);
    setFormData({ name: '', email: '', phone: '', cvUrl: '', coverLetter: '' });
  };

  return (
    <div>
      {/* Page Header */}
      <header className="page-header">
        <div className="container">
          <h1>Careers</h1>
          <p>Join GCC and help build structures that support the nation's progress. Explore active openings and submit your profile.</p>
        </div>
      </header>

      {/* Culture Benefits */}
      <section className="section">
        <div className="container">
          <div className="careers-hero">
            <span className="hero-subtitle">Work Culture</span>
            <h2>Why Build with GCC?</h2>
            <div className="accent-line" style={{ margin: 'var(--spacing-md) auto' }}></div>
            <p style={{ color: 'var(--color-text-muted-dark)', maxWidth: '650px', margin: '0 auto' }}>
              We encourage continuous technical learning, maintain high site safety standards, and provide clear progression paths for young structural engineers.
            </p>
          </div>

          <div className="culture-features">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="culture-card">
                <div className="culture-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p style={{ color: 'var(--color-text-muted-dark)', fontSize: '0.9rem', marginTop: '0.5rem' }}>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs Board Section */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg-light)', borderTop: '1px solid var(--color-border-light)' }}>
        <div className="container">
          <div className="jobs-section">
            <h2 style={{ fontSize: '1.8rem', borderBottom: '2px solid var(--color-primary-light)', paddingBottom: '0.5rem' }}>Open Positions</h2>
            
            <div className="jobs-list">
              {jobs.map(job => (
                <div key={job.id} className="job-card">
                  <div className="job-details">
                    <h3>{job.title}</h3>
                    <div style={{ fontSize: '0.9rem', color: 'var(--color-primary)', fontWeight: 600 }}>{job.dept}</div>
                    <div className="job-tags">
                      <span className="job-tag">{job.location}</span>
                      <span className="job-tag">{job.type}</span>
                      <span className="job-tag">{job.exp}</span>
                    </div>
                  </div>
                  <button
                    className="job-apply-btn"
                    onClick={() => setSelectedJob(job)}
                  >
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Job Application Overlay/Form Modal */}
      {selectedJob && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000, padding: 'var(--spacing-md)' }}>
          <div style={{ backgroundColor: 'white', borderRadius: 'var(--radius-md)', padding: '2rem', width: '100%', maxWidth: '500px', maxHeight: '90vh', overflowY: 'auto', boxShadow: 'var(--shadow-lg)' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.2rem' }}>Apply for Position</h3>
            <div style={{ fontSize: '0.9rem', color: 'var(--color-primary)', fontWeight: 600, marginBottom: '1.5rem' }}>{selectedJob.title}</div>
            
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input type="text" name="name" className="form-input" required value={formData.name} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input type="email" name="email" className="form-input" required value={formData.email} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label className="form-label">Contact Number</label>
                <input type="tel" name="phone" className="form-input" required value={formData.phone} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label className="form-label">Link to Resume / CV (Google Drive or Dropbox)</label>
                <input type="url" name="cvUrl" className="form-input" placeholder="https://" required value={formData.cvUrl} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label className="form-label">Brief Cover Message (Optional)</label>
                <textarea name="coverLetter" className="form-input form-textarea" value={formData.coverLetter} onChange={handleInputChange}></textarea>
              </div>
              
              <div style={{ display: 'flex', gap: '10px', marginTop: '1.5rem' }}>
                <button type="submit" className="btn btn-primary" style={{ flexGrow: 1 }}>
                  Submit Profile <Send size={14} />
                </button>
                <button type="button" className="btn btn-secondary" onClick={() => setSelectedJob(null)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
