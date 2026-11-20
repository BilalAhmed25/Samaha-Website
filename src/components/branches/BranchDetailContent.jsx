import React from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink, ShieldCheck } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { firmInfo } from '../../data/siteData';
import './BranchDetailContent.css';

export default function BranchDetailContent({ branch, onOpenConsultation }) {
    return (
        <section className="branch-detail-wrapper">
            <div className="site-container">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left Column: Office Details */}
                    <div className="lg:col-span-7 space-y-8">
                        <div className="branch-info-card space-y-6">
                            <h2 className="text-2xl font-serif font-bold text-[#0B192C]">
                                Branch Location & Direct Contact
                            </h2>

                            <div className="space-y-4 text-sm text-slate-700">
                                <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                                    <MapPin className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                                    <div>
                                        <strong className="block text-slate-900 font-semibold mb-0.5">Physical Address:</strong>
                                        <span>{branch.address}</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                                        <div className="flex items-center gap-2 text-gold-600 font-semibold text-xs">
                                            <Phone className="w-4 h-4" />
                                            <span>Direct Telephone</span>
                                        </div>
                                        <a href={`tel:${branch.phone.replace(/\s+/g, '')}`} className="text-xl sm:text-2xl font-bold text-[#121B38] hover:text-gold-600 block tracking-tight">
                                            {branch.phone}
                                        </a>
                                    </div>

                                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                                        <div className="flex items-center gap-2 text-gold-600 font-semibold text-xs">
                                            <Mail className="w-4 h-4" />
                                            <span>Email Enquiries</span>
                                        </div>
                                        <a href={`mailto:${branch.email}`} className="text-sm font-semibold text-[#0B192C] hover:text-gold-600 block truncate">
                                            {branch.email}
                                        </a>
                                    </div>
                                </div>

                                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3">
                                    <Clock className="w-5 h-5 text-gold-600 shrink-0" />
                                    <div>
                                        <span className="text-xs text-slate-500 block">Operating Hours:</span>
                                        <span className="font-semibold text-slate-800 text-xs sm:text-sm">{branch.hours}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-2 flex flex-wrap gap-4">
                                <a
                                    href={branch.mapsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-5 py-2.5 rounded-lg text-xs font-semibold text-slate-800 border border-slate-300 hover:bg-slate-100 transition-colors flex items-center gap-2"
                                >
                                    <MapPin className="w-4 h-4 text-gold-600" />
                                    <span>Open in Google Maps</span>
                                    <ExternalLink className="w-3 h-3 text-slate-400" />
                                </a>

                                <a
                                    href={`https://wa.me/${firmInfo.headOffice.whatsapp}?text=Hello,%20I%20would%20like%20to%20book%20an%20appointment%20at%20${encodeURIComponent(branch.name)}.`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-5 py-2.5 rounded-lg text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-300 hover:bg-emerald-100 transition-colors flex items-center gap-2 cursor-pointer"
                                >
                                    <FaWhatsapp className="w-4 h-4 text-emerald-600" />
                                    <span>WhatsApp Office</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Appointment Booking */}
                    <div className="lg:col-span-5">
                        <div className="branch-appointment-card space-y-4">
                            <span className="text-xs font-semibold uppercase tracking-wider text-gold-400 block">
                                Appointment Booking
                            </span>
                            <h3 className="text-2xl font-serif font-bold text-white">
                                Visit {branch.name}
                            </h3>
                            <p className="text-slate-300 text-xs leading-relaxed">
                                Schedule a confidential in-person consultation with our senior lawyers and legal researchers at this branch.
                            </p>

                            <div className="pt-2">
                                <button
                                    onClick={onOpenConsultation}
                                    className="w-full btn-gold text-sm py-3.5"
                                >
                                    Book Appointment At This Branch
                                </button>
                            </div>

                            <div className="text-[11px] text-slate-400 flex items-center gap-2 pt-2 border-t border-slate-800">
                                <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0" />
                                <span>Private consultation rooms with full client confidentiality.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
