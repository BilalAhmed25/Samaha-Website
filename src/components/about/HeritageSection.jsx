import React from 'react';
import { firmInfo } from '../../data/siteData';
import './HeritageSection.css';

export default function HeritageSection() {
    return (
        <section className="heritage-wrapper">
            <div className="site-container">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-6 space-y-6">
                        <span className="text-xs font-semibold uppercase tracking-widest text-gold-600 block">
                            Our Heritage & Foundation
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0B192C]">
                            We Specialise In All Type Of Cases
                        </h2>
                        <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                            <p>
                                We are a specialized company that provides solutions for all legal issues with high efficiency and skill. We operate in all areas of law, including civil, commercial, criminal, and international law, as well as family courts.
                            </p>
                            <p>
                                We have received significant praise from clients, and our commitment to global standards sets us apart as experts in the field of law. We strive to earn the trust of our clients, and we have a prominent presence in many industries, offering legal, commercial, financial, and public and private sector consultancy services in various countries.
                            </p>
                        </div>

                        <div className="heritage-vision-box space-y-2">
                            <span className="text-xs font-bold uppercase tracking-wider text-gold-800 block">
                                Our Corporate Vision
                            </span>
                            <p className="text-sm font-medium leading-relaxed italic text-slate-800">
                                "{firmInfo.vision}"
                            </p>
                        </div>
                    </div>

                    <div className="lg:col-span-6">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
                            <img
                                src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1200&q=80"
                                alt="Samaha Lawyers Law Library"
                                className="w-full h-[480px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-6 left-6 right-6 text-white p-4 rounded-xl bg-[#070F1A]/80 backdrop-blur-sm border border-white/10">
                                <div className="text-lg font-serif font-bold text-gold-400">
                                    Global Legal Standards • Local Precision
                                </div>
                                <div className="text-xs text-slate-300 mt-1">
                                    Practicing before UAE Federal Courts, GCC Judicial Bodies, and European Tribunals.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
