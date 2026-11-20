import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { firmInfo } from '../../data/siteData';
import './FloatingWidgets.css';

export default function FloatingWidgets() {
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const checkScroll = () => setShowBackToTop(window.scrollY > 400);
        window.addEventListener('scroll', checkScroll);
        return () => window.removeEventListener('scroll', checkScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <div className="floating-widgets-container">
            {showBackToTop && (
                <button onClick={scrollToTop} className="floating-btn-scroll" aria-label="Back to Top">
                    <ArrowUp className="w-5 h-5" />
                </button>
            )}

            <a
                href={`tel:${firmInfo.headOffice.phone.replace(/\s+/g, '')}`}
                className="floating-btn-phone cursor-pointer"
                title="Call Us Now"
            >
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
                <Phone className="w-4 h-4 text-gold-400" />
                <span className="text-sm font-bold hidden sm:inline">Call Us Now</span>
            </a>

            <a
                href={`https://wa.me/${firmInfo.headOffice.whatsapp}?text=Hello%20Samaha%20Lawyers,%20I%20would%20like%20to%20inquire%20about%20a%20legal%20consultation.`}
                target="_blank"
                rel="noopener noreferrer"
                className="floating-btn-whatsapp cursor-pointer"
                title="Chat on WhatsApp"
            >
                <FaWhatsapp className="w-5 h-5" />
                <span>WhatsApp Us</span>
            </a>
        </div>
    );
}
