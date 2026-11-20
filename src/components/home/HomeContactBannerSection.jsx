import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, MessageSquare } from 'lucide-react';
import { firmInfo } from '../../data/siteData';
import './HomeContactBannerSection.css';

export default function HomeContactBannerSection({ onOpenConsultation }) {
    return (
        <section className="contact-banner-wrapper">
            <div className="site-container">
                <div className="contact-banner-card">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        {/* Left Column */}
                        <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
                            <span className="text-sm font-bold uppercase tracking-widest text-gold-400 block">
                                Immediate Legal Counsel
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-white leading-tight">
                                Speak With Our Expert Lawyers Today!
                            </h2>
                            <p className="text-slate-300 text-sm sm:text-base max-w-xl leading-relaxed">
                                Connect directly with our legal firm to protect your business, family, and assets. We are ready to represent you across all judicial courts and arbitration tribunals.
                            </p>

                            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                                <Link
                                    to="/contact"
                                    className="btn-gold text-base py-3.5 px-8"
                                >
                                    <span>Contact Us</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>

                                <button
                                    onClick={onOpenConsultation}
                                    className="px-6 py-3.5 rounded-lg text-base font-semibold text-white border border-slate-600 hover:bg-slate-800 transition-colors cursor-pointer"
                                >
                                    Book Free Consultation
                                </button>

                                <a
                                    href={`tel:${firmInfo.headOffice.phone.replace(/\s+/g, '')}`}
                                    className="px-6 py-3.5 rounded-lg text-base sm:text-lg font-bold text-gold-400 hover:text-white border border-gold-400/40 hover:border-gold-400 transition-colors inline-flex items-center gap-2.5 cursor-pointer"
                                >
                                    <Phone className="w-5 h-5" />
                                    <span>Call Now</span>
                                </a>
                            </div>
                        </div>

                        {/* Right Column: Expert Portrait */}
                        <div className="lg:col-span-4 flex justify-center">
                            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden border-2 border-gold-500/40 shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80"
                                    alt="Speak With Our Expert Lawyers Today!"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/80 via-transparent to-transparent"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
