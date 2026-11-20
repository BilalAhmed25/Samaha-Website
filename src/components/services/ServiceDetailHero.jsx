import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, Briefcase, ShieldAlert, Gavel, HeartHandshake, Globe, Building2, Coins, Anchor, Users, ReceiptText, Award } from 'lucide-react';
import './ServiceDetailHero.css';

const iconMap = {
    Scale, Briefcase, ShieldAlert, Gavel, HeartHandshake,
    Globe, Building2, Coins, Anchor, Users, ReceiptText, Award
};

export default function ServiceDetailHero({ service }) {
    const IconComp = iconMap[service.icon] || Scale;

    return (
        <section className="service-detail-hero-wrapper">
            <div className="site-container">
                <div className="service-breadcrumb">
                    <Link to="/">Home</Link>
                    <span>/</span>
                    <Link to="/legal-services">Legal Services</Link>
                    <span>/</span>
                    <span className="text-gold-400">{service.title}</span>
                </div>

                <div className="max-w-3xl space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs font-semibold">
                        <IconComp className="w-3.5 h-3.5" />
                        <span>Specialized Legal Practice Area</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-white">
                        {service.title}
                    </h1>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                        {service.shortDesc}
                    </p>
                </div>
            </div>
        </section>
    );
}
