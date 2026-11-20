import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import ConsultationModal from './components/common/ConsultationModal';
import FloatingWhatsApp from './components/common/FloatingWhatsApp';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LegalServicesPage from './pages/LegalServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import TeamPage from './pages/TeamPage';
import BranchesOverviewPage from './pages/BranchesOverviewPage';
import ContactPage from './pages/ContactPage';
import InsightsPage from './pages/InsightsPage';

export default function App() {
    const [consultationOpen, setConsultationOpen] = useState(false);
    const [preselectedService, setPreselectedService] = useState('');

    const handleOpenConsultation = (serviceName) => {
        if (typeof serviceName === 'string') {
            setPreselectedService(serviceName);
        } else {
            setPreselectedService('');
        }
        setConsultationOpen(true);
    };

    const serviceSlugs = [
        'legal-consultations', 'business-corporate-law', 'personal-status-family-law',
        'criminal-law', 'civil-commercial-cases', 'international-arbitration',
        'real-estate-disputes', 'financial-law', 'maritime-law', 'labor-law',
        'taxes', 'trademark-laws'
    ];

    const countrySlugs = [
        'united-arab-emirates', 'egypt', 'kingdom-of-saudi-arabia',
        'hashemite-kingdom-of-jordan-branches', 'qatar-branches', 'oman-branches',
        'united-kingdom'
    ];

    const branchSlugs = [
        'dubai-branch', 'abu-dhabi-branch', 'ras-al-khaimah-branch',
        'cairo-branch', 'alexandria-branch', 'mansoura-branch',
        'jeddah-branch', 'amman-branch', 'doha-branch', 'muscat', 'london'
    ];

    return (
        <div className="min-h-screen flex flex-col bg-[#FBFBFC]">
            <Navbar onOpenConsultation={() => handleOpenConsultation()} />

            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={<HomePage onOpenConsultation={handleOpenConsultation} />} />
                    <Route path="/about-us" element={<AboutPage onOpenConsultation={handleOpenConsultation} />} />
                    <Route path="/legal-services" element={<LegalServicesPage onOpenConsultation={handleOpenConsultation} />} />
                    <Route path="/legal-service" element={<LegalServicesPage onOpenConsultation={handleOpenConsultation} />} />
                    <Route path="/team" element={<TeamPage onOpenConsultation={handleOpenConsultation} />} />
                    <Route path="/branches" element={<BranchesOverviewPage onOpenConsultation={handleOpenConsultation} />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/insights" element={<InsightsPage onOpenConsultation={handleOpenConsultation} />} />

                    {/* Exact Service Routes from original website */}
                    {serviceSlugs.map(slug => (
                        <Route
                            key={slug}
                            path={`/${slug}`}
                            element={<ServiceDetailPage onOpenConsultation={handleOpenConsultation} />}
                        />
                    ))}

                    {/* Country & Branch Routes map to central BranchesOverviewPage */}
                    {[...countrySlugs, ...branchSlugs].map(slug => (
                        <Route
                            key={slug}
                            path={`/${slug}`}
                            element={<BranchesOverviewPage onOpenConsultation={handleOpenConsultation} />}
                        />
                    ))}

                    {/* Fallback */}
                    <Route path="*" element={<HomePage onOpenConsultation={handleOpenConsultation} />} />
                </Routes>
            </main>

      <Footer onOpenConsultation={() => handleOpenConsultation()} />
      <FloatingWhatsApp />
            <ConsultationModal
                isOpen={consultationOpen}
                onClose={() => setConsultationOpen(false)}
                preselectedService={preselectedService}
            />
        </div>
    );
}
