import React from 'react';
import './AboutHero.css';

export default function AboutHero() {
    return (
        <section className="about-hero-wrapper">
            <div className="about-hero-glow"></div>
            <div className="site-container relative space-y-4">
                <h1 className="text-4xl sm:text-5xl font-serif font-extrabold text-white">
                    30 Years of Legal Leadership & Precision
                </h1>
                <p className="text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
                    Delivering the best solutions to all legal challenges with high efficiency and expertise across commercial, corporate, civil, criminal, and Sharia law.
                </p>
            </div>
        </section>
    );
}
