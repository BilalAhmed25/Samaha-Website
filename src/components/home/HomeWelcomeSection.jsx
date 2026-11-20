import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Scale, Award, Gavel, ArrowRight } from 'lucide-react';
import './HomeWelcomeSection.css';

export default function HomeWelcomeSection({ onOpenConsultation }) {
    const features = [
        { title: "Local Expertise with Global Standards", icon: Award },
        { title: "Comprehensive Legal Consultation", icon: Scale },
        { title: "Protecting Clients’ Rights and Ensuring Their Interests", icon: ShieldCheck },
        { title: "Strong Representation Before Courts", icon: Gavel },
    ];

    return (
        <section className="welcome-section-wrapper">
            <div className="site-container">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Left Column: Image */}
                    <div className="lg:col-span-6 relative">
                        <div className="relative rounded-2xl overflow-hidden border border-slate-200">
                            <img
                                src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1200&q=80"
                                alt="Welcome To Samaha Lawyers"
                                className="w-full h-[500px] object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Column: Exact Content */}
                    <div className="lg:col-span-6 space-y-6">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#233368] leading-tight">
                            Welcome To Our Company
                        </h2>
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                            Samaha Lawyers & Legal Consultants offers comprehensive legal services for individuals and businesses. Our team of experienced lawyers and legal consultants provides specialized advice in criminal, real estate, commercial, family and labor law, ensuring full compliance with local and international regulations. We have a strong presence across various industries, including legal, commercial, financial consulting and both public and private sectors in multiple countries worldwide.
                        </p>

                        {/* 4 Exact Features */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                            {features.map((feat, idx) => {
                                const Icon = feat.icon;
                                return (
                                    <div key={idx} className="welcome-feature-card">
                                        <div className="w-9 h-9 rounded-lg bg-gold-500/10 text-gold-600 flex items-center justify-center shrink-0">
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <span className="text-sm sm:text-base font-semibold text-slate-800 leading-snug">
                                            {feat.title}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Exact Buttons: Get a Quote, Read More */}
                        <div className="pt-4 flex flex-wrap items-center gap-4">
                            <button
                                onClick={onOpenConsultation}
                                className="btn-gold text-base py-3.5 px-8"
                            >
                                <span>Get a Quote</span>
                                <ArrowRight className="w-4 h-4" />
                            </button>

                            <Link
                                to="/about-us"
                                className="px-7 py-3.5 rounded-lg text-base font-semibold text-[#0B192C] border border-slate-300 hover:bg-slate-100 transition-colors inline-flex items-center gap-2"
                            >
                                <span>Read More</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
