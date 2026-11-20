import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    ChevronDown, Menu, X, Scale, Briefcase, ShieldAlert,
    Gavel, HeartHandshake, Globe, Building2, Coins, Anchor,
    Users, ReceiptText, Award, ArrowRight, ExternalLink, Phone
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { firmInfo, services, countries, partners } from '../../data/siteData';
import './Navbar.css';

const iconMap = {
    Scale, Briefcase, ShieldAlert, Gavel, HeartHandshake,
    Globe, Building2, Coins, Anchor, Users, ReceiptText, Award
};

export default function Navbar({ onOpenConsultation }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeMegaMenu, setActiveMegaMenu] = useState(null); // 'services' | 'branches' | 'partners' | null
    const [mobileSubmenu, setMobileSubmenu] = useState({
        partners: false,
        services: false,
        branches: false
    });
    const location = useLocation();

    const toggleMobileSubmenu = (key) => {
        setMobileSubmenu(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMobileMenuOpen(false);
        setActiveMegaMenu(null);
        setMobileSubmenu({ partners: false, services: false, branches: false });
        window.scrollTo(0, 0);
    }, [location.pathname]);

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileMenuOpen]);

    return (
        <header
            className="navbar-wrapper"
            onMouseLeave={() => setActiveMegaMenu(null)}
        >
            {/* Main Navigation Bar */}
            <div className={`navbar-main ${isScrolled || mobileMenuOpen ? 'scrolled' : 'py-3.5'}`}>
                <div className="site-container flex items-center justify-between">
                    {/* Logo: Pure white, no background, no text following it */}
                    <Link
                        to="/"
                        onMouseEnter={() => setActiveMegaMenu(null)}
                        className="inline-flex items-center group py-1"
                        aria-label="Samaha Lawyers Homepage"
                    >
                        <img
                            src="/logo.png"
                            alt="Samaha Lawyers & Legal Consultants"
                            className="h-11 sm:h-13 w-auto object-contain header-logo-white"
                        />
                    </Link>

                    {/* Right Side: Desktop Nav Links & Action Button */}
                    <div className="hidden lg:flex items-center gap-6 xl:gap-8">
                        <nav className="flex items-center gap-5 xl:gap-7 text-sm font-medium">
                            <Link
                                to="/"
                                onMouseEnter={() => setActiveMegaMenu(null)}
                                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                            >
                                Home
                            </Link>

                            <Link
                                to="/about-us"
                                onMouseEnter={() => setActiveMegaMenu(null)}
                                className={`nav-link ${location.pathname === '/about-us' ? 'active' : ''}`}
                            >
                                About Us
                            </Link>

                            {/* Partners Mega Menu Trigger */}
                            <div
                                className="relative py-1"
                                onMouseEnter={() => setActiveMegaMenu('partners')}
                            >
                                <button
                                    type="button"
                                    className={`nav-link flex items-center gap-1 cursor-pointer ${activeMegaMenu === 'partners' ? 'active' : ''}`}
                                >
                                    <span>Partners</span>
                                    <ChevronDown className={`w-4 h-4 transition-transform text-gold-400 ${activeMegaMenu === 'partners' ? 'rotate-180' : ''}`} />
                                </button>
                            </div>

                            {/* Legal Services Mega Menu Trigger */}
                            <div
                                className="relative py-1"
                                onMouseEnter={() => setActiveMegaMenu('services')}
                            >
                                <Link
                                    to="/legal-services"
                                    className={`nav-link flex items-center gap-1 ${activeMegaMenu === 'services' ||
                                        location.pathname.includes('/legal-services') ||
                                        services.some(s => location.pathname === `/${s.id}`)
                                        ? 'active'
                                        : ''
                                        }`}
                                >
                                    <span>Legal Services</span>
                                    <ChevronDown className={`w-4 h-4 transition-transform text-gold-400 ${activeMegaMenu === 'services' ? 'rotate-180' : ''}`} />
                                </Link>
                            </div>

                            {/* Global Branches Mega Menu Trigger */}
                            <div
                                className="relative py-1"
                                onMouseEnter={() => setActiveMegaMenu('branches')}
                            >
                                <Link
                                    to="/branches"
                                    className={`nav-link flex items-center gap-1 ${activeMegaMenu === 'branches' ||
                                        location.pathname === '/branches' ||
                                        countries.some(c => location.pathname === `/${c.id}`)
                                        ? 'active'
                                        : ''
                                        }`}
                                >
                                    <span>Global Branches</span>
                                    <ChevronDown className={`w-4 h-4 transition-transform text-gold-400 ${activeMegaMenu === 'branches' ? 'rotate-180' : ''}`} />
                                </Link>
                            </div>

                            <Link
                                to="/team"
                                onMouseEnter={() => setActiveMegaMenu(null)}
                                className={`nav-link ${location.pathname === '/team' ? 'active' : ''}`}
                            >
                                Our Team
                            </Link>

                            <Link
                                to="/insights"
                                onMouseEnter={() => setActiveMegaMenu(null)}
                                className={`nav-link ${location.pathname === '/insights' ? 'active' : ''}`}
                            >
                                Legal Insights
                            </Link>

                            <Link
                                to="/contact"
                                onMouseEnter={() => setActiveMegaMenu(null)}
                                className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
                            >
                                Contact
                            </Link>
                        </nav>

                        {/* Action Button */}
                        <div className="flex items-center">
                            <button
                                onClick={onOpenConsultation}
                                onMouseEnter={() => setActiveMegaMenu(null)}
                                className="btn-gold text-xs sm:text-sm whitespace-nowrap cursor-pointer"
                            >
                                <span>Book Consultation</span>
                            </button>
                        </div>
                    </div>

                    {/* Mobile & Tablet Controls (< lg) */}
                    <div className="flex items-center gap-3 lg:hidden">
                        <div className="hidden sm:flex items-center">
                            <button onClick={onOpenConsultation} className="btn-gold text-xs sm:text-sm">
                                <span>Book Consultation</span>
                            </button>
                        </div>
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-2 text-slate-300 hover:text-white rounded-lg border border-slate-700 bg-slate-800/60 cursor-pointer mobile-menu-toggle"
                            aria-label="Toggle Navigation Menu"
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mega Menu Dropdown Panel (Desktop only) */}
            {activeMegaMenu && (
                <div className="mega-menu-wrapper hidden lg:block">
                    <div className="site-container py-7">
                        {/* 1. Legal Services Mega Menu - Separated Cards Grid */}
                        {activeMegaMenu === 'services' && (
                            <div className="py-2 space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5">
                                    {services.map((svc) => {
                                        const IconComp = iconMap[svc.icon] || Scale;
                                        return (
                                            <Link
                                                key={svc.id}
                                                to={`/${svc.id}`}
                                                onClick={() => setActiveMegaMenu(null)}
                                                className="mega-menu-service-card group cursor-pointer"
                                            >
                                                <div className="mega-menu-service-icon">
                                                    <IconComp className="w-5 h-5" />
                                                </div>
                                                <div className="min-w-0 flex-1">
                                                    <div className="mega-menu-service-title">
                                                        {svc.title}
                                                    </div>
                                                    <p className="mega-menu-service-desc">
                                                        {svc.shortDesc}
                                                    </p>
                                                </div>
                                                <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-gold-400 group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                                            </Link>
                                        );
                                    })}
                                </div>

                                {/* Bottom Quick Action Bar */}
                                <div className="pt-3.5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                                    <div className="flex items-center gap-2 text-xs text-slate-300">
                                        <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block"></span>
                                        <span>Full audience rights across UAE Federal, Dubai, ADGM, DIFC & International Arbitral Tribunals.</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Link
                                            to="/legal-services"
                                            onClick={() => setActiveMegaMenu(null)}
                                            className="text-xs font-semibold text-gold-400 hover:text-white flex items-center gap-1.5 transition-colors"
                                        >
                                            <span>All Practice Areas Directory</span>
                                            <ArrowRight className="w-3.5 h-3.5" />
                                        </Link>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setActiveMegaMenu(null);
                                                onOpenConsultation();
                                            }}
                                            className="btn-gold text-xs py-1.5 px-4 font-semibold cursor-pointer"
                                        >
                                            Book Consultation
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* 2. Global Branches Mega Menu */}
                        {activeMegaMenu === 'branches' && (
                            <div className="py-2">
                                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                                    {countries.map((c) => {
                                        const flagMap = {
                                            'united-arab-emirates': '/flags/ae.png',
                                            'egypt': '/flags/eg.png',
                                            'kingdom-of-saudi-arabia': '/flags/sa.png',
                                            'hashemite-kingdom-of-jordan-branches': '/flags/jo.png',
                                            'qatar-branches': '/flags/qa.png',
                                            'oman-branches': '/flags/om.png',
                                            'united-kingdom': '/flags/gb.png'
                                        };
                                        const flagSrc = flagMap[c.id] || c.flag;
                                        return (
                                            <Link
                                                key={c.id}
                                                to={`/branches#${c.id}`}
                                                onClick={() => setActiveMegaMenu(null)}
                                                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/5 hover:border-gold-500/40 transition-all group cursor-pointer"
                                            >
                                                <img
                                                    src={flagSrc}
                                                    alt={c.name}
                                                    className="w-7 h-5 object-cover rounded-[2px] border border-white/20 shrink-0"
                                                />
                                                <span className="text-[15px] font-bold text-white group-hover:text-gold-400 transition-colors">
                                                    {c.name}
                                                </span>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        {/* 3. Partners & Group Entities Mega Menu */}
                        {activeMegaMenu === 'partners' && (
                            <div className="py-2">
                                <div className="grid grid-cols-5 gap-4">
                                    {partners.map((partner, pIdx) => {
                                        const PartnerIcon = iconMap[partner.icon] || Globe;
                                        const content = (
                                            <div className="mega-menu-item p-5 rounded-xl border border-white/10 hover:border-gold-500/40 bg-slate-900/40 hover:bg-slate-900/80 transition-all flex flex-col justify-between h-full group">
                                                <div className="space-y-3.5">
                                                    <div className="w-11 h-11 rounded-lg bg-gold-500/10 group-hover:bg-gold-500 group-hover:text-[#0B192C] text-gold-400 flex items-center justify-center transition-colors">
                                                        <PartnerIcon className="w-5.5 h-5.5" />
                                                    </div>
                                                    <div>
                                                        <div className="text-base font-bold text-white group-hover:text-gold-300 transition-colors">
                                                            {partner.name}
                                                        </div>
                                                        <p className="text-sm text-slate-300 line-clamp-3 mt-2 leading-relaxed">
                                                            {partner.desc}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="pt-4 flex items-center gap-1.5 text-sm font-bold text-gold-400 group-hover:text-gold-300">
                                                    <span>{partner.internalPath ? 'Explore Firm' : 'Visit Portal'}</span>
                                                    {partner.internalPath ? <ArrowRight className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}
                                                </div>
                                            </div>
                                        );

                                        return partner.internalPath ? (
                                            <Link
                                                key={pIdx}
                                                to={partner.internalPath}
                                                onClick={() => setActiveMegaMenu(null)}
                                                className="block h-full"
                                            >
                                                {content}
                                            </Link>
                                        ) : (
                                            <a
                                                key={pIdx}
                                                href={partner.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={() => setActiveMegaMenu(null)}
                                                className="block h-full"
                                            >
                                                {content}
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Mobile Off-Canvas Drawer (Slide from Left) */}
            {mobileMenuOpen && (
                <div
                    className="mobile-drawer-overlay lg:hidden"
                    onClick={() => setMobileMenuOpen(false)}
                    aria-hidden="true"
                />
            )}

            <aside
                className={`mobile-drawer-panel lg:hidden ${mobileMenuOpen ? 'is-open' : ''}`}
                aria-label="Mobile Navigation Menu"
            >
                {/* Top Header inside Drawer */}
                <div className="p-4 border-b border-white/10 flex items-center justify-between">
                    <Link to="/" onClick={() => setMobileMenuOpen(false)} className="inline-flex items-center">
                        <img src="/logo.png" alt="Samaha Lawyers" className="h-10 w-auto header-logo-white" />
                    </Link>
                    <button
                        onClick={() => setMobileMenuOpen(false)}
                        className="p-2 text-slate-300 hover:text-white rounded-lg bg-slate-800/80 border border-slate-700/80 cursor-pointer"
                        aria-label="Close menu"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Middle Scrollable Nav Links */}
                <div className="p-4 space-y-1.5 flex-1 overflow-y-auto">
                    <Link
                        to="/"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-2 text-sm font-medium text-slate-200 hover:text-gold-400 border-b border-white/5 transition-colors"
                    >
                        Home
                    </Link>

                    <Link
                        to="/about-us"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-2 text-sm font-medium text-slate-200 hover:text-gold-400 border-b border-white/5 transition-colors"
                    >
                        About Us
                    </Link>

                    {/* Partners & Entities Dropdown Accordion */}
                    <div className="border-b border-white/5 py-1">
                        <button
                            type="button"
                            onClick={() => toggleMobileSubmenu('partners')}
                            className="flex items-center justify-between w-full py-2 text-sm font-medium text-slate-200 hover:text-gold-400 transition-colors cursor-pointer text-left"
                        >
                            <span>Partners & Entities</span>
                            <ChevronDown className={`w-4 h-4 text-gold-400 transition-transform duration-200 ${mobileSubmenu.partners ? 'rotate-180' : ''}`} />
                        </button>
                        {mobileSubmenu.partners && (
                            <div className="pl-3 py-1 space-y-1.5 border-l-2 border-gold-500/30 my-1 ml-1 animate-fadeIn">
                                {partners.map((p, pIdx) => (
                                    p.internalPath ? (
                                        <Link
                                            key={pIdx}
                                            to={p.internalPath}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="block text-xs text-slate-300 hover:text-gold-400 py-1 transition-colors"
                                        >
                                            {p.name}
                                        </Link>
                                    ) : (
                                        <a
                                            key={pIdx}
                                            href={p.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="flex items-center justify-between text-xs text-slate-300 hover:text-gold-400 py-1 transition-colors"
                                        >
                                            <span>{p.name}</span>
                                            <ExternalLink className="w-3 h-3 text-slate-500" />
                                        </a>
                                    )
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Legal Services Dropdown Accordion */}
                    <div className="border-b border-white/5 py-1">
                        <button
                            type="button"
                            onClick={() => toggleMobileSubmenu('services')}
                            className="flex items-center justify-between w-full py-2 text-sm font-medium text-slate-200 hover:text-gold-400 transition-colors cursor-pointer text-left"
                        >
                            <span>Legal Services</span>
                            <ChevronDown className={`w-4 h-4 text-gold-400 transition-transform duration-200 ${mobileSubmenu.services ? 'rotate-180' : ''}`} />
                        </button>
                        {mobileSubmenu.services && (
                            <div className="pl-3 py-1 space-y-1.5 border-l-2 border-gold-500/30 my-1 ml-1 animate-fadeIn">
                                <Link
                                    to="/legal-services"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-xs font-semibold text-gold-400 hover:text-white py-1 flex items-center gap-1.5 transition-colors"
                                >
                                    <span>All 12 Practice Areas Overview</span>
                                    <ArrowRight className="w-3 h-3" />
                                </Link>
                                {services.map((svc) => (
                                    <Link
                                        key={svc.id}
                                        to={`/${svc.id}`}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="block text-xs text-slate-300 hover:text-gold-400 py-1 transition-colors truncate"
                                    >
                                        {svc.title}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Global Branches Dropdown Accordion */}
                    <div className="border-b border-white/5 py-1">
                        <button
                            type="button"
                            onClick={() => toggleMobileSubmenu('branches')}
                            className="flex items-center justify-between w-full py-2 text-sm font-medium text-slate-200 hover:text-gold-400 transition-colors cursor-pointer text-left"
                        >
                            <span>Global Branches</span>
                            <ChevronDown className={`w-4 h-4 text-gold-400 transition-transform duration-200 ${mobileSubmenu.branches ? 'rotate-180' : ''}`} />
                        </button>
                        {mobileSubmenu.branches && (
                            <div className="pl-3 py-1 space-y-1.5 border-l-2 border-gold-500/30 my-1 ml-1 animate-fadeIn">
                                <Link
                                    to="/branches"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-xs font-semibold text-gold-400 hover:text-white py-1 flex items-center gap-1.5 transition-colors"
                                >
                                    <span>All 11 Offices Directory & Map</span>
                                    <ArrowRight className="w-3 h-3" />
                                </Link>
                                {countries.map((c) => {
                                    const flagMap = {
                                        'united-arab-emirates': '/flags/ae.png',
                                        'egypt': '/flags/eg.png',
                                        'kingdom-of-saudi-arabia': '/flags/sa.png',
                                        'hashemite-kingdom-of-jordan-branches': '/flags/jo.png',
                                        'qatar-branches': '/flags/qa.png',
                                        'oman-branches': '/flags/om.png',
                                        'united-kingdom': '/flags/gb.png'
                                    };
                                    const flagSrc = flagMap[c.id] || c.flag;
                                    return (
                                        <Link
                                            key={c.id}
                                            to={`/branches#${c.id}`}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="flex items-center gap-2 text-xs text-slate-300 hover:text-gold-400 py-1 transition-colors"
                                        >
                                            <img src={flagSrc} alt={c.name} className="w-4 h-3 object-cover rounded-[1px] border border-white/20 shrink-0" />
                                            <span>{c.name}</span>
                                        </Link>
                                    );
                                })}
                            </div>
                        )}
                    </div>

                    <Link
                        to="/team"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-2 text-sm font-medium text-slate-200 hover:text-gold-400 border-b border-white/5 transition-colors"
                    >
                        Our Legal Team
                    </Link>

                    <Link
                        to="/insights"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-2 text-sm font-medium text-slate-200 hover:text-gold-400 border-b border-white/5 transition-colors"
                    >
                        Legal Insights & Articles
                    </Link>

                    <Link
                        to="/contact"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-2 text-sm font-medium text-slate-200 hover:text-gold-400 border-b border-white/5 transition-colors"
                    >
                        Contact Headquarters
                    </Link>
                </div>

                {/* Bottom Footer Actions inside Drawer */}
                <div className="p-4 border-t border-white/10 space-y-2 bg-[#070F1A]">
                    <button
                        onClick={() => {
                            setMobileMenuOpen(false);
                            onOpenConsultation();
                        }}
                        className="w-full btn-gold text-xs py-3 text-center cursor-pointer"
                    >
                        Book Confidential Consultation
                    </button>
                    <a
                        href={`https://wa.me/${firmInfo.headOffice.whatsapp}?text=Hello%20Samaha%20Lawyers%2C%20I%20urgently%20need%20a%20legal%20consultation.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 px-3 rounded-lg text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-700/80 hover:bg-emerald-900/60 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                        <FaWhatsapp className="w-4 h-4 text-emerald-400" />
                        <span>WhatsApp Helpline</span>
                    </a>
                    <a
                        href={`tel:${firmInfo.headOffice.phone.replace(/\s+/g, '')}`}
                        className="w-full py-2.5 rounded-lg text-xs font-semibold text-slate-200 bg-slate-800/80 border border-slate-700 flex items-center justify-center gap-2"
                    >
                        <Phone className="w-3.5 h-3.5 text-gold-400" />
                        <span>Call Now</span>
                    </a>
                </div>
            </aside>
        </header>
    );
}
