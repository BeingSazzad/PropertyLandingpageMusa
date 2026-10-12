import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/components/web-pages/HeroSection';
import { ProcessSection } from '@/components/web-pages/ProcessSection';
import { DarkShowcaseSection } from '@/components/web-pages/DarkShowcaseSection';
import { AppDownloadCTA } from '@/components/web-pages/AppDownloadCTA';
import { Footer } from '@/components/layout/Footer';

export default function WebsiteHomePage() {
  return (
    <main className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <div className="flex-1 space-y-6 sm:space-y-10">
        <HeroSection />
        <ProcessSection />
        <DarkShowcaseSection />
        <AppDownloadCTA />
      </div>
      <Footer />
    </main>
  );
}
