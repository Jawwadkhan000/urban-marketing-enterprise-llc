import React, { useEffect } from 'react';
import { SectionEyebrow } from '../../components/SectionEyebrow/SectionEyebrow';
import { SelectedWork } from '../../sections/SelectedWork/SelectedWork';
import { FinalCTA } from '../../sections/FinalCTA/FinalCTA';
import { caseStudiesData } from '../../data/siteData';
import './Work.css';

export const Work: React.FC = () => {
  useEffect(() => {
    document.title = "Case Studies & Work | Urban Marketing Enterprise LLC (UME)";
  }, []);

  return (
    <div className="work-page">
      {/* Work Hero */}
      <section className="work-hero-section">
        <div className="container">
          <SectionEyebrow>CASE STUDIES</SectionEyebrow>
          <h1 className="work-hero-title">
            Proven urban impact.
          </h1>
          <p className="work-hero-lead">
            Explore how we've helped leading urban brands claim market share, trigger viral foot traffic, and drive measurable revenue growth across key metropolitan hubs.
          </p>
        </div>
      </section>

      {/* Main Selected Work Section */}
      <SelectedWork hideBottomCta={true} />

      {/* Detailed Case Study Breakdowns */}
      <section className="case-breakdown-section">
        <div className="container">
          <SectionEyebrow>DEEP DIVE</SectionEyebrow>
          <h2 className="breakdown-title">CAMPAIGN ARCHITECTURE</h2>

          <div className="breakdowns-list">
            {caseStudiesData.map((study) => (
              <div key={study.id} className="breakdown-item">
                <div className="breakdown-left">
                  <span className="breakdown-client">{study.clientLocation}</span>
                  <h3 className="breakdown-campaign">{study.campaign}</h3>
                  <div className="breakdown-result-tag">{study.result}</div>
                </div>
                <div className="breakdown-right">
                  <div className="breakdown-block">
                    <h4>THE CHALLENGE</h4>
                    <p>{study.challenge}</p>
                  </div>
                  <div className="breakdown-block">
                    <h4>THE STRATEGY</h4>
                    <p>{study.strategy}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
};
