import React, { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { BookCallModal } from '../BookCallModal/BookCallModal';
import './Header.css';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuLinksRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (isOpen && mobileMenuRef.current && menuLinksRef.current) {
      gsap.fromTo(
        mobileMenuRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' }
      );
      gsap.fromTo(
        menuLinksRef.current.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.08, ease: 'power3.out', delay: 0.1 }
      );
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT US', path: '/about' },
    { name: 'SERVICES', path: '/services' },
    { name: 'WORK', path: '/work' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <>
      <header className="site-header">
        <div className="header-container">
          {/* Text Logo - Strict requirement: URBAN MARKETING / ENTERPRISE LLC */}
          <Link to="/" className="text-logo">
            <span className="logo-line1">URBAN MARKETING</span>
            <span className="logo-line2">ENTERPRISE LLC</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Button with Arrow Icon */}
          <div className="desktop-cta">
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn-primary header-cta"
            >
              <span>BOOK A CALL</span>
              <ArrowUpRight size={16} className="btn-icon-arrow" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="mobile-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="mobile-menu-overlay" ref={mobileMenuRef}>
            <div className="mobile-menu-container">
              <div className="mobile-nav-links" ref={menuLinksRef}>
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight size={24} className="mobile-link-arrow" />
                  </Link>
                ))}
                <div className="mobile-cta-wrapper">
                  <button
                    className="btn-primary mobile-btn-full"
                    onClick={() => {
                      setIsOpen(false);
                      setIsModalOpen(true);
                    }}
                  >
                    <span>BOOK A CALL</span>
                    <ArrowUpRight size={16} className="btn-icon-arrow" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Book Call Strategy Popup Modal */}
      <BookCallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};
