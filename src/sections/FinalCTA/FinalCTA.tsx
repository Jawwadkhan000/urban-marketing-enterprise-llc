import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '../../components/Button/Button';
import './FinalCTA.css';

gsap.registerPlugin(ScrollTrigger);

export const FinalCTA: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        '.final-cta-container > *',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      );
    }
  }, { scope: sectionRef });

  return (
    <section className="final-cta-section" ref={sectionRef}>
      <div className="container final-cta-container">
        <div className="final-cta-content">
          <h2 className="final-cta-heading">
            Ready to own your market?
          </h2>
          <p className="final-cta-copy">
            Tell us the city and the target. We'll come back with a plan, a timeline and the number we're aiming at — no retainer talk until you've seen it.
          </p>
        </div>
        <div className="final-cta-action">
          <Button to="/contact" variant="secondary" dark>
            START YOUR CAMPAIGN
          </Button>
        </div>
      </div>
    </section>
  );
};
