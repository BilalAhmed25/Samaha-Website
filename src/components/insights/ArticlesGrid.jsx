import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { articles } from '../../data/siteData';
import './ArticlesGrid.css';

export default function ArticlesGrid({ onOpenConsultation }) {
  return (
    <section className="articles-grid-wrapper">
      <div className="site-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art, idx) => (
            <div key={idx} className="article-card-box">
              <div>
                <div className="h-52 w-full overflow-hidden bg-slate-100 relative">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 text-[11px] font-semibold text-white bg-[#0B192C]/80 px-2.5 py-1 rounded backdrop-blur-sm">
                    {art.category}
                  </span>
                </div>

                <div className="p-6 space-y-2.5">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-gold-600" />
                    <span>{art.date}</span>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-[#0B192C] leading-snug">
                    {art.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {art.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
                <button
                  onClick={onOpenConsultation}
                  className="text-xs font-bold text-gold-600 hover:text-gold-700 flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Consult An Attorney</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <span className="text-[11px] text-slate-400">4 min read</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
