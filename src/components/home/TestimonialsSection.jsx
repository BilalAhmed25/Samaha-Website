import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../../data/siteData';
import './TestimonialsSection.css';

export default function TestimonialsSection() {
  return (
    <section className="testimonials-wrapper">
      <div className="site-container">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold-400">
            Verified Client Praise
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            Trusted by Executives & Global Corporations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="testimonial-quote-card">
              <div>
                <div className="flex items-center gap-1 text-gold-400 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800">
                <h4 className="text-base font-serif font-bold text-white">{t.author}</h4>
                <div className="text-xs text-gold-400 font-medium">{t.role}</div>
                <div className="text-[11px] text-slate-500 mt-0.5">{t.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
