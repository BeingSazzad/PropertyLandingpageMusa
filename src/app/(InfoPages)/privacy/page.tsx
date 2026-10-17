import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { LegalDocument, type LegalSection } from '@/components/web-pages/LegalDocument';

export const metadata: Metadata = {
  title: 'Privacy Policy | Landlord HQ',
  description:
    'How Landlord HQ Technologies Ltd collects, uses, and protects landlord, resident, and contractor data on the UK property platform.',
};

const SECTIONS: LegalSection[] = [
  {
    id: 'who-we-are',
    title: 'Who we are',
    paragraphs: [
      'Landlord HQ is operated by Landlord HQ Technologies Ltd, trading as Landlord HQ. We provide a UK property platform for landlords, residents, and contractors to manage buildings, flats, rent, tenancies, keys, and compliance certificates.',
      'For questions about this policy, contact support@landlordhq.co.uk. Our UK operations address is 12 Park Lane, Mayfair, London, UK.',
    ],
  },
  {
    id: 'data-we-process',
    title: 'Data we process',
    paragraphs: [
      'We process the information needed to run your account and portfolio. The categories below depend on how you use Landlord HQ.',
    ],
    bullets: [
      'Account details such as name, email, phone number, and login credentials.',
      'Property records including buildings, flats, HMO rooms, tenancy dates, and key-register entries.',
      'Property documents such as EPC certificates, Gas Safety (CP12) records, EICR reports, and lease agreements.',
      'Rent and payment status collected through Open Banking partners, including verified banking tokens for standing orders or Direct Debit — not your raw bank login details.',
      'Maintenance communication, photos, contractor quotes, work-order logs, and invoice records.',
      'Support messages you send to our team, and basic device or usage data needed to keep the service secure.',
    ],
  },
  {
    id: 'how-we-use-data',
    title: 'How we use your data',
    paragraphs: [
      'We use personal data only to operate, improve, and support Landlord HQ. That includes creating accounts, tracking rent, sending certificate expiry reminders, dispatching contractors, and answering support requests.',
      'We do not sell personal data. We do not use tenant or landlord records for unrelated advertising.',
    ],
  },
  {
    id: 'open-banking',
    title: 'Open Banking and payments',
    paragraphs: [
      'Rent tracking uses FCA-regulated Open Banking partners. Those partners authenticate payment connections and return confirmation that rent has been paid or is overdue.',
      'Landlord HQ stores payment status against the relevant unit. We do not store card PANs or online-banking passwords. Direct Debit and standing-order setup remains with the regulated payment provider.',
    ],
  },
  {
    id: 'third-parties',
    title: 'Third-party processors',
    paragraphs: [
      'We share data only with processors who need it to deliver the service, under written contracts. That may include hosting, email delivery, Open Banking partners, and official UK deposit protection schemes where you choose to use those integrations.',
      'We partner exclusively with FCA-regulated Open Banking providers and recognised UK deposit protection schemes. We do not pass portfolio data to unrelated marketing lists.',
    ],
  },
  {
    id: 'security',
    title: 'Security',
    paragraphs: [
      'We maintain bank-level security protocols for landlord, resident, and contractor data. Systems use 256-bit AES encryption at rest and TLS 1.3 in transit.',
      'Access to production data is limited to authorised staff who need it to support the platform. You remain responsible for keeping your own login details confidential and for the people you invite to a portfolio.',
    ],
  },
  {
    id: 'retention',
    title: 'Retention',
    paragraphs: [
      'We keep account and portfolio records while your subscription is active and for a limited period afterwards where we must retain records for accounting, dispute handling, or legal obligations.',
      'You may request deletion of an account. Some records (for example invoicing history) may be retained where UK law requires it.',
    ],
  },
  {
    id: 'your-rights',
    title: 'Your UK GDPR rights',
    paragraphs: [
      'If we process your personal data, you may ask us to access, correct, delete, or restrict that data, or to object to certain processing. You may also request a portable copy of data you provided to us, and you may withdraw consent where processing is based on consent.',
    ],
    bullets: [
      'Email support@landlordhq.co.uk to exercise a right. We may need to verify your identity before responding.',
      'You can complain to the Information Commissioner\'s Office (ICO) if you are unhappy with how we handle your data.',
    ],
  },
  {
    id: 'cookies',
    title: 'Cookies',
    paragraphs: [
      'The website uses essential cookies and similar storage to keep the session secure and remember basic preferences. We may use limited analytics to understand how the marketing site is used.',
      'You can control cookies through your browser settings. Blocking essential cookies may prevent sign-in or checkout from working.',
    ],
  },
  {
    id: 'changes',
    title: 'Changes to this policy',
    paragraphs: [
      'We may update this policy as Landlord HQ develops. The “Last updated” date at the top of this page will change when we do. Continued use of the platform after an update means you have read the revised policy.',
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#F8FAFC] text-[#0A192F]">
      <Navbar />
      <div className="flex-1">
        <LegalDocument
          title="Privacy Policy"
          intro="This policy explains how Landlord HQ Technologies Ltd collects, uses, stores, and shares personal data when you use landlordhq.co.uk and the Landlord HQ applications."
          sections={SECTIONS}
        />
      </div>
      <Footer />
    </main>
  );
}
