import React, { useState } from 'react';
import { Send, ShieldCheck, CheckCircle, User, Phone, Mail, FileText, MessageSquare } from 'lucide-react';
import FloatingInput from '../common/FloatingInput';
import './ContactForm.css';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="contact-form-card">
            <div className="mb-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-gold-600 block mb-1">
                    Get In Touch
                </span>
                <h2 className="text-2xl font-serif font-bold text-[#0B192C]">
                    Send Us A Message
                </h2>
                <p className="text-slate-500 text-xs sm:text-sm mt-1">
                    Fill out the form below and our legal team will contact you promptly.
                </p>
            </div>

            {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FloatingInput
                            name="name"
                            label="Your Name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            icon={User}
                            variant="light"
                        />
                        <FloatingInput
                            type="tel"
                            name="phone"
                            label="Phone Number"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            icon={Mail}
                            variant="light"
                        />
                        <FloatingInput
                            name="subject"
                            label="Subject / Legal Domain"
                            required
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            icon={FileText}
                            variant="light"
                        />
                    </div>

                    <div>
                        <FloatingInput
                            type="textarea"
                            name="message"
                            label="Message / Legal Inquiry"
                            rows={4}
                            required
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            icon={MessageSquare}
                            variant="light"
                        />
                    </div>

                    <div className="pt-2">
                        <button type="submit" className="w-full btn-gold text-sm py-3.5 flex items-center justify-center gap-2 cursor-pointer">
                            <Send className="w-4 h-4" />
                            <span>Send Message</span>
                        </button>
                    </div>

                    <div className="flex items-center gap-2 text-[11px] text-slate-400 pt-2">
                        <ShieldCheck className="w-4 h-4 text-gold-500 shrink-0" />
                        <span>Protected by professional attorney-client privilege.</span>
                    </div>
                </form>
            ) : (
                <div className="py-8 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                        <CheckCircle className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-[#0B192C]">Message Sent Successfully</h3>
                    <p className="text-xs text-slate-600 max-w-sm mx-auto">
                        Thank you, {formData.name}. Our legal consultants will review your inquiry and reply to {formData.email} within 2 business hours.
                    </p>
                    <button onClick={() => setSubmitted(false)} className="text-xs text-gold-600 hover:text-gold-700 font-semibold underline pt-2 cursor-pointer">
                        Send another message
                    </button>
                </div>
            )}
        </div>
    );
}
