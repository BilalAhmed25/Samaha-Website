import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import './HomeTeamSection.css';

export default function HomeTeamSection({ onOpenConsultation }) {
    // Actual team members matching current website (samaha-group.com)
    const actualTeam = [
        {
            name: "Gomaa Samaha",
            role: "Chairman",
            location: "Dubai Headquarters",
            image: "/team/gomaa-samaha.png",
            desc: "Founding Chairman of Samaha Group with over 30 years of legal leadership across the Arab world and international jurisdictions."
        },
        {
            name: "Shaaban Samaha",
            role: "CEO",
            location: "Dubai Headquarters",
            image: "/team/shaaban-samaha.jpeg",
            desc: "Chief Executive Officer directing global expansion, corporate governance, high-stakes mandates, and strategic partnerships."
        },
        {
            name: "Jassim Al-Balushi",
            role: "Lawyer, Partner / Dubai Office",
            location: "Dubai Office",
            image: "/team/jassim-al-balushi.jpeg",
            desc: "Senior Emirati Advocate with full rights of audience before UAE Federal Courts, Commercial Courts, and the Supreme Court."
        },
        {
            name: "Nouf Awlaqi",
            role: "Lawyer, Partner – Ras Al Khaimah Office",
            location: "Ras Al Khaimah Office",
            image: "/team/nouf-awlaqi.jpeg",
            desc: "Partner leading Northern Emirates commercial litigation, banking defense, corporate compliance, and dispute resolution."
        },
        {
            name: "Yazan Al bakheet",
            role: "Lawyer – Partner, Jordan Office",
            location: "Jordan Office (Amman)",
            image: "/team/yazan-al-bakheet.jpg",
            desc: "Partner spearheading cross-border litigation, corporate treaties, and arbitral proceedings in the Hashemite Kingdom of Jordan."
        },
        {
            name: "Abdallah Foad",
            role: "Director – Sharjah Office",
            location: "Sharjah Office",
            image: "/team/abdallah-foad.jpeg",
            desc: "Director overseeing legal operations, court management, and client representation across the Emirate of Sharjah."
        },
        {
            name: "Dr. Abdelkreem Alsafi",
            role: "Director – Abu Dhabi Office",
            location: "Abu Dhabi Office",
            image: "/team/dr-abdelkreem-alsafi.jpg",
            desc: "Director of Abu Dhabi operations specializing in regulatory compliance, governmental affairs, and federal litigation."
        },
        {
            name: "Esraa Refai",
            role: "Director – Dubai Office",
            location: "Dubai Office",
            image: "/team/esraa-refai.jpg",
            desc: "Director of Dubai flagship operations managing high-profile client portfolios, corporate structuring, and litigation workflows."
        },
        {
            name: "Emad Al-shaer",
            role: "Legal Consultant",
            location: "Dubai Office",
            image: "/team/emad-al-shaer.jpeg",
            desc: "Legal Consultant specializing in complex civil disputes, labor claims, corporate agreements, and judicial advocacy."
        },
        {
            name: "Sayed Elshaeer",
            role: "Business Officer",
            location: "Dubai Office",
            image: "/team/sayed-elshaeer.jpeg",
            desc: "Business Officer coordinating institutional accounts, governmental liaisons, and strategic client relations."
        }
    ];

    return (
        <section className="home-team-wrapper">
            <div className="site-container">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div>
                        <span className="text-sm font-bold uppercase tracking-widest text-gold-600 block mb-1">
                            Leadership & Senior Partners
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#233368]">
                            Our Team
                        </h2>
                    </div>

                    <Link
                        to="/team"
                        className="inline-flex items-center gap-2 text-base font-semibold text-gold-600 hover:text-gold-700 group"
                    >
                        <span>View All Attorneys & Consultants</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                {/* 10 Team Members Grid (5 in a row on desktop/widescreen) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                    {actualTeam.map((member, idx) => (
                        <div key={idx} className="home-member-card">
                            {/* Photo Container: completely visible image with exact 5:7 ratio */}
                            <div className="home-member-img-wrap">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    loading="lazy"
                                />
                            </div>

                            <div className="p-5 flex flex-col justify-between flex-1 space-y-4">
                                <div>
                                    <div className="flex items-center justify-between gap-2 mb-1.5">
                                        <span className="text-xs sm:text-sm text-gold-600 font-bold uppercase tracking-wider">
                                            {member.role}
                                        </span>
                                    </div>

                                    <h3 className="text-lg sm:text-xl font-serif font-bold text-[#233368] mb-1">
                                        {member.name}
                                    </h3>

                                    <div className="flex items-center gap-1.5 text-sm text-slate-500 font-medium">
                                        <MapPin className="w-4 h-4 text-gold-600 shrink-0" />
                                        <span>{member.location}</span>
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-sm">
                                    <button
                                        onClick={() => onOpenConsultation(member.name)}
                                        className="font-semibold text-[#233368] hover:text-gold-600 cursor-pointer"
                                    >
                                        Consult With Lawyer
                                    </button>
                                    <ArrowRight className="w-4 h-4 text-slate-400" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
