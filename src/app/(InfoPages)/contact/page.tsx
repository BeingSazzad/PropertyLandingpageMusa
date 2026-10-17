import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ContactSection } from '@/components/web-pages/ContactSection';

export const metadata: Metadata = {
  title: 'Contact Us | Landlord HQ',
  description:
    'Connect with Landlord HQ for support and inquiries. Send a message about Open Banking rent, tenancies, or contractor dispatch.',
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
