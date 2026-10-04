import React from 'react';
import { marqueeBrands } from '../../data/siteData';
import './BrandMarquee.css';

export const BrandMarquee: React.FC = () => {
  // Repeat brand list 8 times to guarantee seamless infinite CSS scroll without jump or flicker
  const brandsList = [
    ...marqueeBrands,
    ...marqueeBrands,
    ...marqueeBrands,
    ...marqueeBrands,
    ...marqueeBrands,
    ...marqueeBrands,
    ...marqueeBrands,
    ...marqueeBrands
  ];

  return (
    <section className="brand-marquee-section">
      <div className="container marquee-split-container">
        {/* Fixed Left Column: Label */}
        <div className="marquee-left-label">
          <span className="marquee-label-text">TRUSTED BY 50+ URBAN BRANDS</span>
          <div className="marquee-vertical-divider" />
        </div>

        {/* Right Column: Ultra-Smooth Slow Infinite Marquee Track */}
        <div className="marquee-track-wrapper">
          <div className="marquee-track">
            {brandsList.map((brand, idx) => (
              <div key={`${brand}-${idx}`} className="marquee-item">
                <span className="marquee-brand-name">{brand}</span>
                <span className="marquee-dot">•</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
