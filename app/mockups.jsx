'use client'

import { useState } from 'react';

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  background: #ffffff;
  color: #1e293b;
  line-height: 1.6;
}

/* ============================================
   HEADER
   ============================================ */

header {
  background: white;
  border-bottom: 1px solid #e2e8f0;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.header-inner {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 48px;
}

.header-top {
  display: flex;
  align-items: center;
  padding: 16px 0 12px 0;
}

.header-logo {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
}

.header-logo .logo-text h1 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 20px;
  font-weight: 300;
  color: #1f476a;
  letter-spacing: -0.5px;
  line-height: 1.2;
}

.header-logo .logo-text p {
  font-family: 'Inter', sans-serif;
  font-size: 11px;
  color: #64748b;
  font-weight: 500;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-top: 2px;
}

/* ============================================
   NAVIGATION - 2-ROW GRID
   ============================================ */

.nav-grid {
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: auto auto;
  gap: 0;
  padding: 0 0 0 0;
  border-top: 1px solid #f1f5f9;
}

.nav-tab {
  padding: 10px 4px;
  border: none;
  background: transparent;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 500;
  color: #64748b;
  white-space: nowrap;
  text-align: center;
  border-bottom: 2px solid transparent;
  transition: all 0.2s ease;
}

.nav-tab:hover {
  color: #1e293b;
  background: #f8fafc;
}

.nav-tab.active {
  color: #1f476a;
  font-weight: 600;
  border-bottom-color: #1f476a;
}

/* Mobile hamburger */
.mobile-toggle {
  display: none;
  background: none;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  padding: 8px 12px;
  cursor: pointer;
  font-size: 18px;
  color: #1f476a;
  margin-left: auto;
}

@media (max-width: 768px) {
  .header-inner {
    padding: 0 16px;
  }
  .mobile-toggle {
    display: block;
  }
  .nav-grid {
    display: none;
  }
  .nav-grid.open {
    display: flex;
    flex-direction: column;
    gap: 0;
    padding-bottom: 8px;
  }
  .nav-grid.open .nav-tab {
    text-align: left;
    padding: 10px 0;
    border-bottom: 1px solid #f1f5f9;
  }
}

/* ============================================
   MAIN CONTENT
   ============================================ */

.main-content {
  max-width: 1440px;
  margin: 0 auto;
  padding: 80px 48px;
}

@media (max-width: 768px) {
  .main-content {
    padding: 40px 16px;
  }
}

/* ============================================
   HERO
   ============================================ */

.hero {
  background: linear-gradient(135deg, #132f4a 0%, #1a3a5c 100%);
  border-radius: 20px;
  padding: 100px;
  margin-bottom: 60px;
  color: white;
  overflow: hidden;
  position: relative;
}

.hero::before {
  content: '';
  position: absolute;
  top: -200px;
  right: -100px;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(14, 178, 175, 0.08) 0%, transparent 70%);
  border-radius: 50%;
}

.hero::after {
  content: '';
  position: absolute;
  bottom: -150px;
  left: -100px;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(14, 178, 175, 0.06) 0%, transparent 70%);
  border-radius: 50%;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-text h1 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 56px;
  font-weight: 300;
  margin-bottom: 28px;
  line-height: 1.1;
  letter-spacing: -1px;
}

.hero-text p {
  font-size: 16px;
  color: #cbd5e1;
  margin-bottom: 40px;
  line-height: 1.8;
  max-width: 520px;
}

.hero-buttons {
  display: flex;
  gap: 16px;
}

.hero-icon {
  display: flex;
  justify-content: center;
  align-items: center;
}

.pillar-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  position: relative;
  z-index: 1;
  margin-top: 60px;
}

.pillar-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 32px;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
}

.pillar-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
}

.pillar-card.navy::before { background: #1f476a; }
.pillar-card.teal::before { background: #0eb2af; }
.pillar-card.gold::before { background: #fbbf24; }

.pillar-card h3 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 8px;
  color: white;
}

.pillar-card p {
  font-size: 14px;
  color: #94a3b8;
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 1024px) {
  .hero {
    padding: 60px;
  }
  .hero-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .hero-text h1 {
    font-size: 40px;
  }
  .hero-icon {
    display: none;
  }
  .pillar-cards {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 40px 24px;
    border-radius: 12px;
  }
  .hero-text h1 {
    font-size: 32px;
  }
}

/* ============================================
   BUTTONS
   ============================================ */

.btn {
  padding: 14px 32px;
  border-radius: 8px;
  border: none;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.btn-primary {
  background: #0eb2af;
  color: white;
}

.btn-primary:hover {
  background: #0ca3a0;
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(14, 178, 175, 0.3);
}

.btn-secondary {
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.5);
}

.btn-outline {
  background: transparent;
  border: 2px solid #e2e8f0;
  color: #64748b;
}

.btn-outline:hover {
  background: #f8fafc;
  border-color: #cbd5e1;
  color: #1f476a;
}

/* ============================================
   SECTION TYPOGRAPHY
   ============================================ */

.section-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 32px;
  font-weight: 300;
  margin-bottom: 12px;
  color: #1e293b;
  letter-spacing: -0.5px;
}

.section-subtitle {
  font-size: 16px;
  color: #64748b;
  margin-bottom: 48px;
  line-height: 1.8;
  max-width: 800px;
}

/* ============================================
   CARDS & CONTAINERS
   ============================================ */

.card-white {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 40px;
  margin-bottom: 32px;
  transition: box-shadow 0.2s ease;
}

.card-white:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
}

.card-header {
  background: linear-gradient(135deg, #132f4a 0%, #1a3a5c 100%);
  color: white;
  padding: 40px;
  border-radius: 12px 12px 0 0;
  margin: -40px -40px 32px -40px;
}

.card-header h2 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 28px;
  font-weight: 300;
  margin-bottom: 8px;
}

.card-header p {
  color: #cbd5e1;
  font-size: 14px;
}

/* ============================================
   GRIDS
   ============================================ */

.grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
}

.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.grid-4 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

@media (max-width: 1024px) {
  .grid-3, .grid-4 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .grid-2, .grid-3, .grid-4 {
    grid-template-columns: 1fr;
  }
}

.box {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 24px;
  transition: all 0.2s ease;
}

.box:hover {
  border-color: #cbd5e1;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
}

/* ============================================
   COLOR SWATCHES
   ============================================ */

.color-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-bottom: 48px;
}

@media (max-width: 768px) {
  .color-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.color-swatch {
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #e2e8f0;
  transition: all 0.2s ease;
}

.color-swatch:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  transform: translateY(-2px);
}

.color-display {
  height: 120px;
}

.color-specs {
  padding: 16px;
  font-size: 12px;
  background: white;
}

.color-name {
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 6px;
  font-size: 13px;
}

.color-code {
  font-family: 'SF Mono', 'Fira Code', monospace;
  color: #64748b;
  line-height: 1.8;
  font-size: 11px;
}

/* ============================================
   TABLES
   ============================================ */

.spec-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}

.spec-table th {
  background: #f8fafc;
  padding: 14px 16px;
  text-align: left;
  font-weight: 600;
  border-bottom: 2px solid #e2e8f0;
  color: #1e293b;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.spec-table td {
  padding: 14px 16px;
  border-bottom: 1px solid #f1f5f9;
  color: #1f476a;
}

.spec-table tr:hover td {
  background: #f8fafc;
}

/* ============================================
   ICON SHOWCASE
   ============================================ */

.icon-showcase {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
}

/* ============================================
   CHECKLIST & FLOW
   ============================================ */

.checklist-item {
  display: flex;
  gap: 14px;
  margin-bottom: 16px;
  align-items: flex-start;
}

.checklist-icon {
  width: 22px;
  height: 22px;
  background: #0eb2af;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 11px;
  flex-shrink: 0;
  margin-top: 1px;
}

.checklist-text {
  font-size: 14px;
  color: #1e293b;
  line-height: 1.6;
}

.flow-diagram {
  display: flex;
  gap: 16px;
  align-items: center;
  flex-wrap: wrap;
}

.flow-box {
  background: white;
  border: 2px solid #1f476a;
  border-radius: 8px;
  padding: 16px 28px;
  text-align: center;
  font-size: 13px;
  font-weight: 600;
  color: #1f476a;
}

.flow-arrow {
  font-size: 20px;
  color: #cbd5e1;
}

/* ============================================
   PLACEHOLDER SECTIONS
   ============================================ */

.placeholder-section {
  text-align: center;
  padding: 80px 40px;
  background: #f8fafc;
  border: 2px dashed #e2e8f0;
  border-radius: 16px;
}

.placeholder-section .placeholder-icon {
  width: 56px;
  height: 56px;
  background: #f1f5f9;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  font-size: 24px;
  color: #94a3b8;
}

.placeholder-section h3 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #1f476a;
  margin-bottom: 8px;
}

.placeholder-section p {
  font-size: 14px;
  color: #94a3b8;
  max-width: 400px;
  margin: 0 auto;
  line-height: 1.6;
}

/* ============================================
   PILLAR ACCENT BORDERS
   ============================================ */

