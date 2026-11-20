import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, ShieldCheck, Lock, User, Building, DollarSign, MessageSquare } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { firmInfo } from '../../data/siteData';
import FloatingInput from '../common/FloatingInput';
import './LegalConsultationBookingSection.css';

export default function LegalConsultationBookingSection() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        company: '',
        amount: '',
        caseBrief: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
        }, 800);
    };

    return (
        <section className="booking-section-wrapper" id="consultation-form">
            <div className="site-container">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Left Column: Direct Helpline & Trust Badges */}
                    <div className="lg:col-span-5 space-y-8">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-widest text-gold-600 block mb-2">
                                Direct Consultation Channel
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#121B38] mb-4">
                                Book a legal consultation
                            </h2>
                            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                                Fill out the form and we will contact you as soon as possible. Our elite advocates and consultants are prepared to evaluate your case with total confidentiality.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-200">
                                <div className="w-10 h-10 rounded-lg bg-[#121B38] text-gold-400 flex items-center justify-center shrink-0">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <span className="text-xs text-slate-500 font-bold block uppercase tracking-wider mb-0.5">Direct Hotline</span>
                                    <a href={`tel:${firmInfo.headOffice.phone.replace(/\s+/g, '')}`} className="text-xl sm:text-2xl font-bold text-[#121B38] hover:text-gold-600 tracking-tight transition-colors">
                                        {firmInfo.headOffice.phone}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-200">
                                <div className="w-10 h-10 rounded-lg bg-[#121B38] text-gold-400 flex items-center justify-center shrink-0">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <span className="text-xs text-slate-500 font-semibold block uppercase">Official Email</span>
                                    <a href={`mailto:${firmInfo.headOffice.email}`} className="text-base font-bold text-[#121B38] hover:text-gold-600">
                                        {firmInfo.headOffice.email}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-200">
                                <div className="w-10 h-10 rounded-lg bg-[#121B38] text-gold-400 flex items-center justify-center shrink-0">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <span className="text-xs text-slate-500 font-semibold block uppercase">Headquarters</span>
                                    <span className="text-sm text-slate-700 leading-snug block">
                                        API World Tower, Floor 14, Sheikh Zayed Road, Dubai
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="pt-2">
                            <a
                                href={`https://wa.me/${firmInfo.headOffice.whatsapp}?text=${encodeURIComponent("Hello Samaha Group, I want to book a legal consultation.")}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm transition-colors cursor-pointer w-full justify-center"
                            >
                                <FaWhatsapp className="w-5 h-5 text-white" />
                                <span>Message Us On WhatsApp</span>
                            </a>
                        </div>

                        <div className="flex items-center gap-6 pt-2 text-xs text-slate-500">
                            <span className="flex items-center gap-1.5">
                                <Lock className="w-4 h-4 text-gold-600" />
                                <span>100% Confidential</span>
                            </span>
                            <span className="flex items-center gap-1.5">
                                <ShieldCheck className="w-4 h-4 text-gold-600" />
                                <span>Licensed Law Firm</span>
                            </span>
                        </div>
                    </div>

                    {/* Right Column: Exact Form from samaha-group.com */}
                    <div className="lg:col-span-7">
                        <div className="booking-form-card">
                            {isSubmitted ? (
                                <div className="text-center py-12 px-6 space-y-4">
                                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                                        <CheckCircle2 className="w-10 h-10" />
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-[#121B38]">
                                        Request Submitted Successfully
                                    </h3>
                                    <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                                        Thank you, <strong className="text-[#121B38]">{formData.name}</strong>. Your consultation inquiry has been forwarded to our senior legal counsel. We will contact you shortly.
                                    </p>
                                    <div className="pt-4">
                                        <button
                                            onClick={() => {
                                                setIsSubmitted(false);
                                                setFormData({ name: '', phone: '', email: '', company: '', amount: '', caseBrief: '' });
                                            }}
                                            className="text-sm font-semibold text-gold-600 hover:text-gold-700 underline"
                                        >
                                            Submit another consultation
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <FloatingInput
                                            name="name"
                                            label="Full name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            icon={User}
                                            variant="light"
                                        />
                                        <FloatingInput
                                            type="tel"
                                            name="phone"
                                            label="Phone number"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            icon={Phone}
                                            variant="light"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <FloatingInput
                                            type="email"
                                            name="email"
                                            label="Email Address"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            icon={Mail}
                                            variant="light"
                                        />
                                        <FloatingInput
                                            name="company"
                                            label="Company Name"
                                            value={formData.company}
                                            onChange={handleChange}
                                            icon={Building}
                                            variant="light"
                                        />
                                    </div>

                                    <div>
                                        <FloatingInput
                                            name="amount"
                                            label="Total amount / Claim value"
                                            value={formData.amount}
                                            onChange={handleChange}
                                            icon={DollarSign}
                                            variant="light"
                                        />
                                    </div>

                                    <div>
                                        <FloatingInput
                                            type="textarea"
                                            name="caseBrief"
                                            label="Your case in brief"
                                            rows={4}
                                            required
                                            value={formData.caseBrief}
                                            onChange={handleChange}
                                            icon={MessageSquare}
                                            variant="light"
                                        />
                                    </div>

                                    <div className="pt-2">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full py-3.5 px-6 rounded-xl bg-gold-600 hover:bg-gold-700 text-white font-bold text-base transition-colors flex items-center justify-center gap-2 cursor-pointer"
                                        >
                                            {isSubmitting ? (
                                                <span>Submitting...</span>
                                            ) : (
                                                <>
                                                    <span>Submit the request</span>
                                                    <Send className="w-4 h-4" />
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
