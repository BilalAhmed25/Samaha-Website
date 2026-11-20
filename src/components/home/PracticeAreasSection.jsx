import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Scale, Briefcase, ShieldAlert, Gavel, HeartHandshake, 
  Globe, Building2, Coins, Anchor, Users, ReceiptText, Award, ArrowRight 
} from 'lucide-react';
import { services } from '../../data/siteData';
import './PracticeAreasSection.css';

const iconMap = {
  Scale, Briefcase, ShieldAlert, Gavel, HeartHandshake,
  Globe, Building2, Coins, Anchor, Users, ReceiptText, Award
};

export default function PracticeAreasSection({ onOpenConsultation }) {
  return (
    <section className="practice-areas-wrapper">
      <div className="site-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-600 block mb-1">
              Comprehensive Legal Coverage
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0B192C]">
              Our Specialized Practice Areas
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
              From high-stakes criminal defense and corporate mergers to complex property arbitrations, our multidisciplinary attorneys deliver decisive outcomes.
            </p>
          </div>
          <Link
            to="/legal-services"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-300 hover:border-gold-500 text-sm font-semibold text-[#0B192C] hover:bg-gold-50 transition-colors shrink-0"
          >
            <span>View All 12 Domains</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => {
            const IconComp = iconMap[svc.icon] || Scale;
            return (
              <div key={svc.id} className="practice-card">
                <div>
                  <div className="practice-icon-box">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-serif font-bold text-[#0B192C]">
                    {svc.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm mt-2.5 leading-relaxed">
                    {svc.shortDesc}
                  </p>

                  <ul className="mt-4 space-y-1.5 text-xs text-slate-500">
                    {svc.bullets.slice(0, 3).map((b, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-gold-500 font-bold">•</span>
                        <span className="line-clamp-1">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    to={`/${svc.id}`}
                    className="text-xs font-bold text-gold-600 hover:text-gold-700 flex items-center gap-1.5"
                  >
                    <span>Read Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <button
                    onClick={() => onOpenConsultation(svc.title)}
                    className="text-xs text-slate-500 hover:text-slate-900 font-medium"
                  >
                    Request Consultation
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
