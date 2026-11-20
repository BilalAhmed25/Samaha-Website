import React from 'react';
import AboutHero from '../components/about/AboutHero';
import HeritageSection from '../components/about/HeritageSection';
import UniquenessSection from '../components/about/UniquenessSection';
import WhyChooseSection from '../components/about/WhyChooseSection';
import LeadershipSection from '../components/home/LeadershipSection';

export default function AboutPage({ onOpenConsultation }) {
    return (
        <div className="about-page-container">
            <AboutHero />
            <HeritageSection />
            <UniquenessSection />
            <WhyChooseSection onOpenConsultation={onOpenConsultation} />
            <LeadershipSection onOpenConsultation={onOpenConsultation} />
        </div>
    );
}
