import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionEyebrow } from '../../components/SectionEyebrow/SectionEyebrow';
import { ServiceNumberChip } from '../../components/ServiceNumberChip/ServiceNumberChip';
import { servicesData } from '../../data/siteData';
import './WhatWeDo.css';

gsap.registerPlugin(ScrollTrigger);

export const WhatWeDo: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (sectionRef.current) {
      const cards = gsap.utils.toArray<HTMLElement>('.discipline-card');
      
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          }
        }
      );
    }
  }, { scope: sectionRef });

  return (
    <section className="what-we-do-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <SectionEyebrow>WHAT WE DO</SectionEyebrow>
          <h2 className="section-title">
            <span className="title-line">Four disciplines,</span>
            <span className="title-line">one street-level point of view.</span>
          </h2>
        </div>

        <div className="disciplines-grid">
          {servicesData.map((discipline) => (
            <div key={discipline.number} className="discipline-card">
              {/* Animated Maroon Fill Overlay on Hover (Bottom-to-Top) */}
              <div className="discipline-card-hover-fill" />

              {/* Default Card State: Square Number Chip + Title */}
              <div className="discipline-card-inner">
                <div className="discipline-header">
                  <ServiceNumberChip number={discipline.number} />
                  <h3 className="discipline-title">{discipline.title}</h3>
                </div>

                {/* Hidden by default, reveals in White on Hover */}
                <div className="discipline-hover-content">
                  <p className="discipline-description">
                    {discipline.description}
                  </p>

                  <div className="discipline-services">
                    <span className="services-label">KEY DELIVERABLES</span>
                    <ul className="services-list">
                      {discipline.services.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
