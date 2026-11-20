import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Scale, Briefcase, ShieldAlert, Gavel, HeartHandshake,
    Globe, Building2, Coins, Anchor, Users, ReceiptText, Award,
    ArrowRight, Check
} from 'lucide-react';
import { services } from '../../data/siteData';
import './HomeServicesSection.css';

const iconMap = {
    Scale, Briefcase, ShieldAlert, Gavel, HeartHandshake,
    Globe, Building2, Coins, Anchor, Users, ReceiptText, Award
};

export default function HomeServicesSection({ onOpenConsultation }) {
    const [flippedCards, setFlippedCards] = useState({});

    const handleCardClick = (id) => {
        setFlippedCards(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    return (
        <section className="home-services-wrapper">
            <div className="site-container">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div>
                        <span className="text-sm font-bold uppercase tracking-widest text-gold-600 block mb-1">
                            Legal Expertise
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#121B38]">
                            Our Services Legal
                        </h2>
                        <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl leading-relaxed">
                            Specialized advisory and courtroom defense across all federal and international legal branches.
                        </p>
                    </div>

                    <Link
                        to="/legal-services"
                        className="inline-flex items-center gap-2 text-base font-semibold text-gold-600 hover:text-gold-700"
                    >
                        <span>View All Services Directory</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {services.map((svc) => {
                        const IconComp = iconMap[svc.icon] || Scale;
                        const isFlipped = !!flippedCards[svc.id];

                        return (
                            <div
                                key={svc.id}
                                className="home-service-flip-container group"
                                onClick={() => handleCardClick(svc.id)}
                            >
                                <div className={`home-service-flip-inner ${isFlipped ? 'is-flipped' : ''}`}>
                                    {/* FRONT FACE */}
                                    <div className="home-service-flip-front">
                                        <div>
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="home-service-icon">
                                                    <IconComp className="w-6 h-6" />
                                                </div>
                                            </div>

                                            <h3 className="text-xl font-serif font-bold text-[#121B38]">
                                                {svc.title}
                                            </h3>

                                            <p className="text-slate-600 text-sm sm:text-base mt-2.5 leading-relaxed">
                                                {svc.shortDesc}
                                            </p>
                                        </div>

                                        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                                            <Link
                                                to={`/${svc.id}`}
                                                onClick={(e) => e.stopPropagation()}
                                                className="text-sm font-bold text-gold-600 hover:text-gold-700 flex items-center gap-1.5"
                                            >
                                                <span>Read Details</span>
                                                <ArrowRight className="w-4 h-4" />
                                            </Link>

                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    onOpenConsultation(svc.title);
                                                }}
                                                className="text-sm text-slate-600 hover:text-slate-900 font-semibold cursor-pointer"
                                            >
                                                Consult
                                            </button>
                                        </div>
                                    </div>

                                    {/* BACK FACE (3D Flipped on hover) */}
                                    <div className="home-service-flip-back">
                                        <div>
                                            <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-white/15">
                                                <span className="text-[11px] font-bold uppercase tracking-widest text-gold-400">
                                                    Key Capabilities
                                                </span>
                                                <div className="w-7 h-7 rounded-md bg-gold-500/20 text-gold-300 flex items-center justify-center">
                                                    <IconComp className="w-4 h-4" />
                                                </div>
                                            </div>

                                            <h3 className="text-lg font-serif font-bold text-white mb-3">
                                                {svc.title}
                                            </h3>

                                            <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
                                                {svc.bullets && svc.bullets.slice(0, 3).map((bullet, idx) => (
                                                    <li key={idx} className="flex items-start gap-2">
                                                        <Check className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                                                        <span className="line-clamp-2 leading-snug">{bullet}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="pt-4 border-t border-white/15 flex items-center justify-between gap-3">
                                            <Link
                                                to={`/${svc.id}`}
                                                onClick={(e) => e.stopPropagation()}
                                                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-gold-400 hover:text-gold-300 transition-colors cursor-pointer"
                                            >
                                                <span>Explore</span>
                                                <ArrowRight className="w-3.5 h-3.5" />
                                            </Link>

                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    onOpenConsultation(svc.title);
                                                }}
                                                className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-white underline underline-offset-4 decoration-gold-400/60 hover:decoration-gold-400 cursor-pointer transition-colors"
                                            >
                                                Consult
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
