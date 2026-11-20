import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowRight, ExternalLink
} from 'lucide-react';
import './HomeHeroSection.css';

export default function HomeHeroSection({ onOpenConsultation }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const timerRef = useRef(null);

    const divisions = [
        {
            id: "lawyers",
            title: "Samaha Lawyers & Legal Consultants",
            description: "We are a specialized legal firm offering the best solutions to all legal challenges with high efficiency and expertise. Our firm covers all legal domains, including commercial law, corporate law, civil and criminal law and Sharia law. We are highly regarded by our clients for our commitment to global standards and legal excellence.",
            isInternal: true,
            url: "/legal-services",
            buttonLabel: "Explore Practice Areas"
        },
        {
            id: "debt",
            title: "Samaha Debt Collection Services",
            description: "As a pioneering company in debt collection, we develop and implement the most effective strategies to recover outstanding debts. Our company provides diverse financial services to help businesses and individuals maximize their financial potential, both locally and globally.",
            isInternal: false,
            url: "http://samaha-debt.com/",
            buttonLabel: "Visit Debt Recovery Portal"
        },
        {
            id: "businessmen",
            title: "Samaha Businessmen Services",
            description: "Your main destination in Dubai for company incorporation, Samaha Businessmen Services offers integrated and effective solutions to help businesses grow and sustain success in a dynamic market. We specialize in company setup and business development, providing full support to investors and entrepreneurs in Dubai and other UAE emirates.",
            isInternal: false,
            url: "http://samaha-businessmen.com/",
            buttonLabel: "Visit Businessmen Portal"
        },
        {
            id: "immigration",
            title: "Samaha Immigration Services",
            description: "We specialize in providing outstanding immigration solutions for individuals and families seeking new opportunities abroad. Since our inception, we have been dedicated to helping our clients achieve their dreams of relocating seamlessly and legally. We believe immigration is not just about moving to a new place but about embracing a new beginning filled with possibilities.",
            isInternal: false,
            url: "https://immigration.samaha-group.com/",
            buttonLabel: "Visit Immigration Portal"
        },
        {
            id: "translation",
            title: "Samaha Legal Translation",
            description: "As one of the leading certified translation companies in Egypt and the UAE, Samaha Legal Translation offers services across various fields, including general, legal, literary, commercial, medical, scientific and project-based translations. We provide highly accurate professional translations in multiple languages within a short timeframe, adhering to internationally recognized standards.",
            isInternal: false,
            url: "http://samaha-translations.com/",
            buttonLabel: "Visit Translation Portal"
        }
    ];

    // Auto-advance slider every 6 seconds
    useEffect(() => {
        if (!isPaused) {
            timerRef.current = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % divisions.length);
            }, 6000);
        }
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [isPaused, divisions.length]);

    const goToSlide = (idx) => {
        setCurrentSlide(idx);
    };

    const activeDiv = divisions[currentSlide];

    const branchFlags = [
        { id: 'united-arab-emirates', name: 'United Arab Emirates (HQ)', src: '/flags/ae.png' },
        { id: 'egypt', name: 'Egypt', src: '/flags/eg.png' },
        { id: 'kingdom-of-saudi-arabia', name: 'Kingdom of Saudi Arabia', src: '/flags/sa.png' },
        { id: 'hashemite-kingdom-of-jordan-branches', name: 'Jordan', src: '/flags/jo.png' },
        { id: 'qatar-branches', name: 'Qatar', src: '/flags/qa.png' },
        { id: 'oman-branches', name: 'Oman', src: '/flags/om.png' },
        { id: 'united-kingdom', name: 'United Kingdom', src: '/flags/gb.png' }
    ];

    return (
        <section
            className="hero-slider-section"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Background Video (hero-banner.mp4) */}
            <div className="hero-slider-bg-container">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    poster="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1920&q=85"
                    className="hero-bg-video"
                >
                    <source src="/hero-banner.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Luxury Gradient Overlay: Deep opaque navy on the left 50%, transparent on the right */}
            <div className="hero-slider-overlay-gradient"></div>

            {/* Main Content Container (Padded for transparent fixed header) */}
            <div className="site-container relative z-10 pt-36 pb-16 sm:pt-44 sm:pb-20 lg:pt-48 lg:pb-24 min-h-[660px] lg:min-h-[720px] flex items-center">
                {/* Left Side: Exact 50% width on desktop for slider content */}
                <div className="w-full lg:w-1/2 lg:pr-8 xl:pr-12 text-left space-y-6">

                    {/* Active Slide Dynamic Content */}
                    <div className="hero-active-slide-card space-y-5" key={currentSlide}>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-white leading-[1.15] tracking-tight">
                            {activeDiv.title}
                        </h1>

                        <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-2xl">
                            {activeDiv.description}
                        </p>

                        {/* CTAs */}
                        <div className="pt-2 flex flex-wrap items-center gap-3">
                            <button
                                onClick={() => onOpenConsultation(activeDiv.title)}
                                className="btn-gold text-base py-3.5 px-7"
                            >
                                <span>Free Consultation</span>
                                <ArrowRight className="w-4 h-4" />
                            </button>

                            {activeDiv.isInternal ? (
                                <Link
                                    to={activeDiv.url}
                                    className="px-6 py-3.5 rounded-lg text-base font-semibold text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-600/80 transition-all flex items-center gap-2 backdrop-blur-sm"
                                >
                                    <span>{activeDiv.buttonLabel}</span>
                                    <ArrowRight className="w-4 h-4 text-gold-400" />
                                </Link>
                            ) : (
                                <a
                                    href={activeDiv.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3.5 rounded-lg text-base font-semibold text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-600/80 transition-all flex items-center gap-2 backdrop-blur-sm"
                                >
                                    <span>{activeDiv.buttonLabel}</span>
                                    <ExternalLink className="w-4 h-4 text-gold-400" />
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Slider Indicator Bars */}
                    <div className="hero-slider-controls pt-2 flex items-center gap-2">
                        {divisions.map((_, dotIdx) => (
                            <button
                                key={dotIdx}
                                onClick={() => goToSlide(dotIdx)}
                                className={`slider-indicator-bar ${dotIdx === currentSlide ? 'active' : ''}`}
                                aria-label={`Jump to slide ${dotIdx + 1}`}
                            />
                        ))}
                    </div>

                    {/* All Branch Flags Only */}
                    <div className="pt-4 border-t border-white/10 flex items-center gap-3 sm:gap-3.5 flex-wrap">
                        {branchFlags.map((flag) => (
                            <Link
                                key={flag.id}
                                to={`/branches#${flag.id}`}
                                title={flag.name}
                                aria-label={flag.name}
                                className="group inline-flex items-center justify-center transition-transform"
                            >
                                <img
                                    src={flag.src}
                                    alt={flag.name}
                                    className="w-10 h-7 sm:w-12 sm:h-8 object-cover rounded-[3px] border border-white/30 group-hover:border-gold-400 group-hover:scale-110 transition-all cursor-pointer"
                                />
                            </Link>
                        ))}
                    </div>

                </div>

                {/* Right Side: Completely transparent on desktop so background image shines through */}
                <div className="hidden lg:block lg:w-1/2 pointer-events-none">
                    {/* Transparent right side */}
                </div>
            </div>
        </section>
    );
}
