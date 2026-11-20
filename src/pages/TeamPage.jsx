import React from 'react';
import TeamHero from '../components/team/TeamHero';
import TeamFilterGrid from '../components/team/TeamFilterGrid';
import CtaBannerSection from '../components/home/CtaBannerSection';

export default function TeamPage({ onOpenConsultation }) {
    return (
        <div className="team-page-container">
            <TeamHero />
            <TeamFilterGrid onOpenConsultation={onOpenConsultation} />
            <CtaBannerSection onOpenConsultation={onOpenConsultation} />
        </div>
    );
}
