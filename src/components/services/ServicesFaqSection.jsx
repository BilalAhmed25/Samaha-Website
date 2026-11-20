import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { firmInfo } from '../../data/siteData';
import './ServicesFaqSection.css';

export default function ServicesFaqSection({ onOpenConsultation }) {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            q: "How can I book a legal consultation?",
            a: "You can book a consultation by filling out the form on this page or by contacting us directly via WhatsApp at: +971 54 444 7773."
        },
        {
            q: "What is the cost of a legal consultation?",
            a: "The cost varies depending on the type and complexity of the case. Please contact us to receive a customized quote."
        }
    ];

    const toggleFaq = (idx) => {
        setOpenIndex(openIndex === idx ? -1 : idx);
    };

    return (
        <section className="services-faq-wrapper">
            <div className="site-container max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <span className="text-xs font-bold uppercase tracking-widest text-gold-600 block mb-2">
                        Frequently Asked Questions
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#121B38] mb-3">
                        FAQ
                    </h2>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        Have Questions? Clear and direct answers to our most common inquiries.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => {
                        const isOpen = openIndex === idx;
                        return (
                            <div key={idx} className="services-faq-item">
                                <button
                                    onClick={() => toggleFaq(idx)}
                                    className="services-faq-trigger"
                                    aria-expanded={isOpen}
                                >
                                    <div className="flex items-center gap-3">
                                        <HelpCircle className="w-5 h-5 text-gold-600 shrink-0" />
                                        <span className="text-base sm:text-lg font-serif font-bold text-[#121B38] text-left">
                                            {faq.q}
                                        </span>
                                    </div>
                                    <ChevronDown
                                        className={`w-5 h-5 text-slate-500 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-gold-600' : ''}`}
                                    />
                                </button>

                                {isOpen && (
                                    <div className="services-faq-content">
                                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                                            {faq.a}
                                        </p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Bottom Action Prompt with small Schedule button and WhatsApp icon */}
                <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                        <h4 className="text-base font-serif font-bold text-[#121B38]">
                            Have specific questions about your case?
                        </h4>
                        <p className="text-slate-600 text-sm mt-0.5">
                            Our legal advocates are ready to answer your inquiries directly.
                        </p>
                    </div>

                    <div className="flex items-center gap-2.5 shrink-0">
                        <button
                            onClick={() => onOpenConsultation && onOpenConsultation()}
                            className="px-4 py-2 bg-[#121B38] hover:bg-[#233368] text-white rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                        >
                            Schedule Consultation
                        </button>
                        <a
                            href={`https://wa.me/${firmInfo.headOffice.whatsapp}?text=${encodeURIComponent("Hello Samaha Lawyers, I have a question regarding legal services.")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp"
                            className="w-9 h-9 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center transition-colors cursor-pointer"
                        >
                            <FaWhatsapp className="w-4 h-4 text-white" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
