import React from 'react';
import { FileText, Download, Calendar, BarChart3, Users2, ShieldAlert } from 'lucide-react';
import '../styles/pages.css';

export default function Investors() {
  const reports = [
    { title: 'Annual Financial Report FY 2024-25', type: 'PDF', size: '4.8 MB', date: 'June 2025' },
    { title: 'Quarterly Audit Statement Q3 (Dec-March)', type: 'PDF', size: '2.1 MB', date: 'April 2025' },
    { title: 'Shareholding Pattern Disclosure Statement', type: 'PDF', size: '1.2 MB', date: 'March 2025' },
    { title: 'Corporate Governance Compliance Report', type: 'PDF', size: '950 KB', date: 'Jan 2025' },
    { title: 'Corporate Social Responsibility Fund Audit', type: 'PDF', size: '1.5 MB', date: 'Nov 2024' }
  ];

  const shareholders = [
    { group: 'Promoters & Promoter Group', percentage: '62.4%' },
    { group: 'Foreign Institutional Investors (FII)', percentage: '12.8%' },
    { group: 'Domestic Mutual Funds & Banks', percentage: '14.5%' },
    { group: 'Retail Public Shareholders', percentage: '10.3%' }
  ];

  const calendarEvents = [
    { event: 'Q1 Earnings Release & Board Meeting', date: 'Aug 14, 2026' },
    { event: '35th Annual General Meeting (AGM)', date: 'Sept 22, 2026' },
    { event: 'Interim Dividend Distribution Payout', date: 'Oct 05, 2026' }
  ];

  return (
    <div>
      {/* Page Header */}
      <header className="page-header">
        <div className="container">
          <h1>Investors</h1>
          <p>Access corporate governance declarations, shareholding structures, and official audited financial statements.</p>
        </div>
      </header>

      {/* Grid Content */}
      <section className="section">
        <div className="container">
          <div className="investors-grid">
            
            {/* Reports Column */}
            <div className="investors-reports">
              <span className="hero-subtitle">Disclosures & Filings</span>
              <h2 style={{ fontSize: '2rem', marginBottom: 'var(--spacing-md)' }}>Financial Documents</h2>
              <p style={{ color: 'var(--color-text-muted-dark)', marginBottom: 'var(--spacing-lg)' }}>
                GCC is committed to maintaining high standards of transparency. Download our regulatory filings, annual audit sheets, and compliance statements below.
              </p>

              <div className="reports-list">
                {reports.map((report, index) => (
                  <div key={index} className="report-item">
                    <div className="report-info">
                      <div className="report-icon-box">
                        <FileText size={20} />
                      </div>
                      <div>
                        <div className="report-title">{report.title}</div>
                        <div className="report-size">{report.type} &bull; {report.size} &bull; Uploaded {report.date}</div>
                      </div>
                    </div>
                    <button
                      onClick={() => alert(`Downloading ${report.title}...`)}
                      className="report-download-btn"
                      aria-label={`Download ${report.title}`}
                    >
                      <Download size={14} /> Download
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar Columns */}
            <div className="investors-sidebar">
              {/* Shareholder Widget */}
              <div className="investor-sidebar-widget">
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <BarChart3 size={18} className="text-accent" /> Shareholding Pattern
                </h3>
                <div className="shareholding-list" style={{ marginTop: '1rem' }}>
                  {shareholders.map((share, idx) => (
                    <div key={idx} className="shareholding-item">
                      <span style={{ color: 'var(--color-text-muted-dark)' }}>{share.group}</span>
                      <strong style={{ color: 'var(--color-bg-dark)' }}>{share.percentage}</strong>
                    </div>
                  ))}
                </div>
              </div>

              {/* Calendar Events Widget */}
              <div className="investor-sidebar-widget">
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Calendar size={18} className="text-accent" /> Investor Calendar
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
                  {calendarEvents.map((evt, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                      <div style={{ backgroundColor: 'var(--color-primary-light)', color: 'var(--color-primary)', fontSize: '0.75rem', fontWeight: 700, padding: '0.3rem 0.6rem', borderRadius: '4px', whiteSpace: 'nowrap' }}>
                        {evt.date.split(',')[0]}
                      </div>
                      <div>
                        <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>{evt.event}</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted-dark)' }}>Year 2026</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Compliance Note */}
              <div className="investor-sidebar-widget" style={{ backgroundColor: 'rgba(232, 78, 36, 0.04)', borderColor: 'var(--color-primary-light)' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', borderBottomColor: 'rgba(232,78,36,0.1)' }}>
                  <ShieldAlert size={18} className="text-accent" /> Compliance Contact
                </h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--color-text-muted-dark)', marginTop: '0.8rem', lineHeight: '1.5' }}>
                  For shareholder grievances, equity transfers, or registry questions, write to:
                  <strong style={{ display: 'block', color: 'var(--color-bg-dark)', marginTop: '5px' }}>investor.relations@goelconstruction.co.in</strong>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
