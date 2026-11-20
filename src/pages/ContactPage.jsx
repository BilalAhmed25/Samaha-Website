import React from 'react';
import ContactHero from '../components/contact/ContactHero';
import ContactInfoCards from '../components/contact/ContactInfoCards';
import ContactForm from '../components/contact/ContactForm';

export default function ContactPage() {
    return (
        <div className="contact-page-container">
            <ContactHero />
            <div className="site-container py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-5">
                        <ContactInfoCards />
                    </div>
                    <div className="lg:col-span-7">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
