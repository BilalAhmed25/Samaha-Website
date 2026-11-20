import React from 'react';
import { Award, ArrowRight, ShieldCheck, Globe, Scale, Phone, MapPin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { firmInfo } from '../../data/siteData';
import './HeroSection.css';

export default function HeroSection({ onOpenConsultation }) {
    return (
        <section className="hero-wrapper">
            <div className="hero-ambient-glow"></div>
            <div className="hero-bg-overlay"></div>

            <div className="site-container relative py-20 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Left Column */}
                    <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs font-semibold uppercase tracking-wider">
                            <Award className="w-3.5 h-3.5 text-gold-400" />
                            <span>30+ Years of International Legal Excellence</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-white tracking-tight leading-[1.15]">
                            Protecting Your Rights. <br className="hidden sm:inline" />
                            <span className="text-gradient-gold">Securing Your Future.</span>
                        </h1>

                        <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            Samaha Lawyers & Legal Consultants is a premier international firm offering formidable legal representation across corporate structuring, criminal defense, commercial disputes, international arbitration, and family law throughout the UAE, Middle East, and United Kingdom.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                            <button onClick={onOpenConsultation} className="w-full sm:w-auto btn-gold text-base py-3.5 px-7">
                                <span>Book Confidential Consultation</span>
                                <ArrowRight className="w-4 h-4" />
                            </button>

                            <a
                                href={`https://wa.me/${firmInfo.headOffice.whatsapp}?text=Hello%20Samaha%20Lawyers,%20I%20would%20like%20to%20request%20a%20legal%20consultation.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-base font-semibold text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-gold-500/50 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
                            >
                                <FaWhatsapp className="w-4 h-4 text-emerald-400" />
                                <span>WhatsApp 24/7</span>
                            </a>
                        </div>

                        <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400">
                            <div className="flex items-center gap-2">
                                <ShieldCheck className="w-4 h-4 text-gold-400" />
                                <span>Licensed UAE Federal Courts</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Globe className="w-4 h-4 text-gold-400" />
                                <span>11+ Global Offices</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Scale className="w-4 h-4 text-gold-400" />
                                <span>100% Confidentiality</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Quick card */}
                    <div className="lg:col-span-5">
                        <div className="hero-quick-card space-y-6">
                            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                                <div>
                                    <span className="text-xs font-semibold text-gold-400 uppercase tracking-wider block">
                                        Immediate Legal Support
                                    </span>
                                    <h2 className="text-xl font-serif font-bold text-white">
                                        Speak With Our Senior Counsel
                                    </h2>
                                </div>
                                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></div>
                            </div>

                            <div className="space-y-4">
                                <div className="p-4 rounded-xl bg-[#070F1A]/80 border border-slate-800 flex items-start gap-3.5">
                                    <Phone className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                                    <div>
                                        <div className="text-xs text-slate-400 font-medium">Dubai Headquarters Direct</div>
                                        <a href={`tel:${firmInfo.headOffice.phone.replace(/\s+/g, '')}`} className="text-lg sm:text-xl font-bold text-white hover:text-gold-300 transition-colors">
                                            Call Us Now
                                        </a>
                                    </div>
                                </div>

                                <div className="p-4 rounded-xl bg-[#070F1A]/80 border border-slate-800 flex items-start gap-3.5">
                                    <MapPin className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                                    <div>
                                        <div className="text-xs text-slate-400 font-medium">Head Office Address</div>
                                        <div className="text-xs text-slate-300 leading-snug">
                                            {firmInfo.headOffice.address}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3 pt-2">
                                <div className="p-3.5 rounded-xl bg-[#070F1A]/50 border border-slate-800/80 text-center">
                                    <div className="text-2xl font-serif font-extrabold text-gold-400">30+</div>
                                    <div className="text-[11px] text-slate-400 font-medium">Years Experience</div>
                                </div>
                                <div className="p-3.5 rounded-xl bg-[#070F1A]/50 border border-slate-800/80 text-center">
                                    <div className="text-2xl font-serif font-extrabold text-gold-400">98.7%</div>
                                    <div className="text-[11px] text-slate-400 font-medium">Favorable Resolution</div>
                                </div>
                            </div>

                            <button onClick={onOpenConsultation} className="w-full btn-gold text-sm py-3.5">
                                Schedule Your Case Assessment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
