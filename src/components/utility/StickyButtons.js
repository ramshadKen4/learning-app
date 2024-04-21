import React, { useState, useEffect } from 'react';
import './StickyButtons.css';

const StickyButtons = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`sticky-buttons-container ${isVisible ? 'visible' : ''}`}>
      <div className="sticky-buttons">
        <a href="tel:+917338497706" className="button-container">
          <div className="button-icon">
            <img src="/icons/call.svg" alt="Contact Icon" />
          </div>
          <span className="button-text">Contact</span>
        </a>
        <a href="https://wa.me/917338497706" className="button-container">
          <div className="button-icon">
            <img src="/icons/whatsapp.svg" alt="Chat Icon" />
          </div>
          <span className="button-text">Chat</span>
        </a>
      </div>
    </div>
  );
};

export default StickyButtons;