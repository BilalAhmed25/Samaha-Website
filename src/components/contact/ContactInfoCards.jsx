import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { firmInfo } from '../../data/siteData';
import './ContactInfoCards.css';

export default function ContactInfoCards() {
    return (
        <div className="space-y-4">
            <div>
                <span className="text-xs font-bold uppercase tracking-widest text-gold-600 block mb-1">
                    Headquarters
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#121B38]">
                    Dubai Head Office Info
                </h2>
            </div>

            <div className="contact-info-card space-y-6">
                {/* Direct Phone Lines */}
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gold-500/10 text-gold-600 flex items-center justify-center shrink-0">
                        <Phone className="w-6 h-6" />
                    </div>
                    <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                            Direct Phone & 24/7 Hotline
                        </span>
                        <a
                            href={`tel:${firmInfo.headOffice.phone.replace(/\s+/g, '')}`}
                            className="text-xl sm:text-2xl font-bold text-[#121B38] hover:text-gold-600 block tracking-tight transition-colors"
                        >
                            {firmInfo.headOffice.phone}
                        </a>
                    </div>
                </div>

                {/* WhatsApp Instant Desk (Merged in same card) */}
                <div className="flex items-start gap-4 border-t border-slate-100 pt-5">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                        <FaWhatsapp className="w-6 h-6" />
                    </div>
                    <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 block mb-1">
                            WhatsApp Confidential Hotline
                        </span>
                        <a
                            href={`https://wa.me/${firmInfo.headOffice.whatsapp}?text=Hello%20Samaha%20Lawyers,%20I%20would%20like%20to%20request%20an%20urgent%20legal%20consultation.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg sm:text-xl font-bold text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-2 transition-colors cursor-pointer"
                        >
                            <span>{firmInfo.headOffice.phone}</span>
                            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                                Chat Now
                            </span>
                        </a>
                    </div>
                </div>

                {/* Official Email */}
                <div className="flex items-start gap-4 border-t border-slate-100 pt-5">
                    <div className="w-12 h-12 rounded-xl bg-gold-500/10 text-gold-600 flex items-center justify-center shrink-0">
                        <Mail className="w-6 h-6" />
                    </div>
                    <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                            Official Email
                        </span>
                        <a
                            href={`mailto:${firmInfo.headOffice.email}`}
                            className="text-base sm:text-lg font-semibold text-[#121B38] hover:text-gold-600 block transition-colors"
                        >
                            {firmInfo.headOffice.email}
                        </a>
                    </div>
                </div>

                {/* Location Address */}
                <div className="flex items-start gap-4 border-t border-slate-100 pt-5">
                    <div className="w-12 h-12 rounded-xl bg-gold-500/10 text-gold-600 flex items-center justify-center shrink-0">
                        <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                            Headquarters Location
                        </span>
                        <span className="text-sm sm:text-base text-slate-700 leading-relaxed block">
                            {firmInfo.headOffice.address}
                        </span>
                    </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4 border-t border-slate-100 pt-5">
                    <div className="w-12 h-12 rounded-xl bg-gold-500/10 text-gold-600 flex items-center justify-center shrink-0">
                        <Clock className="w-6 h-6" />
                    </div>
                    <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                            Consultation Hours
                        </span>
                        <span className="text-sm sm:text-base text-slate-700 block">
                            {firmInfo.headOffice.workingHours}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
