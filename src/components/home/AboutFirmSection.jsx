import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Users, Scale, Clock, ArrowRight } from 'lucide-react';
import './AboutFirmSection.css';

export default function AboutFirmSection({ onOpenConsultation }) {
  return (
    <section className="about-firm-wrapper">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
              <img
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80"
                alt="Samaha Lawyers Courtroom Heritage"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C] via-transparent to-transparent"></div>
            </div>

            <div className="floating-experience-badge hidden sm:block">
              <div className="text-3xl font-serif font-black">30+ Years</div>
              <div className="text-xs font-bold uppercase tracking-wider mt-1">
                Excellence in Legal Advocacy & Commercial Law
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-400 block">
              Welcome To Our Firm
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight">
              Protecting Clients’ Rights & Ensuring Their Interests
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Samaha Lawyers & Legal Consultants offers comprehensive legal services for individuals and businesses. Our team of experienced lawyers and legal researchers provides multiple dispute resolution methods, outlining their advantages and disadvantages while presenting all available options to secure your position.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="about-firm-pill-card">
                <div className="w-8 h-8 rounded-lg bg-gold-500/20 text-gold-400 flex items-center justify-center mb-2">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white">Accredited Professional License</h4>
                <p className="text-xs text-slate-400 mt-1">
                  A licensed firm operating under the highest professional standards across local & international courts.
                </p>
              </div>

              <div className="about-firm-pill-card">
                <div className="w-8 h-8 rounded-lg bg-gold-500/20 text-gold-400 flex items-center justify-center mb-2">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white">Specialized Legal Team</h4>
                <p className="text-xs text-slate-400 mt-1">
                  Lawyers and specialists providing precise, tactical solutions for each individual case.
                </p>
              </div>

              <div className="about-firm-pill-card">
                <div className="w-8 h-8 rounded-lg bg-gold-500/20 text-gold-400 flex items-center justify-center mb-2">
                  <Scale className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white">Full Data Confidentiality</h4>
                <p className="text-xs text-slate-400 mt-1">
                  Complete protection of client information, trade secrets, and judicial case files.
                </p>
              </div>

              <div className="about-firm-pill-card">
                <div className="w-8 h-8 rounded-lg bg-gold-500/20 text-gold-400 flex items-center justify-center mb-2">
                  <Clock className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white">Continuous Case Tracking</h4>
                <p className="text-xs text-slate-400 mt-1">
                  Regular progress reports on the status, procedures, and next judicial steps of your matter.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link to="/about-us" className="inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300">
                <span>Read Full Heritage & Firm Profile</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
