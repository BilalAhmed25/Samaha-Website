import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { partners } from '../../data/siteData';
import './PartnersSection.css';

export default function PartnersSection({ onOpenConsultation }) {
  return (
    <section className="partners-section-wrapper">
      <div className="site-container">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold-600">
            Integrated Global Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0B192C]">
            The Samaha Group Network & Partners
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Samaha Group is a leading legal conglomerate specializing in comprehensive legal, corporate, translation, and immigration services across the Middle East and worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((ent, idx) => (
            <div key={idx} className="partner-card">
              <div>
                <div className="partner-card-img">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
                    alt={ent.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/80 via-transparent to-transparent"></div>
                  <span className="absolute bottom-3 left-3 text-xs font-semibold text-gold-300 bg-[#070F1A]/80 px-2.5 py-1 rounded backdrop-blur-sm">
                    Samaha Group Entity
                  </span>
                </div>

                <h3 className="text-xl font-serif font-bold text-[#0B192C]">
                  {ent.name}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                  {ent.desc}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                {ent.internalPath ? (
                  <Link to={ent.internalPath} className="text-xs font-semibold text-gold-600 hover:text-gold-700 flex items-center gap-1.5">
                    <span>Visit Practice</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                ) : (
                  <a href={ent.url} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-gold-600 hover:text-gold-700 flex items-center gap-1.5">
                    <span>Official Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <button onClick={onOpenConsultation} className="text-xs text-slate-500 hover:text-slate-800">
                  Consult
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
