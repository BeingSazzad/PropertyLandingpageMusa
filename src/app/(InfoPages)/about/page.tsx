import React from 'react';
import type { Metadata } from 'next';
import { SiteChrome } from '@/components/layout/SiteChrome';
import { AboutPageView } from '@/components/web-pages/AboutPageView';

export const metadata: Metadata = {
  title: 'About Us | Landlord HQ',
  description:
    'Landlord HQ is the UK property platform for Open Banking rent, tenancies, Gas Safe contractors, key registers, and certificates — in one place.',
};

export default function AboutPage() {
  return (
    <SiteChrome>
      <AboutPageView />
    </SiteChrome>
  );
}
