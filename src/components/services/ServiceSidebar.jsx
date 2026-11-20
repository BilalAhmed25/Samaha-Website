import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Clock, ArrowRight } from 'lucide-react';
import { firmInfo, services } from '../../data/siteData';
import './ServiceSidebar.css';

export default function ServiceSidebar({ currentServiceId, onOpenConsultation }) {
    const otherServices = services.filter(s => s.id !== currentServiceId).slice(0, 6);

    return (
        <div className="service-sidebar-wrapper">
            <div className="sidebar-hotline-card space-y-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-gold-400 block">
                    Headquarters Hotline
                </span>
                <h4 className="text-lg font-serif font-bold">Need Immediate Assistance?</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                    Connect with our senior litigation team at API World Tower, Dubai.
                </p>

                <div className="space-y-3 pt-2">
                    <a href={`tel:${firmInfo.headOffice.phone.replace(/\s+/g, '')}`} className="flex items-center gap-2 text-white hover:text-gold-300 text-base font-bold">
                        <Phone className="w-5 h-5 text-gold-400" />
                        <span>Call Us Now</span>
                    </a>
                    <div className="flex items-center gap-2 text-slate-300 text-xs">
                        <Clock className="w-4 h-4 text-gold-400" />
                        <span>{firmInfo.headOffice.workingHours}</span>
                    </div>
                </div>

                <button onClick={onOpenConsultation} className="w-full btn-gold text-xs py-2.5 mt-2">
                    Book Appointment
                </button>
            </div>

            <div className="sidebar-links-card space-y-4">
                <h4 className="text-base font-serif font-bold text-[#0B192C] pb-3 border-b border-slate-100">
                    Other Legal Domains
                </h4>
                <ul className="space-y-2.5 text-xs">
                    {otherServices.map((rs) => (
                        <li key={rs.id}>
                            <Link
                                to={`/${rs.id}`}
                                className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-gold-600 transition-colors"
                            >
                                <span className="font-medium">{rs.title}</span>
                                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                            </Link>
                        </li>
                    ))}
                </ul>
                <Link to="/legal-services" className="block text-center text-xs font-semibold text-gold-600 hover:text-gold-700 pt-2">
                    View All 12 Practice Areas →
                </Link>
            </div>
        </div>
    );
}
