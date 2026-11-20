import React from 'react';
import { Link } from 'react-router-dom';
import {
    Phone, Mail, MapPin, Scale, Clock, ShieldCheck,
    ArrowRight, ExternalLink, ChevronRight
} from 'lucide-react';
import { firmInfo, services, countries, partners } from '../../data/siteData';
import './Footer.css';

export default function Footer({ onOpenConsultation }) {
    return (
        <footer className="footer-wrapper">
            {/* Top Advisory Banner */}
            <div className="footer-advisory-banner">
                <div className="site-container flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                    <div>
                        <span className="text-gold-400 font-semibold tracking-wider text-xs uppercase block mb-1">
                            30 Years of Legal Leadership
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-serif text-white font-bold mb-2.5">
                            Facing a Complex Legal Challenge?
                        </h3>
                        <p className="text-slate-300 text-sm sm:text-base max-w-xl leading-relaxed">
                            Speak directly with our senior attorneys and legal consultants in Dubai, Abu Dhabi, or any of our 11 global branches.
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                        <button onClick={onOpenConsultation} className="btn-gold text-base py-3 px-6">
                            Book Confidential Consultation
                        </button>
                        <a
                            href={`tel:${firmInfo.headOffice.phone.replace(/\s+/g, '')}`}
                            className="px-6 py-3 rounded-lg text-base font-semibold text-white border border-slate-700 hover:bg-slate-800/60 transition-colors flex items-center gap-2 cursor-pointer"
                        >
                            <Phone className="w-4.5 h-4.5 text-gold-400" />
                            <span>Call Us Now</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Directory: 12-column grid gives equal generous space to all columns */}
            <div className="site-container py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 xl:gap-10">
                {/* Brand & Conglomerate */}
                <div className="lg:col-span-3 space-y-3.5">
                    {/* Logo: Pure white, no background, no text following it */}
                    <Link to="/" className="inline-block py-1 group" aria-label="Samaha Lawyers Homepage">
                        <img
                            src="/logo.png"
                            alt="Samaha Lawyers & Legal Consultants"
                            className="h-11 sm:h-12 w-auto object-contain footer-logo-white"
                        />
                    </Link>

                    <p className="text-slate-400 leading-relaxed max-w-[290px]">
                        Samaha Group is a premier international legal conglomerate delivering uncompromising advocacy, corporate structuring, and cross-border litigation services. Accredited before all UAE Federal, Commercial, and International Arbitration courts.
                    </p>
                </div>

                {/* Practice Areas */}
                <div className="lg:col-span-3">
                    <h4 className="text-white font-serif font-bold text-sm sm:text-base mb-4 pb-2 border-b border-slate-800">
                        Practice Areas
                    </h4>
                    <ul className="space-y-2.5">
                        {services.slice(0, 7).map(s => (
                            <li key={s.id}>
                                <Link to={`/${s.id}`} className="footer-link">
                                    <ChevronRight className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                                    <span>{s.title}</span>
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link to="/legal-services" className="footer-link text-gold-400 hover:text-gold-300">
                                <ChevronRight className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                                <span>View More...</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Global Offices */}
                <div className="lg:col-span-3">
                    <h4 className="text-white font-serif font-bold text-sm sm:text-base mb-4 pb-2 border-b border-slate-800">
                        Global Offices
                    </h4>
                    <ul className="space-y-2.5">
                        {countries.map(c => (
                            <li key={c.id}>
                                <button
                                    type="button"
                                    onClick={() => onOpenConsultation && onOpenConsultation(c.name)}
                                    className="footer-link text-left cursor-pointer"
                                >
                                    <ChevronRight className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                                    <img
                                        src={c.flag}
                                        alt={c.name}
                                        className="w-4 h-3 object-cover rounded-[2px] border border-white/20 shrink-0 inline-block"
                                    />
                                    <span>{c.name}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Partners & Group Entities */}
                <div className="lg:col-span-3">
                    <h4 className="text-white font-serif font-bold text-sm sm:text-base mb-4 pb-2 border-b border-slate-800">
                        Partners & Group Entities
                    </h4>
                    <ul className="space-y-2.5">
                        {partners.map((partner, pIdx) => (
                            <li key={pIdx}>
                                {partner.internalPath ? (
                                    <Link to={partner.internalPath} className="footer-link">
                                        <ChevronRight className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                                        <span>{partner.name}</span>
                                    </Link>
                                ) : (
                                    <a
                                        href={partner.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="footer-link"
                                    >
                                        <ChevronRight className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                                        <span>{partner.name}</span>
                                        <ExternalLink className="w-3 h-3 text-slate-400 ml-1 shrink-0" />
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Sub-footer */}
            <div className="footer-bottom">
                <div className="site-container flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p>© {new Date().getFullYear()} {firmInfo.name}. All Rights Reserved. Licensed International Law Firm.</p>
                    <div className="flex items-center gap-6 text-slate-400">
                        <Link to="/about-us" className="hover:text-gold-400">About Samaha</Link>
                        <Link to="/legal-services" className="hover:text-gold-400">Legal Domains</Link>
                        <Link to="/team" className="hover:text-gold-400">Our Attorneys</Link>
                        <Link to="/contact" className="hover:text-gold-400">Contact & Maps</Link>
                    </div>
                </div>
            </div>
        </footer >
    );
}