.accent-navy { border-left: 3px solid #1f476a; }
.accent-teal { border-left: 3px solid #0eb2af; }
.accent-gold { border-left: 3px solid #fbbf24; }

/* ============================================
   DO / DON'T CARDS
   ============================================ */

.do-card {
  border: 1px solid #bbf7d0;
  background: #f0fdf4;
  border-radius: 12px;
  padding: 24px;
}

.dont-card {
  border: 1px solid #fecaca;
  background: #fef2f2;
  border-radius: 12px;
  padding: 24px;
}

@keyframes patternSlide {
  0% { transform: translateX(0); }
  100% { transform: translateX(-80px); }
}

.pattern-animate {
  animation: patternSlide 8s linear infinite;
}
`;

export default function Mockups() {
  const [activeTab, setActiveTab] = useState('hero');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const Icon = ({ size = 40 }) => (
    <svg width={size} height={size * (58.3 / 55.86)} viewBox="0 0 55.86 58.3" xmlns="http://www.w3.org/2000/svg">
      <polygon fill="#0eb2af" points="33.67 45.26 22.31 45.31 28.03 33.46 33.67 45.26"/>
      <polygon fill="#1f476a" points="55.86 58.06 45.8 58.1 28.11 21.08 10.19 58.25 0 58.3 22.65 11.33 26.39 3.56 28.11 0 55.86 58.06"/>
    </svg>
  );

  const tabs = [
    // Row 1 (11 items)
    { id: 'hero', label: 'Website Hero' },
    { id: 'brand-story', label: 'Brand Story' },
    { id: 'guidelines', label: 'Guidelines' },
    { id: 'colors', label: 'Colors' },
    { id: 'typography', label: 'Typography' },
    { id: 'logos', label: 'Logos' },
    { id: 'components', label: 'Components' },
    { id: 'voice', label: 'Voice' },
    { id: 'imagery', label: 'Imagery' },
    { id: 'certification', label: 'Platform' },
    { id: 'curriculum', label: 'Sales Deck' },
    // Row 2 (11 items)
    { id: 'email', label: 'Email' },
    { id: 'social', label: 'Social' },
    { id: 'certificate', label: 'Collateral' },
    { id: 'presentation', label: 'Presentation' },
    { id: 'workshop', label: 'Workshop' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'dos', label: "Do's & Don'ts" },
    { id: 'accessibility', label: 'Accessibility' },
    { id: 'applications', label: 'Applications' },
    { id: 'downloads', label: 'Downloads' },
    { id: 'implementation', label: 'Implementation' },
  ];

  return (
    <>
      <style>{styles}</style>
      
      {/* ==================== HEADER ==================== */}
      <header>
        <div className="header-inner">
          <div className="header-top">
            <div className="header-logo">
              <svg height="40" viewBox="0 0 376.9 114.15" xmlns="http://www.w3.org/2000/svg">
                <polygon fill="#0eb2af" points="65.93 88.62 43.68 88.72 54.88 65.52 65.93 88.62"/>
                <polygon fill="#1f476a" points="109.38 113.68 89.68 113.76 55.04 41.28 19.95 114.06 0 114.15 44.35 22.18 51.67 6.97 55.04 0 109.38 113.68"/>
                <path fill="#1f476a" d="M303.28,59.85c-.03,3.29-.44,6.23-1.2,8.72-.75,2.33-2.05,4.56-3.85,6.61-2.49,2.79-5.4,4.77-8.67,5.87-.23.07-.47.15-.71.22-.55.16-1.12.3-1.68.42-1.48.3-3.07.46-4.72.46-3.27,0-6.32-.62-9.08-1.85-2.53-1.12-4.89-2.78-7.02-4.94-4.52-4.6-6.72-9.97-6.72-16.41s2.24-12,6.84-16.58c4.6-4.6,10.04-6.83,16.64-6.83,3.14,0,6.13.58,8.86,1.71l-1.31,2.74c-2.31-1-4.8-1.51-7.42-1.51-5.69,0-10.54,2-14.39,5.92-3.87,3.87-5.83,8.76-5.83,14.55s2.19,11.01,6.51,14.91c1.69,1.51,3.46,2.72,5.28,3.59,2.51,1.21,5.16,1.81,7.89,1.81.46,0,.92-.01,1.36-.05,3.53-.27,6.76-1.62,9.62-4.02l.08-.07c3.28-2.8,5.13-6.22,5.52-10.16l.21-2.2h-6.39l1.4-2.91h8.78Z"/>
                <polygon fill="#1f476a" points="350.74 80.52 347.32 80.54 330 44.31 312.46 80.69 308.95 80.71 329.98 37.09 350.74 80.52"/>
                <polygon fill="#0eb2af" points="333.12 69.72 326.65 69.75 329.91 62.99 333.12 69.72"/>
                <polygon fill="#1f476a" points="215.42 80.53 212 80.54 194.69 44.31 177.14 80.69 173.63 80.71 194.67 37.09 215.42 80.53"/>
                <path fill="#1f476a" d="M237,61.06l10.27,20.16h-3.31l-6.45-12.56-4.68-9.79h1.5c1.59,0,2.95-.12,4.13-.36,5.37-1.03,8.32-4.44,8.32-9.62,0-3.08-1.07-5.47-3.18-7.1-2.02-1.59-4.89-2.37-8.79-2.4h-19.17l-1.39-2.9h19.01c1.53,0,2.91.07,4.24.21,2.58.27,4.76.83,6.44,1.65.75.38,1.41.81,1.97,1.28,2.71,2.32,4.03,5.32,4.03,9.16,0,3.03-.83,5.54-2.52,7.66-1.67,2.1-3.92,3.46-6.69,4.06l-3.73.55Z"/>
                <polygon fill="#1f476a" points="176.07 36.47 174.66 39.39 152.62 39.39 152.62 81.23 149.26 81.23 149.26 39.39 130.72 39.39 132.12 36.48 176.07 36.47"/>
                <path fill="#0eb2af" d="M362.93,32.01l-7.73,16.61h2.54l1.74-3.79.98-2.22,2.43-5.31,2.32,5.31.96,2.22,1.64,3.79h2.58l-7.46-16.61Z"/>
                <rect fill="#0eb2af" x="374.54" y="32.99" width="2.36" height="15.63"/>
                <polygon fill="#0eb2af" points="197.75 69.72 191.28 69.75 194.53 62.99 197.75 69.72"/>
              </svg>
              <div className="logo-text">
                <p>Brand System</p>
              </div>
            </div>
            <button 
              className="mobile-toggle"
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
              {mobileNavOpen ? '\u2715' : '\u2630'}
            </button>
          </div>

          {/* 2-Row Navigation Grid */}
          <nav className={`nav-grid ${mobileNavOpen ? 'open' : ''}`}>
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab(tab.id);
                  setMobileNavOpen(false);
                }}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* ==================== MAIN CONTENT ==================== */}
      <div className="main-content">

        {/* ==================== WEBSITE HERO ==================== */}
        {activeTab === 'hero' && (
          <>
            <div className="hero">
              <div className="hero-content">
                <div className="hero-text">
                  <p style={{ fontSize: '13px', fontWeight: '600', color: '#0eb2af', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>The Leader Experience™</p>
                  <h1>AI-Powered Value Creation for Enterprise Leaders</h1>
                  <p>
                    TARGA AI is the leadership performance platform that turns strategic goals 
                    into measurable outcomes — giving executives real-time visibility into 
                    what drives enterprise value.
                  </p>
                  <div className="hero-buttons">
                    <button className="btn btn-primary">Request a Demo</button>
                    <button className="btn btn-secondary">Learn More</button>
                  </div>
                </div>
                <div className="hero-icon">
                  <Icon size={280} />
                </div>
              </div>

              <div className="pillar-cards">
                <div className="pillar-card navy">
                  <h3>Visibility</h3>
                  <p>Real-time executive dashboards that surface what matters — goals, gaps, and the teams driving them.</p>
                </div>
                <div className="pillar-card teal">
                  <h3>Intelligence</h3>
                  <p>AI-native agentic architecture that understands your business context and acts on natural language.</p>
                </div>
                <div className="pillar-card gold">
                  <h3>Value</h3>
                  <p>Enterprise value creation management — not task tracking. Outcomes measured in dollars, not checkboxes.</p>
                </div>
              </div>
            </div>

            <div className="card-white" style={{ marginTop: '48px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <div style={{ width: '4px', height: '40px', background: 'linear-gradient(to bottom, #1f476a, #0eb2af)', borderRadius: '2px' }}></div>
                <div>
                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '20px', fontWeight: '400', color: '#1e293b' }}>100 CEO Conversations</h3>
                  <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>Building the future of the Leader Experience</p>
                </div>
              </div>
              <p style={{ fontSize: '14px', color: '#1f476a', lineHeight: '1.8', maxWidth: '700px' }}>
                TARGA AI is engaging 100 enterprise CEOs to validate and refine the platform — 
                ensuring every feature is built on real executive needs, not assumptions. 
                This initiative drives both product development and market positioning.
              </p>
            </div>
          </>
        )}

        {/* ==================== BRAND STORY ==================== */}
        {activeTab === 'brand-story' && (
          <>
            <h2 className="section-title">Brand Story</h2>
            <p className="section-subtitle">
              The vision, technology, and market position behind TARGA AI — The Leader Experience™.
            </p>

            <div className="icon-showcase" style={{ marginBottom: '48px', padding: '80px' }}>
              <Icon size={320} />
            </div>

            <div className="card-white">
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '24px', fontWeight: '300', color: '#1e293b', marginBottom: '20px' }}>
                Every executive deserves to see — at a glance — what drives enterprise value.
              </h3>
              <p style={{ fontSize: '15px', color: '#1f476a', lineHeight: '1.8', marginBottom: '24px', maxWidth: '760px' }}>
                The software industry has defined experiences for users (UX), customers (CX), employees (EX), 
                and developers (DX). But the people making the highest-stakes decisions — the leaders — have been 
                left navigating fragmented tools built for someone else. TARGA AI defines a new category: 
                <strong> LX — the Leader Experience™</strong>.
              </p>
              <p style={{ fontSize: '15px', color: '#1f476a', lineHeight: '1.8', maxWidth: '760px' }}>
                The platform delivers three core capabilities — Visibility, Intelligence, and Value — each 
                representing a layer in the journey from strategic intent to enterprise value creation.
              </p>
            </div>

            <div className="grid-3" style={{ marginTop: '40px' }}>
              <div className="box accent-navy" style={{ paddingLeft: '28px' }}>
                <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '18px', fontWeight: '400', color: '#1f476a', marginBottom: '12px' }}>Visibility</h4>
                <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.7', margin: 0 }}>
                  Real-time executive dashboards that cut through noise — surfacing goal progress, team alignment, and strategic gaps at a glance.
                </p>
              </div>
              <div className="box accent-teal" style={{ paddingLeft: '28px' }}>
                <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '18px', fontWeight: '400', color: '#0eb2af', marginBottom: '12px' }}>Intelligence</h4>
                <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.7', margin: 0 }}>
                  AI-native agentic architecture that responds to natural language, automates executive workflows, and surfaces insights proactively.
                </p>
              </div>
              <div className="box accent-gold" style={{ paddingLeft: '28px' }}>
                <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '18px', fontWeight: '400', color: '#d97706', marginBottom: '12px' }}>Value</h4>
                <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.7', margin: 0 }}>
                  Enterprise value creation management — measuring outcomes in dollars, not checkboxes. Premium SaaS that delivers ROI from day one.
                </p>
              </div>
            </div>

            <div className="card-white" style={{ marginTop: '40px', textAlign: 'center', padding: '48px' }}>
              <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '20px' }}>Ready to experience LX?</p>
              <button className="btn btn-primary">Request a Demo</button>
            </div>
          </>
        )}

        {/* ==================== GUIDELINES ==================== */}
        {activeTab === 'guidelines' && (
          <>
            <h2 className="section-title">Brand Guidelines</h2>
            <p className="section-subtitle">
              Logo usage rules, clear space requirements, and application standards.
            </p>

            <div className="card-white">
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '24px' }}>Logo Usage</h3>
              <div className="grid-3">
                <div style={{ textAlign: 'center' }}>
                  <div style={{ background: '#f8fafc', borderRadius: '12px', padding: '40px', marginBottom: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Icon size={120} />
                  </div>
                  <p style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b' }}>Primary Mark</p>
                  <p style={{ fontSize: '12px', color: '#64748b' }}>Full color on light</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ background: '#132f4a', borderRadius: '12px', padding: '40px', marginBottom: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Icon size={120} />
                  </div>
                  <p style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b' }}>On Dark</p>
                  <p style={{ fontSize: '12px', color: '#64748b' }}>Full color on dark backgrounds</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ background: '#1f476a', borderRadius: '12px', padding: '40px', marginBottom: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <svg width={120} height={Math.round(120 * 58.3 / 55.86)} viewBox="0 0 55.86 58.3" xmlns="http://www.w3.org/2000/svg">
                      <polygon fill="#0eb2af" points="33.67 45.26 22.31 45.31 28.03 33.46 33.67 45.26"/>
                      <polygon fill="#ffffff" points="55.86 58.06 45.8 58.1 28.11 21.08 10.19 58.25 0 58.3 22.65 11.33 26.39 3.56 28.11 0 55.86 58.06"/>
                    </svg>
                  </div>
                  <p style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b' }}>On Navy</p>
                  <p style={{ fontSize: '12px', color: '#64748b' }}>Navy elements become white</p>
                </div>
              </div>
            </div>

            <div className="card-white">
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '24px' }}>Minimum Sizing</h3>
              <table className="spec-table">
                <thead>
                  <tr>
                    <th>Application</th>
                    <th>Minimum Height</th>
                    <th>Usage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Header / Navigation</td>
                    <td style={{ fontFamily: 'monospace', fontWeight: '600' }}>60px</td>
                    <td>Website header, app bars</td>
                  </tr>
                  <tr>
                    <td>Prominent Display</td>
                    <td style={{ fontFamily: 'monospace', fontWeight: '600' }}>120px</td>
                    <td>Hero sections, presentations, print</td>
                  </tr>
                  <tr>
                    <td>Icon Only</td>
                    <td style={{ fontFamily: 'monospace', fontWeight: '600' }}>40px</td>
                    <td>Favicon, social avatar, small spaces</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="card-white">
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '24px' }}>Clear Space</h3>
              <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.8', marginBottom: '16px' }}>
                Maintain a minimum clear space equal to the height of the icon's apex on all sides. 
                No other elements - text, graphics, or borders - should enter this exclusion zone.
              </p>
              <div style={{ display: 'flex', gap: '32px', fontSize: '13px' }}>
                <div>
                  <strong style={{ color: '#1e293b' }}>File Formats:</strong>
                  <span style={{ color: '#64748b' }}> SVG (preferred), PNG (transparency), PDF (print)</span>
                </div>
              </div>
            </div>

            <div className="card-white">
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '24px' }}>Logo Misuse</h3>
              <div className="grid-3">
                <div className="dont-card" style={{ textAlign: 'center', padding: '24px' }}>
                  <div style={{ background: '#fef2f2', borderRadius: '8px', padding: '24px', marginBottom: '12px' }}>
                    <div style={{ transform: 'scaleX(1.5)', display: 'inline-block' }}>
                      <Icon size={60} />
                    </div>
                  </div>
                  <p style={{ fontSize: '13px', fontWeight: '600', color: '#dc2626', marginBottom: '4px' }}>{'\u2717'} Don't stretch or distort</p>
                  <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>Always maintain original proportions</p>
                </div>
                <div className="dont-card" style={{ textAlign: 'center', padding: '24px' }}>
                  <div style={{ background: '#fef2f2', borderRadius: '8px', padding: '24px', marginBottom: '12px' }}>
                    <div style={{ transform: 'rotate(15deg)', display: 'inline-block' }}>
                      <Icon size={60} />
                    </div>
                  </div>
                  <p style={{ fontSize: '13px', fontWeight: '600', color: '#dc2626', marginBottom: '4px' }}>{'\u2717'} Don't rotate or tilt</p>
                  <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>The mark should always be upright</p>
                </div>
                <div className="dont-card" style={{ textAlign: 'center', padding: '24px' }}>
                  <div style={{ background: '#fef2f2', borderRadius: '8px', padding: '24px', marginBottom: '12px' }}>
                    <svg width={60} height={Math.round(60 * 58.3 / 55.86)} viewBox="0 0 55.86 58.3" xmlns="http://www.w3.org/2000/svg">
                      <polygon fill="#2ecc71" points="33.67 45.26 22.31 45.31 28.03 33.46 33.67 45.26"/>
                      <polygon fill="#e74c3c" points="55.86 58.06 45.8 58.1 28.11 21.08 10.19 58.25 0 58.3 22.65 11.33 26.39 3.56 28.11 0 55.86 58.06"/>
                    </svg>
                  </div>
                  <p style={{ fontSize: '13px', fontWeight: '600', color: '#dc2626', marginBottom: '4px' }}>{'\u2717'} Don't change brand colors</p>
                  <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>Only use approved color variants</p>
                </div>
                <div className="dont-card" style={{ textAlign: 'center', padding: '24px' }}>
                  <div style={{ background: '#fef2f2', borderRadius: '8px', padding: '24px', marginBottom: '12px' }}>
                    <div style={{ filter: 'drop-shadow(4px 4px 8px rgba(0,0,0,0.4))', display: 'inline-block' }}>
                      <Icon size={60} />
                    </div>
                  </div>
                  <p style={{ fontSize: '13px', fontWeight: '600', color: '#dc2626', marginBottom: '4px' }}>{'\u2717'} Don't add drop shadows</p>
                  <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>No effects, glows, or bevels</p>
                </div>
                <div className="dont-card" style={{ textAlign: 'center', padding: '24px' }}>
                  <div style={{ background: '#fef2f2', borderRadius: '8px', padding: '24px', marginBottom: '12px' }}>
                    <div style={{ opacity: 0.3, display: 'inline-block' }}>
                      <Icon size={60} />
                    </div>
                  </div>
                  <p style={{ fontSize: '13px', fontWeight: '600', color: '#dc2626', marginBottom: '4px' }}>{'\u2717'} Don't reduce opacity</p>
                  <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>Always display at full opacity</p>
                </div>
                <div className="dont-card" style={{ textAlign: 'center', padding: '24px' }}>
                  <div style={{ backgroundImage: 'linear-gradient(45deg, #ddd 25%, transparent 25%), linear-gradient(-45deg, #ddd 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ddd 75%), linear-gradient(-45deg, transparent 75%, #ddd 75%)', backgroundSize: '16px 16px', backgroundPosition: '0 0, 0 8px, 8px -8px, -8px 0px', borderRadius: '8px', padding: '24px', marginBottom: '12px' }}>
                    <Icon size={60} />
                  </div>
                  <p style={{ fontSize: '13px', fontWeight: '600', color: '#dc2626', marginBottom: '4px' }}>{'\u2717'} Don't place on busy backgrounds</p>
                  <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>Use solid, approved backgrounds only</p>
                </div>
              </div>
            </div>
          </>
        )}

        {/* ==================== COLORS ==================== */}
        {activeTab === 'colors' && (
          <>
            <h2 className="section-title">Color System</h2>
            <p className="section-subtitle">
              Brand colors carry meaning. Navy for authority and trust. Teal for intelligence, innovation, and action. Gold for value and impact.
            </p>

            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '20px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Primary Palette</h3>
            <div className="color-grid">
              <div className="color-swatch">
                <div className="color-display" style={{ backgroundColor: '#1f476a' }}></div>
                <div className="color-specs">
                  <div className="color-name">Navy</div>
                  <div className="color-code">HEX: #1f476a<br/>RGB: 31, 71, 106<br/>Role: Authority, Foundation, Trust</div>
                </div>
              </div>
              <div className="color-swatch">
                <div className="color-display" style={{ backgroundColor: '#0eb2af' }}></div>
                <div className="color-specs">
                  <div className="color-name">Teal</div>
                  <div className="color-code">HEX: #0eb2af<br/>RGB: 14, 178, 175<br/>Role: Innovation, Intelligence, CTAs</div>
                </div>
              </div>
              <div className="color-swatch">
                <div className="color-display" style={{ backgroundColor: '#fbbf24' }}></div>
                <div className="color-specs">
                  <div className="color-name">Gold</div>
                  <div className="color-code">HEX: #fbbf24<br/>RGB: 251, 191, 36<br/>Role: Performance, Impact, Value</div>
                </div>
              </div>
            </div>

            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '20px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Neutral Grays</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '12px', marginBottom: '48px' }}>
              {[
                { name: 'Gray 900', hex: '#1e293b' },
                { name: 'Gray 700', hex: '#1f476a' },
                { name: 'Gray 500', hex: '#64748b' },
                { name: 'Gray 300', hex: '#cbd5e1' },
                { name: 'Gray 200', hex: '#e2e8f0' },
                { name: 'Gray 100', hex: '#f1f5f9' },
                { name: 'Gray 50', hex: '#f8fafc' },
              ].map(c => (
                <div key={c.hex} style={{ textAlign: 'center' }}>
                  <div style={{ height: '48px', borderRadius: '8px', backgroundColor: c.hex, border: '1px solid #e2e8f0', marginBottom: '8px' }}></div>
                  <p style={{ fontSize: '11px', fontWeight: '600', color: '#1e293b' }}>{c.name}</p>
                  <p style={{ fontSize: '10px', fontFamily: 'monospace', color: '#64748b' }}>{c.hex}</p>
                </div>
              ))}
            </div>

            <div className="card-white">
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '20px' }}>Contrast & Accessibility</h3>
              <table className="spec-table">
                <thead>
                  <tr>
                    <th>Combination</th>
                    <th>Contrast Ratio</th>
                    <th>WCAG AA</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Navy on White</td>
                    <td style={{ fontFamily: 'monospace' }}>5.9:1</td>
                    <td style={{ color: '#16a34a', fontWeight: '600' }}>Pass</td>
                  </tr>
                  <tr>
                    <td>Gray 700 on White</td>
                    <td style={{ fontFamily: 'monospace' }}>5.9:1</td>
                    <td style={{ color: '#16a34a', fontWeight: '600' }}>Pass</td>
                  </tr>
                  <tr>
                    <td>Teal on White (buttons)</td>
                    <td style={{ fontFamily: 'monospace' }}>4.6:1</td>
                    <td style={{ color: '#16a34a', fontWeight: '600' }}>Pass</td>
                  </tr>
                  <tr>
                    <td>Teal on White</td>
                    <td style={{ fontFamily: 'monospace' }}>2.9:1</td>
                    <td style={{ color: '#dc2626', fontWeight: '600' }}>Large text only</td>
                  </tr>
                  <tr>
                    <td>Gold on White</td>
                    <td style={{ fontFamily: 'monospace' }}>1.9:1</td>
                    <td style={{ color: '#dc2626', fontWeight: '600' }}>Decorative only</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* ==================== TYPOGRAPHY ==================== */}
        {activeTab === 'typography' && (
          <>
            <h2 className="section-title">Typography</h2>
            <p className="section-subtitle">
              Space Grotesk for headlines and brand-forward moments. Inter for body, UI, and everything operational.
            </p>

            <div className="grid-2" style={{ marginBottom: '40px' }}>
              <div className="card-white">
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '20px' }}>Space Grotesk - Headlines</h3>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '48px', fontWeight: '300', color: '#1e293b', lineHeight: '1.1', letterSpacing: '-1px', marginBottom: '16px' }}>
                  Light 300
                </p>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '32px', fontWeight: '400', color: '#1e293b', lineHeight: '1.2', marginBottom: '16px' }}>
                  Regular 400
                </p>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '20px', fontWeight: '600', color: '#1e293b', lineHeight: '1.3' }}>
                  Semi-Bold 600
                </p>
              </div>
              <div className="card-white">
                <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '20px' }}>Inter - Body & UI</h3>
                <p style={{ fontSize: '16px', fontWeight: '400', color: '#1f476a', lineHeight: '1.6', marginBottom: '16px' }}>
                  Regular 400 - Body text and general content. Optimized for comfortable reading at 16px with 1.6 line height.
                </p>
                <p style={{ fontSize: '14px', fontWeight: '500', color: '#1e293b', marginBottom: '16px' }}>
                  Medium 500 - Labels, navigation, emphasized text
                </p>
                <p style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b' }}>
                  Semi-Bold 600 - Buttons, section headers, strong emphasis
                </p>
              </div>
            </div>

            <div className="card-white">
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '24px' }}>Type Scale</h3>
              <table className="spec-table">
                <thead>
                  <tr>
                    <th>Size</th>
                    <th>Font</th>
                    <th>Weight</th>
                    <th>Use Case</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ fontFamily: 'monospace', fontWeight: '600' }}>56px</td>
                    <td>Space Grotesk</td>
                    <td>300 Light</td>
                    <td>Hero headlines (-1px letter-spacing)</td>
                  </tr>
                  <tr>
                    <td style={{ fontFamily: 'monospace', fontWeight: '600' }}>40px</td>
                    <td>Space Grotesk</td>
                    <td>400 Regular</td>
                    <td>Page titles</td>
                  </tr>
                  <tr>
                    <td style={{ fontFamily: 'monospace', fontWeight: '600' }}>32px</td>
                    <td>Space Grotesk</td>
                    <td>300 Light</td>
                    <td>Section headers (-0.5px letter-spacing)</td>
                  </tr>
                  <tr>
                    <td style={{ fontFamily: 'monospace', fontWeight: '600' }}>24px</td>
                    <td>Space Grotesk</td>
                    <td>400 Regular</td>
                    <td>Card titles, subsection headers</td>
                  </tr>
                  <tr>
                    <td style={{ fontFamily: 'monospace', fontWeight: '600' }}>16px</td>
                    <td>Inter</td>
                    <td>400 Regular</td>
                    <td>Body text (1.6 line-height)</td>
                  </tr>
                  <tr>
                    <td style={{ fontFamily: 'monospace', fontWeight: '600' }}>14px</td>
                    <td>Inter</td>
                    <td>500 Medium</td>
                    <td>Labels, buttons, navigation</td>
                  </tr>
                  <tr>
                    <td style={{ fontFamily: 'monospace', fontWeight: '600' }}>12px</td>
                    <td>Inter</td>
                    <td>400 Regular</td>
                    <td>Captions, fine print (minimum size)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="card-white">
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '16px' }}>Web Font Embedding</h3>
              <div style={{ background: '#132f4a', borderRadius: '8px', padding: '20px', fontFamily: "'SF Mono', 'Fira Code', monospace", fontSize: '12px', color: '#94a3b8', lineHeight: '1.8', overflowX: 'auto' }}>
                <span style={{ color: '#64748b' }}>/* Google Fonts import */</span><br/>
                <span style={{ color: '#fbbf24' }}>@import</span> url(<span style={{ color: '#0eb2af' }}>'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap'</span>);
              </div>
            </div>
          </>
        )}

        {/* ==================== LOGOS ==================== */}
        {activeTab === 'logos' && (
          <>
            <h2 className="section-title">Logo System</h2>
            <p className="section-subtitle">
              The TARGA A-mark icon, combimark, lockup variations, and approved background treatments.
            </p>

            {/* Icon Mark */}
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Icon Mark</h3>
            <div className="icon-showcase">
              <Icon size={280} />
            </div>
            <p style={{ fontSize: '14px', color: '#64748b', textAlign: 'center', marginTop: '-28px', marginBottom: '48px' }}>
              The triangular A-mark: Navy (Leadership Authority) with Teal apex triangle (AI Intelligence) — representing the convergence of executive vision and performance automation
            </p>

            {/* Icon on backgrounds */}
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Icon - Background Variants</h3>
            <div className="grid-3" style={{ marginBottom: '48px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ background: '#f8fafc', borderRadius: '12px', padding: '40px', marginBottom: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid #e2e8f0' }}>
                  <Icon size={100} />
                </div>
                <p style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b' }}>On Light</p>
                <p style={{ fontSize: '12px', color: '#64748b' }}>Full brand colors</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ background: '#132f4a', borderRadius: '12px', padding: '40px', marginBottom: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <svg width={100} height={Math.round(100 * 58.3 / 55.86)} viewBox="0 0 55.86 58.3" xmlns="http://www.w3.org/2000/svg">
                      <polygon fill="#0eb2af" points="33.67 45.26 22.31 45.31 28.03 33.46 33.67 45.26"/>
                      <polygon fill="#ffffff" points="55.86 58.06 45.8 58.1 28.11 21.08 10.19 58.25 0 58.3 22.65 11.33 26.39 3.56 28.11 0 55.86 58.06"/>
                    </svg>
                </div>
                <p style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b' }}>On Dark</p>
                <p style={{ fontSize: '12px', color: '#64748b' }}>Navy elements become white</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ background: '#1f476a', borderRadius: '12px', padding: '40px', marginBottom: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <svg width={100} height={Math.round(100 * 58.3 / 55.86)} viewBox="0 0 55.86 58.3" xmlns="http://www.w3.org/2000/svg">
                      <polygon fill="#0eb2af" points="33.67 45.26 22.31 45.31 28.03 33.46 33.67 45.26"/>
                      <polygon fill="#ffffff" points="55.86 58.06 45.8 58.1 28.11 21.08 10.19 58.25 0 58.3 22.65 11.33 26.39 3.56 28.11 0 55.86 58.06"/>
                    </svg>
                </div>
                <p style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b' }}>On Navy</p>
                <p style={{ fontSize: '12px', color: '#64748b' }}>Navy elements become white</p>
              </div>
            </div>

            {/* Combimark */}
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Combimark</h3>
            <div className="card-white" style={{ padding: '60px', textAlign: 'center', marginBottom: '48px' }}>
              <svg height="80" viewBox="0 0 376.9 114.15" xmlns="http://www.w3.org/2000/svg">
                <polygon fill="#0eb2af" points="65.93 88.62 43.68 88.72 54.88 65.52 65.93 88.62"/>
                <polygon fill="#1f476a" points="109.38 113.68 89.68 113.76 55.04 41.28 19.95 114.06 0 114.15 44.35 22.18 51.67 6.97 55.04 0 109.38 113.68"/>
                <path fill="#1f476a" d="M303.28,59.85c-.03,3.29-.44,6.23-1.2,8.72-.75,2.33-2.05,4.56-3.85,6.61-2.49,2.79-5.4,4.77-8.67,5.87-.23.07-.47.15-.71.22-.55.16-1.12.3-1.68.42-1.48.3-3.07.46-4.72.46-3.27,0-6.32-.62-9.08-1.85-2.53-1.12-4.89-2.78-7.02-4.94-4.52-4.6-6.72-9.97-6.72-16.41s2.24-12,6.84-16.58c4.6-4.6,10.04-6.83,16.64-6.83,3.14,0,6.13.58,8.86,1.71l-1.31,2.74c-2.31-1-4.8-1.51-7.42-1.51-5.69,0-10.54,2-14.39,5.92-3.87,3.87-5.83,8.76-5.83,14.55s2.19,11.01,6.51,14.91c1.69,1.51,3.46,2.72,5.28,3.59,2.51,1.21,5.16,1.81,7.89,1.81.46,0,.92-.01,1.36-.05,3.53-.27,6.76-1.62,9.62-4.02l.08-.07c3.28-2.8,5.13-6.22,5.52-10.16l.21-2.2h-6.39l1.4-2.91h8.78Z"/>
                <polygon fill="#1f476a" points="350.74 80.52 347.32 80.54 330 44.31 312.46 80.69 308.95 80.71 329.98 37.09 350.74 80.52"/>
                <polygon fill="#0eb2af" points="333.12 69.72 326.65 69.75 329.91 62.99 333.12 69.72"/>
                <polygon fill="#1f476a" points="215.42 80.53 212 80.54 194.69 44.31 177.14 80.69 173.63 80.71 194.67 37.09 215.42 80.53"/>
                <path fill="#1f476a" d="M237,61.06l10.27,20.16h-3.31l-6.45-12.56-4.68-9.79h1.5c1.59,0,2.95-.12,4.13-.36,5.37-1.03,8.32-4.44,8.32-9.62,0-3.08-1.07-5.47-3.18-7.1-2.02-1.59-4.89-2.37-8.79-2.4h-19.17l-1.39-2.9h19.01c1.53,0,2.91.07,4.24.21,2.58.27,4.76.83,6.44,1.65.75.38,1.41.81,1.97,1.28,2.71,2.32,4.03,5.32,4.03,9.16,0,3.03-.83,5.54-2.52,7.66-1.67,2.1-3.92,3.46-6.69,4.06l-3.73.55Z"/>
                <polygon fill="#1f476a" points="176.07 36.47 174.66 39.39 152.62 39.39 152.62 81.23 149.26 81.23 149.26 39.39 130.72 39.39 132.12 36.48 176.07 36.47"/>
                <path fill="#0eb2af" d="M362.93,32.01l-7.73,16.61h2.54l1.74-3.79.98-2.22,2.43-5.31,2.32,5.31.96,2.22,1.64,3.79h2.58l-7.46-16.61Z"/>
                <rect fill="#0eb2af" x="374.54" y="32.99" width="2.36" height="15.63"/>
                <polygon fill="#0eb2af" points="197.75 69.72 191.28 69.75 194.53 62.99 197.75 69.72"/>
              </svg>
              <p style={{ fontSize: '14px', color: '#64748b', textAlign: 'center', marginTop: '16px' }}>
                TARGA iconmark + wordmark lockup. The triangular A-mark sits to the left of the logotype.
              </p>
            </div>

            {/* Lockup Variations */}
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Lockup Variations</h3>
            <div className="grid-3" style={{ marginBottom: '48px' }}>
              <div className="box" style={{ textAlign: 'center', padding: '48px 24px 32px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '240px' }}>
                <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                  <Icon size={48} />
                </div>
                <div style={{ marginTop: '24px' }}>
                  <p style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b', margin: '0 0 4px 0' }}>Icon Only</p>
                  <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>Favicons, avatars, small spaces</p>
                </div>
              </div>
              <div className="box" style={{ textAlign: 'center', padding: '48px 24px 32px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '240px' }}>
                <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                  <svg height="56" viewBox="0 0 376.9 114.15" xmlns="http://www.w3.org/2000/svg">
                    <polygon fill="#0eb2af" points="65.93 88.62 43.68 88.72 54.88 65.52 65.93 88.62"/>
                    <polygon fill="#1f476a" points="109.38 113.68 89.68 113.76 55.04 41.28 19.95 114.06 0 114.15 44.35 22.18 51.67 6.97 55.04 0 109.38 113.68"/>
                    <path fill="#1f476a" d="M303.28,59.85c-.03,3.29-.44,6.23-1.2,8.72-.75,2.33-2.05,4.56-3.85,6.61-2.49,2.79-5.4,4.77-8.67,5.87-.23.07-.47.15-.71.22-.55.16-1.12.3-1.68.42-1.48.3-3.07.46-4.72.46-3.27,0-6.32-.62-9.08-1.85-2.53-1.12-4.89-2.78-7.02-4.94-4.52-4.6-6.72-9.97-6.72-16.41s2.24-12,6.84-16.58c4.6-4.6,10.04-6.83,16.64-6.83,3.14,0,6.13.58,8.86,1.71l-1.31,2.74c-2.31-1-4.8-1.51-7.42-1.51-5.69,0-10.54,2-14.39,5.92-3.87,3.87-5.83,8.76-5.83,14.55s2.19,11.01,6.51,14.91c1.69,1.51,3.46,2.72,5.28,3.59,2.51,1.21,5.16,1.81,7.89,1.81.46,0,.92-.01,1.36-.05,3.53-.27,6.76-1.62,9.62-4.02l.08-.07c3.28-2.8,5.13-6.22,5.52-10.16l.21-2.2h-6.39l1.4-2.91h8.78Z"/>
                    <polygon fill="#1f476a" points="350.74 80.52 347.32 80.54 330 44.31 312.46 80.69 308.95 80.71 329.98 37.09 350.74 80.52"/>
                    <polygon fill="#0eb2af" points="333.12 69.72 326.65 69.75 329.91 62.99 333.12 69.72"/>
                    <polygon fill="#1f476a" points="215.42 80.53 212 80.54 194.69 44.31 177.14 80.69 173.63 80.71 194.67 37.09 215.42 80.53"/>
                    <path fill="#1f476a" d="M237,61.06l10.27,20.16h-3.31l-6.45-12.56-4.68-9.79h1.5c1.59,0,2.95-.12,4.13-.36,5.37-1.03,8.32-4.44,8.32-9.62,0-3.08-1.07-5.47-3.18-7.1-2.02-1.59-4.89-2.37-8.79-2.4h-19.17l-1.39-2.9h19.01c1.53,0,2.91.07,4.24.21,2.58.27,4.76.83,6.44,1.65.75.38,1.41.81,1.97,1.28,2.71,2.32,4.03,5.32,4.03,9.16,0,3.03-.83,5.54-2.52,7.66-1.67,2.1-3.92,3.46-6.69,4.06l-3.73.55Z"/>
                    <polygon fill="#1f476a" points="176.07 36.47 174.66 39.39 152.62 39.39 152.62 81.23 149.26 81.23 149.26 39.39 130.72 39.39 132.12 36.48 176.07 36.47"/>
                    <path fill="#0eb2af" d="M362.93,32.01l-7.73,16.61h2.54l1.74-3.79.98-2.22,2.43-5.31,2.32,5.31.96,2.22,1.64,3.79h2.58l-7.46-16.61Z"/>
                    <rect fill="#0eb2af" x="374.54" y="32.99" width="2.36" height="15.63"/>
                    <polygon fill="#0eb2af" points="197.75 69.72 191.28 69.75 194.53 62.99 197.75 69.72"/>
                  </svg>
                </div>
                <div style={{ marginTop: '24px' }}>
                  <p style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b', margin: '0 0 4px 0' }}>Combimark (Horizontal)</p>
                  <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>Headers, navigation, primary lockup</p>
                </div>
              </div>
              <div className="box" style={{ textAlign: 'center', padding: '48px 24px 32px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '240px' }}>
                <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                  <svg height="100" viewBox="0 0 246.18 195.77" xmlns="http://www.w3.org/2000/svg">
                  <polygon fill="#0eb2af" points="134.33 88.62 112.09 88.72 123.29 65.52 134.33 88.62"/>
                  <polygon fill="#1f476a" points="177.78 113.68 158.08 113.76 123.44 41.28 88.35 114.06 68.4 114.15 112.75 22.18 120.07 6.97 123.44 0 177.78 113.68"/>
                  <path fill="#1f476a" d="M172.56,173.47c-.03,3.29-.44,6.23-1.2,8.72-.75,2.33-2.05,4.56-3.85,6.61-2.49,2.79-5.4,4.77-8.67,5.87-.23.07-.47.15-.71.22-.55.16-1.12.3-1.68.42-1.48.3-3.07.46-4.72.46-3.27,0-6.32-.62-9.08-1.85-2.53-1.12-4.89-2.78-7.02-4.94-4.52-4.6-6.72-9.97-6.72-16.41s2.24-12,6.84-16.58c4.6-4.6,10.04-6.83,16.64-6.83,3.14,0,6.13.58,8.86,1.71l-1.31,2.74c-2.31-1-4.8-1.51-7.42-1.51-5.69,0-10.54,2-14.39,5.92-3.87,3.87-5.83,8.76-5.83,14.55s2.19,11.01,6.51,14.91c1.69,1.51,3.46,2.72,5.28,3.59,2.51,1.21,5.16,1.81,7.89,1.81.46,0,.92-.01,1.36-.05,3.53-.27,6.76-1.62,9.62-4.02l.08-.07c3.28-2.8,5.13-6.22,5.52-10.16l.21-2.2h-6.39l1.4-2.91h8.78Z"/>
                  <polygon fill="#1f476a" points="220.02 194.14 216.6 194.16 199.28 157.93 181.74 194.31 178.23 194.33 199.26 150.71 220.02 194.14"/>
                  <polygon fill="#0eb2af" points="202.4 183.34 195.93 183.37 199.19 176.61 202.4 183.34"/>
                  <polygon fill="#1f476a" points="84.7 194.15 81.28 194.16 63.97 157.93 46.42 194.31 42.91 194.33 63.95 150.71 84.7 194.15"/>
                  <path fill="#1f476a" d="M106.28,174.68l10.27,20.16h-3.31l-6.45-12.56-4.68-9.79h1.5c1.59,0,2.95-.12,4.13-.36,5.37-1.03,8.32-4.44,8.32-9.62,0-3.08-1.07-5.47-3.18-7.1-2.02-1.59-4.89-2.37-8.79-2.4h-19.17l-1.39-2.9h19.01c1.53,0,2.91.07,4.24.21,2.58.27,4.76.83,6.44,1.65.75.38,1.41.81,1.97,1.28,2.71,2.32,4.03,5.32,4.03,9.16,0,3.03-.83,5.54-2.52,7.66-1.67,2.1-3.92,3.46-6.69,4.06l-3.73.55Z"/>
                  <polygon fill="#1f476a" points="45.35 150.09 43.94 153.01 21.9 153.01 21.9 194.85 18.54 194.85 18.54 153.01 0 153.01 1.4 150.1 45.35 150.09"/>
                  <path fill="#0eb2af" d="M232.22,145.63l-7.73,16.61h2.54l1.74-3.79.98-2.22,2.43-5.31,2.32,5.31.96,2.22,1.64,3.79h2.58l-7.46-16.61Z"/>
                  <rect fill="#0eb2af" x="243.82" y="146.62" width="2.36" height="15.63"/>
                  <polygon fill="#0eb2af" points="67.03 183.34 60.56 183.37 63.81 176.61 67.03 183.34"/>
                </svg>
                </div>
                <div style={{ marginTop: '24px' }}>
                  <p style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b', margin: '0 0 4px 0' }}>Vertical Combimark</p>
                  <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>Print, presentations, square formats</p>
                </div>
              </div>
            </div>

            {/* Sizing specs */}
            <div className="card-white">
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '24px' }}>Sizing Reference</h3>
              <table className="spec-table">
                <thead>
                  <tr>
                    <th>Asset</th>
                    <th>Recommended Height</th>
                    <th>Minimum Height</th>
                    <th>Context</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ fontWeight: '600' }}>Combimark</td>
                    <td style={{ fontFamily: 'monospace' }}>60px</td>
                    <td style={{ fontFamily: 'monospace' }}>40px</td>
                    <td>Website header, app bars</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: '600' }}>Combimark (full)</td>
                    <td style={{ fontFamily: 'monospace' }}>80-120px</td>
                    <td style={{ fontFamily: 'monospace' }}>60px</td>
                    <td>Hero sections, presentations, print</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: '600' }}>Icon only</td>
                    <td style={{ fontFamily: 'monospace' }}>40-280px</td>
                    <td style={{ fontFamily: 'monospace' }}>24px</td>
                    <td>Favicons (24px), avatars (40px), hero (280px)</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: '600' }}>Horizontal lockup</td>
                    <td style={{ fontFamily: 'monospace' }}>36-44px</td>
                    <td style={{ fontFamily: 'monospace' }}>32px</td>
                    <td>Compact headers, email signatures</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* File formats */}
            <div className="card-white">
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '16px' }}>File Formats</h3>
              <div className="grid-3">
                <div className="box" style={{ textAlign: 'center' }}>
                  <p style={{ fontFamily: 'monospace', fontSize: '24px', color: '#0eb2af', marginBottom: '8px', fontWeight: '600' }}>SVG</p>
                  <p style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b', marginBottom: '4px' }}>Primary / Web</p>
                  <p style={{ fontSize: '12px', color: '#64748b', margin: 0, lineHeight: '1.5' }}>Vector, infinitely scalable. Use for all digital applications.</p>
                </div>
                <div className="box" style={{ textAlign: 'center' }}>
                  <p style={{ fontFamily: 'monospace', fontSize: '24px', color: '#0eb2af', marginBottom: '8px', fontWeight: '600' }}>PNG</p>
                  <p style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b', marginBottom: '4px' }}>Raster / Transparency</p>
                  <p style={{ fontSize: '12px', color: '#64748b', margin: 0, lineHeight: '1.5' }}>2048px exports for social, presentations, and email.</p>
                </div>
                <div className="box" style={{ textAlign: 'center' }}>
                  <p style={{ fontFamily: 'monospace', fontSize: '24px', color: '#1f476a', marginBottom: '8px', fontWeight: '600' }}>PDF</p>
                  <p style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b', marginBottom: '4px' }}>Print / Production</p>
                  <p style={{ fontSize: '12px', color: '#64748b', margin: 0, lineHeight: '1.5' }}>Vector with embedded fonts for offset and large format print.</p>
                </div>
              </div>
            </div>
          </>
        )}

        {/* ==================== COMPONENTS ==================== */}
        {activeTab === 'components' && (
          <>
            <h2 className="section-title">Design Components</h2>
            <p className="section-subtitle">
              Reusable UI elements, interaction states, and implementation patterns.
            </p>

            <div className="card-white">
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '24px' }}>Buttons</h3>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '32px' }}>
                <button className="btn btn-primary">Primary Action</button>
                <button className="btn btn-outline">Secondary</button>
                <button className="btn" style={{ background: 'transparent', color: '#0eb2af', fontWeight: '600', fontSize: '14px', padding: '14px 32px' }}>Tertiary Link</button>
              </div>
              <table className="spec-table">
                <thead>
                  <tr>
                    <th>Variant</th>
                    <th>Background</th>
                    <th>Text</th>
                    <th>Padding</th>
                    <th>Radius</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ fontWeight: '600' }}>Primary</td>
                    <td style={{ fontFamily: "monospace" }}>#0eb2af</td>
                    <td>White, 600</td>
                    <td>14px 32px</td>
                    <td>8px</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: '600' }}>Secondary</td>
                    <td>Transparent</td>
                    <td>#64748b, 500</td>
                    <td>14px 32px</td>
                    <td>8px</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: '600' }}>Tertiary</td>
                    <td>None</td>
                    <td>#0eb2af, 600</td>
                    <td>14px 32px</td>
                    <td>-</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase', marginTop: '16px' }}>Cards</h3>
            <div className="grid-3">
              <div className="box">
                <h4 style={{ marginBottom: '8px', color: '#1e293b', fontWeight: '600', fontSize: '14px' }}>Standard Card</h4>
                <p style={{ fontSize: '13px', color: '#64748b', margin: 0, lineHeight: '1.6' }}>1px border #e2e8f0, 12px radius, 24px padding. Subtle shadow on hover.</p>
              </div>
              <div className="card-white" style={{ margin: 0, padding: '24px' }}>
                <h4 style={{ marginBottom: '8px', color: '#1e293b', fontWeight: '600', fontSize: '14px' }}>Content Card</h4>
                <p style={{ fontSize: '13px', color: '#64748b', margin: 0, lineHeight: '1.6' }}>Larger padding (40px), used for primary content sections.</p>
              </div>
              <div style={{ background: 'linear-gradient(135deg, #132f4a, #1a3a5c)', borderRadius: '12px', padding: '24px', color: 'white' }}>
                <h4 style={{ marginBottom: '8px', fontWeight: '600', fontSize: '14px' }}>Dark Card</h4>
                <p style={{ fontSize: '13px', color: '#cbd5e1', margin: 0, lineHeight: '1.6' }}>For hero blocks, CTAs, and emphasis sections.</p>
              </div>
            </div>
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase', marginTop: '48px' }}>Website Sections with Brand Pattern</h3>
            <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.8', marginBottom: '24px', maxWidth: '700px' }}>
              Examples of how the interlocking A-mark pattern integrates into website sections. The pattern creates visual depth while reinforcing brand identity.
            </p>

            {/* Hero Section Mockup */}
            <div style={{ borderRadius: '16px', overflow: 'hidden', marginBottom: '24px', border: '1px solid #e2e8f0' }}>
              <svg width="100%" height="360" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="compHeroPattern" x="0" y="0" width="80" height="92" patternUnits="userSpaceOnUse">
                    <g opacity="0.10">
                      <polygon fill="#ffffff" points="40,4 72,58 56,58 40,30 24,58 8,58"/>
                      <polygon fill="#0eb2af" points="40,42 48,58 32,58"/>
                    </g>
                    <g opacity="0.06" transform="translate(40,46) scale(1,-1) translate(-40,-29)">
                      <polygon fill="#ffffff" points="40,4 72,58 56,58 40,30 24,58 8,58"/>
                      <polygon fill="#0eb2af" points="40,42 48,58 32,58"/>
                    </g>
                  </pattern>
                  <linearGradient id="compHeroGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#1f476a"/>
                    <stop offset="100%" stopColor="#152d4a"/>
                  </linearGradient>
                  <clipPath id="heroRound">
                    <rect width="100%" height="360" rx="0"/>
                  </clipPath>
                </defs>
                <rect width="100%" height="360" fill="url(#compHeroGrad)"/>
                <rect width="100%" height="360" fill="url(#compHeroPattern)"/>
                {/* Content overlay */}
                <rect x="0" y="0" width="55%" height="360" fill="url(#compHeroGrad)" opacity="0.85"/>
                {/* Icon */}
                <g transform="translate(60, 80)">
                  <polygon fill="#0eb2af" points="16.5 22.1 10.9 22.1 13.7 16.3 16.5 22.1"/>
                  <polygon fill="#ffffff" points="27.2 27.8 22.3 27.8 13.7 10.3 5 27.9 0 27.9 11 5.5 12.8 1.7 13.7 0 27.2 27.8"/>
                </g>
                {/* Text */}
                <text x="60" y="128" fill="#0eb2af" fontFamily="'Inter', sans-serif" fontSize="11" fontWeight="600" letterSpacing="2">THE LEADER EXPERIENCE™</text>
                <text x="60" y="158" fill="#ffffff" fontFamily="'Space Grotesk', sans-serif" fontSize="28" fontWeight="300" letterSpacing="-0.5">AI-Powered Value Creation</text>
                <text x="60" y="190" fill="#ffffff" fontFamily="'Space Grotesk', sans-serif" fontSize="28" fontWeight="300" letterSpacing="-0.5">for Enterprise Leaders</text>
                <text x="60" y="224" fill="#94a3b8" fontFamily="'Inter', sans-serif" fontSize="13" fontWeight="400">Real-time visibility into what drives enterprise value.</text>
                <text x="60" y="242" fill="#94a3b8" fontFamily="'Inter', sans-serif" fontSize="13" fontWeight="400">Natural language AI that speaks the C-suite's language.</text>
                {/* CTA buttons */}
                <rect x="60" y="268" width="160" height="42" rx="8" fill="#0eb2af"/>
                <text x="140" y="294" fill="#ffffff" fontFamily="'Inter', sans-serif" fontSize="13" fontWeight="600" textAnchor="middle">Request a Demo</text>
                <rect x="236" y="268" width="130" height="42" rx="8" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
                <text x="301" y="294" fill="#ffffff" fontFamily="'Inter', sans-serif" fontSize="13" fontWeight="500" textAnchor="middle">Learn More</text>
                {/* Teal accent line */}
                <line x1="0" y1="357" x2="100%" y2="357" stroke="#0eb2af" strokeWidth="3" opacity="0.5"/>
              </svg>
              <div style={{ background: '#f8fafc', padding: '12px 20px', fontSize: '12px', color: '#64748b', borderTop: '1px solid #e2e8f0' }}>
                <strong style={{ color: '#1e293b' }}>Hero Section</strong> — Pattern at full density behind content area with 85% overlay fade on the text side. Teal accent line anchors the bottom.
              </div>
            </div>

            {/* CTA Band Mockup */}
            <div style={{ borderRadius: '16px', overflow: 'hidden', marginBottom: '24px', border: '1px solid #e2e8f0' }}>
              <svg width="100%" height="180" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="compCtaPattern" x="0" y="0" width="80" height="92" patternUnits="userSpaceOnUse">
                    <g opacity="0.08">
                      <polygon fill="#ffffff" points="40,4 72,58 56,58 40,30 24,58 8,58"/>
                      <polygon fill="#0eb2af" points="40,42 48,58 32,58"/>
                    </g>
                    <g opacity="0.05" transform="translate(40,46) scale(1,-1) translate(-40,-29)">
                      <polygon fill="#ffffff" points="40,4 72,58 56,58 40,30 24,58 8,58"/>
                    </g>
                  </pattern>
                </defs>
                <rect width="100%" height="180" fill="#1f476a"/>
                <rect width="100%" height="180" fill="url(#compCtaPattern)"/>
                {/* Centered text */}
                <text x="50%" y="60" fill="#0eb2af" fontFamily="'Inter', sans-serif" fontSize="11" fontWeight="600" textAnchor="middle" letterSpacing="2">THE LEADER EXPERIENCE™</text>
                <text x="50%" y="88" fill="#ffffff" fontFamily="'Space Grotesk', sans-serif" fontSize="22" fontWeight="400" textAnchor="middle" letterSpacing="-0.3">Ready to see what value creation looks like?</text>
                <text x="50%" y="112" fill="#94a3b8" fontFamily="'Inter', sans-serif" fontSize="13" textAnchor="middle">Join 100 enterprise CEOs shaping the future of LX.</text>
                {/* CTA */}
                <rect x="50%" y="126" width="200" height="42" rx="8" fill="#0eb2af" transform="translate(-100,0)"/>
                <text x="50%" y="152" fill="#ffffff" fontFamily="'Inter', sans-serif" fontSize="13" fontWeight="600" textAnchor="middle">Schedule a Conversation</text>
              </svg>
              <div style={{ background: '#f8fafc', padding: '12px 20px', fontSize: '12px', color: '#64748b', borderTop: '1px solid #e2e8f0' }}>
                <strong style={{ color: '#1e293b' }}>CTA Band</strong> — Full-width pattern at low opacity behind centered call-to-action. Use between content sections to break visual rhythm.
              </div>
            </div>

            {/* Footer Mockup */}
            <div style={{ borderRadius: '16px', overflow: 'hidden', marginBottom: '24px', border: '1px solid #e2e8f0' }}>
              <svg width="100%" height="260" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="compFooterPattern" x="0" y="0" width="80" height="92" patternUnits="userSpaceOnUse">
                    <g opacity="0.06">
                      <polygon fill="#ffffff" points="40,4 72,58 56,58 40,30 24,58 8,58"/>
                      <polygon fill="#0eb2af" points="40,42 48,58 32,58"/>
                    </g>
                    <g opacity="0.03" transform="translate(40,46) scale(1,-1) translate(-40,-29)">
                      <polygon fill="#ffffff" points="40,4 72,58 56,58 40,30 24,58 8,58"/>
                    </g>
                  </pattern>
                  <linearGradient id="compFooterGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#132f4a"/>
                    <stop offset="100%" stopColor="#0f2338"/>
                  </linearGradient>
                </defs>
                <rect width="100%" height="260" fill="url(#compFooterGrad)"/>
                <rect width="100%" height="260" fill="url(#compFooterPattern)"/>
                {/* Teal top border */}
                <line x1="0" y1="2" x2="100%" y2="2" stroke="#0eb2af" strokeWidth="3" opacity="0.6"/>
                {/* Logo: white iconmark + white wordmark */}
                <g transform="translate(60, 32)">
                  {/* White iconmark */}
                  <g transform="scale(0.55)">
                    <polygon fill="#0eb2af" points="33.67 45.26 22.31 45.31 28.03 33.46 33.67 45.26"/>
                    <polygon fill="#ffffff" points="55.86 58.06 45.8 58.1 28.11 21.08 10.19 58.25 0 58.3 22.65 11.33 26.39 3.56 28.11 0 55.86 58.06" opacity="0.85"/>
                  </g>
                  {/* White wordmark (whiteAsset_6) */}
                  <g transform="translate(40, 4) scale(0.55)">
                    <path fill="#ffffff" d="M172.56,24.31c-.03,3.29-.44,6.23-1.2,8.72-.75,2.33-2.05,4.56-3.85,6.61-2.49,2.79-5.4,4.77-8.67,5.87-.23.07-.47.15-.71.22-.55.16-1.12.3-1.68.42-1.48.3-3.07.46-4.72.46-3.27,0-6.32-.62-9.08-1.85-2.53-1.12-4.89-2.78-7.02-4.94-4.52-4.6-6.72-9.97-6.72-16.41s2.24-12,6.84-16.58c4.6-4.6,10.04-6.83,16.64-6.83,3.14,0,6.13.58,8.86,1.71l-1.31,2.74c-2.31-1-4.8-1.51-7.42-1.51-5.69,0-10.54,2-14.39,5.92-3.87,3.87-5.83,8.76-5.83,14.55s2.19,11.01,6.51,14.91c1.69,1.51,3.46,2.72,5.28,3.59,2.51,1.21,5.16,1.81,7.89,1.81.46,0,.92-.01,1.36-.05,3.53-.27,6.76-1.62,9.62-4.02l.08-.07c3.28-2.8,5.13-6.22,5.52-10.16l.21-2.2h-6.39l1.4-2.91h8.78Z" opacity="0.85"/>
                    <polygon fill="#ffffff" points="220.02 44.98 216.6 45 199.28 8.77 181.74 45.15 178.23 45.17 199.26 1.55 220.02 44.98" opacity="0.85"/>
                    <polygon fill="#0eb2af" points="202.4 34.18 195.93 34.21 199.19 27.46 202.4 34.18"/>
                    <polygon fill="#ffffff" points="84.7 44.99 81.28 45 63.97 8.77 46.42 45.15 42.91 45.17 63.95 1.55 84.7 44.99" opacity="0.85"/>
                    <path fill="#ffffff" d="M106.28,25.52l10.27,20.16h-3.31l-6.45-12.56-4.68-9.79h1.5c1.59,0,2.95-.12,4.13-.36,5.37-1.03,8.32-4.44,8.32-9.62,0-3.08-1.07-5.47-3.18-7.1-2.02-1.59-4.89-2.37-8.79-2.4h-19.17l-1.39-2.9h19.01c1.53,0,2.91.07,4.24.21,2.58.27,4.76.83,6.44,1.65.75.38,1.41.81,1.97,1.28,2.71,2.32,4.03,5.32,4.03,9.16,0,3.03-.83,5.54-2.52,7.66-1.67,2.1-3.92,3.46-6.69,4.06l-3.73.55Z" opacity="0.85"/>
                    <polygon fill="#ffffff" points="45.35 .93 43.94 3.85 21.9 3.85 21.9 45.69 18.54 45.69 18.54 3.85 0 3.85 1.4 .94 45.35 .93" opacity="0.85"/>
                    <polygon fill="#0eb2af" points="67.03 34.18 60.56 34.21 63.81 27.46 67.03 34.18"/>
                  </g>
                </g>
                {/* Footer columns */}
                <text x="60" y="110" fill="#94a3b8" fontFamily="'Inter', sans-serif" fontSize="11" fontWeight="600" letterSpacing="1" textTransform="uppercase">PLATFORM</text>
                <text x="60" y="130" fill="#64748b" fontFamily="'Inter', sans-serif" fontSize="12">Features</text>
                <text x="60" y="148" fill="#64748b" fontFamily="'Inter', sans-serif" fontSize="12">Integrations</text>
                <text x="60" y="166" fill="#64748b" fontFamily="'Inter', sans-serif" fontSize="12">Pricing</text>
                <text x="200" y="110" fill="#94a3b8" fontFamily="'Inter', sans-serif" fontSize="11" fontWeight="600" letterSpacing="1">COMPANY</text>
                <text x="200" y="130" fill="#64748b" fontFamily="'Inter', sans-serif" fontSize="12">Our Story</text>
                <text x="200" y="148" fill="#64748b" fontFamily="'Inter', sans-serif" fontSize="12">Leadership</text>
                <text x="200" y="166" fill="#64748b" fontFamily="'Inter', sans-serif" fontSize="12">Careers</text>
                <text x="340" y="110" fill="#94a3b8" fontFamily="'Inter', sans-serif" fontSize="11" fontWeight="600" letterSpacing="1">RESOURCES</text>
                <text x="340" y="130" fill="#64748b" fontFamily="'Inter', sans-serif" fontSize="12">Blog</text>
                <text x="340" y="148" fill="#64748b" fontFamily="'Inter', sans-serif" fontSize="12">Case Studies</text>
                <text x="340" y="166" fill="#64748b" fontFamily="'Inter', sans-serif" fontSize="12">Support</text>
                {/* Divider */}
                <line x1="60" y1="200" x2="90%" y2="200" stroke="#ffffff" strokeWidth="1" opacity="0.06"/>
                {/* Copyright */}
                <text x="60" y="230" fill="#64748b" fontFamily="'Inter', sans-serif" fontSize="11">{'\u00A9'} 2026 Targatek Inc. All rights reserved.</text>
                <text x="90%" y="230" fill="#64748b" fontFamily="'Inter', sans-serif" fontSize="11" textAnchor="end">Privacy Policy  |  Terms</text>
              </svg>
              <div style={{ background: '#f8fafc', padding: '12px 20px', fontSize: '12px', color: '#64748b', borderTop: '1px solid #e2e8f0' }}>
                <strong style={{ color: '#1e293b' }}>Footer</strong> — Darkest navy gradient with pattern at minimal opacity (6%). Teal accent line at top edge. Pattern adds subtle texture without competing with navigation links.
              </div>
            </div>

            {/* Lead Magnet */}
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginTop: '48px', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Lead Magnet / Gated Content</h3>
            <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.8', marginBottom: '24px', maxWidth: '700px' }}>
              Downloadable asset for the 100 CEO Conversations initiative. Animated pattern creates premium perception at the moment of conversion.
            </p>
            <div style={{ borderRadius: '16px', overflow: 'hidden', marginBottom: '24px', border: '1px solid #e2e8f0' }}>
              <svg width="100%" viewBox="0 0 1000 480" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="leadPattern" x="0" y="0" width="80" height="92" patternUnits="userSpaceOnUse">
                    <g opacity="0.10">
                      <polygon fill="#ffffff" points="40,4 72,58 56,58 40,30 24,58 8,58"/>
                      <polygon fill="#0eb2af" points="40,42 48,58 32,58"/>
                    </g>
                    <g opacity="0.06" transform="translate(40,46) scale(1,-1) translate(-40,-29)">
                      <polygon fill="#ffffff" points="40,4 72,58 56,58 40,30 24,58 8,58"/>
                      <polygon fill="#0eb2af" points="40,42 48,58 32,58"/>
                    </g>
                  </pattern>
                  <pattern id="leadPatternSm" x="20" y="23" width="80" height="92" patternUnits="userSpaceOnUse">
                    <g opacity="0.05">
                      <polygon fill="#0eb2af" points="40,4 72,58 56,58 40,30 24,58 8,58"/>
                    </g>
                  </pattern>
                  <linearGradient id="leadGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#1f476a"/>
                    <stop offset="100%" stopColor="#132f4a"/>
                  </linearGradient>
                  <clipPath id="leadClip">
                    <rect width="100%" height="480"/>
                  </clipPath>
                </defs>
                <rect width="100%" height="480" fill="url(#leadGrad)"/>
                <g clipPath="url(#leadClip)">
                  <g className="pattern-animate">
                    <rect x="-80" y="0" width="2000" height="480" fill="url(#leadPattern)"/>
                    <rect x="-80" y="0" width="2000" height="480" fill="url(#leadPatternSm)"/>
                  </g>
                </g>
                {/* Left content */}
                <g transform="translate(60, 60)">
                  <text x="0" y="0" fill="#0eb2af" fontFamily="'Inter', sans-serif" fontSize="11" fontWeight="600" letterSpacing="2">FREE EXECUTIVE BRIEF</text>
                  <text x="0" y="40" fill="#ffffff" fontFamily="'Space Grotesk', sans-serif" fontSize="32" fontWeight="300" letterSpacing="-0.5">The State of the</text>
                  <text x="0" y="76" fill="#ffffff" fontFamily="'Space Grotesk', sans-serif" fontSize="32" fontWeight="300" letterSpacing="-0.5">Leader Experience</text>
                  <text x="0" y="118" fill="#94a3b8" fontFamily="'Inter', sans-serif" fontSize="13" fontWeight="400">Insights from conversations with 100 enterprise</text>
                  <text x="0" y="136" fill="#94a3b8" fontFamily="'Inter', sans-serif" fontSize="13" fontWeight="400">CEOs on what's broken in leadership tooling</text>
                  <text x="0" y="154" fill="#94a3b8" fontFamily="'Inter', sans-serif" fontSize="13" fontWeight="400">and what comes next.</text>
                  {/* Key stats */}
                  <g transform="translate(0, 186)">
                    <rect x="0" y="0" width="120" height="64" rx="8" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
                    <text x="16" y="28" fill="#0eb2af" fontFamily="'Space Grotesk', sans-serif" fontSize="24" fontWeight="400">100</text>
                    <text x="16" y="48" fill="#94a3b8" fontFamily="'Inter', sans-serif" fontSize="10">CEOs Interviewed</text>
                    <rect x="136" y="0" width="120" height="64" rx="8" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
                    <text x="152" y="28" fill="#0eb2af" fontFamily="'Space Grotesk', sans-serif" fontSize="24" fontWeight="400">7</text>
                    <text x="152" y="48" fill="#94a3b8" fontFamily="'Inter', sans-serif" fontSize="10">Key Findings</text>
                  </g>
                </g>
                {/* Right form card */}
                <rect x="580" y="48" width="360" height="384" rx="16" fill="#ffffff" opacity="0.97"/>
                <text x="612" y="88" fill="#1e293b" fontFamily="'Space Grotesk', sans-serif" fontSize="18" fontWeight="400">Get the Brief</text>
                <text x="612" y="108" fill="#64748b" fontFamily="'Inter', sans-serif" fontSize="11">Join 2,400+ leaders who've read it.</text>
                {/* Form fields */}
                <rect x="612" y="124" width="296" height="40" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5"/>
                <text x="628" y="149" fill="#94a3b8" fontFamily="'Inter', sans-serif" fontSize="12">First Name</text>
                <rect x="612" y="176" width="296" height="40" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5"/>
                <text x="628" y="201" fill="#94a3b8" fontFamily="'Inter', sans-serif" fontSize="12">Work Email</text>
                <rect x="612" y="228" width="296" height="40" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5"/>
                <text x="628" y="253" fill="#94a3b8" fontFamily="'Inter', sans-serif" fontSize="12">Company</text>
                <rect x="612" y="280" width="296" height="40" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5"/>
                <text x="628" y="305" fill="#94a3b8" fontFamily="'Inter', sans-serif" fontSize="12">Title</text>
                {/* CTA */}
                <rect x="612" y="336" width="296" height="44" rx="8" fill="#0eb2af"/>
                <text x="760" y="363" fill="#ffffff" fontFamily="'Inter', sans-serif" fontSize="14" fontWeight="600" textAnchor="middle">Download the Brief</text>
                <text x="760" y="412" fill="#94a3b8" fontFamily="'Inter', sans-serif" fontSize="9" textAnchor="middle">No spam. Unsubscribe anytime.</text>
                {/* Teal bottom line */}
                <line x1="0" y1="477" x2="100%" y2="477" stroke="#0eb2af" strokeWidth="3" opacity="0.5"/>
              </svg>
              <div style={{ background: '#f8fafc', padding: '12px 20px', fontSize: '12px', color: '#64748b', borderTop: '1px solid #e2e8f0' }}>
                <strong style={{ color: '#1e293b' }}>Lead Magnet</strong> — Animated interlocking pattern behind a split layout: value proposition left, conversion form right. Teal accent stats reinforce credibility. Ties directly to the 100 CEO Conversations initiative.
              </div>
            </div>

            {/* Feature Spotlight */}
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginTop: '24px', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Feature Spotlight Section</h3>
            <div style={{ borderRadius: '16px', overflow: 'hidden', marginBottom: '24px', border: '1px solid #e2e8f0' }}>
              <div style={{ background: '#f8fafc', padding: '48px 60px', display: 'flex', gap: '48px', alignItems: 'center' }}>
                {/* Left: feature card with animated pattern */}
                <div style={{ flex: '0 0 45%', borderRadius: '16px', overflow: 'hidden', position: 'relative' }}>
                  <svg width="100%" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="featPattern" x="0" y="0" width="80" height="92" patternUnits="userSpaceOnUse">
                        <g opacity="0.08">
                          <polygon fill="#ffffff" points="40,4 72,58 56,58 40,30 24,58 8,58"/>
                          <polygon fill="#0eb2af" points="40,42 48,58 32,58"/>
                        </g>
                        <g opacity="0.05" transform="translate(40,46) scale(1,-1) translate(-40,-29)">
                          <polygon fill="#ffffff" points="40,4 72,58 56,58 40,30 24,58 8,58"/>
                        </g>
                      </pattern>
                      <clipPath id="featClip">
                        <rect width="400" height="300" rx="12"/>
                      </clipPath>
                    </defs>
                    <rect width="400" height="300" rx="12" fill="#1f476a"/>
                    <g clipPath="url(#featClip)">
                      <g className="pattern-animate">
                        <rect x="-80" y="0" width="560" height="300" fill="url(#featPattern)"/>
                      </g>
                    </g>
                    {/* Dashboard mockup inside */}
                    <rect x="40" y="40" width="320" height="220" rx="8" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                    <rect x="40" y="40" width="320" height="4" rx="2" fill="#0eb2af" opacity="0.6"/>
                    {/* Mini chart bars */}
                    <rect x="60" y="180" width="32" height="60" rx="4" fill="#1f476a" opacity="0.4"/>
                    <rect x="60" y="160" width="32" height="80" rx="4" fill="rgba(255,255,255,0.08)"/>
                    <rect x="104" y="140" width="32" height="100" rx="4" fill="#0eb2af" opacity="0.3"/>
                    <rect x="148" y="160" width="32" height="80" rx="4" fill="rgba(255,255,255,0.08)"/>
                    <rect x="192" y="120" width="32" height="120" rx="4" fill="#0eb2af" opacity="0.3"/>
                    <rect x="236" y="150" width="32" height="90" rx="4" fill="rgba(255,255,255,0.08)"/>
                    <rect x="280" y="100" width="32" height="140" rx="4" fill="#fbbf24" opacity="0.3"/>
                    {/* Labels */}
                    <text x="60" y="80" fill="#ffffff" fontFamily="'Space Grotesk', sans-serif" fontSize="16" fontWeight="300" opacity="0.9">Value Creation Dashboard</text>
                    <text x="60" y="100" fill="#94a3b8" fontFamily="'Inter', sans-serif" fontSize="10">Real-time performance across all initiatives</text>
                  </svg>
                </div>
                {/* Right: text content */}
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: '12px', fontWeight: '600', color: '#0eb2af', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Intelligence</p>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '28px', fontWeight: '300', color: '#1e293b', lineHeight: '1.3', marginBottom: '16px' }}>See every initiative at a glance. Act before problems become crises.</p>
                  <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.8', marginBottom: '24px' }}>
                    TARGA's Intelligence engine connects goals to execution in real time. 
                    AI surfaces risks before they escalate, syncs resources automatically, and 
                    gives you the single view your leadership team has been asking for.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                    {['Real-time goal alignment across teams', 'AI-surfaced risk indicators', 'Automated resource rebalancing'].map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#0eb2af14', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <span style={{ color: '#0eb2af', fontSize: '12px', fontWeight: '700' }}>{'\u2713'}</span>
                        </div>
                        <span style={{ fontSize: '14px', color: '#1e293b' }}>{item}</span>
                      </div>
                    ))}
                  </div>
                  <button className="btn btn-primary" style={{ fontSize: '13px', padding: '12px 28px' }}>Explore the Platform</button>
                </div>
              </div>
              <div style={{ background: '#ffffff', padding: '12px 20px', fontSize: '12px', color: '#64748b', borderTop: '1px solid #e2e8f0' }}>
                <strong style={{ color: '#1e293b' }}>Feature Spotlight</strong> — Animated pattern inside the product screenshot card creates depth. Light background keeps focus on the text content. Capability label in teal anchors the section to the brand framework.
              </div>
            </div>

            {/* Social Proof Bar */}
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginTop: '24px', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Social Proof Bar</h3>
            <div style={{ borderRadius: '16px', overflow: 'hidden', marginBottom: '24px', border: '1px solid #e2e8f0' }}>
              <svg width="100%" height="120" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="proofPattern" x="0" y="0" width="80" height="92" patternUnits="userSpaceOnUse">
                    <g opacity="0.04">
                      <polygon fill="#1f476a" points="40,4 72,58 56,58 40,30 24,58 8,58"/>
                      <polygon fill="#0eb2af" points="40,42 48,58 32,58"/>
                    </g>
                    <g opacity="0.025" transform="translate(40,46) scale(1,-1) translate(-40,-29)">
                      <polygon fill="#1f476a" points="40,4 72,58 56,58 40,30 24,58 8,58"/>
                    </g>
                  </pattern>
                  <clipPath id="proofClip">
                    <rect width="100%" height="120"/>
                  </clipPath>
                </defs>
                <rect width="100%" height="120" fill="#f8fafc"/>
                <g clipPath="url(#proofClip)">
                  <g className="pattern-animate">
                    <rect x="-80" y="0" width="2000" height="120" fill="url(#proofPattern)"/>
                  </g>
                </g>
                <line x1="0" y1="0" x2="100%" y2="0" stroke="#e2e8f0" strokeWidth="1"/>
                <line x1="0" y1="119" x2="100%" y2="119" stroke="#e2e8f0" strokeWidth="1"/>
                <text x="50%" y="40" fill="#94a3b8" fontFamily="'Inter', sans-serif" fontSize="11" fontWeight="500" textAnchor="middle" letterSpacing="1">TRUSTED BY LEADERS AT</text>
                {/* Placeholder logos */}
                {[0, 1, 2, 3, 4].map(i => (
                  <g key={i} transform={`translate(${120 + i * 180}, 0)`}>
                    <rect x="0" y="60" width="100" height="28" rx="4" fill="#1f476a" opacity="0.08"/>
                    <text x="50" y="79" fill="#94a3b8" fontFamily="'Inter', sans-serif" fontSize="10" fontWeight="500" textAnchor="middle">Partner {i + 1}</text>
                  </g>
                ))}
              </svg>
              <div style={{ background: '#ffffff', padding: '12px 20px', fontSize: '12px', color: '#64748b', borderTop: '1px solid #e2e8f0' }}>
                <strong style={{ color: '#1e293b' }}>Social Proof Bar</strong> — Light animated pattern creates premium texture behind partner logos. Use between hero and feature sections.
              </div>
            </div>
          </>
        )}

        {/* ==================== VOICE ==================== */}
        {activeTab === 'voice' && (
          <>
            <h2 className="section-title">Voice & Messaging</h2>
            <p className="section-subtitle">
              Brand voice, messaging hierarchy, and copy guidelines for all channels.
            </p>

            <div className="card-white">
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '24px' }}>Brand Voice Attributes</h3>
              <div className="grid-4">
                {[
                  { symbol: '\u25C6', label: 'Authoritative', desc: 'Speaks from experience — built for leaders, by people who understand leadership' },
                  { symbol: '\u25C7', label: 'Clear', desc: 'Active voice, short sentences, value over jargon. If a CEO can\'t parse it in 3 seconds, rewrite it.' },
                  { symbol: '\u25C8', label: 'Premium', desc: 'Enterprise-grade language. This is a $350K platform, and every word should reflect that.' },
                  { symbol: '\u25CB', label: 'Confident', desc: 'Not arrogant. We define a category (LX) — we don\'t compete in someone else\'s.' },
                ].map((attr, i) => (
                  <div key={i} style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '28px', marginBottom: '12px' }}>{attr.symbol}</div>
                    <h4 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '6px' }}>{attr.label}</h4>
                    <p style={{ fontSize: '12px', color: '#64748b', margin: 0, lineHeight: '1.5' }}>{attr.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-white">
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '20px' }}>Category Definition</h3>
              <div style={{ background: '#f8fafc', borderRadius: '12px', padding: '32px', borderLeft: '4px solid #0eb2af', marginBottom: '24px' }}>
                <p style={{ fontSize: '13px', fontWeight: '600', color: '#0eb2af', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>LX — The Leader Experience™</p>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '20px', fontWeight: '300', color: '#1e293b', lineHeight: '1.5', marginBottom: '16px' }}>
                  The software industry defined UX, CX, EX, and DX. TARGA AI defines LX — the experience designed specifically for the people making the highest-stakes decisions.
                </p>
                <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.7', margin: 0 }}>
                  Use "The Leader Experience" as the category framing in headlines, pitch decks, and CEO conversations. 
                  Use "LX" as the shorthand once the category has been established in context. Never use LX without first introducing what it stands for.
                </p>
              </div>
            </div>

            <div className="card-white">
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '24px' }}>Messaging Framework</h3>
              <div className="grid-3">
                <div className="box accent-navy" style={{ paddingLeft: '28px' }}>
                  <h4 style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b', marginBottom: '8px' }}>Visibility</h4>
                  <p style={{ fontSize: '13px', color: '#64748b', margin: 0, lineHeight: '1.6' }}>Real-time executive dashboards that cut through noise — surfacing goal progress, team alignment, and strategic gaps at a glance.</p>
                </div>
                <div className="box accent-teal" style={{ paddingLeft: '28px' }}>
                  <h4 style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b', marginBottom: '8px' }}>Intelligence</h4>
                  <p style={{ fontSize: '13px', color: '#64748b', margin: 0, lineHeight: '1.6' }}>AI-native architecture that responds to natural language, automates executive workflows, and surfaces insights proactively.</p>
                </div>
                <div className="box accent-gold" style={{ paddingLeft: '28px' }}>
                  <h4 style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b', marginBottom: '8px' }}>Value</h4>
                  <p style={{ fontSize: '13px', color: '#64748b', margin: 0, lineHeight: '1.6' }}>Enterprise value creation management — measuring outcomes in dollars, not checkboxes. ROI that speaks to the board, not the backlog.</p>
                </div>
              </div>
            </div>

            <div className="card-white">
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '20px' }}>Primary Taglines</h3>
              <div style={{ marginBottom: '24px' }}>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '24px', fontWeight: '300', color: '#1e293b', marginBottom: '4px' }}>
                  "The Next Generation Leader Experience"
                </p>
                <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>Primary. Use for hero headlines, pitch decks, and brand-forward moments.</p>
              </div>
              <div style={{ marginBottom: '24px' }}>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '20px', fontWeight: '300', color: '#1e293b', marginBottom: '4px' }}>
                  "Run your business — instead of the business running you"
                </p>
                <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>Secondary. Use for CTAs, email campaigns, and conversational contexts.</p>
              </div>
              <div>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '20px', fontWeight: '300', color: '#1e293b', marginBottom: '4px' }}>
                  "Your digital Chief of Staff"
                </p>
                <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>Tertiary. Use sparingly — effective in demos and product-focused contexts.</p>
              </div>
            </div>

            <div className="card-white">
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '20px' }}>Language Guide</h3>
              <div className="grid-2">
                <div className="do-card">
                  <h4 style={{ marginBottom: '12px', color: '#16a34a', fontWeight: '600', fontSize: '13px' }}>SAY</h4>
                  <p style={{ fontSize: '13px', color: '#1f476a', margin: 0, lineHeight: '1.7' }}>
                    Leader Experience, leadership performance platform, value creation, enterprise value, strategic visibility, performance automation, digital chief of staff
                  </p>
                </div>
                <div className="dont-card">
                  <h4 style={{ marginBottom: '12px', color: '#dc2626', fontWeight: '600', fontSize: '13px' }}>DON'T SAY</h4>
                  <p style={{ fontSize: '13px', color: '#1f476a', margin: 0, lineHeight: '1.7' }}>
                    Project management, task management, workflow tool, productivity software, collaboration platform, Asana alternative, SaaS tool
                  </p>
                </div>
              </div>
            </div>
          </>
        )}

        {/* ==================== IMAGERY ==================== */}
        {activeTab === 'imagery' && (
          <>
            <h2 className="section-title">Photography & Imagery</h2>
            <p className="section-subtitle">
              Visual style, photography direction, and image guidelines for the brand.
            </p>

            <div className="card-white">
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '24px' }}>Photography Style</h3>
              <div className="grid-2">
                <div>
                  <h4 style={{ marginBottom: '10px', fontSize: '13px', fontWeight: '600', color: '#1e293b' }}>Tone & Mood</h4>
                  <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.8', margin: 0 }}>
                    Professional, aspirational, authentic. Show real people in real working environments.
                    Avoid generic stock photography with forced poses or cliche handshakes.
                  </p>
                </div>
                <div>
                  <h4 style={{ marginBottom: '10px', fontSize: '13px', fontWeight: '600', color: '#1e293b' }}>Composition</h4>
                  <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.8', margin: 0 }}>
                    Clean framing with generous negative space. Natural lighting preferred.
                    Warm color grading, slightly desaturated to match brand warmth. Center-frame portraits.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid-2">
              <div className="do-card">
                <h4 style={{ marginBottom: '12px', color: '#16a34a', fontWeight: '600', fontSize: '13px' }}>DO</h4>
                <p style={{ fontSize: '13px', color: '#1f476a', margin: 0, lineHeight: '1.7' }}>
                  Show authentic workplace moments, diverse professionals collaborating, 
                  thoughtful compositions with natural lighting, strategic use of brand colors in environment.
                </p>
              </div>
              <div className="dont-card">
                <h4 style={{ marginBottom: '12px', color: '#dc2626', fontWeight: '600', fontSize: '13px' }}>DON'T</h4>
                <p style={{ fontSize: '13px', color: '#1f476a', margin: 0, lineHeight: '1.7' }}>
                  Use generic stock photography, posed/artificial scenarios, 
                  clip art or low-res images, overly saturated or filtered effects.
                </p>
              </div>
            </div>

            {/* Brand Pattern */}
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginTop: '48px', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Brand Pattern</h3>
            <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.8', marginBottom: '24px', maxWidth: '700px' }}>
              Interlocking A-mark tessellation for presentation folders, event materials, packaging, and decorative backgrounds. 
              Use on navy backgrounds at subtle opacity for premium texture.
            </p>
            <div style={{ borderRadius: '16px', overflow: 'hidden', marginBottom: '24px' }}>
              <svg width="100%" height="400" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="targaPattern" x="0" y="0" width="80" height="92" patternUnits="userSpaceOnUse">
                    {/* Upright A */}
                    <g opacity="0.12">
                      <polygon fill="#ffffff" points="40,4 72,58 56,58 40,30 24,58 8,58"/>
                      <polygon fill="#0eb2af" points="40,42 48,58 32,58"/>
                    </g>
                    {/* Inverted A - offset */}
                    <g opacity="0.07" transform="translate(40,46) scale(1,-1) translate(-40,-29)">
                      <polygon fill="#ffffff" points="40,4 72,58 56,58 40,30 24,58 8,58"/>
                      <polygon fill="#0eb2af" points="40,42 48,58 32,58"/>
                    </g>
                  </pattern>
                  <pattern id="targaPatternSm" x="20" y="23" width="80" height="92" patternUnits="userSpaceOnUse">
                    {/* Second layer offset for depth */}
                    <g opacity="0.06">
                      <polygon fill="#0eb2af" points="40,4 72,58 56,58 40,30 24,58 8,58"/>
                    </g>
                    <g opacity="0.04" transform="translate(40,46) scale(1,-1) translate(-40,-29)">
                      <polygon fill="#0eb2af" points="40,4 72,58 56,58 40,30 24,58 8,58"/>
                    </g>
                  </pattern>
                  <linearGradient id="patternFade" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#1a3a5c"/>
                    <stop offset="100%" stopColor="#152d4a"/>
                  </linearGradient>
                </defs>
                <rect width="100%" height="400" fill="url(#patternFade)"/>
                <rect width="100%" height="400" fill="url(#targaPattern)"/>
                <rect width="100%" height="400" fill="url(#targaPatternSm)"/>
                {/* Accent line */}
                <line x1="0" y1="399" x2="100%" y2="399" stroke="#0eb2af" strokeWidth="3" opacity="0.6"/>
              </svg>
            </div>

            <div className="grid-3" style={{ marginBottom: '24px' }}>
              <div style={{ borderRadius: '12px', overflow: 'hidden' }}>
                <svg width="100%" height="200" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="targaLight" x="0" y="0" width="60" height="69" patternUnits="userSpaceOnUse">
                      <g opacity="0.08">
                        <polygon fill="#1f476a" points="30,3 54,43.5 42,43.5 30,22.5 18,43.5 6,43.5"/>
                        <polygon fill="#0eb2af" points="30,31.5 36,43.5 24,43.5"/>
                      </g>
                      <g opacity="0.05" transform="translate(30,34.5) scale(1,-1) translate(-30,-21.75)">
                        <polygon fill="#1f476a" points="30,3 54,43.5 42,43.5 30,22.5 18,43.5 6,43.5"/>
                      </g>
                    </pattern>
                  </defs>
                  <rect width="100%" height="200" fill="#f8fafc"/>
                  <rect width="100%" height="200" fill="url(#targaLight)"/>
                </svg>
                <p style={{ fontSize: '12px', color: '#64748b', textAlign: 'center', padding: '8px 0' }}>Light variant</p>
              </div>
              <div style={{ borderRadius: '12px', overflow: 'hidden' }}>
                <svg width="100%" height="200" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="targaTeal" x="0" y="0" width="60" height="69" patternUnits="userSpaceOnUse">
                      <g opacity="0.15">
                        <polygon fill="#ffffff" points="30,3 54,43.5 42,43.5 30,22.5 18,43.5 6,43.5"/>
                        <polygon fill="#ffffff" points="30,31.5 36,43.5 24,43.5"/>
                      </g>
                      <g opacity="0.08" transform="translate(30,34.5) scale(1,-1) translate(-30,-21.75)">
                        <polygon fill="#ffffff" points="30,3 54,43.5 42,43.5 30,22.5 18,43.5 6,43.5"/>
                      </g>
                    </pattern>
                  </defs>
                  <rect width="100%" height="200" fill="#0eb2af"/>
                  <rect width="100%" height="200" fill="url(#targaTeal)"/>
                </svg>
                <p style={{ fontSize: '12px', color: '#64748b', textAlign: 'center', padding: '8px 0' }}>Teal variant</p>
              </div>
              <div style={{ borderRadius: '12px', overflow: 'hidden' }}>
                <svg width="100%" height="200" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="targaDense" x="0" y="0" width="48" height="55.4" patternUnits="userSpaceOnUse">
                      <g opacity="0.18">
                        <polygon fill="#ffffff" points="24,2.4 43.2,34.8 33.6,34.8 24,18 14.4,34.8 4.8,34.8"/>
                        <polygon fill="#0eb2af" points="24,25.2 28.8,34.8 19.2,34.8"/>
                      </g>
                      <g opacity="0.1" transform="translate(24,27.7) scale(1,-1) translate(-24,-17.4)">
                        <polygon fill="#ffffff" points="24,2.4 43.2,34.8 33.6,34.8 24,18 14.4,34.8 4.8,34.8"/>
                        <polygon fill="#0eb2af" points="24,25.2 28.8,34.8 19.2,34.8"/>
                      </g>
                    </pattern>
                  </defs>
                  <rect width="100%" height="200" fill="#152d4a"/>
                  <rect width="100%" height="200" fill="url(#targaDense)"/>
                </svg>
                <p style={{ fontSize: '12px', color: '#64748b', textAlign: 'center', padding: '8px 0' }}>Dense variant</p>
              </div>
            </div>

            <div className="card-white">
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '16px' }}>Pattern Usage</h3>
              <table className="spec-table">
                <thead>
                  <tr>
                    <th>Application</th>
                    <th>Variant</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Presentation folder backs</td>
                    <td style={{ fontWeight: '600' }}>Navy (primary)</td>
                    <td>Full bleed, teal accent line at spine edge</td>
                  </tr>
                  <tr>
                    <td>Event signage / banners</td>
                    <td style={{ fontWeight: '600' }}>Navy or Dense</td>
                    <td>Works at any scale, pattern remains legible</td>
                  </tr>
                  <tr>
                    <td>Slide backgrounds</td>
                    <td style={{ fontWeight: '600' }}>Light</td>
                    <td>Subtle texture under content, never distracting</td>
                  </tr>
                  <tr>
                    <td>Business card backs</td>
                    <td style={{ fontWeight: '600' }}>Dense</td>
                    <td>Tighter repeat for small format</td>
                  </tr>
                  <tr>
                    <td>Digital backgrounds</td>
                    <td style={{ fontWeight: '600' }}>Teal</td>
                    <td>Section dividers, email headers, social covers</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* ==================== CERTIFICATION ==================== */}
        {activeTab === 'certification' && (
          <>
            <h2 className="section-title">Platform Training</h2>
            <p className="section-subtitle">
              Structured onboarding and proficiency training for enterprise teams adopting the TARGA AI platform. Below: how the brand system creates a cohesive, modular training experience.
            </p>

            {/* Program header card */}
            <div className="card-white">
              <div className="card-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <Icon size={48} />
                  <div>
                    <h2>TARGA AI Platform Training</h2>
                    <p>Master the TARGA AI platform. Turn strategic goals into measurable outcomes.</p>
                  </div>
                </div>
              </div>
              <div className="grid-3">
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '40px', fontWeight: '300', color: '#1f476a', marginBottom: '8px' }}>3</p>
                  <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>Training modules</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '40px', fontWeight: '300', color: '#0eb2af', marginBottom: '8px' }}>Self-Paced</p>
                  <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>On-demand access</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '40px', fontWeight: '300', color: '#fbbf24', marginBottom: '8px' }}>Live</p>
                  <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>Guided onboarding sessions</p>
                </div>
              </div>
            </div>

            {/* Selectivity messaging */}
            <div className="card-white">
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '8px' }}>Why Structured Training?</h3>
              <p style={{ fontSize: '14px', color: '#1f476a', lineHeight: '1.8', maxWidth: '700px' }}>
                TARGA AI is not a task tracker — it's a leadership performance platform. Getting full value from the system requires understanding how Visibility, Intelligence, and Value work together. Structured training ensures every user, from the CEO to the implementation lead, knows how to turn strategic inputs into measurable outcomes from day one.
              </p>
            </div>

            {/* MODULAR DESIGN SYSTEM FOR TRAINING */}
            <div style={{ borderTop: '2px solid #e2e8f0', marginTop: '48px', paddingTop: '48px' }}>
              <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '8px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Training Design System</h3>
              <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '40px', maxWidth: '640px', lineHeight: '1.7' }}>
                These modular components show how the brand system translates into training materials for platform users. Every element uses the same mark geometry, brand colors, and typography.
              </p>

              {/* Module navigation cards */}
              <h4 style={{ fontSize: '13px', fontWeight: '600', color: '#64748b', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Module Cards</h4>
              <div className="grid-3" style={{ marginBottom: '48px' }}>
                {[
                  { num: '01', title: 'Visibility', subtitle: 'Strategic Goals, Dashboards & Alignment', color: '#1f476a', progress: 100 },
                  { num: '02', title: 'Intelligence', subtitle: 'AI Workflows, Natural Language & Automation', color: '#0eb2af', progress: 65 },
                  { num: '03', title: 'Value', subtitle: 'Execution, Measurement & ROI Reporting', color: '#fbbf24', progress: 0 },
                ].map((mod, i) => (
                  <div key={i} style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', overflow: 'hidden', transition: 'all 0.2s ease' }}>
                    <div style={{ height: '4px', background: mod.color }}></div>
                    <div style={{ padding: '28px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                        <span style={{ fontFamily: 'monospace', fontSize: '11px', fontWeight: '600', color: mod.color, background: `${mod.color}14`, padding: '4px 10px', borderRadius: '4px' }}>MODULE {mod.num}</span>
                        <span style={{ fontSize: '11px', fontWeight: '600', color: mod.progress === 100 ? '#16a34a' : mod.progress > 0 ? mod.color : '#94a3b8' }}>
                          {mod.progress === 100 ? 'Complete' : mod.progress > 0 ? `${mod.progress}%` : 'Locked'}
                        </span>
                      </div>
                      <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '20px', fontWeight: '400', color: '#1e293b', marginBottom: '4px' }}>{mod.title}</h4>
                      <p style={{ fontSize: '13px', color: '#64748b', margin: '0 0 20px 0' }}>{mod.subtitle}</p>
                      <div style={{ height: '4px', background: '#f1f5f9', borderRadius: '2px', overflow: 'hidden' }}>
                        <div style={{ height: '100%', width: `${mod.progress}%`, background: mod.color, borderRadius: '2px', transition: 'width 0.3s ease' }}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Lesson layout mockup */}
              <h4 style={{ fontSize: '13px', fontWeight: '600', color: '#64748b', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Lesson Layout</h4>
              <div style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', overflow: 'hidden', marginBottom: '48px' }}>
                {/* Lesson header bar */}
                <div style={{ background: 'linear-gradient(135deg, #132f4a, #1a3a5c)', padding: '24px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <Icon size={28} />
                    <div>
                      <p style={{ fontSize: '11px', color: '#0eb2af', fontWeight: '600', letterSpacing: '0.5px', textTransform: 'uppercase', margin: '0 0 2px 0' }}>Module 02 - Intelligence</p>
                      <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '18px', fontWeight: '300', color: 'white', margin: 0 }}>Lesson 2.3: Configuring AI Workflows</p>
                    </div>
                  </div>
                  <span style={{ fontSize: '12px', color: '#64748b', background: 'rgba(255,255,255,0.08)', padding: '6px 14px', borderRadius: '6px' }}>45 min</span>
                </div>
                {/* Lesson content area */}
                <div style={{ padding: '32px', display: 'grid', gridTemplateColumns: '1fr 280px', gap: '32px' }}>
                  <div>
                    <div style={{ height: '12px', background: '#f1f5f9', borderRadius: '4px', marginBottom: '12px', width: '90%' }}></div>
                    <div style={{ height: '12px', background: '#f1f5f9', borderRadius: '4px', marginBottom: '12px', width: '100%' }}></div>
                    <div style={{ height: '12px', background: '#f1f5f9', borderRadius: '4px', marginBottom: '12px', width: '75%' }}></div>
                    <div style={{ height: '12px', background: '#f1f5f9', borderRadius: '4px', marginBottom: '24px', width: '85%' }}></div>
                    {/* Key concept callout */}
                    <div style={{ borderLeft: '3px solid #0eb2af', background: '#f0fdfa', padding: '20px 24px', borderRadius: '0 8px 8px 0', marginBottom: '24px' }}>
                      <p style={{ fontSize: '11px', fontWeight: '600', color: '#0eb2af', letterSpacing: '0.5px', textTransform: 'uppercase', margin: '0 0 6px 0' }}>Key Concept</p>
                      <p style={{ fontSize: '14px', color: '#1e293b', margin: 0, lineHeight: '1.6' }}>Initiative dependencies determine how value flows through an organization. Mapping them reveals both bottlenecks and acceleration opportunities.</p>
                    </div>
                    <div style={{ height: '12px', background: '#f1f5f9', borderRadius: '4px', marginBottom: '12px', width: '95%' }}></div>
                    <div style={{ height: '12px', background: '#f1f5f9', borderRadius: '4px', width: '60%' }}></div>
                  </div>
                  {/* Sidebar */}
                  <div style={{ borderLeft: '1px solid #f1f5f9', paddingLeft: '32px' }}>
                    <p style={{ fontSize: '11px', fontWeight: '600', color: '#1e293b', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '16px' }}>In This Lesson</p>
                    {['AI workflow configuration', 'Dependency identification', 'Value flow analysis', 'Bottleneck diagnosis'].map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                        <div style={{ width: '18px', height: '18px', borderRadius: '4px', border: i < 2 ? 'none' : '2px solid #e2e8f0', background: i < 2 ? '#0eb2af' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '10px', flexShrink: 0 }}>{i < 2 ? '\u2713' : ''}</div>
                        <span style={{ fontSize: '13px', color: i < 2 ? '#1e293b' : '#64748b' }}>{item}</span>
                      </div>
                    ))}
                    <div style={{ marginTop: '24px', padding: '16px', background: '#f8fafc', borderRadius: '8px', textAlign: 'center' }}>
                      <Icon size={32} />
                      <p style={{ fontSize: '11px', color: '#64748b', marginTop: '8px', margin: '8px 0 0 0' }}>Module: Intelligence</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress dashboard mockup */}
              <h4 style={{ fontSize: '13px', fontWeight: '600', color: '#64748b', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Training Dashboard</h4>
              <div style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '32px', marginBottom: '48px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
                  <div style={{ width: '48px', height: '48px', background: '#1f476a', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontFamily: "'Space Grotesk', sans-serif", fontSize: '18px', fontWeight: '400' }}>JD</div>
                  <div>
                    <p style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', margin: '0 0 2px 0' }}>Jane Davidson</p>
                    <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>Enterprise Pilot - In Progress</p>
                  </div>
                </div>
                {/* Module progress bars */}
                {[
                  { label: 'Visibility', color: '#1f476a', pct: 100 },
                  { label: 'Intelligence', color: '#0eb2af', pct: 65 },
                  { label: 'Value', color: '#fbbf24', pct: 0 },
                ].map((p, i) => (
                  <div key={i} style={{ marginBottom: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b' }}>{p.label}</span>
                      <span style={{ fontSize: '12px', fontWeight: '600', color: p.pct === 100 ? '#16a34a' : p.color }}>{p.pct === 100 ? 'Complete' : p.pct > 0 ? `${p.pct}%` : 'Not started'}</span>
                    </div>
                    <div style={{ height: '8px', background: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${p.pct}%`, background: p.color, borderRadius: '4px' }}></div>
                    </div>
                  </div>
                ))}
                <div style={{ marginTop: '24px', padding: '20px', background: '#f8fafc', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <Icon size={32} />
                  <div>
                    <p style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b', margin: '0 0 2px 0' }}>Next: Lesson 2.4 - Automation Patterns</p>
                    <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>Continue in the Intelligence module</p>
                  </div>
                  <button className="btn btn-primary" style={{ marginLeft: 'auto', padding: '10px 24px', fontSize: '13px' }}>Continue</button>
                </div>
              </div>

              {/* A-mark-derived decorative elements */}
              <h4 style={{ fontSize: '13px', fontWeight: '600', color: '#64748b', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Brand Elements - Modular Toolkit</h4>
              <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '24px', lineHeight: '1.7', maxWidth: '640px' }}>
                Design elements derived from the A-mark icon geometry. Use these to create section dividers, callout frames, and visual hierarchy in any platform material.
              </p>
              <div className="grid-2" style={{ marginBottom: '48px' }}>
                {/* A-mark accent divider */}
                <div className="box" style={{ padding: '32px', textAlign: 'center' }}>
                  <p style={{ fontSize: '11px', fontWeight: '600', color: '#64748b', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '20px' }}>Section Divider</p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
                    <div style={{ height: '2px', flex: 1, background: '#1f476a', borderRadius: '1px' }}></div>
                    <div style={{ height: '2px', width: '24px', background: '#0eb2af', borderRadius: '1px' }}></div>
                    <div style={{ height: '2px', width: '24px', background: '#1f476a', borderRadius: '1px' }}></div>
                    <div style={{ height: '2px', width: '24px', background: '#fbbf24', borderRadius: '1px' }}></div>
                    <div style={{ height: '2px', flex: 1, background: '#1f476a', borderRadius: '1px' }}></div>
                  </div>
                  <p style={{ fontSize: '12px', color: '#94a3b8', marginTop: '16px' }}>Three-brand accent divider for section breaks</p>
                </div>
                {/* Module accent chips */}
                <div className="box" style={{ padding: '32px', textAlign: 'center' }}>
                  <p style={{ fontSize: '11px', fontWeight: '600', color: '#64748b', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '20px' }}>Module Tags</p>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '12px', fontWeight: '600', color: '#1f476a', background: '#1f476a14', padding: '6px 14px', borderRadius: '20px' }}>Visibility</span>
                    <span style={{ fontSize: '12px', fontWeight: '600', color: '#0eb2af', background: '#0eb2af14', padding: '6px 14px', borderRadius: '20px' }}>Intelligence</span>
                    <span style={{ fontSize: '12px', fontWeight: '600', color: '#d97706', background: '#fbbf2414', padding: '6px 14px', borderRadius: '20px' }}>Value</span>
                  </div>
                  <p style={{ fontSize: '12px', color: '#94a3b8', marginTop: '16px' }}>Use to categorize lessons, resources, and assessments</p>
                </div>
                {/* A-mark callout frame */}
                <div className="box" style={{ padding: '32px', textAlign: 'center' }}>
                  <p style={{ fontSize: '11px', fontWeight: '600', color: '#64748b', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '20px' }}>Quote Frame</p>
                  <div style={{ position: 'relative', padding: '24px 32px' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '3px', height: '100%', background: 'linear-gradient(to bottom, #1f476a, #0eb2af, #fbbf24)', borderRadius: '2px' }}></div>
                    <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '16px', fontWeight: '300', color: '#1e293b', lineHeight: '1.6', fontStyle: 'italic', textAlign: 'left', margin: 0 }}>
                      "The platform should feel like a conversation with your most prepared advisor."
                    </p>
                    <p style={{ fontSize: '12px', color: '#64748b', textAlign: 'left', marginTop: '8px' }}>- Joe Thompson, CEO</p>
                  </div>
                  <p style={{ fontSize: '12px', color: '#94a3b8', marginTop: '12px' }}>Gradient accent line for attributed quotes</p>
                </div>
                {/* Icon as watermark */}
                <div className="box" style={{ padding: '32px', textAlign: 'center' }}>
                  <p style={{ fontSize: '11px', fontWeight: '600', color: '#64748b', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '20px' }}>Watermark Treatment</p>
                  <div style={{ position: 'relative', background: '#f8fafc', borderRadius: '8px', padding: '32px', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', right: '-20px', bottom: '-20px', opacity: 0.06 }}>
                      <Icon size={140} />
                    </div>
                    <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '16px', fontWeight: '400', color: '#1e293b', position: 'relative', zIndex: 1, margin: 0 }}>Assessment Complete</p>
                    <p style={{ fontSize: '13px', color: '#64748b', position: 'relative', zIndex: 1, margin: '4px 0 0 0' }}>Module 01 - Visibility</p>
                  </div>
                  <p style={{ fontSize: '12px', color: '#94a3b8', marginTop: '16px' }}>Subtle icon watermark for branded documents</p>
                </div>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <button className="btn btn-primary">Request a Demo</button>
            </div>
          </>
        )}

        {/* ==================== CURRICULUM ==================== */}
        {activeTab === 'curriculum' && (
          <Placeholder icon="&#128218;" title="Sales Deck" description="Module breakdown, learning objectives, lesson content, and assessment methods for the TARGA AI platform." />
        )}

        {/* ==================== EMAIL ==================== */}
        {activeTab === 'email' && (
          <>
            <h2 className="section-title">Email Templates</h2>
            <p className="section-subtitle">
              Branded email signatures, marketing email layouts, and formatting standards for all outbound communications.
            </p>

            {/* Email Signature - Steve */}
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Email Signatures</h3>
            <div className="grid-2" style={{ marginBottom: '40px' }}>
              <div className="card-white" style={{ margin: 0 }}>
                <p style={{ fontSize: '11px', fontWeight: '600', color: '#64748b', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '16px' }}>Joe Thompson</p>
                <div style={{ background: '#fafafa', borderRadius: '8px', padding: '24px' }}>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{ borderRight: '2px solid #0eb2af', paddingRight: '16px', flexShrink: 0 }}>
                      <Icon size={36} />
                    </div>
                    <div>
                      <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '15px', fontWeight: '400', color: '#1e293b', margin: '0 0 2px 0' }}>Joe Thompson</p>
                      <p style={{ fontSize: '12px', color: '#1f476a', margin: '0 0 10px 0' }}>CEO, TARGA AI</p>
                      <div style={{ fontSize: '11px', color: '#64748b', lineHeight: '1.8' }}>
                        joe@targa.ai<br/>
                        (555) 123-4567
                      </div>
                      <div style={{ display: 'flex', gap: '6px', marginTop: '10px' }}>
                        <div style={{ height: '2px', width: '16px', background: '#1f476a', borderRadius: '1px' }}></div>
                        <div style={{ height: '2px', width: '16px', background: '#0eb2af', borderRadius: '1px' }}></div>
                        <div style={{ height: '2px', width: '16px', background: '#fbbf24', borderRadius: '1px' }}></div>
                      </div>
                      <p style={{ fontSize: '10px', color: '#94a3b8', marginTop: '8px', fontStyle: 'italic' }}>TARGA AI - targa.ai</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-white" style={{ margin: 0 }}>
                <p style={{ fontSize: '11px', fontWeight: '600', color: '#64748b', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '16px' }}>Mark Sternberger</p>
                <div style={{ background: '#fafafa', borderRadius: '8px', padding: '24px' }}>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{ borderRight: '2px solid #0eb2af', paddingRight: '16px', flexShrink: 0 }}>
                      <Icon size={36} />
                    </div>
                    <div>
                      <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '15px', fontWeight: '400', color: '#1e293b', margin: '0 0 2px 0' }}>Mark Sternberger</p>
                      <p style={{ fontSize: '12px', color: '#1f476a', margin: '0 0 10px 0' }}>CTO, TARGA AI</p>
                      <div style={{ fontSize: '11px', color: '#64748b', lineHeight: '1.8' }}>
                        mark@targa.ai<br/>
                        (555) 987-6543
                      </div>
                      <div style={{ display: 'flex', gap: '6px', marginTop: '10px' }}>
                        <div style={{ height: '2px', width: '16px', background: '#1f476a', borderRadius: '1px' }}></div>
                        <div style={{ height: '2px', width: '16px', background: '#0eb2af', borderRadius: '1px' }}></div>
                        <div style={{ height: '2px', width: '16px', background: '#fbbf24', borderRadius: '1px' }}></div>
                      </div>
                      <p style={{ fontSize: '10px', color: '#94a3b8', marginTop: '8px', fontStyle: 'italic' }}>TARGA AI - targa.ai</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Signature specs */}
            <div className="card-white" style={{ marginBottom: '48px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '24px' }}>Signature Specifications</h3>
              <table className="spec-table">
                <thead>
                  <tr>
                    <th>Element</th>
                    <th>Specification</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td style={{ fontWeight: '600' }}>Icon</td><td>A-mark icon, 36px height, left of divider</td></tr>
                  <tr><td style={{ fontWeight: '600' }}>Divider</td><td>2px solid Teal (#0eb2af), full height</td></tr>
                  <tr><td style={{ fontWeight: '600' }}>Name</td><td>Space Grotesk Regular 400, 15px, #1e293b</td></tr>
                  <tr><td style={{ fontWeight: '600' }}>Title</td><td>Inter Regular 400, 12px, #1f476a</td></tr>
                  <tr><td style={{ fontWeight: '600' }}>Contact</td><td>Inter Regular 400, 11px, #64748b</td></tr>
                  <tr><td style={{ fontWeight: '600' }}>Brand Accent Bar</td><td>Three 16px bars (Navy/Teal/Gold), 2px height, 6px gap</td></tr>
                  <tr><td style={{ fontWeight: '600' }}>Tagline</td><td>Inter Italic 400, 10px, #94a3b8 - differs per person</td></tr>
                  <tr><td style={{ fontWeight: '600' }}>Format</td><td>HTML email signature - no images where possible (inline SVG preferred)</td></tr>
                </tbody>
              </table>
            </div>

            {/* Marketing Email - Discovery Outreach */}
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Marketing Email - Discovery Outreach</h3>
            <div className="grid-2" style={{ marginBottom: '48px' }}>
              <div style={{ background: '#f1f5f9', borderRadius: '12px', padding: '24px' }}>
                <div style={{ background: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', maxWidth: '480px', margin: '0 auto' }}>
                  {/* Email header */}
                  <div style={{ background: 'linear-gradient(135deg, #132f4a, #1a3a5c)', padding: '32px 32px 24px 32px', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', right: '-20px', top: '-20px', opacity: 0.05 }}>
                      <Icon size={120} />
                    </div>
                    <Icon size={28} />
                    <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '20px', fontWeight: '300', color: 'white', margin: '16px 0 4px 0', lineHeight: '1.3' }}>See what your organization is missing.</p>
                    <p style={{ fontSize: '12px', color: '#94a3b8', margin: 0 }}>The TARGA AI</p>
                  </div>
                  {/* Email body */}
                  <div style={{ padding: '28px 32px' }}>
                    <div style={{ height: '10px', background: '#f1f5f9', borderRadius: '3px', marginBottom: '10px', width: '95%' }}></div>
                    <div style={{ height: '10px', background: '#f1f5f9', borderRadius: '3px', marginBottom: '10px', width: '100%' }}></div>
                    <div style={{ height: '10px', background: '#f1f5f9', borderRadius: '3px', marginBottom: '10px', width: '80%' }}></div>
                    <div style={{ height: '10px', background: '#f1f5f9', borderRadius: '3px', marginBottom: '24px', width: '60%' }}></div>

                    {/* Brand capability callouts */}
                    <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
                      {[
                        { label: 'Discover', color: '#1f476a' },
                        { label: 'Integrate', color: '#0eb2af' },
                        { label: 'Convert', color: '#fbbf24' },
                      ].map((p, i) => (
                        <div key={i} style={{ flex: 1, textAlign: 'center', padding: '12px 8px', borderTop: `3px solid ${p.color}`, background: '#f8fafc', borderRadius: '0 0 6px 6px' }}>
                          <p style={{ fontSize: '11px', fontWeight: '600', color: p.color, margin: 0 }}>{p.label}</p>
                        </div>
                      ))}
                    </div>

                    <div style={{ height: '10px', background: '#f1f5f9', borderRadius: '3px', marginBottom: '10px', width: '90%' }}></div>
                    <div style={{ height: '10px', background: '#f1f5f9', borderRadius: '3px', marginBottom: '24px', width: '70%' }}></div>

                    {/* CTA button */}
                    <div style={{ textAlign: 'center' }}>
                      <button className="btn btn-primary" style={{ fontSize: '13px', padding: '12px 28px' }}>Schedule a Discovery Conversation</button>
                    </div>
                  </div>
                  {/* Email footer */}
                  <div style={{ padding: '20px 32px', borderTop: '1px solid #f1f5f9', textAlign: 'center' }}>
                    <Icon size={20} />
                    <p style={{ fontSize: '10px', color: '#94a3b8', margin: '6px 0 0 0' }}>Targatek Inc. - targa.ai</p>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div className="card-white" style={{ margin: 0, flex: 1 }}>
                  <h4 style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b', marginBottom: '12px' }}>Layout Structure</h4>
                  {['Dark gradient header with icon and headline', 'Body text: 2-3 short paragraphs max', 'Brand accent strip (Visibility / Intelligence / Value)', 'Single primary CTA button (Blue #0eb2af)', 'Centered footer with icon and company link'].map((item, i) => (
                    <div key={i} className="checklist-item" style={{ marginBottom: '10px' }}>
                      <div className="checklist-icon">{'\u2713'}</div>
                      <div className="checklist-text" style={{ fontSize: '13px' }}>{item}</div>
                    </div>
                  ))}
                </div>
                <div className="card-white" style={{ margin: 0 }}>
                  <h4 style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b', marginBottom: '8px' }}>Subject Line Guidelines</h4>
                  <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.7', margin: 0 }}>
                    Lead with insight or question, not company name. Keep under 50 characters. No exclamation marks, no ALL CAPS. Examples: "What your org chart isn't showing you" or "Why every other experience has a name except yours."
                  </p>
                </div>
              </div>
            </div>

            {/* Marketing Email - Platform Launch */}
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Marketing Email - Platform Launch</h3>
            <div className="grid-2" style={{ marginBottom: '48px' }}>
              <div style={{ background: '#f1f5f9', borderRadius: '12px', padding: '24px' }}>
                <div style={{ background: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', maxWidth: '480px', margin: '0 auto' }}>
                  {/* Navy header for launch */}
                  <div style={{ background: 'linear-gradient(135deg, #1f476a, #334155)', padding: '32px', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', left: '-40px', bottom: '-40px', opacity: 0.06 }}>
                      <Icon size={160} />
                    </div>
                    <div style={{ display: 'flex', gap: '20px', alignItems: 'center', position: 'relative', zIndex: 1 }}>
                      <div style={{ width: '80px', height: '80px', background: 'linear-gradient(135deg, #1a3a5c, #132f4a)', borderRadius: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '12px', flexShrink: 0, border: '1px solid rgba(255,255,255,0.08)' }}>
                        <Icon size={32} />
                      </div>
                      <div>
                        <p style={{ fontSize: '10px', fontWeight: '600', color: '#fbbf24', letterSpacing: '1px', textTransform: 'uppercase', margin: '0 0 6px 0' }}>Now Available</p>
                        <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '18px', fontWeight: '300', color: 'white', lineHeight: '1.3', margin: '0 0 4px 0' }}>TARGA AI 2.0</p>
                        <p style={{ fontSize: '11px', color: '#cbd5e1', margin: 0 }}>AI-Native Leadership Platform</p>
                      </div>
                    </div>
                  </div>
                  {/* Body */}
                  <div style={{ padding: '28px 32px' }}>
                    <div style={{ height: '10px', background: '#f1f5f9', borderRadius: '3px', marginBottom: '10px', width: '100%' }}></div>
                    <div style={{ height: '10px', background: '#f1f5f9', borderRadius: '3px', marginBottom: '10px', width: '85%' }}></div>
                    <div style={{ height: '10px', background: '#f1f5f9', borderRadius: '3px', marginBottom: '24px', width: '70%' }}></div>

                    <div style={{ borderLeft: '3px solid #0eb2af', paddingLeft: '16px', marginBottom: '24px' }}>
                      <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '14px', fontWeight: '300', color: '#1e293b', fontStyle: 'italic', lineHeight: '1.6', margin: 0 }}>
                        "What if you could see — at a glance — what actually drives enterprise value in your organization?"
                      </p>
                    </div>

                    <div style={{ textAlign: 'center' }}>
                      <button className="btn btn-primary" style={{ fontSize: '13px', padding: '12px 28px' }}>Request a Demo</button>
                    </div>
                  </div>
                  <div style={{ padding: '20px 32px', borderTop: '1px solid #f1f5f9', textAlign: 'center' }}>
                    <Icon size={20} />
                    <p style={{ fontSize: '10px', color: '#94a3b8', margin: '6px 0 0 0' }}>Targatek Inc. - targa.ai</p>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div className="card-white" style={{ margin: 0, flex: 1 }}>
                  <h4 style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b', marginBottom: '12px' }}>Design Notes</h4>
                  <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.7', margin: '0 0 12px 0' }}>
                    Navy gradient header to differentiate from the standard outreach template. Platform icon left, launch details right. Gold accent for availability status.
                  </p>
                  <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.7', margin: 0 }}>
                    Pull quote uses Teal accent line to tie to Intelligence. Single CTA - "Request a Demo" or "Join the Pilot."
                  </p>
                </div>
                <div className="card-white" style={{ margin: 0 }}>
                  <h4 style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b', marginBottom: '8px' }}>Send Sequence</h4>
                  {['Teaser (May): Key capability preview', 'Feature reveal (June): Full platform screenshots', 'Early access (July): Pilot signup CTA', 'Launch (August): Personal note from Joe Thompson', 'Follow-up (September): Pilot success stories'].map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '8px', alignItems: 'flex-start' }}>
                      <span style={{ fontSize: '11px', fontWeight: '600', color: '#1f476a', background: '#1f476a10', padding: '2px 8px', borderRadius: '4px', flexShrink: 0 }}>{i + 1}</span>
                      <span style={{ fontSize: '12px', color: '#64748b', lineHeight: '1.5' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Transactional/Welcome Email */}
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Platform Onboarding Email</h3>
            <div className="grid-2" style={{ marginBottom: '48px' }}>
              <div style={{ background: '#f1f5f9', borderRadius: '12px', padding: '24px' }}>
                <div style={{ background: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', maxWidth: '480px', margin: '0 auto' }}>
                  {/* Brand accent bar top */}
                  <div style={{ height: '4px', background: 'linear-gradient(to right, #1f476a 30%, #0eb2af 30%, #0eb2af 55%, #1f476a 55%, #1f476a 75%, #fbbf24 75%)' }}></div>
                  <div style={{ padding: '32px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                      <Icon size={36} />
                      <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '22px', fontWeight: '300', color: '#1e293b', margin: '16px 0 4px 0' }}>Welcome to the Program</p>
                      <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>Your platform onboarding begins now.</p>
                    </div>

                    <div style={{ height: '10px', background: '#f1f5f9', borderRadius: '3px', marginBottom: '10px', width: '100%' }}></div>
                    <div style={{ height: '10px', background: '#f1f5f9', borderRadius: '3px', marginBottom: '10px', width: '90%' }}></div>
                    <div style={{ height: '10px', background: '#f1f5f9', borderRadius: '3px', marginBottom: '24px', width: '75%' }}></div>

                    {/* Three steps */}
                    {[
                      { num: '1', label: 'Access your learning portal', color: '#1f476a' },
                      { num: '2', label: 'Review Module 01: Visibility', color: '#0eb2af' },
                      { num: '3', label: 'Schedule your first onboarding session', color: '#fbbf24' },
                    ].map((step, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px', padding: '12px 16px', background: '#f8fafc', borderRadius: '8px' }}>
                        <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: step.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '12px', fontWeight: '600', flexShrink: 0 }}>{step.num}</div>
                        <span style={{ fontSize: '13px', color: '#1e293b' }}>{step.label}</span>
                      </div>
                    ))}

                    <div style={{ textAlign: 'center', marginTop: '24px' }}>
                      <button className="btn btn-primary" style={{ fontSize: '13px', padding: '12px 28px' }}>Access Your Portal</button>
                    </div>
                  </div>
                  <div style={{ padding: '20px 32px', borderTop: '1px solid #f1f5f9', textAlign: 'center' }}>
                    <Icon size={20} />
                    <p style={{ fontSize: '10px', color: '#94a3b8', margin: '6px 0 0 0' }}>Targatek Inc. - targa.ai</p>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div className="card-white" style={{ margin: 0, flex: 1 }}>
                  <h4 style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b', marginBottom: '12px' }}>Template Purpose</h4>
                  <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.7', margin: 0 }}>
                    Sent immediately after a new enterprise team is onboarded to the TARGA AI platform. This is their first branded touchpoint as a platform user - it should feel premium and welcoming, not transactional. The three numbered steps use brand colors to foreshadow the platform structure.
                  </p>
                </div>
                <div className="card-white" style={{ margin: 0 }}>
                  <h4 style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b', marginBottom: '8px' }}>Layout Notes</h4>
                  <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.7', margin: 0 }}>
                    White background with brand gradient top bar (not dark header) to differentiate from marketing emails. Centered icon and welcome message. Numbered onboarding steps with brand-colored circles. Single "Access Your Portal" CTA.
                  </p>
                </div>
              </div>
            </div>

            {/* Email formatting rules */}
            <div className="card-white">
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '24px' }}>Email Design Standards</h3>
              <div className="grid-2">
                <div>
                  <h4 style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b', marginBottom: '16px' }}>Layout Rules</h4>
                  {[
                    'Max width: 600px centered (email client standard)',
                    'Header: 32px padding, icon at 28px height',
                    'Body: 32px horizontal padding, 16px base font size',
                    'CTA: Blue #0eb2af, centered, minimum 44px height',
                    'Footer: Icon 20px, 10px legal text, centered',
                    'One primary CTA per email - never two competing buttons',
                  ].map((item, i) => (
                    <div key={i} className="checklist-item" style={{ marginBottom: '10px' }}>
                      <div className="checklist-icon">{'\u2713'}</div>
                      <div className="checklist-text" style={{ fontSize: '13px' }}>{item}</div>
                    </div>
                  ))}
                </div>
                <div>
                  <h4 style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b', marginBottom: '16px' }}>Typography in Email</h4>
                  <table className="spec-table" style={{ fontSize: '13px' }}>
                    <tbody>
                      <tr><td style={{ fontWeight: '600' }}>Headlines</td><td>Georgia (Space Grotesk fallback), 20-22px, Light</td></tr>
                      <tr><td style={{ fontWeight: '600' }}>Body</td><td>Arial (Inter fallback), 14-16px, #1f476a</td></tr>
                      <tr><td style={{ fontWeight: '600' }}>CTA Text</td><td>Arial Bold, 13-14px, white on #0eb2af</td></tr>
                      <tr><td style={{ fontWeight: '600' }}>Fine Print</td><td>Arial, 10px, #94a3b8</td></tr>
                    </tbody>
                  </table>
                  <p style={{ fontSize: '12px', color: '#94a3b8', marginTop: '12px', lineHeight: '1.6' }}>
                    Note: Web fonts (Space Grotesk, Inter) don't render reliably in most email clients. Use Georgia and Arial as safe fallbacks. The brand feel carries through color, spacing, and the icon mark.
                  </p>
                </div>
              </div>
            </div>

            {/* Template variants table */}
            <div className="card-white">
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '24px' }}>Template Variants</h3>
              <table className="spec-table">
                <thead>
                  <tr>
                    <th>Template</th>
                    <th>Header Style</th>
                    <th>Trigger</th>
                    <th>CTA</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ fontWeight: '600' }}>Discovery Outreach</td>
                    <td>Dark gradient</td>
                    <td>Manual send / marketing automation</td>
                    <td>Schedule a Discovery Conversation</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: '600' }}>Platform Launch</td>
                    <td>Navy gradient</td>
                    <td>Launch campaign sequence</td>
                    <td>Request a Demo / Join the Pilot</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: '600' }}>Platform Onboarding</td>
                    <td>Brand accent top bar (white bg)</td>
                    <td>New team provisioned</td>
                    <td>Access Your Portal</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: '600' }}>Module Completion</td>
                    <td>Module color of completed training</td>
                    <td>Training module completed</td>
                    <td>Continue to Next Module</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: '600' }}>Training Complete</td>
                    <td>Dark gradient + completion summary</td>
                    <td>All three modules completed</td>
                    <td>Explore Advanced Features</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* ==================== SOCIAL ==================== */}
        {activeTab === 'social' && (
          <>
            <h2 className="section-title">Social Media</h2>
            <p className="section-subtitle">
              LinkedIn creative templates, post formats, and content guidelines. All examples use the approved brand system.
            </p>

            {/* LinkedIn Post - Thought Leadership */}
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Thought Leadership Post</h3>
            <div className="grid-2" style={{ marginBottom: '48px' }}>
              <div style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', overflow: 'hidden' }}>
                {/* Post image */}
                <div style={{ background: 'linear-gradient(135deg, #132f4a, #1a3a5c)', padding: '48px 40px', position: 'relative', overflow: 'hidden', aspectRatio: '1200/627' }}>
                  <div style={{ position: 'absolute', right: '-40px', bottom: '-40px', opacity: 0.05 }}>
                    <Icon size={240} />
                  </div>
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ display: 'flex', gap: '6px', marginBottom: '24px' }}>
                      <div style={{ height: '3px', width: '32px', background: '#1f476a', borderRadius: '2px' }}></div>
                      <div style={{ height: '3px', width: '32px', background: '#0eb2af', borderRadius: '2px' }}></div>
                      <div style={{ height: '3px', width: '32px', background: '#fbbf24', borderRadius: '2px' }}></div>
                    </div>
                    <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '22px', fontWeight: '300', color: 'white', lineHeight: '1.4', margin: '0 0 16px 0', maxWidth: '320px' }}>
                      Your org chart shows who reports to whom. It doesn't show who's creating value.
                    </p>
                    <p style={{ fontSize: '12px', color: '#94a3b8', margin: 0 }}>Joe Thompson - TARGA AI</p>
                  </div>
                </div>
                {/* Post caption preview */}
                <div style={{ padding: '20px' }}>
                  <p style={{ fontSize: '12px', color: '#64748b', lineHeight: '1.7', margin: 0 }}>
                    <strong style={{ color: '#1e293b' }}>Caption format:</strong> Hook question or bold statement. 2-3 sentences of insight. CTA to discovery conversation or demo request.
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div className="card-white" style={{ margin: 0, flex: 1 }}>
                  <h4 style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b', marginBottom: '12px' }}>Image Specs</h4>
                  <table className="spec-table" style={{ fontSize: '13px' }}>
                    <tbody>
                      <tr><td style={{ fontWeight: '600', width: '120px' }}>Size</td><td>1200 x 627px</td></tr>
                      <tr><td style={{ fontWeight: '600' }}>Background</td><td>Dark gradient (#132f4a to #1a3a5c)</td></tr>
                      <tr><td style={{ fontWeight: '600' }}>Typography</td><td>Space Grotesk Light 300, white</td></tr>
                      <tr><td style={{ fontWeight: '600' }}>Decoration</td><td>Three-brand accent divider bar, icon watermark</td></tr>
                    </tbody>
                  </table>
                </div>
                <div className="card-white" style={{ margin: 0 }}>
                  <h4 style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b', marginBottom: '8px' }}>Post Guidelines</h4>
                  <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.7', margin: 0 }}>
                    Lead with insight, not promotion. Reference LX and the platform capabilities without jargon. End with a question or soft CTA. Tag the TARGA AI company page.
                  </p>
                </div>
              </div>
            </div>

            {/* LinkedIn Post - Pilot Launch Announcement */}
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Pilot Launch Announcement</h3>
            <div className="grid-2" style={{ marginBottom: '48px' }}>
              <div style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', overflow: 'hidden' }}>
                <div style={{ background: 'white', padding: '48px 40px', position: 'relative', overflow: 'hidden', aspectRatio: '1200/627', border: '1px solid #f1f5f9' }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(to right, #1f476a 30%, #0eb2af 30%, #0eb2af 55%, #1f476a 55%, #1f476a 75%, #fbbf24 75%)' }}></div>
                  <div style={{ position: 'absolute', right: '-20px', bottom: '-20px', opacity: 0.04 }}>
                    <Icon size={200} />
                  </div>
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <Icon size={32} />
                    <p style={{ fontSize: '11px', fontWeight: '600', color: '#0eb2af', letterSpacing: '0.5px', textTransform: 'uppercase', margin: '16px 0 8px 0' }}>Now Live</p>
                    <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '24px', fontWeight: '300', color: '#1e293b', lineHeight: '1.3', margin: '0 0 8px 0' }}>Pilot Program Launch</p>
                    <p style={{ fontSize: '13px', color: '#64748b', margin: '0 0 20px 0' }}>TARGA AI - Enterprise Beta 2026</p>
                    <div style={{ display: 'flex', gap: '16px' }}>
                      {['Visibility', 'Intelligence', 'Value'].map((p, i) => (
                        <span key={i} style={{ fontSize: '10px', fontWeight: '600', color: ['#1f476a', '#0eb2af', '#d97706'][i], background: ['#1f476a10', '#0eb2af10', '#fbbf2410'][i], padding: '4px 10px', borderRadius: '12px' }}>{p}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div style={{ padding: '20px' }}>
                  <p style={{ fontSize: '12px', color: '#64748b', lineHeight: '1.7', margin: 0 }}>
                    <strong style={{ color: '#1e293b' }}>Caption format:</strong> Announce pilot milestone. Mention platform capabilities and key differentiators. Reinforce enterprise positioning. Tag pilot partners where permitted.
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div className="card-white" style={{ margin: 0, flex: 1 }}>
                  <h4 style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b', marginBottom: '12px' }}>When to Use</h4>
                  <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.7', margin: 0 }}>
                    Post from the company page when a new pilot customer goes live on the platform. Tag the partner company where NDA allows. This drives social proof and demonstrates market traction.
                  </p>
                </div>
                <div className="card-white" style={{ margin: 0 }}>
                  <h4 style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b', marginBottom: '8px' }}>Layout Notes</h4>
                  <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.7', margin: 0 }}>
                    Light background with brand gradient top bar. Capability tags visually reinforce the platform framework. Clean, milestone-forward — not promotional.
                  </p>
                </div>
              </div>
            </div>

            {/* LinkedIn Post - Platform Launch */}
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Platform Launch</h3>
            <div className="grid-2" style={{ marginBottom: '48px' }}>
              <div style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', overflow: 'hidden' }}>
                <div style={{ background: 'linear-gradient(135deg, #1f476a, #334155)', padding: '48px 40px', position: 'relative', overflow: 'hidden', aspectRatio: '1200/627' }}>
                  <div style={{ position: 'absolute', left: '-60px', top: '-60px', opacity: 0.06 }}>
                    <Icon size={280} />
                  </div>
                  <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '32px', height: '100%' }}>
                    {/* Platform mockup */}
                    <div style={{ width: '120px', height: '160px', background: 'linear-gradient(135deg, #1a3a5c, #132f4a)', borderRadius: '8px', boxShadow: '8px 4px 20px rgba(0,0,0,0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '16px', flexShrink: 0, border: '1px solid rgba(255,255,255,0.1)' }}>
                      <Icon size={24} />
                      <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '11px', fontWeight: '400', color: 'white', textAlign: 'center', marginTop: '8px', lineHeight: '1.2' }}>TARGA AI</p>
                      <p style={{ fontSize: '7px', color: '#94a3b8', textAlign: 'center', marginTop: '4px' }}>Platform 2.0</p>
                    </div>
                    <div>
                      <p style={{ fontSize: '10px', fontWeight: '600', color: '#fbbf24', letterSpacing: '1px', textTransform: 'uppercase', margin: '0 0 8px 0' }}>July 2026</p>
                      <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '20px', fontWeight: '300', color: 'white', lineHeight: '1.3', margin: '0 0 8px 0' }}>TARGA AI<br/>Platform 2.0</p>
                      <p style={{ fontSize: '11px', color: '#cbd5e1', lineHeight: '1.5', margin: 0 }}>AI-native agentic architecture. The next generation Leader Experience.</p>
                    </div>
                  </div>
                </div>
                <div style={{ padding: '20px' }}>
                  <p style={{ fontSize: '12px', color: '#64748b', lineHeight: '1.7', margin: 0 }}>
                    <strong style={{ color: '#1e293b' }}>Caption format:</strong> Announce the platform milestone with a key capability. Link to demo request or landing page. Use the launch as a credibility anchor for all other content.
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div className="card-white" style={{ margin: 0, flex: 1 }}>
                  <h4 style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b', marginBottom: '12px' }}>Campaign Sequence</h4>
                  {['Teaser: Key capability preview (no full UI reveal)', 'Feature reveal: Full platform screenshots with launch date', 'Early access: Direct CTA for pilot signups', 'Launch day: Personal post from Joe Thompson', 'Post-launch: Pilot success stories and testimonials'].map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '10px', alignItems: 'flex-start' }}>
                      <span style={{ fontSize: '11px', fontWeight: '600', color: '#1f476a', background: '#1f476a10', padding: '2px 8px', borderRadius: '4px', flexShrink: 0 }}>{i + 1}</span>
                      <span style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.5' }}>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="card-white" style={{ margin: 0 }}>
                  <h4 style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b', marginBottom: '8px' }}>Layout Notes</h4>
                  <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.7', margin: 0 }}>
                    Navy gradient background to differentiate from thought leadership posts. Platform mockup left, copy right. Gold accent for launch date.
                  </p>
                </div>
              </div>
            </div>

            {/* LinkedIn Post - Carousel/Video */}
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Video Series Frame</h3>
            <div className="grid-2" style={{ marginBottom: '48px' }}>
              <div style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', overflow: 'hidden' }}>
                <div style={{ background: '#132f4a', padding: '0', position: 'relative', overflow: 'hidden', aspectRatio: '1200/627' }}>
                  {/* Video frame mockup */}
                  <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '16px', left: '16px', display: 'flex', alignItems: 'center', gap: '8px', zIndex: 2 }}>
                      <Icon size={20} />
                      <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.6)', fontWeight: '500' }}>TARGA AI</span>
                    </div>
                    <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', background: 'linear-gradient(transparent, rgba(0,0,0,0.8))', padding: '40px 24px 20px 24px', zIndex: 2 }}>
                      <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '16px', fontWeight: '300', color: 'white', margin: '0 0 4px 0' }}>Why CEOs Fly Blind on Enterprise Value</p>
                      <p style={{ fontSize: '11px', color: '#94a3b8', margin: 0 }}>Joe Thompson - Episode 1</p>
                    </div>
                    {/* Play button */}
                    <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid rgba(255,255,255,0.3)', zIndex: 2 }}>
                      <div style={{ width: 0, height: 0, borderLeft: '18px solid white', borderTop: '11px solid transparent', borderBottom: '11px solid transparent', marginLeft: '4px' }}></div>
                    </div>
                    {/* Fake video background */}
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #1e293b 0%, #334155 50%, #1e293b 100%)', opacity: 0.5 }}></div>
                  </div>
                </div>
                <div style={{ padding: '20px' }}>
                  <p style={{ fontSize: '12px', color: '#64748b', lineHeight: '1.7', margin: 0 }}>
                    <strong style={{ color: '#1e293b' }}>Video overlay:</strong> Icon lockup top-left, episode title bottom with gradient fade. Consistent across all series episodes.
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div className="card-white" style={{ margin: 0, flex: 1 }}>
                  <h4 style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b', marginBottom: '12px' }}>LinkedIn Video Series</h4>
                  <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.7', margin: '0 0 16px 0' }}>
                    6-episode series tied to the TARGA AI platform launch. Each episode maps to enterprise pain points and builds toward the demo request.
                  </p>
                  {['Why CEOs fly blind on enterprise value', 'How fragmented tools fail leadership teams', 'The Leader Experience — defining a new category', 'Inside the platform: AI-native visibility', 'Pilot customer story: measurable outcomes', 'Request a demo: the 100 CEO initiative'].map((ep, i) => (
                    <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '8px', alignItems: 'center' }}>
                      <span style={{ fontSize: '10px', fontWeight: '600', color: ['#1f476a', '#0eb2af', '#1f476a', '#0eb2af', '#d97706', '#1f476a'][i], background: ['#1f476a10', '#0eb2af10', '#1f476a10', '#0eb2af10', '#fbbf2410', '#1f476a10'][i], padding: '2px 8px', borderRadius: '4px', flexShrink: 0 }}>EP {i + 1}</span>
                      <span style={{ fontSize: '12px', color: '#64748b' }}>{ep}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Content Guidelines */}
            <div className="card-white">
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '24px' }}>Content Guidelines</h3>
              <div className="grid-3">
                <div className="do-card">
                  <h4 style={{ color: '#16a34a', fontWeight: '600', fontSize: '13px', marginBottom: '12px' }}>{'\u2713'} DO</h4>
                  <p style={{ fontSize: '13px', color: '#1f476a', margin: 0, lineHeight: '1.7' }}>
                    Lead with insight over promotion. Use client outcomes as proof points. Reference LX and the platform capabilities by name. Tag partners and pilot participants. Link to discovery conversations.
                  </p>
                </div>
                <div className="dont-card">
                  <h4 style={{ color: '#dc2626', fontWeight: '600', fontSize: '13px', marginBottom: '12px' }}>{'\u2717'} DON'T</h4>
                  <p style={{ fontSize: '13px', color: '#1f476a', margin: 0, lineHeight: '1.7' }}>
                    Use transactional language ("buy", "purchase", "deal"). Post without a visual. Use internal methodology jargon. Post more than 3x per week from the company page.
                  </p>
                </div>
                <div className="card-white" style={{ margin: 0, padding: '24px' }}>
                  <h4 style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b', marginBottom: '12px' }}>Hashtags</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {['#TARGAAI', '#LeaderExperience', '#LX', '#PerformanceAutomation', '#EnterpriseLeadership', '#ValueCreation'].map((tag, i) => (
                      <span key={i} style={{ fontSize: '11px', color: '#0eb2af', background: '#0eb2af10', padding: '4px 10px', borderRadius: '12px' }}>{tag}</span>
                    ))}
                  </div>
                  <p style={{ fontSize: '12px', color: '#94a3b8', marginTop: '12px' }}>Use 3-4 per post. First two are mandatory.</p>
                </div>
              </div>
            </div>
          </>
        )}

        {/* ==================== CERTIFICATE ==================== */}
        {activeTab === 'certificate' && (
          <>
            <h2 className="section-title">Sales Collateral</h2>
            <p className="section-subtitle">
              One-pagers, leave-behinds, and branded collateral templates for CEO conversations and pilot engagements.
            </p>

            {/* Certificate mockup */}
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Executive One-Pager</h3>
            <div className="card-white" style={{ padding: '48px', marginBottom: '48px' }}>
              <div style={{ background: 'white', border: '2px solid #e2e8f0', borderRadius: '4px', padding: '60px', maxWidth: '720px', margin: '0 auto', position: 'relative', overflow: 'hidden' }}>
                {/* Top brand accent bar */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(to right, #1f476a 30%, #0eb2af 30%, #0eb2af 55%, #1f476a 55%, #1f476a 75%, #fbbf24 75%)' }}></div>
                {/* Corner watermark */}
                <div style={{ position: 'absolute', right: '-30px', bottom: '-30px', opacity: 0.04 }}>
                  <Icon size={200} />
                </div>

                <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                  <Icon size={40} />
                  <p style={{ fontSize: '10px', fontWeight: '600', color: '#64748b', letterSpacing: '2px', textTransform: 'uppercase', margin: '16px 0 4px 0' }}>TARGA AI</p>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '28px', fontWeight: '300', color: '#1e293b', margin: '24px 0 8px 0' }}>The Leader Experience™</p>
                  <p style={{ fontSize: '14px', color: '#64748b', margin: '0 0 32px 0' }}>AI-Powered Value Creation for Enterprise Leaders</p>

                  <p style={{ fontSize: '14px', color: '#64748b', margin: '16px 0 32px 0', lineHeight: '1.7', maxWidth: '480px', marginLeft: 'auto', marginRight: 'auto' }}>
                    The leadership performance platform that turns strategic goals into measurable outcomes — giving executives real-time visibility into what drives enterprise value.
                  </p>

                  {/* Capability badges */}
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '32px' }}>
                    {[
                      { label: 'Visibility', color: '#1f476a' },
                      { label: 'Intelligence', color: '#0eb2af' },
                      { label: 'Value', color: '#fbbf24' },
                    ].map((p, i) => (
                      <div key={i} style={{ textAlign: 'center' }}>
                        <div style={{ width: '48px', height: '48px', borderRadius: '50%', border: `2px solid ${p.color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 6px auto' }}>
                          <span style={{ color: p.color, fontSize: '16px', fontWeight: '600' }}>{'\u2713'}</span>
                        </div>
                        <p style={{ fontSize: '10px', fontWeight: '600', color: p.color, margin: 0 }}>{p.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Contact */}
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '80px', marginTop: '24px' }}>
                    <div style={{ textAlign: 'center' }}>
                      <p style={{ fontSize: '12px', fontWeight: '600', color: '#1e293b', margin: '0 0 2px 0' }}>Joe Thompson</p>
                      <p style={{ fontSize: '11px', color: '#64748b', margin: 0 }}>CEO, TARGA AI</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginTop: '32px', fontSize: '11px', color: '#94a3b8' }}>
                    <span>targa.ai</span>
                    <span>|</span>
                    <span>Request a Demo</span>
                    <span>|</span>
                    <span>joe@targa.ai</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Branded Assets */}
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Branded Assets</h3>
            <div className="grid-3" style={{ marginBottom: '48px' }}>
              <div className="box" style={{ textAlign: 'center', padding: '40px' }}>
                <div style={{ width: '120px', height: '120px', borderRadius: '12px', background: 'linear-gradient(135deg, #132f4a, #1a3a5c)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <Icon size={32} />
                  <p style={{ fontSize: '7px', fontWeight: '600', color: '#0eb2af', letterSpacing: '1px', textTransform: 'uppercase', marginTop: '4px' }}>One-Pager</p>
                </div>
                <p style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b' }}>Executive Summary</p>
                <p style={{ fontSize: '12px', color: '#64748b' }}>8.5" x 11" - CEO leave-behind</p>
              </div>
              <div className="box" style={{ textAlign: 'center', padding: '40px' }}>
                <div style={{ width: '120px', height: '120px', borderRadius: '12px', background: 'white', border: '2px solid #e2e8f0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto' }}>
                  <Icon size={28} />
                  <p style={{ fontSize: '8px', fontWeight: '600', color: '#1f476a', letterSpacing: '0.5px', marginTop: '6px' }}>TRIFOLD</p>
                  <div style={{ display: 'flex', gap: '3px', marginTop: '4px' }}>
                    <div style={{ width: '12px', height: '2px', background: '#1f476a', borderRadius: '1px' }}></div>
                    <div style={{ width: '12px', height: '2px', background: '#0eb2af', borderRadius: '1px' }}></div>
                    <div style={{ width: '12px', height: '2px', background: '#fbbf24', borderRadius: '1px' }}></div>
                  </div>
                </div>
                <p style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b' }}>Trifold Brochure</p>
                <p style={{ fontSize: '12px', color: '#64748b' }}>Event and meeting handout</p>
              </div>
              <div className="box" style={{ textAlign: 'center', padding: '40px' }}>
                <div style={{ width: '120px', height: '120px', borderRadius: '12px', background: '#f8fafc', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto', border: '1px solid #e2e8f0' }}>
                  <Icon size={28} />
                  <p style={{ fontSize: '7px', fontWeight: '600', color: '#64748b', letterSpacing: '0.5px', marginTop: '4px' }}>SALES SHEET</p>
                </div>
                <p style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b' }}>Feature Comparison</p>
                <p style={{ fontSize: '12px', color: '#64748b' }}>Competitive positioning sheet</p>
              </div>
            </div>

            {/* Credential display guidelines */}
            <div className="card-white">
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '24px' }}>Collateral Guidelines</h3>
              <div className="grid-2">
                <div className="do-card">
                  <h4 style={{ color: '#16a34a', fontWeight: '600', fontSize: '13px', marginBottom: '12px' }}>{'\u2713'} Approved Uses</h4>
                  <p style={{ fontSize: '13px', color: '#1f476a', margin: 0, lineHeight: '1.7' }}>
                    CEO meeting leave-behinds. Conference and event handouts. Email attachments for discovery follow-ups. Pilot engagement onboarding packets. Digital download from targa.ai.
                  </p>
                </div>
                <div className="dont-card">
                  <h4 style={{ color: '#dc2626', fontWeight: '600', fontSize: '13px', marginBottom: '12px' }}>{'\u2717'} Not Permitted</h4>
                  <p style={{ fontSize: '13px', color: '#1f476a', margin: 0, lineHeight: '1.7' }}>
                    Modifying brand colors, typography, or layout. Adding third-party logos without approval. Including pricing on collateral distributed externally. Using outdated platform screenshots.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-white">
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '16px' }}>Collateral Specifications</h3>
              <table className="spec-table">
                <thead>
                  <tr>
                    <th>Element</th>
                    <th>Specification</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td style={{ fontWeight: '600' }}>One-Pager</td><td>8.5" x 11" (portrait), 100lb premium stock</td></tr>
                  <tr><td style={{ fontWeight: '600' }}>Trifold</td><td>8.5" x 11" folded to 3.67" x 8.5", 100lb gloss</td></tr>
                  <tr><td style={{ fontWeight: '600' }}>Typography</td><td>Space Grotesk Light (headlines), Inter (body), uppercase tracking for labels</td></tr>
                  <tr><td style={{ fontWeight: '600' }}>Top Bar</td><td>4px brand gradient (Navy 30% / Teal 25% / Navy 20% / Gold 25%)</td></tr>
                  <tr><td style={{ fontWeight: '600' }}>CTA</td><td>"Request a Demo" or "Schedule a Discovery Conversation"</td></tr>
                  <tr><td style={{ fontWeight: '600' }}>Digital Format</td><td>PDF with embedded fonts, 300 DPI for print</td></tr>
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* ==================== PRESENTATION ==================== */}
        {activeTab === 'presentation' && (
          <>
            <h2 className="section-title">Presentation Deck</h2>
            <p className="section-subtitle">
              Slide masters, layout patterns, and formatting guidelines for sales presentations and workshop decks.
            </p>

            {/* Title slide */}
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Title Slide</h3>
            <div className="card-white" style={{ padding: '40px', marginBottom: '40px' }}>
              <div style={{ background: 'linear-gradient(135deg, #132f4a, #1a3a5c)', borderRadius: '8px', padding: '60px', aspectRatio: '16/9', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', right: '60px', bottom: '-40px', opacity: 0.04 }}>
                  <Icon size={320} />
                </div>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <Icon size={36} />
                  <p style={{ fontSize: '12px', fontWeight: '600', color: '#0eb2af', letterSpacing: '2px', textTransform: 'uppercase', margin: '16px 0 8px 0' }}>The Leader Experience™</p>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '32px', fontWeight: '300', color: 'white', margin: '0 0 12px 0', lineHeight: '1.2' }}>Enterprise Value Creation<br/>Through Performance Automation</p>
                  <div style={{ display: 'flex', gap: '8px', margin: '20px 0 0 0' }}>
                    <div style={{ height: '2px', width: '40px', background: '#1f476a', borderRadius: '1px' }}></div>
                    <div style={{ height: '2px', width: '40px', background: '#0eb2af', borderRadius: '1px' }}></div>
                    <div style={{ height: '2px', width: '40px', background: '#fbbf24', borderRadius: '1px' }}></div>
                  </div>
                  <p style={{ fontSize: '14px', color: '#94a3b8', margin: '20px 0 0 0' }}>Prepared for Acme Corp - March 2026</p>
                </div>
              </div>
            </div>

            {/* Section divider slide */}
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Section Divider</h3>
            <div className="card-white" style={{ padding: '40px', marginBottom: '40px' }}>
              <div style={{ background: '#1f476a', borderRadius: '8px', padding: '60px', aspectRatio: '16/9', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                {/* Triangle accent bottom-left */}
                <div style={{ position: 'absolute', left: '-20px', bottom: '-20px', opacity: 0.10 }}>
                  <Icon size={200} />
                </div>
                {/* Subtle second triangle top-right */}
                <div style={{ position: 'absolute', right: '40px', top: '-60px', opacity: 0.04 }}>
                  <Icon size={180} />
                </div>
                <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                  <span style={{ fontSize: '12px', fontWeight: '600', color: '#0eb2af', letterSpacing: '2px', textTransform: 'uppercase' }}>Section 02</span>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '36px', fontWeight: '300', color: 'white', margin: '12px 0 0 0' }}>Intelligence</p>
                  <p style={{ fontSize: '14px', color: '#cbd5e1', marginTop: '8px' }}>Dynamic views of initiatives, resources, and milestones — connected in real time</p>
                </div>
              </div>
            </div>

            {/* Content slide */}
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Content Slide</h3>
            <div className="card-white" style={{ padding: '40px', marginBottom: '40px' }}>
              <div style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '48px', aspectRatio: '16/9', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(to right, #1f476a 30%, #0eb2af 30%, #0eb2af 55%, #1f476a 55%, #1f476a 75%, #fbbf24 75%)' }}></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ maxWidth: '55%' }}>
                    <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '24px', fontWeight: '300', color: '#1e293b', margin: '0 0 24px 0' }}>Initiative Performance Overview</p>
                    <div style={{ borderLeft: '3px solid #0eb2af', paddingLeft: '16px', marginBottom: '16px' }}>
                      <p style={{ fontSize: '13px', color: '#1f476a', lineHeight: '1.7', margin: 0 }}>
                        TARGA visibility dashboard identified 3 at-risk initiatives across two business units, enabling preemptive resource reallocation saving an estimated $1.8M in delayed delivery costs.
                      </p>
                    </div>
                    {['Real-time goal alignment tracking', 'Automated resource sync across teams', 'AI-surfaced risk indicators'].map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: ['#1f476a', '#0eb2af', '#fbbf24'][i], flexShrink: 0 }}></div>
                        <span style={{ fontSize: '14px', color: '#1e293b' }}>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ width: '35%', background: '#f8fafc', borderRadius: '8px', padding: '24px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {[
                        { label: 'Initiatives', value: '14', color: '#1f476a' },
                        { label: 'On Track', value: '8', color: '#0eb2af' },
                        { label: 'Value Delivered', value: '$2.4M', color: '#fbbf24' },
                      ].map((stat, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <span style={{ fontSize: '12px', color: '#64748b' }}>{stat.label}</span>
                          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '24px', fontWeight: '300', color: stat.color }}>{stat.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Footer */}
                <div style={{ position: 'absolute', bottom: '16px', left: '48px', right: '48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Icon size={16} />
                  <span style={{ fontSize: '10px', color: '#94a3b8' }}>Confidential - Acme Corp</span>
                  <span style={{ fontSize: '10px', color: '#94a3b8' }}>12</span>
                </div>
              </div>
            </div>

            {/* Data/chart slide */}
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Data Visualization Slide</h3>
            <div className="card-white" style={{ padding: '40px', marginBottom: '48px' }}>
              <div style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '48px', aspectRatio: '16/9', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(to right, #1f476a 30%, #0eb2af 30%, #0eb2af 55%, #1f476a 55%, #1f476a 75%, #fbbf24 75%)' }}></div>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '20px', fontWeight: '300', color: '#1e293b', margin: '0 0 32px 0' }}>Value Creation Over Time</p>
                {/* Fake chart */}
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '16px', height: '140px', paddingBottom: '24px', borderBottom: '1px solid #e2e8f0' }}>
                  {[30, 42, 55, 48, 68, 75, 82, 95, 88, 110, 125, 140].map((h, i) => (
                    <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                      <div style={{ width: '100%', height: `${h * 0.8}px`, background: i < 4 ? '#1f476a' : i < 8 ? '#0eb2af' : '#fbbf24', borderRadius: '3px 3px 0 0', opacity: 0.8 }}></div>
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
                  {['Q1', 'Q2', 'Q3', 'Q4', 'Q1', 'Q2', 'Q3', 'Q4', 'Q1', 'Q2', 'Q3', 'Q4'].map((q, i) => (
                    <span key={i} style={{ fontSize: '9px', color: '#94a3b8', flex: 1, textAlign: 'center' }}>{q}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '24px', marginTop: '16px' }}>
                  {[{ label: 'Visibility', color: '#1f476a' }, { label: 'Intelligence', color: '#0eb2af' }, { label: 'Value', color: '#fbbf24' }].map((l, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <div style={{ width: '10px', height: '10px', borderRadius: '2px', background: l.color }}></div>
                      <span style={{ fontSize: '11px', color: '#64748b' }}>{l.label}</span>
                    </div>
                  ))}
                </div>
                <div style={{ position: 'absolute', bottom: '16px', left: '48px', right: '48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Icon size={16} />
                  <span style={{ fontSize: '10px', color: '#94a3b8' }}>Confidential - Acme Corp</span>
                  <span style={{ fontSize: '10px', color: '#94a3b8' }}>18</span>
                </div>
              </div>
            </div>

            {/* Slide specs */}
            <div className="card-white">
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '24px' }}>Deck Specifications</h3>
              <table className="spec-table">
                <thead>
                  <tr>
                    <th>Element</th>
                    <th>Specification</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td style={{ fontWeight: '600' }}>Aspect Ratio</td><td>16:9 (1920 x 1080px)</td></tr>
                  <tr><td style={{ fontWeight: '600' }}>Title Slides</td><td>Dark gradient background, Space Grotesk Light 32px, brand accent divider</td></tr>
                  <tr><td style={{ fontWeight: '600' }}>Section Dividers</td><td>Brand color background (Navy, Teal, or Gold), centered Space Grotesk title</td></tr>
                  <tr><td style={{ fontWeight: '600' }}>Content Slides</td><td>White background, brand gradient top bar, Space Grotesk 24px headers</td></tr>
                  <tr><td style={{ fontWeight: '600' }}>Footer</td><td>Icon mark left, confidentiality note center, page number right</td></tr>
                  <tr><td style={{ fontWeight: '600' }}>Charts</td><td>Brand colors only - Navy for phase 1, Teal for phase 2, Gold for phase 3</td></tr>
                  <tr><td style={{ fontWeight: '600' }}>Bullet Style</td><td>Brand-colored dots (6px), not dashes or arrows</td></tr>
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* ==================== WORKSHOP ==================== */}
        {activeTab === 'workshop' && (
          <>
            <h2 className="section-title">Workshop</h2>
            <p className="section-subtitle">
              Full-day workshop structure aligned to Visibility, Intelligence, and Value. Facilitator guide, session breakdown, and materials checklist.
            </p>

            {/* Workshop overview card */}
            <div className="card-white" style={{ marginBottom: '40px' }}>
              <div className="card-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <Icon size={36} />
                  <div>
                    <h2>Strategic Goals & Value Mapping Workshop</h2>
                    <p>A structured full-day engagement using the TARGA AI platform</p>
                  </div>
                </div>
              </div>
              <div className="grid-4">
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '32px', fontWeight: '300', color: '#1f476a' }}>8</p>
                  <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>Hours total</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '32px', fontWeight: '300', color: '#0eb2af' }}>3</p>
                  <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>Core sessions</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '32px', fontWeight: '300', color: '#fbbf24' }}>6-12</p>
                  <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>Participants</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '32px', fontWeight: '300', color: '#0eb2af' }}>1</p>
                  <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>Action plan delivered</p>
                </div>
              </div>
            </div>

            {/* Agenda timeline */}
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Full-Day Agenda</h3>

            {/* Morning - Visibility */}
            <div style={{ marginBottom: '24px' }}>
              {[
                { time: '8:30 - 9:00', title: 'Welcome & Framework Introduction', desc: 'Overview of the day, introductions, and the Visibility-Intelligence-Value framework explained.', color: '#1f476a', pillar: null },
                { time: '9:00 - 10:30', title: 'Session 1: Visibility - Strategic Goals', desc: 'Guided capture of strategic objectives. Participants map goals, initiatives, and key results across the leadership team.', color: '#1f476a', pillar: 'Visibility' },
                { time: '10:30 - 10:45', title: 'Break', desc: null, color: '#e2e8f0', pillar: null },
                { time: '10:45 - 12:00', title: 'Session 1 (cont.): Initiative Prioritization', desc: 'Each identified initiative is scored on strategic impact, resource readiness, and timeline feasibility. The Priority Matrix is produced.', color: '#1f476a', pillar: 'Visibility' },
                { time: '12:00 - 1:00', title: 'Lunch', desc: null, color: '#e2e8f0', pillar: null },
                { time: '1:00 - 2:30', title: 'Session 2: Intelligence - Initiative Mapping', desc: 'Participants connect initiatives to resources and timelines. Identify dependencies, visibility gaps, and automation opportunities. The Initiative Map is produced.', color: '#0eb2af', pillar: 'Intelligence' },
                { time: '2:30 - 2:45', title: 'Break', desc: null, color: '#e2e8f0', pillar: null },
                { time: '2:45 - 4:00', title: 'Session 3: Value - Execution Planning', desc: 'Transform the Initiative Map into execution plans. Each workstream gets a 90-day performance plan with measurable value outcomes.', color: '#fbbf24', pillar: 'Value' },
                { time: '4:00 - 4:30', title: 'Action Plan & Close', desc: 'Consolidated action plan delivered. Next steps, accountability assignments, and follow-up schedule established.', color: '#0eb2af', pillar: null },
              ].map((session, i) => (
                <div key={i} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', padding: session.desc ? '20px' : '12px 20px', background: session.desc ? 'white' : '#f8fafc', borderRadius: '8px', borderLeft: `3px solid ${session.color}`, marginBottom: '8px', border: session.desc ? `1px solid #e2e8f0` : 'none', borderLeftWidth: '3px', borderLeftColor: session.color, borderLeftStyle: 'solid' }}>
                  <div style={{ minWidth: '100px', flexShrink: 0 }}>
                    <p style={{ fontSize: '12px', fontWeight: '600', color: session.color === '#e2e8f0' ? '#94a3b8' : session.color, margin: 0 }}>{session.time}</p>
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <h4 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', margin: 0 }}>{session.title}</h4>
                      {session.pillar && (
                        <span style={{ fontSize: '10px', fontWeight: '600', color: session.color, background: `${session.color}14`, padding: '2px 8px', borderRadius: '10px' }}>{session.pillar}</span>
                      )}
                    </div>
                    {session.desc && <p style={{ fontSize: '13px', color: '#64748b', margin: '6px 0 0 0', lineHeight: '1.6' }}>{session.desc}</p>}
                  </div>
                </div>
              ))}
            </div>

            {/* Deliverables */}
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '16px', marginTop: '48px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Workshop Deliverables</h3>
            <div className="grid-3" style={{ marginBottom: '48px' }}>
              <div className="box accent-navy" style={{ paddingLeft: '28px' }}>
                <h4 style={{ fontSize: '14px', fontWeight: '600', color: '#1f476a', marginBottom: '8px' }}>Strategic Priority Matrix</h4>
                <p style={{ fontSize: '13px', color: '#64748b', margin: 0, lineHeight: '1.6' }}>Complete inventory of strategic initiatives scored by impact, resource readiness, and timeline feasibility.</p>
              </div>
              <div className="box accent-teal" style={{ paddingLeft: '28px' }}>
                <h4 style={{ fontSize: '14px', fontWeight: '600', color: '#0eb2af', marginBottom: '8px' }}>Initiative Dependency Map</h4>
                <p style={{ fontSize: '13px', color: '#64748b', margin: 0, lineHeight: '1.6' }}>Visual dependency map showing how initiatives connect, where bottlenecks exist, and where value multiplies.</p>
              </div>
              <div className="box accent-gold" style={{ paddingLeft: '28px' }}>
                <h4 style={{ fontSize: '14px', fontWeight: '600', color: '#d97706', marginBottom: '8px' }}>90-Day Action Plan</h4>
                <p style={{ fontSize: '13px', color: '#64748b', margin: 0, lineHeight: '1.6' }}>Prioritized execution initiatives with owners, timelines, KPIs, and expected value outcomes for each.</p>
              </div>
            </div>

            {/* Materials checklist */}
            <div className="card-white">
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '24px' }}>Facilitator Materials Checklist</h3>
              <div className="grid-2">
                <div>
                  <h4 style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b', marginBottom: '12px' }}>Printed Materials</h4>
                  {['Participant workbook (branded, spiral-bound)', 'Strategic initiative worksheets (per participant)', 'Initiative mapping templates (A3 format)', '90-day planning templates', 'Workshop summary document'].map((item, i) => (
                    <div key={i} className="checklist-item">
                      <div className="checklist-icon">{'\u2713'}</div>
                      <div className="checklist-text">{item}</div>
                    </div>
                  ))}
                </div>
                <div>
                  <h4 style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b', marginBottom: '12px' }}>Room Setup & Digital</h4>
                  {['Presentation deck (see Presentation tab)', 'Whiteboard or flip charts with markers', 'Post-it notes in brand colors (navy, teal, gold)', 'Name tents with TARGA branding', 'Follow-up email template with action plan PDF'].map((item, i) => (
                    <div key={i} className="checklist-item">
                      <div className="checklist-icon">{'\u2713'}</div>
                      <div className="checklist-text">{item}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Facilitator notes */}
            <div className="card-white">
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '16px' }}>Facilitator Notes</h3>
              <div style={{ borderLeft: '3px solid #0eb2af', paddingLeft: '20px' }}>
                <p style={{ fontSize: '14px', color: '#1f476a', lineHeight: '1.8', marginBottom: '12px' }}>
                  The three sessions are sequenced intentionally - Visibility must complete before Intelligence begins, and Intelligence before Value. Do not allow the group to jump ahead to solutions before the strategic capture is thorough. The most common facilitator mistake is letting the group rush past discovery.
                </p>
                <p style={{ fontSize: '14px', color: '#1f476a', lineHeight: '1.8', margin: 0 }}>
                  Use the brand colors physically in the room - navy post-its for strategic goals, teal for initiative connections, gold for value creation opportunities. This reinforces the platform framework visually and makes the Initiative Dependency Map immediately legible.
                </p>
              </div>
            </div>
          </>
        )}

        {/* ==================== MOBILE ==================== */}
        {activeTab === 'mobile' && (
          <>
            <h2 className="section-title">Mobile & Responsive</h2>
            <p className="section-subtitle">
              Breakpoints, typography scaling, touch targets, and mobile app layout concepts for the Leader Experience.
            </p>

            {/* Mobile App Mockups */}
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>App Layout Concepts</h3>
            <div className="grid-3" style={{ marginBottom: '48px' }}>

              {/* Dashboard Screen */}
              <div className="box" style={{ padding: 0, overflow: 'hidden', borderRadius: '24px', border: '3px solid #1e293b' }}>
                <svg width="100%" viewBox="0 0 320 580" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="mobGrad" x1="0" y1="0" x2="0" y2="0.3">
                      <stop offset="0%" stopColor="#1f476a"/>
                      <stop offset="100%" stopColor="#1a3a5c"/>
                    </linearGradient>
                    <pattern id="mobPattern" x="0" y="0" width="80" height="92" patternUnits="userSpaceOnUse">
                      <g opacity="0.12">
                        <polygon fill="#ffffff" points="40,4 72,58 56,58 40,30 24,58 8,58"/>
                        <polygon fill="#0eb2af" points="40,42 48,58 32,58"/>
                      </g>
                      <g opacity="0.07" transform="translate(40,46) scale(1,-1) translate(-40,-29)">
                        <polygon fill="#ffffff" points="40,4 72,58 56,58 40,30 24,58 8,58"/>
                        <polygon fill="#0eb2af" points="40,42 48,58 32,58"/>
                      </g>
                    </pattern>
                    <pattern id="mobPatternSm" x="20" y="23" width="80" height="92" patternUnits="userSpaceOnUse">
                      <g opacity="0.06">
                        <polygon fill="#0eb2af" points="40,4 72,58 56,58 40,30 24,58 8,58"/>
                      </g>
                      <g opacity="0.04" transform="translate(40,46) scale(1,-1) translate(-40,-29)">
                        <polygon fill="#0eb2af" points="40,4 72,58 56,58 40,30 24,58 8,58"/>
                      </g>
                    </pattern>
                    <clipPath id="mobHeaderClip">
                      <rect width="320" height="200" rx="20"/>
                    </clipPath>
                  </defs>
                  {/* Status bar */}
                  <rect width="320" height="580" fill="#f8fafc" rx="20"/>
                  <rect width="320" height="200" fill="url(#mobGrad)" rx="20"/>
                  <rect x="0" y="180" width="320" height="20" fill="url(#mobGrad)"/>
                  {/* Animated pattern layers */}
                  <g clipPath="url(#mobHeaderClip)">
                    <g className="pattern-animate">
                      <rect x="-80" y="0" width="480" height="200" fill="url(#mobPattern)"/>
                      <rect x="-80" y="0" width="480" height="200" fill="url(#mobPatternSm)"/>
                    </g>
                  </g>
                  {/* Header */}
                  <text x="24" y="52" fill="#94a3b8" fontFamily="'Inter', sans-serif" fontSize="11" fontWeight="500">Good morning, Joe</text>
                  <text x="24" y="78" fill="#ffffff" fontFamily="'Space Grotesk', sans-serif" fontSize="22" fontWeight="300">Your LX Dashboard</text>
                  {/* Icon top right */}
                  <g transform="translate(270, 36) scale(0.35)">
                    <polygon fill="#0eb2af" points="33.67 45.26 22.31 45.31 28.03 33.46 33.67 45.26"/>
                    <polygon fill="#ffffff" points="55.86 58.06 45.8 58.1 28.11 21.08 10.19 58.25 0 58.3 22.65 11.33 26.39 3.56 28.11 0 55.86 58.06" opacity="0.5"/>
                  </g>
                  {/* Score cards */}
                  <rect x="24" y="110" width="130" height="72" rx="12" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                  <text x="40" y="138" fill="#0eb2af" fontFamily="'Space Grotesk', sans-serif" fontSize="28" fontWeight="400">87%</text>
                  <text x="40" y="162" fill="#94a3b8" fontFamily="'Inter', sans-serif" fontSize="11">Goal Progress</text>
                  <rect x="166" y="110" width="130" height="72" rx="12" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                  <text x="182" y="138" fill="#fbbf24" fontFamily="'Space Grotesk', sans-serif" fontSize="28" fontWeight="400">$2.4M</text>
                  <text x="182" y="162" fill="#94a3b8" fontFamily="'Inter', sans-serif" fontSize="11">Value Created</text>
                  {/* Content cards */}
                  <rect x="16" y="216" width="288" height="80" rx="12" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1"/>
                  <rect x="28" y="230" width="4" height="52" rx="2" fill="#0eb2af"/>
                  <text x="44" y="248" fill="#1e293b" fontFamily="'Inter', sans-serif" fontSize="13" fontWeight="600">Q2 Revenue Initiative</text>
                  <text x="44" y="266" fill="#64748b" fontFamily="'Inter', sans-serif" fontSize="11">3 milestones on track, 1 at risk</text>
                  <rect x="44" y="276" width="200" height="4" rx="2" fill="#e2e8f0"/>
                  <rect x="44" y="276" width="140" height="4" rx="2" fill="#0eb2af"/>
                  <text x="260" y="282" fill="#0eb2af" fontFamily="'Inter', sans-serif" fontSize="10" fontWeight="600">70%</text>

                  <rect x="16" y="308" width="288" height="80" rx="12" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1"/>
                  <rect x="28" y="322" width="4" height="52" rx="2" fill="#1f476a"/>
                  <text x="44" y="340" fill="#1e293b" fontFamily="'Inter', sans-serif" fontSize="13" fontWeight="600">Talent Retention Program</text>
                  <text x="44" y="358" fill="#64748b" fontFamily="'Inter', sans-serif" fontSize="11">All milestones on track</text>
                  <rect x="44" y="368" width="200" height="4" rx="2" fill="#e2e8f0"/>
                  <rect x="44" y="368" width="190" height="4" rx="2" fill="#1f476a"/>
                  <text x="260" y="374" fill="#1f476a" fontFamily="'Inter', sans-serif" fontSize="10" fontWeight="600">95%</text>

                  <rect x="16" y="400" width="288" height="80" rx="12" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1"/>
                  <rect x="28" y="414" width="4" height="52" rx="2" fill="#fbbf24"/>
                  <text x="44" y="432" fill="#1e293b" fontFamily="'Inter', sans-serif" fontSize="13" fontWeight="600">Market Expansion - APAC</text>
                  <text x="44" y="450" fill="#64748b" fontFamily="'Inter', sans-serif" fontSize="11">2 milestones behind, needs attention</text>
                  <rect x="44" y="460" width="200" height="4" rx="2" fill="#e2e8f0"/>
                  <rect x="44" y="460" width="80" height="4" rx="2" fill="#fbbf24"/>
                  <text x="260" y="466" fill="#d97706" fontFamily="'Inter', sans-serif" fontSize="10" fontWeight="600">40%</text>

                  {/* Bottom nav */}
                  <rect x="0" y="500" width="320" height="80" fill="#ffffff" rx="0"/>
                  <line x1="0" y1="500" x2="320" y2="500" stroke="#e2e8f0" strokeWidth="1"/>
                  <text x="50" y="536" fill="#0eb2af" fontFamily="'Inter', sans-serif" fontSize="10" fontWeight="600" textAnchor="middle">Dashboard</text>
                  <text x="160" y="536" fill="#94a3b8" fontFamily="'Inter', sans-serif" fontSize="10" fontWeight="500" textAnchor="middle">Initiatives</text>
                  <text x="270" y="536" fill="#94a3b8" fontFamily="'Inter', sans-serif" fontSize="10" fontWeight="500" textAnchor="middle">Insights</text>
                  {/* Active indicator */}
                  <rect x="30" y="545" width="40" height="3" rx="1.5" fill="#0eb2af"/>
                </svg>
                <p style={{ fontSize: '12px', color: '#64748b', textAlign: 'center', padding: '12px 0' }}>Dashboard — Executive overview</p>
              </div>

              {/* AI Chat Screen */}
              <div className="box" style={{ padding: 0, overflow: 'hidden', borderRadius: '24px', border: '3px solid #1e293b' }}>
                <svg width="100%" viewBox="0 0 320 580" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="chatPattern" x="0" y="0" width="80" height="92" patternUnits="userSpaceOnUse">
                      <g opacity="0.04">
                        <polygon fill="#1f476a" points="40,4 72,58 56,58 40,30 24,58 8,58"/>
                        <polygon fill="#0eb2af" points="40,42 48,58 32,58"/>
                      </g>
                      <g opacity="0.025" transform="translate(40,46) scale(1,-1) translate(-40,-29)">
                        <polygon fill="#1f476a" points="40,4 72,58 56,58 40,30 24,58 8,58"/>
                        <polygon fill="#0eb2af" points="40,42 48,58 32,58"/>
                      </g>
                    </pattern>
                    <pattern id="chatPatternSm" x="20" y="23" width="80" height="92" patternUnits="userSpaceOnUse">
                      <g opacity="0.02">
                        <polygon fill="#0eb2af" points="40,4 72,58 56,58 40,30 24,58 8,58"/>
                      </g>
                    </pattern>
                    <clipPath id="chatBodyClip">
                      <rect x="0" y="64" width="320" height="436"/>
                    </clipPath>
                  </defs>
                  <rect width="320" height="580" fill="#f8fafc" rx="20"/>
                  {/* Animated light pattern behind chat */}
                  <g clipPath="url(#chatBodyClip)">
                    <g className="pattern-animate">
                      <rect x="-80" y="64" width="480" height="436" fill="url(#chatPattern)"/>
                      <rect x="-80" y="64" width="480" height="436" fill="url(#chatPatternSm)"/>
                    </g>
                  </g>
                  {/* Header */}
                  <rect width="320" height="64" fill="#ffffff" rx="20"/>
                  <rect x="0" y="44" width="320" height="20" fill="#ffffff"/>
                  <line x1="0" y1="64" x2="320" y2="64" stroke="#e2e8f0" strokeWidth="1"/>
                  <g transform="translate(24, 18) scale(0.3)">
                    <polygon fill="#0eb2af" points="33.67 45.26 22.31 45.31 28.03 33.46 33.67 45.26"/>
                    <polygon fill="#1f476a" points="55.86 58.06 45.8 58.1 28.11 21.08 10.19 58.25 0 58.3 22.65 11.33 26.39 3.56 28.11 0 55.86 58.06"/>
                  </g>
                  <text x="50" y="40" fill="#1e293b" fontFamily="'Space Grotesk', sans-serif" fontSize="15" fontWeight="500">TARGA AI</text>
                  <text x="250" y="40" fill="#0eb2af" fontFamily="'Inter', sans-serif" fontSize="11" fontWeight="600">New Chat</text>
                  {/* Chat messages */}
                  <rect x="80" y="88" width="220" height="48" rx="12" fill="#0eb2af" opacity="0.1"/>
                  <text x="96" y="108" fill="#1f476a" fontFamily="'Inter', sans-serif" fontSize="12">What projects are behind</text>
                  <text x="96" y="124" fill="#1f476a" fontFamily="'Inter', sans-serif" fontSize="12">schedule this week?</text>
                  
                  <rect x="20" y="152" width="260" height="140" rx="12" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1"/>
                  <g transform="translate(32, 164) scale(0.2)">
                    <polygon fill="#0eb2af" points="33.67 45.26 22.31 45.31 28.03 33.46 33.67 45.26"/>
                    <polygon fill="#1f476a" points="55.86 58.06 45.8 58.1 28.11 21.08 10.19 58.25 0 58.3 22.65 11.33 26.39 3.56 28.11 0 55.86 58.06"/>
                  </g>
                  <text x="48" y="180" fill="#1e293b" fontFamily="'Inter', sans-serif" fontSize="12" fontWeight="500">2 initiatives need attention:</text>
                  <rect x="32" y="192" width="4" height="36" rx="2" fill="#fbbf24"/>
                  <text x="44" y="208" fill="#1e293b" fontFamily="'Inter', sans-serif" fontSize="11" fontWeight="600">APAC Expansion</text>
                  <text x="44" y="222" fill="#64748b" fontFamily="'Inter', sans-serif" fontSize="10">Vendor contract delayed 5 days</text>
                  <rect x="32" y="236" width="4" height="36" rx="2" fill="#fbbf24"/>
                  <text x="44" y="252" fill="#1e293b" fontFamily="'Inter', sans-serif" fontSize="11" fontWeight="600">Product Launch v2.1</text>
                  <text x="44" y="266" fill="#64748b" fontFamily="'Inter', sans-serif" fontSize="10">QA milestone at risk — 3 days behind</text>
                  <text x="32" y="284" fill="#0eb2af" fontFamily="'Inter', sans-serif" fontSize="11" fontWeight="600">Set up meetings with leads →</text>

                  <rect x="80" y="312" width="220" height="32" rx="12" fill="#0eb2af" opacity="0.1"/>
                  <text x="96" y="333" fill="#1f476a" fontFamily="'Inter', sans-serif" fontSize="12">Yes, schedule those for tomorrow</text>

                  <rect x="20" y="360" width="260" height="56" rx="12" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1"/>
                  <g transform="translate(32, 372) scale(0.2)">
                    <polygon fill="#0eb2af" points="33.67 45.26 22.31 45.31 28.03 33.46 33.67 45.26"/>
                    <polygon fill="#1f476a" points="55.86 58.06 45.8 58.1 28.11 21.08 10.19 58.25 0 58.3 22.65 11.33 26.39 3.56 28.11 0 55.86 58.06"/>
                  </g>
                  <text x="48" y="388" fill="#1e293b" fontFamily="'Inter', sans-serif" fontSize="12">Done. 2 meetings scheduled for</text>
                  <text x="48" y="404" fill="#1e293b" fontFamily="'Inter', sans-serif" fontSize="12">tomorrow at 10am and 2pm.</text>

                  {/* Input bar */}
                  <rect x="16" y="500" width="288" height="48" rx="24" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5"/>
                  <text x="36" y="529" fill="#94a3b8" fontFamily="'Inter', sans-serif" fontSize="13">Ask TARGA anything...</text>
                  <circle cx="280" cy="524" r="16" fill="#0eb2af"/>
                  <text x="280" y="529" fill="#ffffff" fontFamily="'Inter', sans-serif" fontSize="14" fontWeight="700" textAnchor="middle">↑</text>
                </svg>
                <p style={{ fontSize: '12px', color: '#64748b', textAlign: 'center', padding: '12px 0' }}>AI Assistant — Natural language</p>
              </div>

              {/* Initiative Detail Screen */}
              <div className="box" style={{ padding: 0, overflow: 'hidden', borderRadius: '24px', border: '3px solid #1e293b' }}>
                <svg width="100%" viewBox="0 0 320 580" xmlns="http://www.w3.org/2000/svg">
                  <rect width="320" height="580" fill="#f8fafc" rx="20"/>
                  {/* Header */}
                  <rect width="320" height="64" fill="#ffffff" rx="20"/>
                  <rect x="0" y="44" width="320" height="20" fill="#ffffff"/>
                  <line x1="0" y1="64" x2="320" y2="64" stroke="#e2e8f0" strokeWidth="1"/>
                  <text x="24" y="42" fill="#0eb2af" fontFamily="'Inter', sans-serif" fontSize="12" fontWeight="500">← Back</text>
                  <text x="160" y="42" fill="#1e293b" fontFamily="'Space Grotesk', sans-serif" fontSize="14" fontWeight="500" textAnchor="middle">Initiative Detail</text>
                  {/* Initiative header */}
                  <rect x="16" y="80" width="288" height="100" rx="12" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1"/>
                  <rect x="16" y="80" width="288" height="4" rx="2" fill="#0eb2af"/>
                  <text x="32" y="112" fill="#1e293b" fontFamily="'Inter', sans-serif" fontSize="15" fontWeight="600">Q2 Revenue Initiative</text>
                  <text x="32" y="132" fill="#64748b" fontFamily="'Inter', sans-serif" fontSize="11">Owner: Sarah Chen, VP Sales</text>
                  <text x="32" y="164" fill="#0eb2af" fontFamily="'Space Grotesk', sans-serif" fontSize="22" fontWeight="400">70%</text>
                  <text x="80" y="164" fill="#64748b" fontFamily="'Inter', sans-serif" fontSize="11">complete</text>
                  <text x="220" y="164" fill="#64748b" fontFamily="'Inter', sans-serif" fontSize="11">$1.7M / $2.4M</text>
                  {/* Milestones */}
                  <text x="24" y="212" fill="#1e293b" fontFamily="'Inter', sans-serif" fontSize="13" fontWeight="600">Milestones</text>
                  {/* Milestone items */}
                  <rect x="16" y="224" width="288" height="56" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1"/>
                  <circle cx="36" cy="252" r="10" fill="#0eb2af"/>
                  <text x="36" y="256" fill="#ffffff" fontFamily="'Inter', sans-serif" fontSize="10" fontWeight="700" textAnchor="middle">✓</text>
                  <text x="56" y="246" fill="#1e293b" fontFamily="'Inter', sans-serif" fontSize="12" fontWeight="500">Pipeline target met</text>
                  <text x="56" y="264" fill="#64748b" fontFamily="'Inter', sans-serif" fontSize="10">Completed Mar 1</text>

                  <rect x="16" y="288" width="288" height="56" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1"/>
                  <circle cx="36" cy="316" r="10" fill="#0eb2af"/>
                  <text x="36" y="320" fill="#ffffff" fontFamily="'Inter', sans-serif" fontSize="10" fontWeight="700" textAnchor="middle">✓</text>
                  <text x="56" y="310" fill="#1e293b" fontFamily="'Inter', sans-serif" fontSize="12" fontWeight="500">Enterprise demos scheduled</text>
                  <text x="56" y="328" fill="#64748b" fontFamily="'Inter', sans-serif" fontSize="10">Completed Feb 28</text>

                  <rect x="16" y="352" width="288" height="56" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1"/>
                  <circle cx="36" cy="380" r="10" fill="#0eb2af" opacity="0.2"/>
                  <circle cx="36" cy="380" r="10" fill="none" stroke="#0eb2af" strokeWidth="2"/>
                  <text x="56" y="374" fill="#1e293b" fontFamily="'Inter', sans-serif" fontSize="12" fontWeight="500">Close 3 enterprise deals</text>
                  <text x="56" y="392" fill="#0eb2af" fontFamily="'Inter', sans-serif" fontSize="10" fontWeight="500">In progress — 1 of 3</text>

                  <rect x="16" y="416" width="288" height="56" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1"/>
                  <circle cx="36" cy="444" r="10" fill="none" stroke="#e2e8f0" strokeWidth="2"/>
                  <text x="56" y="438" fill="#1e293b" fontFamily="'Inter', sans-serif" fontSize="12" fontWeight="500">Board presentation</text>
                  <text x="56" y="456" fill="#64748b" fontFamily="'Inter', sans-serif" fontSize="10">Due Apr 15</text>

                  {/* Bottom triangle accent */}
                  <g transform="translate(240, 490) scale(0.7)" opacity="0.06">
                    <polygon fill="#0eb2af" points="33.67 45.26 22.31 45.31 28.03 33.46 33.67 45.26"/>
                    <polygon fill="#1f476a" points="55.86 58.06 45.8 58.1 28.11 21.08 10.19 58.25 0 58.3 22.65 11.33 26.39 3.56 28.11 0 55.86 58.06"/>
                  </g>

                  {/* Bottom nav */}
                  <rect x="0" y="500" width="320" height="80" fill="#ffffff" rx="0"/>
                  <line x1="0" y1="500" x2="320" y2="500" stroke="#e2e8f0" strokeWidth="1"/>
                  <text x="50" y="536" fill="#94a3b8" fontFamily="'Inter', sans-serif" fontSize="10" fontWeight="500" textAnchor="middle">Dashboard</text>
                  <text x="160" y="536" fill="#0eb2af" fontFamily="'Inter', sans-serif" fontSize="10" fontWeight="600" textAnchor="middle">Initiatives</text>
                  <text x="270" y="536" fill="#94a3b8" fontFamily="'Inter', sans-serif" fontSize="10" fontWeight="500" textAnchor="middle">Insights</text>
                  <rect x="140" y="545" width="40" height="3" rx="1.5" fill="#0eb2af"/>
                </svg>
                <p style={{ fontSize: '12px', color: '#64748b', textAlign: 'center', padding: '12px 0' }}>Initiative Detail — Milestone view</p>
              </div>
            </div>

            <div className="card-white">
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '24px' }}>Breakpoints</h3>
              <table className="spec-table">
                <thead>
                  <tr>
                    <th>Device</th>
                    <th>Width</th>
                    <th>Padding</th>
                    <th>Headline Size</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ fontWeight: '600' }}>Desktop</td>
                    <td style={{ fontFamily: 'monospace' }}>1200px+</td>
                    <td>48px</td>
                    <td>56px Space Grotesk Light</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: '600' }}>Tablet</td>
                    <td style={{ fontFamily: 'monospace' }}>768px - 1199px</td>
                    <td>32px</td>
                    <td>40px Space Grotesk Light</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: '600' }}>Mobile</td>
                    <td style={{ fontFamily: 'monospace' }}>&lt; 768px</td>
                    <td>16px</td>
                    <td>32px Space Grotesk Light</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="card-white">
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '16px' }}>Touch Targets</h3>
              <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.8' }}>
                All interactive elements must have a minimum touch target of 44x44px on mobile devices. 
                Buttons should use the full-width layout on screens below 768px. Form fields should be 
                at minimum 48px height for comfortable touch interaction.
              </p>
            </div>
          </>
        )}

        {/* ==================== DO'S & DON'TS ==================== */}
        {activeTab === 'dos' && (
          <>
            <h2 className="section-title">Do's & Don'ts</h2>
            <p className="section-subtitle">
              Correct and incorrect brand applications at a glance.
            </p>

            {[
              { doTitle: 'Logo Usage', doText: 'Use the full lockup at correct proportions. Maintain clear space around the mark. Display on approved background colors.', dontText: 'Stretch, rotate, or skew the mark. Change individual mark colors. Apply drop shadows, gradients, or effects. Place on busy backgrounds.' },
              { doTitle: 'Color', doText: 'Use Navy for authority, Teal for innovation, Gold for realization. Each color maps to a core platform capability.', dontText: 'Use colors purely for decoration. Mix with off-brand palette colors. Use Teal or Gold for body text (accessibility failures).' },
              { doTitle: 'CTAs', doText: 'Drive toward discovery conversations and consultations. Frame the TARGA AI platform as selective and high-value.', dontText: 'Include shopping carts or transactional language. Use "Buy Now" or "Add to Cart." This is consultative, not e-commerce.' },
            ].map((pair, i) => (
              <div key={i} className="grid-2" style={{ marginBottom: '24px' }}>
                <div className="do-card">
                  <h4 style={{ color: '#16a34a', fontWeight: '600', fontSize: '14px', marginBottom: '16px' }}>{'\u2713'} DO - {pair.doTitle}</h4>
                  <p style={{ fontSize: '13px', color: '#1f476a', margin: 0, lineHeight: '1.7' }}>{pair.doText}</p>
                </div>
                <div className="dont-card">
                  <h4 style={{ color: '#dc2626', fontWeight: '600', fontSize: '14px', marginBottom: '16px' }}>{'\u2717'} DON'T - {pair.doTitle}</h4>
                  <p style={{ fontSize: '13px', color: '#1f476a', margin: 0, lineHeight: '1.7' }}>{pair.dontText}</p>
                </div>
              </div>
            ))}
          </>
        )}

        {/* ==================== ACCESSIBILITY ==================== */}
        {activeTab === 'accessibility' && (
          <>
            <h2 className="section-title">Accessibility</h2>
            <p className="section-subtitle">
              WCAG AA compliance standards, testing checklist, and inclusive design requirements.
            </p>

            <div className="card-white">
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '24px' }}>WCAG AA Checklist</h3>
              {[
                'Color contrast minimum 4.5:1 for body text, 3:1 for large text (18px+)',
                'Minimum font size 12px for all text (16px preferred for body)',
                'Line height 1.5 or greater for body text',
                'Minimum 44x44px touch targets on mobile',
                'Full keyboard navigation support for all interactive elements',
                'Visible focus indicators on all focusable elements',
                'Form labels associated with inputs (no placeholder-only labels)',
                'Meaningful alt text on all non-decorative images',
                'Video and audio content must include transcripts',
                'Error messages must be descriptive and associated with fields',
              ].map((item, i) => (
                <div key={i} className="checklist-item">
                  <div className="checklist-icon">{'\u2713'}</div>
                  <div className="checklist-text">{item}</div>
                </div>
              ))}
            </div>

            <div className="card-white">
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '16px' }}>Testing Tools</h3>
              <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.8' }}>
                WAVE Web Accessibility Evaluator, Axe DevTools browser extension, 
                Chrome DevTools Lighthouse audit, and manual keyboard navigation testing.
              </p>
            </div>
          </>
        )}

        {/* ==================== APPLICATIONS ==================== */}
        {activeTab === 'applications' && (
          <>
            <h2 className="section-title">Applications</h2>
            <p className="section-subtitle">
              The brand system in action across real-world touchpoints. Each mockup uses the approved design system.
            </p>

            {/* Business Card */}
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Business Card</h3>
            <div className="grid-2" style={{ marginBottom: '48px' }}>
              <div style={{ background: 'white', borderRadius: '12px', padding: '40px', border: '1px solid #e2e8f0' }}>
                <div style={{ background: 'white', borderRadius: '8px', padding: '32px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', aspectRatio: '3.5/2', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(to right, #1f476a 30%, #0eb2af 30%, #0eb2af 55%, #1f476a 55%, #1f476a 75%, #fbbf24 75%)' }}></div>
                  <Icon size={28} />
                  <div>
                    <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '16px', fontWeight: '400', color: '#1e293b', margin: '0 0 2px 0' }}>Joe Thompson</p>
                    <p style={{ fontSize: '11px', color: '#64748b', margin: 0 }}>CEO</p>
                  </div>
                  <div style={{ fontSize: '10px', color: '#64748b', lineHeight: '1.8' }}>
                    joe@targa.ai<br/>
                    (555) 123-4567
                  </div>
                </div>
                <p style={{ fontSize: '12px', color: '#64748b', textAlign: 'center', marginTop: '12px' }}>Front - 3.5" x 2"</p>
              </div>
              <div style={{ background: 'white', borderRadius: '12px', padding: '40px', border: '1px solid #e2e8f0' }}>
                <div style={{ background: 'linear-gradient(135deg, #132f4a, #1a3a5c)', borderRadius: '8px', padding: '32px', aspectRatio: '3.5/2', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', right: '-30px', bottom: '-30px', opacity: 0.06 }}>
                    <Icon size={180} />
                  </div>
                  <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                    <svg height="48" viewBox="0 0 376.9 114.15" xmlns="http://www.w3.org/2000/svg">
                      <polygon fill="#0eb2af" points="65.93 88.62 43.68 88.72 54.88 65.52 65.93 88.62"/>
                      <polygon fill="#ffffff" points="109.38 113.68 89.68 113.76 55.04 41.28 19.95 114.06 0 114.15 44.35 22.18 51.67 6.97 55.04 0 109.38 113.68"/>
                      <path fill="#ffffff" d="M303.28,59.85c-.03,3.29-.44,6.23-1.2,8.72-.75,2.33-2.05,4.56-3.85,6.61-2.49,2.79-5.4,4.77-8.67,5.87-.23.07-.47.15-.71.22-.55.16-1.12.3-1.68.42-1.48.3-3.07.46-4.72.46-3.27,0-6.32-.62-9.08-1.85-2.53-1.12-4.89-2.78-7.02-4.94-4.52-4.6-6.72-9.97-6.72-16.41s2.24-12,6.84-16.58c4.6-4.6,10.04-6.83,16.64-6.83,3.14,0,6.13.58,8.86,1.71l-1.31,2.74c-2.31-1-4.8-1.51-7.42-1.51-5.69,0-10.54,2-14.39,5.92-3.87,3.87-5.83,8.76-5.83,14.55s2.19,11.01,6.51,14.91c1.69,1.51,3.46,2.72,5.28,3.59,2.51,1.21,5.16,1.81,7.89,1.81.46,0,.92-.01,1.36-.05,3.53-.27,6.76-1.62,9.62-4.02l.08-.07c3.28-2.8,5.13-6.22,5.52-10.16l.21-2.2h-6.39l1.4-2.91h8.78Z"/>
                      <polygon fill="#ffffff" points="350.74 80.52 347.32 80.54 330 44.31 312.46 80.69 308.95 80.71 329.98 37.09 350.74 80.52"/>
                      <polygon fill="#0eb2af" points="333.12 69.72 326.65 69.75 329.91 62.99 333.12 69.72"/>
                      <polygon fill="#ffffff" points="215.42 80.53 212 80.54 194.69 44.31 177.14 80.69 173.63 80.71 194.67 37.09 215.42 80.53"/>
                      <path fill="#ffffff" d="M237,61.06l10.27,20.16h-3.31l-6.45-12.56-4.68-9.79h1.5c1.59,0,2.95-.12,4.13-.36,5.37-1.03,8.32-4.44,8.32-9.62,0-3.08-1.07-5.47-3.18-7.1-2.02-1.59-4.89-2.37-8.79-2.4h-19.17l-1.39-2.9h19.01c1.53,0,2.91.07,4.24.21,2.58.27,4.76.83,6.44,1.65.75.38,1.41.81,1.97,1.28,2.71,2.32,4.03,5.32,4.03,9.16,0,3.03-.83,5.54-2.52,7.66-1.67,2.1-3.92,3.46-6.69,4.06l-3.73.55Z"/>
                      <polygon fill="#ffffff" points="176.07 36.47 174.66 39.39 152.62 39.39 152.62 81.23 149.26 81.23 149.26 39.39 130.72 39.39 132.12 36.48 176.07 36.47"/>
                      <path fill="#0eb2af" d="M362.93,32.01l-7.73,16.61h2.54l1.74-3.79.98-2.22,2.43-5.31,2.32,5.31.96,2.22,1.64,3.79h2.58l-7.46-16.61Z"/>
                      <rect fill="#0eb2af" x="374.54" y="32.99" width="2.36" height="15.63"/>
                      <polygon fill="#0eb2af" points="197.75 69.72 191.28 69.75 194.53 62.99 197.75 69.72"/>
                    </svg>
                  </div>
                </div>
                <p style={{ fontSize: '12px', color: '#64748b', textAlign: 'center', marginTop: '12px' }}>Back - Dark with watermark</p>
              </div>
            </div>

            {/* Email Signature */}
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Email Signature</h3>
            <div className="card-white" style={{ marginBottom: '48px' }}>
              <div style={{ maxWidth: '500px', padding: '20px', background: '#fafafa', borderRadius: '8px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ borderRight: '2px solid #0eb2af', paddingRight: '16px' }}>
                    <Icon size={36} />
                  </div>
                  <div>
                    <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '15px', fontWeight: '400', color: '#1e293b', margin: '0 0 2px 0' }}>Joe Thompson</p>
                    <p style={{ fontSize: '12px', color: '#1f476a', margin: '0 0 8px 0' }}>CEO, TARGA AI</p>
                    <div style={{ fontSize: '11px', color: '#64748b', lineHeight: '1.8' }}>
                      <span>joe@targa.ai</span>
                      <span style={{ margin: '0 8px', color: '#cbd5e1' }}>|</span>
                      <span>(555) 123-4567</span>
                    </div>
                    <p style={{ fontSize: '10px', color: '#94a3b8', marginTop: '8px', fontStyle: 'italic' }}>The Leader Experience™ - targa.ai</p>
                  </div>
                </div>
              </div>
              <p style={{ fontSize: '12px', color: '#64748b', marginTop: '16px' }}>A-mark icon + teal divider line. LX tagline included for brand reinforcement.</p>
            </div>

            {/* LinkedIn Banner */}
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>LinkedIn Banner</h3>
            <div className="card-white" style={{ marginBottom: '48px' }}>
              <div style={{ background: 'linear-gradient(135deg, #132f4a, #1a3a5c)', borderRadius: '8px', padding: '40px 48px', aspectRatio: '4/1', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', left: '-60px', top: '-60px', opacity: 0.04 }}>
                  <Icon size={300} />
                </div>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '24px', fontWeight: '300', color: 'white', margin: '0 0 4px 0' }}>The Next Generation Leader Experience</p>
                  <p style={{ fontSize: '12px', color: '#94a3b8', margin: 0 }}>The Leader Experience™ - AI-Powered Value Creation</p>
                </div>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <Icon size={56} />
                </div>
              </div>
              <p style={{ fontSize: '12px', color: '#64748b', marginTop: '16px' }}>1584 x 396px - Company page and personal profiles</p>
            </div>

            {/* Presentation Cover */}
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Presentation Title Slide</h3>
            <div className="card-white" style={{ marginBottom: '48px' }}>
              <div style={{ background: 'linear-gradient(135deg, #132f4a, #1a3a5c)', borderRadius: '8px', padding: '60px', aspectRatio: '16/9', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', right: '60px', bottom: '-40px', opacity: 0.04 }}>
                  <Icon size={320} />
                </div>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <Icon size={36} />
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '32px', fontWeight: '300', color: 'white', margin: '20px 0 12px 0', lineHeight: '1.2' }}>Enterprise Value<br/>Creation Workshop</p>
                  <div style={{ display: 'flex', gap: '8px', margin: '20px 0 0 0' }}>
                    <div style={{ height: '2px', width: '40px', background: '#1f476a', borderRadius: '1px' }}></div>
                    <div style={{ height: '2px', width: '40px', background: '#0eb2af', borderRadius: '1px' }}></div>
                    <div style={{ height: '2px', width: '40px', background: '#fbbf24', borderRadius: '1px' }}></div>
                  </div>
                  <p style={{ fontSize: '14px', color: '#94a3b8', margin: '20px 0 0 0' }}>Prepared for Acme Corp - March 2026</p>
                </div>
              </div>
              <p style={{ fontSize: '12px', color: '#64748b', marginTop: '16px' }}>16:9 slide master - brand accent divider line below title</p>
            </div>

            {/* Zoom Background */}
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Virtual Background</h3>
            <div className="card-white" style={{ marginBottom: '48px' }}>
              <div style={{ background: '#f8fafc', borderRadius: '8px', padding: '40px', aspectRatio: '16/9', display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', left: '40px', top: '40px', opacity: 0.07 }}>
                  <Icon size={200} />
                </div>
                <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Icon size={24} />
                  <div>
                    <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '13px', fontWeight: '300', color: '#1f476a', margin: 0 }}>TARGA AI</p>
                    <p style={{ fontSize: '8px', color: '#94a3b8', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: '500', margin: 0 }}>Leader Experience™</p>
                  </div>
                </div>
              </div>
              <p style={{ fontSize: '12px', color: '#64748b', marginTop: '16px' }}>Clean background with subtle watermark. Logo lockup bottom-right. Center clear for speaker.</p>
            </div>

            {/* Report Cover */}
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Pilot Performance Report</h3>
            <div className="card-white">
              <div style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '60px', aspectRatio: '8.5/11', maxWidth: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(to right, #1f476a 30%, #0eb2af 30%, #0eb2af 55%, #1f476a 55%, #1f476a 75%, #fbbf24 75%)' }}></div>
                <Icon size={36} />
                <div>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '24px', fontWeight: '300', color: '#1e293b', lineHeight: '1.3', margin: '0 0 8px 0' }}>Enterprise Value<br/>Creation Report</p>
                  <div style={{ height: '1px', background: '#e2e8f0', margin: '16px 0' }}></div>
                  <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>Prepared for Acme Corp</p>
                  <p style={{ fontSize: '12px', color: '#94a3b8', margin: '4px 0 0 0' }}>March 2026 - Confidential</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Icon size={20} />
                  <p style={{ fontSize: '10px', color: '#94a3b8', margin: 0 }}>TARGA AI</p>
                </div>
              </div>
              <p style={{ fontSize: '12px', color: '#64748b', marginTop: '16px' }}>8.5" x 11" - Brand gradient top bar, icon watermark optional</p>
            </div>
          </>
        )}

        {/* ==================== DOWNLOADS ==================== */}
        {activeTab === 'downloads' && (
          <>
            <h2 className="section-title">Assets & Downloads</h2>
            <p className="section-subtitle">
              Complete file library for brand assets, templates, and implementation resources.
            </p>

            {(() => {
              const downloadSvg = (svgContent, filename) => {
                const blob = new Blob([svgContent], { type: 'image/svg+xml' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = filename;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
              };

              const downloadText = (content, filename, type) => {
                const blob = new Blob([content], { type });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = filename;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
              };

              const iconSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55.86 58.3">
  <polygon fill="#0eb2af" points="33.67 45.26 22.31 45.31 28.03 33.46 33.67 45.26"/>
  <polygon fill="#1f476a" points="55.86 58.06 45.8 58.1 28.11 21.08 10.19 58.25 0 58.3 22.65 11.33 26.39 3.56 28.11 0 55.86 58.06"/>
</svg>`;

              const iconWhiteSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55.86 58.3">
  <polygon fill="#0eb2af" points="33.67 45.26 22.31 45.31 28.03 33.46 33.67 45.26"/>
  <polygon fill="#ffffff" points="55.86 58.06 45.8 58.1 28.11 21.08 10.19 58.25 0 58.3 22.65 11.33 26.39 3.56 28.11 0 55.86 58.06"/>
</svg>`;

              const colorsCss = `:root {
  /* Primary Palette */
  --targa-slate: #1f476a;
  --targa-teal: #0eb2af;
  --targa-gold: #fbbf24;
  --targa-blue: #0eb2af;

  /* Neutral Grays */
  --targa-gray-900: #1e293b;
  --targa-gray-700: #1f476a;
  --targa-gray-500: #64748b;
  --targa-gray-300: #cbd5e1;
  --targa-gray-200: #e2e8f0;
  --targa-gray-100: #f1f5f9;
  --targa-gray-50: #f8fafc;

  /* Semantic */
  --targa-bg-dark: #132f4a;
  --targa-bg-dark-end: #1a3a5c;
  --targa-text-primary: #1e293b;
  --targa-text-secondary: #1f476a;
  --targa-text-muted: #64748b;
  --targa-text-faint: #94a3b8;
  --targa-border: #e2e8f0;
  --targa-border-light: #f1f5f9;

  /* Typography */
  --targa-font-headline: 'Space Grotesk', sans-serif;
  --targa-font-body: 'Inter', Arial, sans-serif;

  /* Spacing */
  --targa-radius-sm: 8px;
  --targa-radius-md: 12px;
  --targa-radius-lg: 16px;
  --targa-shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.05);
  --targa-shadow-hover: 0 16px 32px rgba(0, 0, 0, 0.08);
}`;

              const files = [
                { name: 'Icon Mark (SVG)', desc: 'Full color TARGA iconmark, vector', size: '1 KB', available: true, action: () => downloadSvg(iconSvg, 'targa-icon-mark.svg') },
                { name: 'Icon Mark - White (SVG)', desc: 'White iconmark for dark backgrounds', size: '1 KB', available: true, action: () => downloadSvg(iconWhiteSvg, 'targa-icon-mark-white.svg') },
                { name: 'Combimark - Horizontal (SVG)', desc: 'Icon + wordmark lockup, 940px', size: '18 KB', available: true, action: () => {
                  const el = document.querySelector('[data-combimark-h]');
                  if (el) downloadSvg(el.outerHTML, 'targa-combimark-horizontal.svg');
                }},
                { name: 'Combimark - Vertical (SVG)', desc: 'Stacked icon + wordmark', size: '14 KB', available: true, action: () => {
                  const el = document.querySelector('[data-combimark-v]');
                  if (el) downloadSvg(el.outerHTML, 'targa-combimark-vertical.svg');
                }},
                { name: 'Color Swatches (CSS)', desc: 'CSS custom properties for web implementation', size: '1 KB', available: true, action: () => downloadText(colorsCss, 'targa-colors.css', 'text/css') },
                { name: 'Logo Mark (PNG)', desc: 'Raster with transparency, 2048px', size: '-', available: false },
                { name: 'Brand Guidelines (PDF)', desc: 'Complete printable standards document', size: '-', available: false },
                { name: 'Presentation Template', desc: 'PowerPoint/Google Slides master deck', size: '-', available: false },
              ];

              return (
                <>
                  {/* Hidden SVGs for download extraction */}
                  <svg data-combimark-h xmlns="http://www.w3.org/2000/svg" viewBox="0 0 376.9 114.15" style={{ display: 'none' }}>
                    <polygon fill="#0eb2af" points="65.93 88.62 43.68 88.72 54.88 65.52 65.93 88.62"/>
                    <polygon fill="#1f476a" points="109.38 113.68 89.68 113.76 55.04 41.28 19.95 114.06 0 114.15 44.35 22.18 51.67 6.97 55.04 0 109.38 113.68"/>
                    <path fill="#1f476a" d="M303.28,59.85c-.03,3.29-.44,6.23-1.2,8.72-.75,2.33-2.05,4.56-3.85,6.61-2.49,2.79-5.4,4.77-8.67,5.87-.23.07-.47.15-.71.22-.55.16-1.12.3-1.68.42-1.48.3-3.07.46-4.72.46-3.27,0-6.32-.62-9.08-1.85-2.53-1.12-4.89-2.78-7.02-4.94-4.52-4.6-6.72-9.97-6.72-16.41s2.24-12,6.84-16.58c4.6-4.6,10.04-6.83,16.64-6.83,3.14,0,6.13.58,8.86,1.71l-1.31,2.74c-2.31-1-4.8-1.51-7.42-1.51-5.69,0-10.54,2-14.39,5.92-3.87,3.87-5.83,8.76-5.83,14.55s2.19,11.01,6.51,14.91c1.69,1.51,3.46,2.72,5.28,3.59,2.51,1.21,5.16,1.81,7.89,1.81.46,0,.92-.01,1.36-.05,3.53-.27,6.76-1.62,9.62-4.02l.08-.07c3.28-2.8,5.13-6.22,5.52-10.16l.21-2.2h-6.39l1.4-2.91h8.78Z"/>
                    <polygon fill="#1f476a" points="350.74 80.52 347.32 80.54 330 44.31 312.46 80.69 308.95 80.71 329.98 37.09 350.74 80.52"/>
                    <polygon fill="#0eb2af" points="333.12 69.72 326.65 69.75 329.91 62.99 333.12 69.72"/>
                    <polygon fill="#1f476a" points="215.42 80.53 212 80.54 194.69 44.31 177.14 80.69 173.63 80.71 194.67 37.09 215.42 80.53"/>
                    <path fill="#1f476a" d="M237,61.06l10.27,20.16h-3.31l-6.45-12.56-4.68-9.79h1.5c1.59,0,2.95-.12,4.13-.36,5.37-1.03,8.32-4.44,8.32-9.62,0-3.08-1.07-5.47-3.18-7.1-2.02-1.59-4.89-2.37-8.79-2.4h-19.17l-1.39-2.9h19.01c1.53,0,2.91.07,4.24.21,2.58.27,4.76.83,6.44,1.65.75.38,1.41.81,1.97,1.28,2.71,2.32,4.03,5.32,4.03,9.16,0,3.03-.83,5.54-2.52,7.66-1.67,2.1-3.92,3.46-6.69,4.06l-3.73.55Z"/>
                    <polygon fill="#1f476a" points="176.07 36.47 174.66 39.39 152.62 39.39 152.62 81.23 149.26 81.23 149.26 39.39 130.72 39.39 132.12 36.48 176.07 36.47"/>
                    <path fill="#0eb2af" d="M362.93,32.01l-7.73,16.61h2.54l1.74-3.79.98-2.22,2.43-5.31,2.32,5.31.96,2.22,1.64,3.79h2.58l-7.46-16.61Z"/>
                    <rect fill="#0eb2af" x="374.54" y="32.99" width="2.36" height="15.63"/>
                    <polygon fill="#0eb2af" points="197.75 69.72 191.28 69.75 194.53 62.99 197.75 69.72"/>
                  </svg>
                  <svg data-combimark-v xmlns="http://www.w3.org/2000/svg" viewBox="0 0 376.9 114.15" style={{ display: 'none' }}>
                    <polygon fill="#0eb2af" points="65.93 88.62 43.68 88.72 54.88 65.52 65.93 88.62"/>
                    <polygon fill="#1f476a" points="109.38 113.68 89.68 113.76 55.04 41.28 19.95 114.06 0 114.15 44.35 22.18 51.67 6.97 55.04 0 109.38 113.68"/>
                    <path fill="#1f476a" d="M303.28,59.85c-.03,3.29-.44,6.23-1.2,8.72-.75,2.33-2.05,4.56-3.85,6.61-2.49,2.79-5.4,4.77-8.67,5.87-.23.07-.47.15-.71.22-.55.16-1.12.3-1.68.42-1.48.3-3.07.46-4.72.46-3.27,0-6.32-.62-9.08-1.85-2.53-1.12-4.89-2.78-7.02-4.94-4.52-4.6-6.72-9.97-6.72-16.41s2.24-12,6.84-16.58c4.6-4.6,10.04-6.83,16.64-6.83,3.14,0,6.13.58,8.86,1.71l-1.31,2.74c-2.31-1-4.8-1.51-7.42-1.51-5.69,0-10.54,2-14.39,5.92-3.87,3.87-5.83,8.76-5.83,14.55s2.19,11.01,6.51,14.91c1.69,1.51,3.46,2.72,5.28,3.59,2.51,1.21,5.16,1.81,7.89,1.81.46,0,.92-.01,1.36-.05,3.53-.27,6.76-1.62,9.62-4.02l.08-.07c3.28-2.8,5.13-6.22,5.52-10.16l.21-2.2h-6.39l1.4-2.91h8.78Z"/>
                    <polygon fill="#1f476a" points="350.74 80.52 347.32 80.54 330 44.31 312.46 80.69 308.95 80.71 329.98 37.09 350.74 80.52"/>
                    <polygon fill="#0eb2af" points="333.12 69.72 326.65 69.75 329.91 62.99 333.12 69.72"/>
                    <polygon fill="#1f476a" points="215.42 80.53 212 80.54 194.69 44.31 177.14 80.69 173.63 80.71 194.67 37.09 215.42 80.53"/>
                    <path fill="#1f476a" d="M237,61.06l10.27,20.16h-3.31l-6.45-12.56-4.68-9.79h1.5c1.59,0,2.95-.12,4.13-.36,5.37-1.03,8.32-4.44,8.32-9.62,0-3.08-1.07-5.47-3.18-7.1-2.02-1.59-4.89-2.37-8.79-2.4h-19.17l-1.39-2.9h19.01c1.53,0,2.91.07,4.24.21,2.58.27,4.76.83,6.44,1.65.75.38,1.41.81,1.97,1.28,2.71,2.32,4.03,5.32,4.03,9.16,0,3.03-.83,5.54-2.52,7.66-1.67,2.1-3.92,3.46-6.69,4.06l-3.73.55Z"/>
                    <polygon fill="#1f476a" points="176.07 36.47 174.66 39.39 152.62 39.39 152.62 81.23 149.26 81.23 149.26 39.39 130.72 39.39 132.12 36.48 176.07 36.47"/>
                    <path fill="#0eb2af" d="M362.93,32.01l-7.73,16.61h2.54l1.74-3.79.98-2.22,2.43-5.31,2.32,5.31.96,2.22,1.64,3.79h2.58l-7.46-16.61Z"/>
                    <rect fill="#0eb2af" x="374.54" y="32.99" width="2.36" height="15.63"/>
                    <polygon fill="#0eb2af" points="197.75 69.72 191.28 69.75 194.53 62.99 197.75 69.72"/>
                  </svg>

                  {files.map((file, i) => (
                    <div key={i} style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px 24px', marginBottom: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <h4 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '4px' }}>{file.name}</h4>
                        <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>{file.desc}{file.available ? ` - ${file.size}` : ''}</p>
                      </div>
                      {file.available ? (
                        <button onClick={file.action} style={{ background: '#0eb2af', color: 'white', border: 'none', padding: '8px 20px', borderRadius: '6px', cursor: 'pointer', fontSize: '12px', fontWeight: '600', whiteSpace: 'nowrap', transition: 'all 0.2s ease' }}>Download</button>
                      ) : (
                        <span style={{ fontSize: '12px', fontWeight: '500', color: '#94a3b8', padding: '8px 20px', background: '#f8fafc', borderRadius: '6px', whiteSpace: 'nowrap' }}>Coming Soon</span>
                      )}
                    </div>
                  ))}
                </>
              );
            })()}

            <div className="card-white" style={{ marginTop: '32px', textAlign: 'center' }}>
              <p style={{ fontSize: '14px', color: '#64748b' }}>Questions about assets or need custom formats?</p>
              <p style={{ fontSize: '14px', color: '#1e293b', fontWeight: '600', marginTop: '8px' }}>Contact Joe Thompson</p>
            </div>
          </>
        )}

        {/* ==================== IMPLEMENTATION ==================== */}
        {activeTab === 'implementation' && (
          <>
            <h2 className="section-title">Implementation</h2>
            <p className="section-subtitle">
              Step-by-step rollout roadmap, asset generation workflow, and template replication guide.
            </p>

            <div className="card-white">
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '24px' }}>8-Week Rollout Roadmap</h3>
              {[
                { week: 'Weeks 1-2', title: 'Internal Training', desc: 'Joe, Mark, and team onboard to brand system', color: '#1f476a' },
                { week: 'Weeks 3-4', title: 'Asset Generation', desc: 'Business cards, templates, signage, collateral produced', color: '#1f476a' },
                { week: 'Weeks 5-6', title: 'Website & LinkedIn Launch', desc: 'Site goes live, LinkedIn video series begins', color: '#0eb2af' },
                { week: 'Weeks 7-8', title: 'Platform Go-Live', desc: 'Pilot program launches, demo bookings active', color: '#fbbf24' },
              ].map((phase, i) => (
                <div key={i} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', padding: '20px', background: '#f8fafc', borderRadius: '8px', borderLeft: `3px solid ${phase.color}`, marginBottom: '12px' }}>
                  <div style={{ minWidth: '80px' }}>
                    <p style={{ fontSize: '12px', fontWeight: '600', color: phase.color }}>{phase.week}</p>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '4px' }}>{phase.title}</h4>
                    <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>{phase.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="card-white">
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '24px' }}>Asset Generation Workflow</h3>
              <div className="flow-diagram">
                <div className="flow-box">Design</div>
                <div className="flow-arrow">{'\u2192'}</div>
                <div className="flow-box">Develop</div>
                <div className="flow-arrow">{'\u2192'}</div>
                <div className="flow-box">Test</div>
                <div className="flow-arrow">{'\u2192'}</div>
                <div className="flow-box">Deploy</div>
              </div>
            </div>

            <div className="card-white">
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '24px' }}>For New Projects (TARGA Replication)</h3>
              {[
                'Download brand guidelines and review all sections',
                'Create project files using brand templates',
                'Apply colors, typography, and spacing from system',
                'Replace logo assets with project-specific marks',
                'Test for accessibility (WCAG AA compliance)',
                'Archive final assets with version number',
              ].map((item, i) => (
                <div key={i} className="checklist-item">
                  <div className="checklist-icon">{'\u2713'}</div>
                  <div className="checklist-text">{item}</div>
                </div>
              ))}
            </div>
          </>
        )}

      </div>
    </>
  );
}

function Placeholder({ icon, title, description }) {
  return (
    <>
      <h2 className="section-title">{title}</h2>
      <p className="section-subtitle">{description}</p>
      <div className="placeholder-section">
        <div className="placeholder-icon" dangerouslySetInnerHTML={{ __html: icon }}></div>
        <h3>Content In Development</h3>
        <p>This section is being built. Full content and specifications coming soon.</p>
      </div>
    </>
  );
}
