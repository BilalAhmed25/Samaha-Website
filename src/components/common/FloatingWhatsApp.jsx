import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { firmInfo } from '../../data/siteData';
import './FloatingWhatsApp.css';

export default function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${firmInfo.headOffice.whatsapp}?text=Hello%20Samaha%20Lawyers,%20I%20would%20like%20to%20inquire%20about%20a%20legal%20consultation.`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp-btn"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <FaWhatsapp className="floating-whatsapp-icon" />
    </a>
  );
}
