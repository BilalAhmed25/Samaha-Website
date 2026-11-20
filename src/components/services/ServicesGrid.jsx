import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Scale, Briefcase, ShieldAlert, Gavel, HeartHandshake, 
  Globe, Building2, Coins, Anchor, Users, ReceiptText, Award, ArrowRight 
} from 'lucide-react';
import { services } from '../../data/siteData';
import './ServicesGrid.css';

const iconMap = {
  Scale, Briefcase, ShieldAlert, Gavel, HeartHandshake,
  Globe, Building2, Coins, Anchor, Users, ReceiptText, Award
};

export default function ServicesGrid({ onOpenConsultation }) {
  return (
    <section className="services-grid-wrapper">
      <div className="site-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc) => {
            const IconComp = iconMap[svc.icon] || Scale;
            return (
              <div key={svc.id} className="service-card-full">
                <div>
                  <div className="service-card-banner">
                    <img src={svc.heroImage} alt={svc.title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/85 via-[#0B192C]/30 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-lg bg-gold-500 text-[#070F1A] flex items-center justify-center font-bold shadow-lg">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-serif font-bold text-white">{svc.title}</h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{svc.fullDesc}</p>

                    <div className="mt-5 space-y-2 border-t border-slate-100 pt-4">
                      <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider block">
                        Core Capabilities:
                      </span>
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        {svc.bullets.map((b, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-gold-500 font-bold shrink-0">•</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between">
                  <Link to={`/${svc.id}`} className="text-xs font-bold text-gold-600 hover:text-gold-700 flex items-center gap-1.5">
                    <span>Full Practice Page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <button
                    onClick={() => onOpenConsultation(svc.title)}
                    className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-[#070F1A] bg-gold-400 hover:bg-gold-300 transition-colors"
                  >
                    Consult
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
