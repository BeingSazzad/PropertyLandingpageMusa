import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AboutPageView } from '@/components/web-pages/AboutPageView';

export const metadata: Metadata = {
  title: 'About Us | Landlord HQ',
  description:
    'Landlord HQ is the UK property platform for Open Banking rent, tenancies, Gas Safe contractors, key registers, and certificates — in one place.',
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#F8FAFC] text-[#0A192F]">
      <Navbar />
      <div className="flex-1">
        <AboutPageView />
      </div>
      <Footer />
    </main>
  );
}
