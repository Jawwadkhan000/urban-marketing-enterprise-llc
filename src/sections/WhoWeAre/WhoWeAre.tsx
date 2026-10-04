import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionEyebrow } from '../../components/SectionEyebrow/SectionEyebrow';
import { Button } from '../../components/Button/Button';
import { statisticsData } from '../../data/siteData';
import './WhoWeAre.css';

gsap.registerPlugin(ScrollTrigger);

export const WhoWeAre: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        '.stat-box',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.who-we-are-stats-bar',
            start: 'top 85%',
          }
        }
      );
    }
  }, { scope: sectionRef });

  return (
    <section className="who-we-are-section" ref={sectionRef}>
      <div className="container">
        {/* Top Content Row: Story Text & CTA */}
        <div className="who-we-are-main-content">
          <SectionEyebrow>WHO WE ARE</SectionEyebrow>

          <h2 className="who-we-are-title">
            Built in the city, for the brands that live in it.
          </h2>

          <p className="who-we-are-paragraph">
            Urban Marketing Enterprise LLC started in 2014 with a single mural and a local retailer nobody was covering. A decade later we run integrated campaigns for national brands across twelve metros — with the same rule we started with: if it doesn't work on the block, it doesn't ship. Our team blends brand strategists, media buyers, producers and neighborhood operators. One room, one plan, one number we're accountable to.
          </p>

          <div className="who-we-are-cta">
            <Button to="/about" variant="primary">
              MEET THE TEAM
            </Button>
          </div>
        </div>

        {/* Full-Width Horizontal Separator Line */}
        <div className="who-we-are-divider" />

        {/* Horizontal 4-Column Statistics Bar matching reference screenshot */}
        <div className="who-we-are-stats-bar">
          {statisticsData.map((stat, idx) => (
            <React.Fragment key={idx}>
              <div className="stat-box">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
              {idx < statisticsData.length - 1 && (
                <div className="stat-vertical-divider" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
