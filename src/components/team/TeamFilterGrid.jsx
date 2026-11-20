import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { teamMembers } from '../../data/siteData';
import './TeamFilterGrid.css';

export default function TeamFilterGrid({ onOpenConsultation }) {
    return (
        <section className="team-grid-wrapper">
            <div className="site-container">
                {/* Intro summary bar without category/location filters per user request */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-200">
                    <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-gold-600 block">
                            Our Global Advocates & Advisors
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#233368] mt-1">
                            All Attorneys, Consultants & Specialists
                        </h2>
                    </div>
                    <div className="text-sm font-semibold text-slate-600 bg-slate-100 px-4 py-2 rounded-lg border border-slate-200">
                        Total Members: <span className="text-[#233368] font-bold">{teamMembers.length}</span>
                    </div>
                </div>

                {/* 28 Team Members Grid (5 in a row on desktop/widescreen) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 pt-10">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="team-member-card">
                            <div>
                                {/* Photo Container: completely visible image with exact 5:7 ratio, zero hover zoom */}
                                <div className="team-member-img-wrap">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        loading="lazy"
                                    />
                                </div>

                                <div className="p-5 space-y-2">
                                    <span className="text-xs sm:text-sm font-bold text-gold-600 uppercase tracking-wider block">
                                        {member.role}
                                    </span>
                                    <h3 className="text-lg sm:text-xl font-serif font-bold text-[#233368]">
                                        {member.name}
                                    </h3>
                                    <div className="flex items-center gap-1.5 text-sm text-slate-500 font-medium">
                                        <MapPin className="w-4 h-4 text-gold-600 shrink-0" />
                                        <span>{member.location}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                                <button
                                    onClick={() => onOpenConsultation(member.name)}
                                    className="text-sm font-semibold text-[#233368] hover:text-gold-600 flex items-center gap-1.5 cursor-pointer transition-colors"
                                >
                                    <span>Consult With Lawyer</span>
                                    <ArrowRight className="w-4 h-4 text-slate-400" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
