import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { countries } from '../../data/siteData';
import './GlobalBranchesSection.css';

export default function GlobalBranchesSection() {
  return (
    <section className="global-branches-wrapper">
      <div className="site-container">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold-600">
            International Presence
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0B192C]">
            Strategic Offices Across 7 Countries
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            With 11+ regional offices in the UAE, Egypt, Saudi Arabia, Jordan, Qatar, Oman, and the UK, we provide localized legal acumen backed by global enforcement capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {countries.map((c) => (
            <div key={c.id} className="country-branch-card">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={c.flag}
                    alt={c.name}
                    className="w-9 h-6 object-cover rounded-[3px] border border-slate-200 shrink-0"
                  />
                  <div>
                    <h3 className="text-lg font-serif font-bold text-[#0B192C]">{c.name}</h3>
                    <span className="text-xs text-slate-400">
                      {c.branches.length} {c.branches.length === 1 ? 'Regional Branch' : 'Regional Branches'}
                    </span>
                  </div>
                </div>

                <p className="text-slate-600 text-xs leading-relaxed mb-4">{c.description}</p>

                <div className="space-y-2 border-t border-slate-100 pt-3">
                  {c.branches.map((b) => (
                    <Link
                      key={b.slug}
                      to={`/${b.slug}`}
                      className="block p-2 rounded-lg bg-slate-50 hover:bg-gold-50 border border-slate-100 text-xs transition-colors group"
                    >
                      <div className="font-semibold text-slate-800 group-hover:text-gold-700 flex items-center justify-between">
                        <span>{b.name}</span>
                        <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-gold-600" />
                      </div>
                      <div className="text-slate-500 text-[11px] truncate mt-0.5">{b.address}</div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100">
                <Link to={`/${c.id}`} className="text-xs font-semibold text-gold-600 hover:text-gold-700 flex items-center gap-1">
                  <span>View Country Overview</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
