import React from 'react';
import type { Metadata } from 'next';
import { SiteChrome } from '@/components/layout/SiteChrome';
import { ContactSection } from '@/components/web-pages/ContactSection';

export const metadata: Metadata = {
  title: 'Contact Us | Landlord HQ',
  description:
    'Talk to Landlord HQ about your portfolio. Ask about Open Banking rent, tenancies, certificates, or contractor dispatch.',
};

export default function ContactPage() {
  return (
    <SiteChrome>
      <ContactSection />
    </SiteChrome>
  );
}
