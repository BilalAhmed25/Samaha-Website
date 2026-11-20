import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../../data/siteData';
import './FaqSection.css';

export default function FaqSection() {
  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <section className="faq-wrapper">
      <div className="text-center mb-12 space-y-2">
        <span className="text-xs font-semibold uppercase tracking-widest text-gold-600">
          Answers & Clarifications
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0B192C]">
          Frequently Asked Questions
        </h2>
        <p className="text-slate-600 text-sm">
          Clear and direct answers regarding consultations, cross-border dispute resolution, and legal proceedings.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = activeFaq === idx;
          return (
            <div key={idx} className="faq-card">
              <button
                onClick={() => setActiveFaq(isOpen ? -1 : idx)}
                className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-semibold text-[#0B192C] hover:text-gold-600 cursor-pointer"
              >
                <span className="text-base">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-gold-600' : 'text-slate-400'}`} />
              </button>

              {isOpen && (
                <div className="px-6 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
