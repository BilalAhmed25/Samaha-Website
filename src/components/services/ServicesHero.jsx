import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { firmInfo } from '../../data/siteData';
import './ServicesHero.css';

export default function ServicesHero({ onOpenConsultation }) {
    return (
        <section className="services-hero-wrapper">
            <div className="services-hero-glow"></div>
            <div className="site-container relative space-y-6 max-w-4xl mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
                    Protect Your Legal Rights with International Experts Who Know the Rules of the Game
                </h1>

                <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                    We are a licensed international law firm providing comprehensive legal consultations and services across various fields. With a team of elite lawyers and experts, we offer practical, swift solutions for both individual and corporate clients.
                </p>

                <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
                    <button
                        onClick={() => onOpenConsultation ? onOpenConsultation() : null}
                        className="btn-gold flex items-center gap-2 cursor-pointer"
                    >
                        <span>Book Your Consultation</span>
                        <ArrowRight className="w-4 h-4" />
                    </button>
                    <a
                        href={`https://wa.me/${firmInfo.headOffice.whatsapp}?text=${encodeURIComponent("Hello Samaha Lawyers, I would like to book a legal consultation.")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm transition-colors cursor-pointer"
                    >
                        <FaWhatsapp className="w-5 h-5 text-white" />
                        <span>WhatsApp Quick Consult</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
