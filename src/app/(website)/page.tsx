import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/components/web-pages/HeroSection';
import { AboutSection } from '@/components/web-pages/AboutSection';
import { MobileFeaturesShowcase } from '@/components/web-pages/MobileFeaturesShowcase';
import { AppShowcaseSection } from '@/components/web-pages/AppShowcaseSection';
import { TestimonialSection } from '@/components/web-pages/TestimonialSection';
import { PricingSection } from '@/components/web-pages/PricingSection';
import { FAQSection } from '@/components/web-pages/FAQSection';
import { AppDownloadCTA } from '@/components/web-pages/AppDownloadCTA';
import { Footer } from '@/components/layout/Footer';

export default function WebsiteHomePage() {
  return (
    <main className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <div className="flex-1 space-y-6 sm:space-y-10">
        <HeroSection />
        <AboutSection />
        <MobileFeaturesShowcase />
        <AppShowcaseSection />
        <TestimonialSection />
        <PricingSection />
        <FAQSection />
        <AppDownloadCTA />
      </div>
      <Footer />
    </main>
  );
}
