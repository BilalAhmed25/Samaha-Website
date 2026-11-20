import React from 'react';
import { Phone } from 'lucide-react';
import { firmInfo } from '../../data/siteData';
import './CtaBannerSection.css';

export default function CtaBannerSection({ onOpenConsultation }) {
	return (
		<section className="cta-banner-wrapper">
			<div className="site-container">
				<div className="cta-banner-card">
					<div className="relative z-10 max-w-2xl space-y-4 text-center sm:text-left">
						<span className="text-xs font-semibold uppercase tracking-widest text-gold-400 block">
							Confidential Case Assessment
						</span>
						<h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
							Consult With Our Legal Advocates Today
						</h2>
						<p className="text-slate-300 text-sm sm:text-base leading-relaxed">
							Don't leave your freedom, assets, or commercial contracts to chance. Our international lawyers are ready to represent and defend you across all regional courts.
						</p>

						<div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
							<button onClick={onOpenConsultation} className="w-full sm:w-auto btn-gold text-sm py-3.5 px-8">
								Schedule Consultation Now
							</button>
							<a
								href={`tel:${firmInfo.headOffice.phone.replace(/\s+/g, '')}`}
								className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-base sm:text-lg font-bold text-white border border-slate-700 hover:bg-slate-800/80 transition-colors flex items-center justify-center gap-2 cursor-pointer"
							>
								<Phone className="w-5 h-5 text-gold-400" />
								<span>Call {firmInfo.headOffice.phone}</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
