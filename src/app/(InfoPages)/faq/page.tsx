import React from 'react';
import type { Metadata } from 'next';
import { SiteChrome } from '@/components/layout/SiteChrome';
import { FAQSection } from '@/components/web-pages/FAQSection';

export const metadata: Metadata = {
  title: 'FAQ | Landlord HQ',
  description:
    'Answers about Landlord HQ subscriptions, Open Banking rent, Gas Safe contractors, certificates, HMO rooms, and the key register.',
};

export default function FAQPage() {
  return (
    <SiteChrome>
      <FAQSection variant="page" />
    </SiteChrome>
  );
}
