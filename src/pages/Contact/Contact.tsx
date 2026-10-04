import React, { useState, useEffect } from 'react';
import { SectionEyebrow } from '../../components/SectionEyebrow/SectionEyebrow';
import { Button } from '../../components/Button/Button';
import { siteDetails } from '../../data/siteData';
import './Contact.css';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    city: '',
    objective: '',
    budget: '',
    message: ''
  });

  useEffect(() => {
    document.title = "Start Your Campaign | Urban Marketing Enterprise LLC (UME)";
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      <section className="contact-hero-section">
        <div className="container contact-container">
          {/* Left Editorial Info */}
          <div className="contact-info-col">
            <SectionEyebrow>START A CAMPAIGN</SectionEyebrow>
            <h1 className="contact-title">
              Ready to own your market?
            </h1>
            <p className="contact-lead">
              Tell us the city and the target. We'll come back with a plan, a timeline and the number we're aiming at — no retainer talk until you've seen it.
            </p>

            <div className="contact-details">
              <div className="detail-item">
                <span className="detail-label">OFFICE</span>
                <span className="detail-value">{siteDetails.contact.address}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">EMAIL</span>
                <a href={`mailto:${siteDetails.contact.email}`} className="detail-value">{siteDetails.contact.email}</a>
              </div>
              <div className="detail-item">
                <span className="detail-label">PHONE</span>
                <a href={`tel:${siteDetails.contact.phone}`} className="detail-value">{siteDetails.contact.phone}</a>
              </div>
            </div>
          </div>

          {/* Right Contact Form Column */}
          <div className="contact-form-col">
            {submitted ? (
              <div className="form-success-message">
                <SectionEyebrow>CAMPAIGN INITIATED</SectionEyebrow>
                <h2>WE HAVE RECEIVED YOUR BRIEF.</h2>
                <p>A UME strategist will review your market targets and reach out within 24 hours.</p>
              </div>
            ) : (
              <form className="ume-contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">NAME *</label>
                    <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} placeholder="Jane Doe" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">EMAIL *</label>
                    <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} placeholder="jane@brand.com" />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="company">COMPANY / BRAND</label>
                    <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Acme Brands" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="city">TARGET CITY / METRO *</label>
                    <input type="text" id="city" name="city" required value={formData.city} onChange={handleChange} placeholder="Chicago, Brooklyn, Atlanta..." />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="objective">PRIMARY OBJECTIVE</label>
                  <select id="objective" name="objective" value={formData.objective} onChange={handleChange}>
                    <option value="">Select Primary Objective</option>
                    <option value="brand-strategy">Brand Strategy & Positioning</option>
                    <option value="digital-marketing">Geo-Targeted Digital Media</option>
                    <option value="social-campaigns">Social Content & Creator Casting</option>
                    <option value="urban-activations">Pop-up & Urban Activations</option>
                    <option value="full-campaign">Full Integrated Campaign</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">CAMPAIGN BRIEF / DETAILS</label>
                  <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} placeholder="Tell us about your target audience and key goals..."></textarea>
                </div>

                <Button type="submit" variant="primary" className="submit-btn">
                  START YOUR CAMPAIGN
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
