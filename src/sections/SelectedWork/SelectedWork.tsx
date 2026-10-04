import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionEyebrow } from '../../components/SectionEyebrow/SectionEyebrow';
import { Button } from '../../components/Button/Button';
import { caseStudiesData } from '../../data/siteData';
import './SelectedWork.css';

gsap.registerPlugin(ScrollTrigger);

interface SelectedWorkProps {
  hideBottomCta?: boolean;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ hideBottomCta = false }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (sectionRef.current) {
      const cards = gsap.utils.toArray<HTMLElement>('.case-study-card');
      
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
            }
          }
        );
      });
    }
  }, { scope: sectionRef });

  return (
    <section className="selected-work-section" ref={sectionRef}>
      <div className="container">
        <div className="work-header">
          <SectionEyebrow>SELECTED WORK</SectionEyebrow>
          <h2 className="work-title">
            Campaigns the city couldn't ignore.
          </h2>
        </div>

        {/* Asymmetrical / Masonry Case Studies Layout */}
        <div className="work-grid">
          {caseStudiesData.map((study, idx) => (
            <article
              key={study.id}
              className={`case-study-card ${idx === 0 ? 'featured' : ''}`}
            >
              <div className="case-study-image-wrapper">
                <img
                  src={study.imageUrl}
                  alt={`${study.campaign} - ${study.clientLocation}`}
                  className="case-study-img"
                  loading="lazy"
                />
                <div className="case-study-overlay" />
                <div className="case-study-result-badge">
                  <span className="result-label">RESULT</span>
                  <span className="result-text">{study.result}</span>
                </div>
              </div>

              <div className="case-study-content">
                <span className="case-study-meta">{study.clientLocation}</span>
                <h3 className="case-study-campaign">{study.campaign}</h3>
                <p className="case-study-desc">{study.description}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Centered CTA */}
        {!hideBottomCta && (
          <div className="work-bottom-cta">
            <Button to="/work" variant="secondary">
              REQUEST FULL CASE STUDIES
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
