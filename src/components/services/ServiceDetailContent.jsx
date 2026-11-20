import React from 'react';
import { CheckCircle } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { firmInfo } from '../../data/siteData';
import './ServiceDetailContent.css';

export default function ServiceDetailContent({ service, onOpenConsultation }) {
    return (
        <div className="service-content-wrapper">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                <img
                    src={service.heroImage}
                    alt={service.title}
                    className="w-full h-80 sm:h-96 object-cover"
                />
            </div>

            <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0B192C]">
                    Expertise In All Aspects Of {service.title}
                </h2>
                <p className="text-slate-700 text-base leading-relaxed">
                    {service.fullDesc}
                </p>
            </div>

            <div className="service-capabilities-box space-y-4">
                <h3 className="text-xl font-serif font-bold text-[#0B192C]">
                    Key Scope of Representation & Counsel
                </h3>
                <p className="text-slate-600 text-sm">
                    Our advocates provide comprehensive advocacy at all stages of negotiations, pre-litigation advisories, and courtroom hearings:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {service.bullets.map((point, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200/80">
                            <CheckCircle className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                            <span className="text-xs sm:text-sm font-medium text-slate-800 leading-snug">
                                {point}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="service-cta-box space-y-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-gold-400">
                    Direct Advocate Consultation
                </span>
                <h3 className="text-2xl font-serif font-bold text-white">
                    Book a Consultation for {service.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed max-w-xl">
                    Speak directly with the partner leading our {service.title} practice. We offer transparent pricing, prompt scheduling, and strict confidentiality.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                    <button onClick={() => onOpenConsultation(service.title)} className="btn-gold text-sm py-3 px-6">
                        Schedule Consultation
                    </button>
                    <a
                        href={`https://wa.me/${firmInfo.headOffice.whatsapp}?text=Hello,%20I%20would%20like%20to%20consult%20regarding%20${encodeURIComponent(service.title)}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-3 rounded-lg text-sm font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-700/80 hover:bg-emerald-900/60 flex items-center gap-2 cursor-pointer"
                    >
                        <FaWhatsapp className="w-4 h-4 text-emerald-400" />
                        <span>WhatsApp Inquiries</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
