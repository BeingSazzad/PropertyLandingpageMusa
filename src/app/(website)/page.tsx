import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/components/web-pages/HeroSection';
import { ProcessSection } from '@/components/web-pages/ProcessSection';
import { MobileFeaturesShowcase } from '@/components/web-pages/MobileFeaturesShowcase';
import { TestimonialSection } from '@/components/web-pages/TestimonialSection';
import { PricingSection } from '@/components/web-pages/PricingSection';
import { FAQSection } from '@/components/web-pages/FAQSection';
import { ContactSection } from '@/components/web-pages/ContactSection';
import { AppDownloadCTA } from '@/components/web-pages/AppDownloadCTA';
import { Footer } from '@/components/layout/Footer';

export default function WebsiteHomePage() {
  return (
    <main className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <div className="flex-1 space-y-6 sm:space-y-10">
        <HeroSection />
        <ProcessSection />
        <MobileFeaturesShowcase />
        <TestimonialSection />
        <PricingSection />
        <FAQSection />
        <ContactSection />
        <AppDownloadCTA />
      </div>
      <Footer />
    </main>
  );
}
