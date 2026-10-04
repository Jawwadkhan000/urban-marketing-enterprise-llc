import React, { useEffect } from 'react';
import { SectionEyebrow } from '../../components/SectionEyebrow/SectionEyebrow';
import { WhatWeDo } from '../../sections/WhatWeDo/WhatWeDo';
import { FinalCTA } from '../../sections/FinalCTA/FinalCTA';
import './Services.css';

export const Services: React.FC = () => {
  useEffect(() => {
    document.title = "Services & Disciplines | Urban Marketing Enterprise LLC (UME)";
  }, []);

  return (
    <div className="services-page">
      {/* Services Hero */}
      <section className="services-hero-section">
        <div className="container">
          <SectionEyebrow>CORE DISCIPLINES</SectionEyebrow>
          <h1 className="services-hero-title">
            Integrated capabilities.<br />
            Zero fluff execution.
          </h1>
          <p className="services-hero-lead">
            We unite strategy, digital media, social content and physical street activations into a cohesive engine built to dominate metro markets.
          </p>
        </div>
      </section>

      {/* Main What We Do Section */}
      <WhatWeDo />

      <FinalCTA />
    </div>
  );
};
