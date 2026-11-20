import React from 'react';

// Sections for Home Page
import HomeHeroSection from '../components/home/HomeHeroSection';
import HomeKeyHighlights from '../components/home/HomeKeyHighlights';
import HomeWelcomeSection from '../components/home/HomeWelcomeSection';
import HomeExperienceSection from '../components/home/HomeExperienceSection';
import HomeServicesSection from '../components/home/HomeServicesSection';
import HomeFaqSection from '../components/home/HomeFaqSection';
import HomeTeamSection from '../components/home/HomeTeamSection';
import HomeTestimonialsSection from '../components/home/HomeTestimonialsSection';
import HomeContactBannerSection from '../components/home/HomeContactBannerSection';

export default function HomePage({ onOpenConsultation }) {
    return (
        <div className="homepage-exact-wrapper">
            {/* 1. Samaha Group Hero & 5 Conglomerate Divisions */}
            <HomeHeroSection onOpenConsultation={onOpenConsultation} />

            {/* 2. Key Highlights (Legal Consultations & Business & Corporate Law) */}
            <HomeKeyHighlights />

            {/* 3. Welcome To Our Company (4 Pillars & Get a Quote / Read More) */}
            <HomeWelcomeSection onOpenConsultation={onOpenConsultation} />

            {/* 4. 30 Years of Experience in Legal Cases Field */}
            <HomeExperienceSection onOpenConsultation={onOpenConsultation} />

            {/* 5. Our Services Legal (All Practice Areas) */}
            <HomeServicesSection onOpenConsultation={onOpenConsultation} />

            {/* 6. Frequently Asked Questions & Book a Free Consultation */}
            <HomeFaqSection onOpenConsultation={onOpenConsultation} />

            {/* 7. Our Team (Chairman Gomaa Samaha, CEO Shaaban Samaha, Partners) */}
            <HomeTeamSection onOpenConsultation={onOpenConsultation} />

            {/* 8. Testimonials (Mohamed A. Client Review) */}
            <HomeTestimonialsSection />

            {/* 9. Speak With Our Expert Lawyers Today! */}
            <HomeContactBannerSection onOpenConsultation={onOpenConsultation} />
        </div>
    );
}
