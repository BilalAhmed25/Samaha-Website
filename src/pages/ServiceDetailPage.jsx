import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { services } from '../data/siteData';
import ServiceDetailHero from '../components/services/ServiceDetailHero';
import ServiceDetailContent from '../components/services/ServiceDetailContent';
import ServiceSidebar from '../components/services/ServiceSidebar';

export default function ServiceDetailPage({ onOpenConsultation }) {
    const { serviceId } = useParams();
    const location = useLocation();
    const currentSlug = serviceId || location.pathname.replace(/^\//, '');
    const currentService = services.find(s => s.id === currentSlug) || services[0];

    return (
        <div className="service-detail-container pb-20">
            <ServiceDetailHero service={currentService} />
            <div className="site-container pt-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-8">
                        <ServiceDetailContent service={currentService} onOpenConsultation={onOpenConsultation} />
                    </div>
                    <div className="lg:col-span-4">
                        <ServiceSidebar currentServiceId={currentService.id} onOpenConsultation={onOpenConsultation} />
                    </div>
                </div>
            </div>
        </div>
    );
}
