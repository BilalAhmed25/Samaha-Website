import React from 'react';
import InsightsHero from '../components/insights/InsightsHero';
import ArticlesGrid from '../components/insights/ArticlesGrid';
import CtaBannerSection from '../components/home/CtaBannerSection';

export default function InsightsPage({ onOpenConsultation }) {
    return (
        <div className="insights-page-container">
            <InsightsHero />
            <ArticlesGrid onOpenConsultation={onOpenConsultation} />
            <CtaBannerSection onOpenConsultation={onOpenConsultation} />
        </div>
    );
}
