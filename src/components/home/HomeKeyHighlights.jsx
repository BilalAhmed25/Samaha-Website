import React from 'react';
import { Scale, Briefcase, ShieldAlert, Gavel, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './HomeKeyHighlights.css';

export default function HomeKeyHighlights() {
    const highlightItems = [
        {
            id: "legal-consultations",
            num: "01",
            title: "Legal Consultations",
            desc: "Our Company provides legal consultations through a distinguished team of lawyers specializing in various fields of law.",
            icon: Scale,
            link: "/legal-consultations"
        },
        {
            id: "business-corporate-law",
            num: "02",
            title: "Business and Corporate Law",
            desc: "Our Company has extensive experience in all aspects of corporate matters throughout the company's business life.",
            icon: Briefcase,
            link: "/business-corporate-law"
        },
        {
            id: "criminal-law",
            num: "03",
            title: "Criminal Law",
            desc: "This branch of law is considered one of the most delicate branches of public law, given its close connection to human life and the threats to life, honor and property.",
            icon: ShieldAlert,
            link: "/criminal-law"
        },
        {
            id: "civil-commercial-cases",
            num: "04",
            title: "Civil and Commercial Cases",
            desc: "We have a team of professionals and experts with extensive and excellent legal experience and knowledge in litigation and dispute resolution.",
            icon: Gavel,
            link: "/civil-commercial-cases"
        }
    ];

    return (
        <section className="key-highlights-wrapper">
            <div className="site-container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {highlightItems.map((item) => {
                        const IconComp = item.icon;
                        return (
                            <div
                                key={item.id}
                                className="highlight-card-pillar group"
                            >
                                {/* Top Accent Line on Hover */}
                                <div className="highlight-card-accent-line"></div>

                                {/* Top Row: Icon & Numeral */}
                                <div className="flex items-center justify-between mb-5">
                                    <div className="highlight-card-icon-box">
                                        <IconComp className="w-6 h-6" />
                                    </div>
                                    <span className="highlight-card-numeral">
                                        {item.num}
                                    </span>
                                </div>

                                {/* Card Content */}
                                <div className="flex-1 flex flex-col justify-between space-y-4">
                                    <div className="space-y-2.5">
                                        <h3 className="highlight-card-title">
                                            {item.title}
                                        </h3>
                                        <p className="highlight-card-desc">
                                            {item.desc}
                                        </p>
                                    </div>

                                    {/* Bottom Action Link */}
                                    <div className="pt-4 border-t border-slate-100">
                                        <Link
                                            to={item.link}
                                            className="highlight-card-link"
                                        >
                                            <span>Learn More</span>
                                            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-200" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
