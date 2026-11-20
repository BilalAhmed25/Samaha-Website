import React from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { countries, allBranches } from '../data/siteData';
import BranchDetailContent from '../components/branches/BranchDetailContent';

export default function BranchDetailPage({ onOpenConsultation }) {
    const { branchSlug } = useParams();
    const location = useLocation();
    const activeSlug = branchSlug || location.pathname.replace(/^\//, '');

    const currentCountry = countries.find(c => c.id === activeSlug);
    const currentBranch = allBranches.find(b => b.slug === activeSlug);

    if (currentCountry) {
        return (
            <div className="country-page-container pb-20">
                <section className="page-hero-texture text-white pt-36 sm:pt-40 lg:pt-44 pb-16 sm:pb-20">
                    <div className="site-container">
                        <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
                            <Link to="/" className="hover:text-gold-400">Home</Link>
                            <span>/</span>
                            <Link to="/branches" className="hover:text-gold-400">Branches</Link>
                            <span>/</span>
                            <span className="text-gold-400">{currentCountry.name}</span>
                        </div>

                        <div className="flex items-center gap-4">
                            <img
                                src={currentCountry.flag}
                                alt={currentCountry.name}
                                className="w-14 h-9 object-cover rounded-md border border-white/25 shrink-0"
                            />
                            <div>
                                <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white">
                                    {currentCountry.name} Regional Practice
                                </h1>
                                <p className="text-slate-300 text-sm mt-1 max-w-2xl">
                                    {currentCountry.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="site-container pt-12">
                    <h2 className="text-2xl font-serif font-bold text-[#0B192C] mb-8">
                        Offices in {currentCountry.name} ({currentCountry.branches.length})
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {currentCountry.branches.map((b) => (
                            <div key={b.slug} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-bold text-gold-600 uppercase">{b.type}</span>
                                        <span className="text-xs bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-medium">{b.city}</span>
                                    </div>
                                    <h3 className="text-xl font-serif font-bold text-[#0B192C]">{b.name}</h3>
                                    <div className="space-y-2 text-xs text-slate-600">
                                        <div>{b.address}</div>
                                        <div className="text-base font-bold text-[#121B38] pt-1">{b.phone}</div>
                                        <div>{b.email}</div>
                                    </div>
                                </div>

                                <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
                                    <Link to={`/${b.slug}`} className="text-xs font-bold text-gold-600 hover:text-gold-700 flex items-center gap-1">
                                        <span>Visit Branch Page</span>
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </Link>
                                    <button onClick={onOpenConsultation} className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-[#070F1A] bg-gold-400 hover:bg-gold-300">
                                        Consult
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        );
    }

    const branch = currentBranch || allBranches[0];

    return (
        <div className="branch-detail-page-container">
            <section className="page-hero-texture text-white pt-36 sm:pt-40 lg:pt-44 pb-16 sm:pb-20">
                <div className="site-container">
                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
                        <Link to="/" className="hover:text-gold-400">Home</Link>
                        <span>/</span>
                        <Link to="/branches" className="hover:text-gold-400">Branches</Link>
                        <span>/</span>
                        <span className="text-gold-400">{branch.name}</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <img
                            src={branch.flag}
                            alt={branch.country}
                            className="w-12 h-8 object-cover rounded-md border border-white/25 shrink-0"
                        />
                        <div>
                            <span className="text-xs font-semibold uppercase tracking-wider text-gold-400 block">
                                {branch.country} • {branch.type}
                            </span>
                            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white">
                                {branch.name}
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            <BranchDetailContent branch={branch} onOpenConsultation={onOpenConsultation} />
        </div>
    );
}
