import React from 'react';
import {
    ShieldAlert, Landmark, Globe, AlertOctagon, TrendingUp,
    Briefcase, Scale, Lock, Gavel, ArrowRight
} from 'lucide-react';
import './IntegratedSolutionsSection.css';

export default function IntegratedSolutionsSection({ onOpenConsultation }) {
    const solutions = [
        {
            title: "Drug Cases",
            desc: "Aggressive defense strategies to protect your rights in narcotics cases.",
            icon: ShieldAlert
        },
        {
            title: "State Security Cases",
            desc: "Strategic legal representation for complex high-stakes state security matters.",
            icon: Landmark
        },
        {
            title: "Interpol Cases",
            desc: "Expert global defense against international notices and cross-border legal challenges.",
            icon: Globe
        },
        {
            title: "Fraud Cases",
            desc: "Countering fraud allegations with sophisticated evidence and decisive legal action.",
            icon: AlertOctagon
        },
        {
            title: "Trading Cases",
            desc: "Protecting your investments through expert resolution of financial trading disputes.",
            icon: TrendingUp
        },
        {
            title: "Embezzlement Cases",
            desc: "Safeguarding your reputation and financial integrity against embezzlement allegations.",
            icon: Briefcase
        },
        {
            title: "Commercial Fraud Cases",
            desc: "Protecting your business from deception and ensuring fair market integrity.",
            icon: Scale
        },
        {
            title: "Theft Cases",
            desc: "Rigorous legal advocacy to challenge theft charges and reveal the truth.",
            icon: Lock
        },
        {
            title: "Criminal Cases",
            desc: "Solid criminal defense providing a powerful shield for your freedom.",
            icon: Gavel
        }
    ];

    return (
        <section className="integrated-solutions-wrapper">
            <div className="site-container">
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <span className="text-xs font-bold uppercase tracking-widest text-gold-600 block mb-2">
                        Specialized Courtroom Defense
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#121B38] mb-3">
                        Integrated Legal Solutions
                    </h2>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        Legal support to protect your assets and interests.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {solutions.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <div key={idx} className="integrated-card">
                                <div>
                                    <div className="integrated-icon-wrap">
                                        <Icon className="w-6 h-6" />
                                    </div>

                                    <h3 className="text-xl font-serif font-bold text-[#121B38] mb-2.5">
                                        {item.title}
                                    </h3>

                                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>

                                <div className="pt-5 mt-6 border-t border-slate-100 flex items-center justify-between">
                                    <button
                                        onClick={() => onOpenConsultation && onOpenConsultation(item.title)}
                                        className="text-sm font-semibold text-[#121B38] hover:text-gold-600 flex items-center gap-1.5 cursor-pointer transition-colors"
                                    >
                                        <span>Consult With Lawyer</span>
                                        <ArrowRight className="w-4 h-4 text-slate-400" />
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
