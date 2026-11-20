import React from 'react';
import { Users, Scale, HeartHandshake } from 'lucide-react';
import './UniquenessSection.css';

export default function UniquenessSection() {
    return (
        <section className="uniqueness-wrapper">
            <div className="site-container">
                <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
                    <span className="text-xs font-semibold uppercase tracking-widest text-gold-600">
                        Core Distinctions
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0B192C]">
                        What Makes Us Unique
                    </h2>
                    <p className="text-slate-600 text-sm">
                        The foundational pillars that establish Samaha Lawyers as a trusted advisor to corporations and private clients.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="uniqueness-card">
                        <div className="w-12 h-12 rounded-xl bg-gold-500/10 text-gold-600 flex items-center justify-center">
                            <Users className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-serif font-bold text-[#0B192C]">
                            Expert Legal Team
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Our team consists of highly skilled and specialized lawyers with extensive experience in various legal fields, providing strategic mastery in and out of court.
                        </p>
                    </div>

                    <div className="uniqueness-card">
                        <div className="w-12 h-12 rounded-xl bg-gold-500/10 text-gold-600 flex items-center justify-center">
                            <Scale className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-serif font-bold text-[#0B192C]">
                            Comprehensive Legal Services
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            We offer a wide range of legal services, covering everything from business and corporate law to intellectual property, criminal defense, and international arbitration.
                        </p>
                    </div>

                    <div className="uniqueness-card">
                        <div className="w-12 h-12 rounded-xl bg-gold-500/10 text-gold-600 flex items-center justify-center">
                            <HeartHandshake className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-serif font-bold text-[#0B192C]">
                            Client-Centered Approach
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            We prioritize our clients' needs, offering personalized solutions and ensuring timely, effective legal assistance with full transparency and confidentiality.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
