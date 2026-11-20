import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { firmInfo } from '../../data/siteData';
import './HomeFaqSection.css';

export default function HomeFaqSection({ onOpenConsultation }) {
  const [activeFaq, setActiveFaq] = useState(0);

  const exactFaqs = [
    {
      question: "What services does your law firm offer?",
      answer: "Our law firm provides legal consultations, corporate law, criminal defense, family law, arbitration, real estate disputes, tax law, labor law and more."
    },
    {
      question: "How can I schedule a consultation?",
      answer: "You can schedule a consultation by calling our office, sending an email or filling out the online form on our website."
    },
    {
      question: "Do you handle international cases?",
      answer: "Yes, we specialize in international arbitration, cross-border business disputes and legal matters involving foreign entities."
    },
    {
      question: "How are legal fees determined?",
      answer: "Legal fees depend on the complexity of the case, the required services and the time involved. We offer transparent pricing and payment plans."
    }
  ];

  return (
    <section className="home-faq-wrapper">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* FAQ Accordion */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-gold-600 block mb-2">
                Frequently Asked Questions
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#121B38] mb-3">
                Clear & Direct Answers
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Have questions? Here are clear and direct answers to our most common client inquiries.
              </p>
            </div>

            <div className="space-y-3.5">
              {exactFaqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div key={idx} className={`home-faq-item ${isOpen ? 'active' : ''}`}>
                    <button
                      type="button"
                      onClick={() => setActiveFaq(isOpen ? -1 : idx)}
                      className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 cursor-pointer transition-colors"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-3">
                        <HelpCircle className="w-5 h-5 text-gold-600 shrink-0" />
                        <span className="text-base sm:text-lg font-serif font-bold text-[#121B38] text-left">
                          {faq.question}
                        </span>
                      </div>
                      <ChevronDown 
                        className={`w-5 h-5 shrink-0 faq-chevron ${isOpen ? 'open' : ''}`} 
                      />
                    </button>

                    {/* Smooth expanding container */}
                    <div className={`faq-answer-collapse ${isOpen ? 'open' : ''}`}>
                      <div className="faq-answer-inner text-sm sm:text-base text-slate-600 leading-relaxed">
                        <div className="pt-2 border-t border-slate-200/60">
                          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Side Card: Book a Free Consultation With Us */}
          <div className="lg:col-span-5">
            <div className="faq-booking-box space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-gold-400 block">
                Direct Appointment
              </span>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                Book a Free Consultation With Us
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Speak directly with our senior attorneys and legal researchers. We offer transparent pricing, prompt scheduling, and strict attorney-client privilege.
              </p>

              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={onOpenConsultation}
                  className="flex-1 btn-gold text-xs sm:text-sm !py-2.5 !px-4 text-center justify-center font-semibold"
                >
                  Schedule Consultation
                </button>

                {/* WhatsApp button: icon only, positioned next to the Schedule button */}
                <a
                  href={`https://wa.me/${firmInfo.headOffice.whatsapp}?text=Hello%20Samaha%20Lawyers,%20I%20would%20like%20to%20book%20a%20free%20consultation.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 rounded-lg bg-[#25D366] hover:bg-[#128C7E] text-white flex items-center justify-center transition-colors"
                  aria-label="Chat on WhatsApp"
                  title="Chat on WhatsApp"
                >
                  <FaWhatsapp className="w-5 h-5 text-white" />
                </a>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-400 pt-3 border-t border-slate-800">
                <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0" />
                <span>100% confidential and non-binding preliminary assessment.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
