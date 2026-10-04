import React, { useState, useEffect, useRef } from 'react';
import { SectionEyebrow } from '../../components/SectionEyebrow/SectionEyebrow';
import { testimonialsData } from '../../data/siteData';
import './ClientWords.css';

export const ClientWords: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  // Auto-scroll every 5 seconds unless hovered
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="client-words-section">
      <div className="container">
        <div className="client-words-header">
          <SectionEyebrow>CLIENT WORD</SectionEyebrow>
        </div>

        <div 
          className="testimonials-carousel-container"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            className="testimonials-slider-track" 
            ref={trackRef}
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonialsData.map((testimonial, idx) => (
              <div key={idx} className="testimonial-slide">
                <div className="testimonial-card">
                  <span className="quote-mark">“</span>
                  <p className="testimonial-quote">
                    {testimonial.quote}
                  </p>
                  <div className="testimonial-attribution">
                    {testimonial.attribution}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bullet points navigation */}
          <div className="carousel-bullets">
            {testimonialsData.map((_, idx) => (
              <button
                key={idx}
                className={`bullet-point ${idx === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
