import React, { useState } from 'react';
import { X, CheckCircle, Phone, Mail, MessageSquare, Clock, User, Scale, Building2 } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { firmInfo, services, allBranches } from '../../data/siteData';
import FloatingInput from './FloatingInput';
import './ConsultationModal.css';

export default function ConsultationModal({ isOpen, onClose, preselectedService }) {
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        service: preselectedService || 'Legal Consultations',
        branch: 'Dubai Head Office',
        urgency: 'Standard',
        details: ''
    });
    const [submitted, setSubmitted] = useState(false);

    if (!isOpen) return null;

    const serviceOptions = [
        ...services.map(s => s.title),
        "Debt Collection",
        "Businessmen Services",
        "Immigration / Golden Visa",
        "Other Legal Matter"
    ];

    const branchOptions = allBranches.map(b => ({
        value: `${b.name} (${b.country})`,
        label: `${b.name} - ${b.city} (${b.country})`
    }));

    const urgencyOptions = [
        { value: "Standard", label: "Standard (Within 24 Hours)" },
        { value: "Urgent", label: "Urgent (Court hearing / Arrest)" },
        { value: "Corporate", label: "Corporate / Retainer Planning" }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const handleReset = () => {
        setSubmitted(false);
        onClose();
    };

    return (
        <div className="modal-overlay" onClick={handleReset}>
            <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
                {/* Close Button */}
                <button
                    onClick={handleReset}
                    className="absolute top-4 right-4 z-30 p-2 text-slate-400 hover:text-white rounded-full bg-slate-800/80 hover:bg-slate-700 transition-colors cursor-pointer"
                    aria-label="Close Modal"
                >
                    <X className="w-5 h-5" />
                </button>

                {!submitted ? (
                    <div className="grid grid-cols-1 md:grid-cols-12 w-full">
                        {/* Left Side: Image Column */}
                        <div className="hidden md:flex md:col-span-5 relative min-h-[540px] flex-col justify-end p-6 overflow-hidden">
                            <img
                                src="/consultation-modal.jpg"
                                alt="Samaha Legal Consultants"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#121B38] via-[#121B38]/40 to-transparent"></div>
                            <div className="relative z-10 space-y-2">
                                <span className="inline-block px-2.5 py-1 rounded bg-gold-500/20 border border-gold-500/40 text-[11px] font-semibold tracking-wider text-gold-300 uppercase">
                                    30+ Years of Excellence
                                </span>
                                <h4 className="text-xl font-serif font-bold text-white leading-snug">
                                    Expert Legal Counsel Across 11 Global Offices
                                </h4>
                                <p className="text-xs text-slate-300 leading-relaxed">
                                    Direct access to licensed advocates, arbitrations, and senior litigation attorneys.
                                </p>
                            </div>
                        </div>

                        {/* Right Side: Form Column */}
                        <div className="col-span-1 md:col-span-7 p-6 sm:p-8 overflow-y-auto max-h-[92vh]">
                            <div className="mb-5 pr-8">
                                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                                    Book a Legal Consultation
                                </h3>
                                <p className="text-slate-300 text-xs sm:text-sm mt-1 leading-relaxed">
                                    Share details of your legal matter. Our senior attorneys will review your case file and reach out within 2 business hours.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-3.5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                                    <FloatingInput
                                        name="fullName"
                                        label="Full Legal Name"
                                        required
                                        value={formData.fullName}
                                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                        icon={User}
                                        variant="dark"
                                    />
                                    <FloatingInput
                                        type="tel"
                                        name="phone"
                                        label="Phone / WhatsApp"
                                        required
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        icon={Phone}
                                        variant="dark"
                                    />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                                    <FloatingInput
                                        type="email"
                                        name="email"
                                        label="Email Address"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        icon={Mail}
                                        variant="dark"
                                    />
                                    <FloatingInput
                                        type="select"
                                        name="service"
                                        label="Legal Practice Domain"
                                        required
                                        value={formData.service}
                                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                        options={serviceOptions}
                                        icon={Scale}
                                        variant="dark"
                                    />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                                    <FloatingInput
                                        type="select"
                                        name="branch"
                                        label="Preferred Office"
                                        value={formData.branch}
                                        onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                                        options={branchOptions}
                                        icon={Building2}
                                        variant="dark"
                                    />
                                    <FloatingInput
                                        type="select"
                                        name="urgency"
                                        label="Urgency"
                                        value={formData.urgency}
                                        onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                                        options={urgencyOptions}
                                        icon={Clock}
                                        variant="dark"
                                    />
                                </div>

                                <div>
                                    <FloatingInput
                                        type="textarea"
                                        name="details"
                                        label="Overview of Matter"
                                        rows={3}
                                        value={formData.details}
                                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                                        icon={MessageSquare}
                                        variant="dark"
                                    />
                                </div>

                                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                                    <button type="submit" className="flex-1 btn-gold text-sm cursor-pointer py-3.5">
                                        Submit Consultation Request
                                    </button>
                                    <a
                                        href={`https://wa.me/${firmInfo.headOffice.whatsapp}?text=Hello%20Samaha%20Lawyers,%20my%20name%20is%20${encodeURIComponent(formData.fullName || 'Client')}%20and%20I%20urgently%20need%20a%20consultation.`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="py-3.5 px-5 rounded-lg text-sm font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-700/80 hover:bg-emerald-900/60 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                                    >
                                        <FaWhatsapp className="w-4 h-4 text-emerald-400" />
                                        <span>WhatsApp</span>
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                ) : (
                    <div className="py-12 px-6 text-center space-y-4">
                        <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                            <CheckCircle className="w-10 h-10" />
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-white">Consultation Request Received</h3>
                        <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                            Thank you, <span className="text-gold-400 font-semibold">{formData.fullName}</span>. A legal coordinator will contact you shortly.
                        </p>
                        <div className="pt-4 flex justify-center gap-3">
                            <button onClick={handleReset} className="px-6 py-2.5 rounded-lg text-sm font-medium text-white bg-slate-800 hover:bg-slate-700">
                                Close Window
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
