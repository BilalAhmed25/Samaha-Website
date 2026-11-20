import React from 'react';
import ServicesHero from '../components/services/ServicesHero';
import WhoIsSamahaSection from '../components/services/WhoIsSamahaSection';
import IntegratedSolutionsSection from '../components/services/IntegratedSolutionsSection';
import LegalConsultationBookingSection from '../components/services/LegalConsultationBookingSection';
import ServicesFaqSection from '../components/services/ServicesFaqSection';

export default function LegalServicesPage({ onOpenConsultation }) {
    return (
        <div className="services-page-container">
            <ServicesHero onOpenConsultation={onOpenConsultation} />
            <WhoIsSamahaSection />
            <IntegratedSolutionsSection onOpenConsultation={onOpenConsultation} />
            <LegalConsultationBookingSection />
            <ServicesFaqSection onOpenConsultation={onOpenConsultation} />
        </div>
    );
}
