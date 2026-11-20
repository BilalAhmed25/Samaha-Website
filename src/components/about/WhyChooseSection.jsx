import React from 'react';
import './WhyChooseSection.css';

export default function WhyChooseSection({ onOpenConsultation }) {
    return (
        <section className="why-choose-wrapper">
            <div className="site-container">
                <div className="why-choose-banner">
                    <div className="max-w-3xl space-y-4">
                        <span className="text-xs font-semibold uppercase tracking-widest text-gold-400 block">
                            Unrivaled Judicial Record
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
                            Why Choose Samaha Lawyers
                        </h2>
                        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                            We are a specialized company that provides solutions to all legal problems with high efficiency and skill. We work in all areas of law, including civil, commercial, criminal, and international law. Our multilingual legal team stands by your side at every procedural step.
                        </p>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-slate-800">
                            <div>
                                <div className="text-3xl font-serif font-bold text-gold-400">30+</div>
                                <div className="text-xs text-slate-400 mt-1">Years Operating</div>
                            </div>
                            <div>
                                <div className="text-3xl font-serif font-bold text-gold-400">25+</div>
                                <div className="text-xs text-slate-400 mt-1">Specialized Lawyers</div>
                            </div>
                            <div>
                                <div className="text-3xl font-serif font-bold text-gold-400">11+</div>
                                <div className="text-xs text-slate-400 mt-1">Offices Globally</div>
                            </div>
                            <div>
                                <div className="text-3xl font-serif font-bold text-gold-400">98.7%</div>
                                <div className="text-xs text-slate-400 mt-1">Success Rating</div>
                            </div>
                        </div>

                        <div className="pt-6">
                            <button onClick={onOpenConsultation} className="btn-gold text-sm py-3 px-8">
                                Schedule Private Consultation
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
