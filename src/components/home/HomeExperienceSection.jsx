import React, { useRef, useEffect, useState } from 'react';
import { ShieldCheck, Scale, Users, Award, ArrowRight, Play } from 'lucide-react';
import './HomeExperienceSection.css';

export default function HomeExperienceSection({ onOpenConsultation }) {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.defaultMuted = true;
            video.muted = true;
            const playPromise = video.play();
            if (playPromise !== undefined) {
                playPromise
                    .then(() => setIsPlaying(true))
                    .catch((err) => {
                        console.warn("Autoplay was prevented:", err);
                        setIsPlaying(false);
                    });
            }
        }
    }, []);

    const togglePlay = (e) => {
        e?.stopPropagation?.();
        const video = videoRef.current;
        if (video) {
            if (video.paused) {
                video.play()
                    .then(() => setIsPlaying(true))
                    .catch((err) => console.warn("Play error:", err));
            } else {
                video.pause();
                setIsPlaying(false);
            }
        }
    };
    const stats = [
        {
            iconImg: null,
            iconComp: ShieldCheck,
            number: "1991",
            suffix: "",
            prefix: "Since ",
            title: "Trusted office Since 1991",
            desc: "Three decades of recognized legal standing"
        },
        {
            iconImg: "/icons/cases-icon.png",
            iconComp: Scale,
            number: "1,992",
            suffix: "+",
            prefix: "",
            title: "Cases Done",
            desc: "Successful litigations & dispute settlements"
        },
        {
            iconImg: "/icons/happy-clients-icon.png",
            iconComp: Users,
            number: "20,000",
            suffix: "+",
            prefix: "",
            title: "Happy Clients",
            desc: "Individuals, families & corporate enterprises"
        },
        {
            iconImg: "/icons/award-win-icon.png",
            iconComp: Award,
            number: "4,500",
            suffix: "+",
            prefix: "",
            title: "Awards Win",
            desc: "Recognitions across local & regional courts"
        }
    ];

    return (
        <section className="experience-section-wrapper">
            <div className="site-container">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* Left Side: Current heading, text, and 4 stats with icons */}
                    <div className="lg:col-span-7 space-y-8 text-left">
                        <div className="space-y-4">
                            <span className="text-sm font-bold uppercase tracking-widest text-gold-400 block">
                                Excellence & Dedication
                            </span>

                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-white leading-tight">
                                30 Years of Experience in Legal Cases Field
                            </h2>

                            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                                We provide multiple dispute resolution methods, outlining their advantages and disadvantages while presenting all available options. Our team offers tailored legal advice to each client, ensuring the most suitable solutions.
                            </p>
                        </div>

                        {/* 4 Counter Stats Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                            {stats.map((item, idx) => {
                                const IconComponent = item.iconComp;
                                return (
                                    <div key={idx} className="experience-stat-card">
                                        <div className="flex items-start gap-4">
                                            {item.iconImg ? (
                                                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center shrink-0 p-2">
                                                    <img
                                                        src={item.iconImg}
                                                        alt={item.title}
                                                        className="w-full h-full object-contain brightness-125"
                                                    />
                                                </div>
                                            ) : (
                                                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 text-gold-400 flex items-center justify-center shrink-0">
                                                    <IconComponent className="w-6 h-6" />
                                                </div>
                                            )}

                                            <div className="space-y-1">
                                                <div className="text-2xl sm:text-3xl lg:text-4xl font-serif font-extrabold text-white tracking-tight">
                                                    <span className="text-gold-400">{item.prefix}</span>
                                                    <span>{item.number}</span>
                                                    <span className="text-gold-400">{item.suffix}</span>
                                                </div>
                                                <h4 className="text-base font-bold text-slate-100">
                                                    {item.title}
                                                </h4>
                                                <p className="text-sm text-slate-300 leading-snug">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Side: video.mp4 inside a realistic mobile phone mockup frame */}
                    <div className="lg:col-span-5 flex justify-center items-center">
                        <div className="mobile-phone-frame-wrapper">
                            <div className="mobile-phone-mockup">
                                {/* Dynamic Island / Speaker & Camera */}
                                <div className="mobile-notch-island">
                                    <div className="mobile-camera-lens"></div>
                                    <div className="mobile-speaker"></div>
                                </div>

                                {/* Vertical Video Player */}
                                <div className="relative w-full h-full cursor-pointer select-none" onClick={togglePlay}>
                                    <video
                                        ref={videoRef}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        preload="auto"
                                        onPlay={() => setIsPlaying(true)}
                                        onPause={() => setIsPlaying(false)}
                                        className="mobile-screen-video"
                                    >
                                        <source src="/Video.mp4" type="video/mp4" />
                                        <source src="/video.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>

                                    {/* Play Overlay Button if paused */}
                                    {!isPlaying && (
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-10 transition-opacity">
                                            <div className="w-16 h-16 rounded-full bg-gold-500/95 text-white flex items-center justify-center transition-transform hover:scale-105">
                                                <Play className="w-7 h-7 fill-white translate-x-0.5" />
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Bottom Home Indicator Bar */}
                                <div className="mobile-home-bar"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
