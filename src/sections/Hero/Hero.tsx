import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SectionEyebrow } from '../../components/SectionEyebrow/SectionEyebrow';
import { Button } from '../../components/Button/Button';
import { siteDetails } from '../../data/siteData';
import './Hero.css';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo('.hero-eyebrow-wrap', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 })
      .fromTo('.hero-title-line', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.15 }, '-=0.3')
      .fromTo('.hero-subheadline', { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
      .fromTo('.hero-description', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
      .fromTo('.hero-cta-group', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.3')
      .fromTo('.hero-bg-visual', 
        { opacity: 0, scale: 1.05, clipPath: 'inset(0% 0% 0% 10%)' }, 
        { opacity: 1, scale: 1, clipPath: 'inset(0% 0% 0% 0%)', duration: 1.2, ease: 'power2.out' }, '-=1.0');
  }, { scope: containerRef });

  return (
    <section className="hero-section" ref={containerRef}>
      {/* Absolute Full-Height Immersive Right Visual Layer */}
      <div className="hero-bg-visual">
        <img
          src="/assets/hero_bg.png"
          alt="Urban Marketing Enterprise LLC - Urban City Editorial Visual"
          className="hero-bg-img"
          loading="eager"
          decoding="async"
        />
        {/* Editorial blend mask smoothing transition from left cream background into the urban visual */}
        <div className="hero-bg-blend-mask" />
      </div>

      {/* Foreground Editorial Content Container */}
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-eyebrow-wrap">
            <SectionEyebrow>{siteDetails.heroEyebrow}</SectionEyebrow>
          </div>

          <h1 className="hero-main-title">
            <span className="hero-title-line">We Make Brands</span>
            <span className="hero-title-line">Own the City.</span>
          </h1>

          <p className="hero-subheadline">
            {siteDetails.heroSubheadline}
          </p>

          <p className="hero-description">
            {siteDetails.heroDescription}
          </p>

          <div className="hero-cta-group">
            <Button to="/contact" variant="primary">
              START YOUR CAMPAIGN
            </Button>
            <Button to="/work" variant="secondary">
              SEE THE WORK
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
