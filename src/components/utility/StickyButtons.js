import React, { useState, useEffect } from 'react';
import './StickyButtons.css';
import HoverIcon from './HoverIcon';

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
        <a href="https://wa.me/917338497706" className="whasapp">
          <HoverIcon>
            <div className="button-icon">
              <img src="/icons/whatsapp.svg" alt="Chat Icon" />
            </div>
          </HoverIcon>
        </a>
        <div className="phone-number">
          <button>
            <a href="tel:+917338497706" >
              <span className="button-text">Contact Us</span>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyButtons;