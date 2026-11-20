import React from 'react';
import './WhoIsSamahaSection.css';

export default function WhoIsSamahaSection() {
    const pillars = [
        {
            title: "Accredited Professional License",
            desc: "A licensed firm operating under the highest professional standards.",
            image: "/services/accredited-license.png"
        },
        {
            title: "Direct Legal Consultation",
            desc: "Direct communication with clear, practical advice.",
            image: "/services/direct-consultation.png"
        },
        {
            title: "Specialized Legal Team",
            desc: "Lawyers and experts providing precise solutions for every case.",
            image: "/services/specialized-team.png"
        },
        {
            title: "Full Data Confidentiality",
            desc: "Complete protection of client information and private files.",
            image: "/services/data-confidentiality.png"
        },
        {
            title: "Continuous Case Tracking",
            desc: "Regular updates on the status and procedures of your case.",
            image: "/services/continuous-tracking.png"
        }
    ];

    return (
        <section className="who-samaha-wrapper">
            <div className="site-container">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="text-xs font-bold uppercase tracking-widest text-gold-600 block mb-2">
                        Trusted Legal Excellence
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#121B38] mb-4">
                        Who is Samaha Law Firm & Legal Consultations?
                    </h2>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        We are an international legal firm specializing in diverse legal sectors. We provide comprehensive solutions and consultations based on global standards, focusing on effective communication and a personalized understanding of each client’s unique needs.
                    </p>
                </div>

                {/* 5 Pillars (5 in a row on widescreen / desktop) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
                    {pillars.map((pillar, idx) => (
                        <div key={idx} className="who-samaha-card">
                            <div className="who-samaha-img-wrap">
                                <img
                                    src={pillar.image}
                                    alt={pillar.title}
                                    loading="lazy"
                                />
                            </div>

                            <div className="p-5 text-center flex-1 flex flex-col justify-start">
                                <h3 className="text-base sm:text-lg font-serif font-bold text-[#121B38] mb-2">
                                    {pillar.title}
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {pillar.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
