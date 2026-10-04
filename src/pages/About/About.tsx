import React, { useEffect } from 'react';
import { SectionEyebrow } from '../../components/SectionEyebrow/SectionEyebrow';
import { WhoWeAre } from '../../sections/WhoWeAre/WhoWeAre';
import { FinalCTA } from '../../sections/FinalCTA/FinalCTA';
import './About.css';

export const About: React.FC = () => {
  useEffect(() => {
    document.title = "About Us | Urban Marketing Enterprise LLC (UME)";
  }, []);

  return (
    <div className="about-page">
      {/* About Hero */}
      <section className="about-hero-section">
        <div className="container">
          <SectionEyebrow>OUR STORY & APPROACH</SectionEyebrow>
          <h1 className="about-hero-title">
            Street-smart strategy.<br />
            National scale execution.
          </h1>
          <p className="about-hero-lead">
            Founded in 2014, Urban Marketing Enterprise LLC (UME) bridges the gap between grassroots street culture and high-ROI brand growth.
          </p>
        </div>
      </section>

      {/* Main Who We Are Section */}
      <WhoWeAre />

      {/* Philosophy Section */}
      <section className="philosophy-section">
        <div className="container philosophy-container">
          <h2 className="philosophy-title">OUR THREE UNBREAKABLE RULES</h2>
          <div className="rules-grid">
            <div className="rule-card">
              <span className="rule-num">01</span>
              <h3 className="rule-heading">BLOCK-LEVEL AUTHENTICITY</h3>
              <p className="rule-desc">If an activation or message doesn't resonate on the street corner, it will fail in the feed. Real culture cannot be faked.</p>
            </div>
            <div className="rule-card">
              <span className="rule-num">02</span>
              <h3 className="rule-heading">DATA-BACKED GEO-TARGETING</h3>
              <p className="rule-desc">We pair street presence with surgical zip-code media buying to capture foot traffic and convert nearby consumers.</p>
            </div>
            <div className="rule-card">
              <span className="rule-num">03</span>
              <h3 className="rule-heading">ACCOUNTABILITY TO REVENUE</h3>
              <p className="rule-desc">We commit to measurable commercial outcomes. No vanity metrics or empty decks without clear ROI targets.</p>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
};
