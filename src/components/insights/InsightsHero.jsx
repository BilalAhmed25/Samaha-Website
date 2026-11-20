import React from 'react';
import './InsightsHero.css';

export default function InsightsHero() {
  return (
    <section className="insights-hero-wrapper">
      <div className="insights-hero-glow"></div>
      <div className="site-container relative space-y-4">
        <span className="text-xs font-semibold uppercase tracking-widest text-gold-400 block">
          Jurisprudence & Insights
        </span>
        <h1 className="text-4xl sm:text-5xl font-serif font-extrabold text-white">
          Legal Insights & Case Studies
        </h1>
        <p className="text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
          Authoritative analysis on evolving UAE laws, corporate regulations, international commercial arbitration, and labor rights.
        </p>
      </div>
    </section>
  );
}
