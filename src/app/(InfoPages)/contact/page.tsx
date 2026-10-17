import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ContactSection } from '@/components/web-pages/ContactSection';

export const metadata: Metadata = {
  title: 'Contact Us | Landlord HQ',
  description:
    'Speak with Landlord HQ UK property specialists about Open Banking rent, tenancies, contractor dispatch, and portfolio setup.',
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#F8FAFC] text-[#0A192F]">
      <Navbar />
      <div className="flex-1">
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
