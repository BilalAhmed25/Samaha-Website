import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { teamMembers } from '../../data/siteData';
import './LeadershipSection.css';

export default function LeadershipSection({ onOpenConsultation }) {
    return (
        <section className="leadership-wrapper">
            <div className="site-container">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div>
                        <span className="text-xs font-semibold uppercase tracking-widest text-gold-600 block mb-1">
                            Legal Masters
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0B192C]">
                            Meet Our Senior Leadership
                        </h2>
                        <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
                            Led by seasoned advocates, arbitration specialists, and judicial advisors dedicated to securing your rights before all judicial bodies.
                        </p>
                    </div>
                    <Link
                        to="/team"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-300 hover:border-gold-500 text-sm font-semibold text-[#0B192C] hover:bg-gold-50 transition-colors shrink-0"
                    >
                        <span>View Full Team Roster</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                    {teamMembers.slice(0, 5).map((m, idx) => (
                        <div key={idx} className="leader-card">
                            <div className="aspect-[5/7] w-full relative overflow-hidden bg-slate-900 flex items-center justify-center">
                                <img
                                    src={m.image}
                                    alt={m.name}
                                    className="w-full h-full object-contain"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/80 via-transparent to-transparent pointer-events-none"></div>
                                <div className="absolute bottom-3 left-3 text-white">
                                    <span className="text-[11px] font-semibold text-gold-300 block">{m.location}</span>
                                </div>
                            </div>

                            <div className="p-5">
                                <h3 className="text-lg sm:text-xl font-serif font-bold text-[#0B192C]">{m.name}</h3>
                                <span className="text-xs sm:text-sm text-gold-600 font-semibold block mb-2">{m.role}</span>

                                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                                    <button onClick={() => onOpenConsultation && onOpenConsultation(m.name)} className="font-semibold text-slate-700 hover:text-gold-600 cursor-pointer">
                                        Consult With Lawyer
                                    </button>
                                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
