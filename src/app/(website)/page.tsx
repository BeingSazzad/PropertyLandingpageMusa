import React from 'react';
import { SiteChrome } from '@/components/layout/SiteChrome';
import { HeroSection } from '@/components/web-pages/HeroSection';
import { AboutSection } from '@/components/web-pages/AboutSection';
import { MobileFeaturesShowcase } from '@/components/web-pages/MobileFeaturesShowcase';
import { AppShowcaseSection } from '@/components/web-pages/AppShowcaseSection';
import { TestimonialSection } from '@/components/web-pages/TestimonialSection';
import { PricingSection } from '@/components/web-pages/PricingSection';
import { FAQSection } from '@/components/web-pages/FAQSection';

export default function WebsiteHomePage() {
  return (
    <SiteChrome>
      <HeroSection />
      <AboutSection />
      <MobileFeaturesShowcase />
      <AppShowcaseSection />
      <TestimonialSection />
      <PricingSection />
      <FAQSection />
    </SiteChrome>
  );
}
