import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FAQSection } from '@/components/web-pages/FAQSection';

export const metadata: Metadata = {
  title: 'FAQ | Landlord HQ',
  description:
    'Answers about Landlord HQ subscriptions, Open Banking rent, Gas Safe contractors, certificates, HMO rooms, and the key register.',
};

export default function FAQPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#F8FAFC] text-[#0A192F]">
      <Navbar />
      <div className="flex-1">
        <FAQSection variant="page" />
      </div>
      <Footer />
    </main>
  );
}
