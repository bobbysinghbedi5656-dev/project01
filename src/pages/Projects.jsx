import React, { useState } from 'react';
import { MapPin, Calendar, Layers, Landmark } from 'lucide-react';
import '../styles/pages.css';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Infrastructure', 'Industrial', 'Commercial'];

  const projectsData = [
    {
      id: 1,
      title: 'Yamuna Expressway Elevated Corridor',
      category: 'Infrastructure',
      location: 'Greater Noida to Agra, UP',
      client: 'NHAI / Yeida',
      value: '₹340 Cr',
      date: 'Dec 2024',
      img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 2,
      title: 'GCC Bio-Chemical Processing Refinery',
      category: 'Industrial',
      location: 'Dahej Industrial Zone, Gujarat',
      client: 'Petrochem India Ltd',
      value: '₹480 Cr',
      date: 'Oct 2025',
      img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 3,
      title: 'Metro Hub Corporate Center',
      category: 'Commercial',
      location: 'Sector 62, Noida',
      client: 'Metro Infrastructure Group',
      value: '₹195 Cr',
      date: 'Mar 2024',
      img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 4,
      title: 'National Highway-48 6-Lane Upgrade',
      category: 'Infrastructure',
      location: 'Rajasthan Border Corridor',
      client: 'Ministry of Road Transport',
      value: '₹620 Cr',
      date: 'Ongoing (2027)',
      img: 'https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 5,
      title: 'Heavy Logistics Warehouse Terminal',
      category: 'Industrial',
      location: 'Panvel, Maharashtra',
      client: 'Global Logistics Parks Inc',
      value: '₹125 Cr',
      date: 'Jul 2023',
      img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 6,
      title: 'Tech Park IT Hub Wing C',
      category: 'Commercial',
      location: 'Whitefield, Bengaluru',
      client: 'Infinity Spaces Ltd',
      value: '₹280 Cr',
      date: 'Jan 2025',
      img: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=500&q=80'
    }
  ];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(proj => proj.category === activeFilter);

  return (
    <div>
      {/* Page Header */}
      <header className="page-header">
        <div className="container">
          <h1>Our Projects</h1>
          <p>Explore our engineering showcase, spanning massive transport links, heavy factories, and commercial structures.</p>
        </div>
      </header>

      {/* Projects Showcase Section */}
      <section className="section">
        <div className="container">
          {/* Tab Filter Links */}
          <div className="project-filters">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid Layout of Items */}
          <div className="projects-grid">
            {filteredProjects.map(proj => (
              <div key={proj.id} className="project-item">
                <div className="project-item-image">
                  <span className="project-category-badge">{proj.category}</span>
                  <img src={proj.img} alt={proj.title} />
                </div>
                <div className="project-item-content">
                  <h3 className="project-item-title">{proj.title}</h3>
                  <div className="project-item-location">
                    <MapPin size={14} className="text-accent" />
                    <span>{proj.location}</span>
                  </div>
                  
                  {/* Metadata fields */}
                  <div className="project-item-meta">
                    <div>
                      <span className="project-meta-label"><Landmark size={12} style={{ display: 'inline', marginRight: '3px' }} /> Client</span>
                      <span className="project-meta-value">{proj.client}</span>
                    </div>
                    <div>
                      <span className="project-meta-label"><Layers size={12} style={{ display: 'inline', marginRight: '3px' }} /> Value</span>
                      <span className="project-meta-value">{proj.value}</span>
                    </div>
                    <div>
                      <span className="project-meta-label"><Calendar size={12} style={{ display: 'inline', marginRight: '3px' }} /> Completion</span>
                      <span className="project-meta-value">{proj.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
