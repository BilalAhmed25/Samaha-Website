import React from 'react';
import BranchesHero from '../components/branches/BranchesHero';
import CountriesList from '../components/branches/CountriesList';
import CtaBannerSection from '../components/home/CtaBannerSection';

export default function BranchesOverviewPage({ onOpenConsultation }) {
    return (
        <div className="branches-overview-container">
            <BranchesHero />
            <CountriesList onOpenConsultation={onOpenConsultation} />
            <CtaBannerSection onOpenConsultation={onOpenConsultation} />
        </div>
    );
}
