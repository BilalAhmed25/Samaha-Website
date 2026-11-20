import React from 'react';
import './ContactHero.css';

export default function ContactHero() {
    return (
        <section className="contact-hero-wrapper">
            <div className="contact-hero-glow"></div>
            <div className="site-container relative space-y-4">
                <h1 className="text-4xl sm:text-5xl font-serif font-extrabold text-white">
                    Contact Samaha Lawyers & Legal Consultants
                </h1>
                <p className="text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
                    Reach out to our global headquarters in Dubai or connect with our regional branches across the UAE, Egypt, Saudi Arabia, Jordan, Qatar, Oman, and the UK.
                </p>
            </div>
        </section>
    );
}
