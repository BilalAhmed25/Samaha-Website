import React from 'react';
import { allBranches } from '../../data/siteData';
import './BranchDirectoryTable.css';

export default function BranchDirectoryTable() {
  return (
    <section className="site-container pt-8 pb-16">
      <div className="branch-directory-wrapper space-y-6">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-gold-600 block mb-1">
            Global Branch Directory
          </span>
          <h3 className="text-xl font-serif font-bold text-[#0B192C]">
            Direct Contact Across All 11 Offices
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {allBranches.map((b) => (
            <div key={b.slug} className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5 text-xs shadow-sm">
              <div className="flex items-center justify-between font-bold text-slate-900">
                <span className="flex items-center gap-2">
                  <img
                    src={b.flag}
                    alt={b.country}
                    className="w-5 h-3.5 object-cover rounded-[2px] border border-slate-200 shrink-0"
                  />
                  <span>{b.name}</span>
                </span>
                <span className="text-[10px] text-gold-700 bg-gold-50 px-2 py-0.5 rounded border border-gold-200">
                  {b.city}
                </span>
              </div>
              <div className="text-slate-500 truncate">{b.address}</div>
              <div className="font-semibold text-slate-800 pt-1">{b.phone}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
