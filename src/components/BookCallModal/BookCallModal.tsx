import React, { useState } from 'react';
import { X } from 'lucide-react';
import { SectionEyebrow } from '../SectionEyebrow/SectionEyebrow';
import { Button } from '../Button/Button';
import './BookCallModal.css';

interface BookCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookCallModal: React.FC<BookCallModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    market: 'Chicago',
    timeWindow: 'Morning (9AM - 12PM CT)',
    objective: ''
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="book-call-modal" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Close Modal">
          <X size={20} />
        </button>

        {submitted ? (
          <div className="modal-success-state">
            <SectionEyebrow>BRIEFING CONFIRMED</SectionEyebrow>
            <h2>YOUR STRATEGY CALL IS BOOKED</h2>
            <p>A UME partner will review your market targets and send a Calendar invitation directly to <strong>{formData.email}</strong>.</p>
            <Button onClick={onClose} variant="primary" className="modal-done-btn">
              CLOSE WINDOW
            </Button>
          </div>
        ) : (
          <div className="modal-content-wrapper">
            <SectionEyebrow>DIRECT STRATEGY BRIEFING</SectionEyebrow>

            <h2 className="modal-title">
              BOOK A 20-MIN STRATEGY CALL
            </h2>

            <p className="modal-subtitle">
              Tell us your target market and goals. We review with a partner, not a junior account rep.
            </p>

            <form className="modal-form" onSubmit={handleSubmit}>
              <div className="modal-form-row">
                <div className="modal-form-group">
                  <label htmlFor="modal-name">YOUR NAME *</label>
                  <input
                    type="text"
                    id="modal-name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Marcus Reed"
                  />
                </div>
                <div className="modal-form-group">
                  <label htmlFor="modal-email">WORK EMAIL *</label>
                  <input
                    type="email"
                    id="modal-email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="m.reed@brand.com"
                  />
                </div>
              </div>

              <div className="modal-form-row">
                <div className="modal-form-group">
                  <label htmlFor="modal-company">COMPANY / BRAND</label>
                  <input
                    type="text"
                    id="modal-company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Acme Urban Goods"
                  />
                </div>
                <div className="modal-form-group">
                  <label htmlFor="modal-market">PRIMARY METRO MARKET</label>
                  <select
                    id="modal-market"
                    name="market"
                    value={formData.market}
                    onChange={handleChange}
                  >
                    <option value="Chicago">Chicago</option>
                    <option value="Brooklyn / NYC">Brooklyn / NYC</option>
                    <option value="Atlanta">Atlanta</option>
                    <option value="Los Angeles">Los Angeles</option>
                    <option value="Miami">Miami</option>
                    <option value="Multi-Metro">Multi-Metro National</option>
                  </select>
                </div>
              </div>

              <div className="modal-form-group">
                <label htmlFor="modal-time">PREFERRED TIME WINDOW</label>
                <select
                  id="modal-time"
                  name="timeWindow"
                  value={formData.timeWindow}
                  onChange={handleChange}
                >
                  <option value="Morning (9AM - 12PM CT)">Morning (9AM - 12PM CT)</option>
                  <option value="Afternoon (12PM - 4PM CT)">Afternoon (12PM - 4PM CT)</option>
                  <option value="Evening (4PM - 7PM CT)">Evening (4PM - 7PM CT)</option>
                </select>
              </div>

              <div className="modal-form-group">
                <label htmlFor="modal-objective">PRIMARY CAMPAIGN OBJECTIVE</label>
                <textarea
                  id="modal-objective"
                  name="objective"
                  rows={3}
                  value={formData.objective}
                  onChange={handleChange}
                  placeholder="Launching in 3 zip codes, seeking storefront activation & geo-paid push..."
                />
              </div>

              <button type="submit" className="btn-primary modal-submit-btn">
                <span>CONFIRM STRATEGY BRIEFING</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
