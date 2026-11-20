import React from 'react';
import { Building2, Shield, Award, Landmark } from 'lucide-react';
import './HomeClientsSection.css';

export default function HomeClientsSection() {
  const clientLogos = [
    { name: "EMIRATES COMMERCIAL BANK", icon: Landmark },
    { name: "AL-FALAH HOLDINGS", icon: Building2 },
    { name: "GULF INFRASTRUCTURE CORP", icon: Shield },
    { name: "INTERNATIONAL MARITIME GROUP", icon: Award },
    { name: "MIDDLE EAST INVESTMENT PARTNERS", icon: Building2 },
  ];

  return (
    <section className="home-clients-wrapper">
      <div className="site-container text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-gold-600 block mb-1">
          Corporate & Institutional Trust
        </span>
        <h2 className="text-3xl font-serif font-bold text-[#0B192C]">
          Our Clients
        </h2>
        <p className="text-slate-500 text-xs sm:text-sm mt-1 max-w-lg mx-auto">
          Proudly counseling leading multinational corporations, regional financial institutions, and private investors.
        </p>

        <div className="clients-logos-grid">
          {clientLogos.map((client, idx) => {
            const Icon = client.icon;
            return (
              <div key={idx} className="client-logo-pill flex items-center gap-2.5">
                <Icon className="w-5 h-5 text-gold-600" />
                <span>{client.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
