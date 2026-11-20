import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../../data/siteData';
import './HomeTestimonialsSection.css';

export default function HomeTestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(3);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setVisibleCount(3);
            } else if (window.innerWidth >= 640) {
                setVisibleCount(2);
            } else {
                setVisibleCount(1);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const maxIndex = Math.max(0, testimonials.length - visibleCount);

    const handleNext = () => {
        setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
    };

    const handlePrev = () => {
        setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
    };

    // Auto-advance 1 by 1 every 5 seconds (pauses on hover)
    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(() => {
            setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, [maxIndex, isPaused]);

    // Slide percentage width for each item
    const itemWidthPercent = 100 / visibleCount;
    // Track translation: moves 1 card at a time (itemWidthPercent)
    const translatePercent = currentIndex * itemWidthPercent;

    return (
        <section className="home-testimonials-wrapper">
            <div className="site-container">
                {/* Header with Title & Navigation Controls */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
                    <div className="space-y-2">
                        <span className="text-xs font-semibold uppercase tracking-widest text-gold-400 block">
                            Verified Client Praise
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
                            Trusted by Executives & Corporations
                        </h2>
                    </div>

                    {/* Navigation Arrows */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={handlePrev}
                            className="testimonial-nav-btn"
                            aria-label="Previous Testimonial"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="testimonial-nav-btn"
                            aria-label="Next Testimonial"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Slider Viewport */}
                <div
                    className="testimonials-slider-viewport"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div
                        className="testimonials-slider-track"
                        style={{
                            transform: `translateX(-${translatePercent}%)`
                        }}
                    >
                        {testimonials.map((t, idx) => (
                            <div
                                key={idx}
                                className="testimonials-slide-item shrink-0"
                                style={{ width: `${itemWidthPercent}%` }}
                            >
                                <div className="home-testimonial-slide-card">
                                    <div className="space-y-4">
                                        {/* Stars & Quote Icon */}
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-1 text-gold-400">
                                                {[...Array(t.rating || 5)].map((_, i) => (
                                                    <Star key={i} className="w-4 h-4 fill-current" />
                                                ))}
                                            </div>
                                            <Quote className="w-7 h-7 text-gold-500/20" />
                                        </div>

                                        {/* Quote Text */}
                                        <p className="text-slate-200 text-sm sm:text-base font-serif italic leading-relaxed">
                                            "{t.quote}"
                                        </p>
                                    </div>

                                    {/* Author & Credential */}
                                    <div className="pt-5 mt-6 border-t border-white/10">
                                        <h4 className="text-base font-serif font-bold text-white">
                                            {t.author}
                                        </h4>
                                        <div className="text-xs text-gold-400 font-medium mt-0.5">
                                            {t.role}
                                        </div>
                                        <div className="text-[11px] text-slate-400 mt-0.5">
                                            {t.location}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dot Pagination (Indicator of active slide) */}
                <div className="flex items-center justify-center gap-2 mt-8">
                    {[...Array(maxIndex + 1)].map((_, dotIdx) => (
                        <button
                            key={dotIdx}
                            onClick={() => setCurrentIndex(dotIdx)}
                            className={`testimonial-dot ${currentIndex === dotIdx ? 'active' : ''}`}
                            aria-label={`Go to slide ${dotIdx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
