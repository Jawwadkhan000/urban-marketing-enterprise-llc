import React from 'react';
import { Link } from 'react-router-dom';
import { siteDetails } from '../../data/siteData';
import './Footer.css';

export const Footer: React.FC = () => {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for subscribing to The City Memo.');
  };

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        {/* Brand Column */}
        <div className="footer-col brand-col">
          <Link to="/" className="text-logo dark-theme">
            <span className="logo-line1">URBAN MARKETING</span>
            <span className="logo-line2">ENTERPRISE LLC</span>
          </Link>
          <p className="footer-description">
            Urban Marketing Enterprise LLC — brand strategy, media and activations for brands competing where it's loudest.
          </p>
          <div className="footer-socials">
            {siteDetails.socials.map((social) => (
              <a key={social.label} href={social.url} className="social-link" target="_blank" rel="noopener noreferrer">
                {social.label}
              </a>
            ))}
          </div>
        </div>

        {/* Agency Navigation Column */}
        <div className="footer-col nav-col">
          <h4 className="footer-heading">AGENCY</h4>
          <ul className="footer-links">
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/work">Work</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Careers</Link></li>
          </ul>
        </div>

        {/* Contact Information Column */}
        <div className="footer-col contact-col">
          <h4 className="footer-heading">CONTACT</h4>
          <address className="footer-address">
            <p>{siteDetails.contact.address}</p>
            <p><a href={`mailto:${siteDetails.contact.email}`}>{siteDetails.contact.email}</a></p>
            <p><a href={`tel:${siteDetails.contact.phone}`}>{siteDetails.contact.phone}</a></p>
          </address>
        </div>

        {/* The City Memo Newsletter Column */}
        <div className="footer-col newsletter-col">
          <h4 className="footer-heading">THE CITY MEMO</h4>
          <p className="newsletter-desc">
            Monthly field notes on urban brand growth. No fluff.
          </p>
          <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
            <input
              type="email"
              placeholder="you@brand.com"
              required
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-btn">
              JOIN
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container bottom-container">
          <p>© 2026 Urban Marketing Enterprise LLC</p>
          <div className="bottom-links">
            <Link to="/contact">Privacy</Link>
            <Link to="/contact">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
