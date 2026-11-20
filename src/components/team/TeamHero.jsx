import React from 'react';
import './TeamHero.css';

export default function TeamHero() {
  return (
    <section className="team-hero-wrapper">
      <div className="team-hero-glow"></div>
      <div className="site-container relative space-y-4">
        <span className="text-xs font-semibold uppercase tracking-widest text-gold-400 block">
          Our Distinguished Advocates
        </span>
        <h1 className="text-4xl sm:text-5xl font-serif font-extrabold text-white">
          Meet Our Legal Team & Senior Counsel
        </h1>
        <p className="text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
          A multidisciplinary collective of distinguished litigators, legal consultants, and arbitration authorities practicing across the UAE, Egypt, the Levant, and Europe.
        </p>
      </div>
    </section>
  );
}
