import React from 'react';
import './BranchesHero.css';

export default function BranchesHero() {
    return (
        <section className="branches-hero-wrapper">
            <div className="branches-hero-glow"></div>
            <div className="site-container relative space-y-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-gold-400 block">
                    Global Footprint
                </span>
                <h1 className="text-4xl sm:text-5xl font-serif font-extrabold text-white">
                    Our International Branches & Offices
                </h1>
                <p className="text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
                    With 11+ regional offices operating across 7 countries, Samaha Lawyers & Legal Consultants provides localized legal counsel backed by international reach.
                </p>
            </div>
        </section>
    );
}
