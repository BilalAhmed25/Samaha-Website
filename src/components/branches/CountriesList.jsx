import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { countries } from '../../data/siteData';
import './CountriesList.css';

export default function CountriesList({ onOpenConsultation }) {
    return (
        <section className="countries-list-wrapper">
            <div className="site-container space-y-12">
                {countries.map((country) => (
                    <div key={country.id} id={country.id} className="country-block-card space-y-6">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                            <div className="flex items-center gap-3">
                                <img
                                    src={country.flag}
                                    alt={country.name}
                                    className="w-12 h-8 object-cover rounded-md border border-slate-200 shrink-0"
                                />
                                <div>
                                    <h2 className="text-2xl font-serif font-bold text-[#0B192C]">
                                        {country.name}
                                    </h2>
                                    <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
                                        {country.description}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {country.branches.map((b) => (
                                <div
                                    key={b.slug}
                                    className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-gold-400/80 transition-all flex flex-col justify-between"
                                >
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs font-bold text-gold-600 uppercase tracking-wide">
                                                {b.type}
                                            </span>
                                            <span className="text-xs bg-white text-slate-600 px-2.5 py-0.5 rounded border border-slate-200 font-medium">
                                                {b.city}
                                            </span>
                                        </div>

                                        <h3 className="text-lg font-serif font-bold text-[#0B192C]">
                                            {b.name}
                                        </h3>

                                        <div className="space-y-2 text-xs text-slate-600">
                                            <div className="flex items-start gap-2">
                                                <MapPin className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                                                <span className="leading-snug">{b.address}</span>
                                            </div>

                                            <div className="flex items-center gap-2">
                                                <Phone className="w-4 h-4 text-gold-600 shrink-0" />
                                                <a href={`tel:${b.phone.replace(/\s+/g, '')}`} className="text-base font-bold text-[#121B38] hover:text-gold-600">
                                                    {b.phone}
                                                </a>
                                            </div>

                                            <div className="flex items-center gap-2">
                                                <Mail className="w-4 h-4 text-gold-600 shrink-0" />
                                                <a href={`mailto:${b.email}`} className="text-slate-700 hover:text-gold-600">
                                                    {b.email}
                                                </a>
                                            </div>

                                            <div className="flex items-center gap-2 text-slate-500">
                                                <Clock className="w-4 h-4 text-gold-600 shrink-0" />
                                                <span>{b.hours}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-4 mt-4 border-t border-slate-200/80 flex items-center justify-between">
                                        <span className="text-xs text-slate-500 font-medium">
                                            Direct Practice Office
                                        </span>

                                        <button
                                            onClick={onOpenConsultation}
                                            className="px-4 py-2 rounded-lg text-xs font-semibold text-[#070F1A] bg-gold-400 hover:bg-gold-300 transition-colors cursor-pointer"
                                        >
                                            Book Consultation
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
