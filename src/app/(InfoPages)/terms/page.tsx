import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { LegalDocument, type LegalSection } from '@/components/web-pages/LegalDocument';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Landlord HQ',
  description:
    'Terms of use for Landlord HQ, the UK property platform for subscriptions, Open Banking rent, tenancies, contractors, and compliance records.',
};

const SECTIONS: LegalSection[] = [
  {
    id: 'about-these-terms',
    title: 'About these terms',
    paragraphs: [
      'These terms govern your use of Landlord HQ, including the website, mobile applications, and related services operated by Landlord HQ Technologies Ltd (trading as Landlord HQ).',
      'By creating an account, starting a subscription, or otherwise using the platform, you agree to these terms. If you use Landlord HQ for an organisation, you confirm you have authority to bind that organisation.',
    ],
  },
  {
    id: 'the-platform',
    title: 'The platform',
    paragraphs: [
      'Landlord HQ is a UK property operations platform. It helps landlords and agents keep building and flat registers, collect and reconcile rent via Open Banking, track tenancies, record physical keys, dispatch certified contractors, and receive reminders for certificates such as Gas Safety (CP12), EPC, and EICR.',
      'Landlord HQ is a software tool. It does not replace independent legal, tax, surveying, or gas-safety advice. You remain responsible for complying with UK housing, deposit, licensing, and health-and-safety law for each property you manage.',
    ],
  },
  {
    id: 'accounts',
    title: 'Accounts and eligibility',
    paragraphs: [
      'You must provide accurate account details and keep them up to date. You are responsible for activity under your login and for anyone you invite to a portfolio.',
      'The service is intended for landlords, managing agents, residents, and contractors using properties in the United Kingdom. You must not use the platform if doing so would breach applicable law.',
    ],
  },
  {
    id: 'subscription',
    title: 'Subscription and fees',
    paragraphs: [
      'Landlord HQ is billed as a transparent monthly subscription based on how many flats or units you manage. Published package prices on the website are a guide and may change; the price shown at checkout or in-app is the price you pay.',
      'We do not take a percentage of rent collected through the platform. You may add or remove units according to the package rules in force at the time. Fees are payable in advance unless we agree otherwise in writing.',
      'Unless a package states a fixed term, you may cancel at the end of the current billing period. Charges already paid for that period are not refunded except where required by law or where we agree in writing.',
    ],
  },
  {
    id: 'open-banking',
    title: 'Open Banking rent collection',
    paragraphs: [
      'Automated rent tracking uses FCA-regulated Open Banking and payment partners. Tenants or landlords may be asked to connect a bank account or set up a standing order or Direct Debit with those partners.',
      'Payment success depends on the tenant’s bank, the payment provider, and the instruction given. Landlord HQ shows reconciliation status against the unit; it does not guarantee that rent will always arrive on the due date.',
    ],
  },
  {
    id: 'property-data',
    title: 'Property, tenancy, and certificate data',
    paragraphs: [
      'You must only upload information you are entitled to store and share. That includes tenancy documents, identity details, key-register entries, contractor notes, and compliance certificates.',
      'Certificate tracking and reminders are provided to help you stay organised. They are not a warranty that a property is legally compliant. You must still instruct competent persons (for example Gas Safe engineers) and keep original certificates as required by law.',
    ],
  },
  {
    id: 'contractors',
    title: 'Contractors and work orders',
    paragraphs: [
      'Where you dispatch a contractor through Landlord HQ, you instruct that contractor. Quotes, photographic evidence, and invoice payouts are facilitation tools. Landlord HQ is not the employer or principal contractor unless a separate written agreement says otherwise.',
      'You are responsible for checking that trades are appropriately certified (including Gas Safe registration where required) before work begins.',
    ],
  },
  {
    id: 'acceptable-use',
    title: 'Acceptable use',
    paragraphs: [
      'You must not misuse the platform, attempt to access another customer’s data, reverse engineer the service, or use Landlord HQ to send unlawful, misleading, or harmful content.',
      'We may suspend or end access if we reasonably believe these terms, another person’s rights, or applicable law have been breached.',
    ],
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual property',
    paragraphs: [
      'Landlord HQ, including its software, design, and branding, remains the property of Landlord HQ Technologies Ltd and its licensors. You receive a limited, non-exclusive, non-transferable right to use the service while your subscription is active.',
      'You retain ownership of the content you upload. You grant us a licence to host, display, and process that content solely to provide the service.',
    ],
  },
  {
    id: 'liability',
    title: 'Liability',
    paragraphs: [
      'The platform is provided with reasonable care and skill. We do not warrant uninterrupted availability, or that rent collection, contractor attendance, or certificate reminders will prevent loss.',
      'To the fullest extent permitted by law, Landlord HQ Technologies Ltd is not liable for indirect or consequential loss, lost rent, lost profit, or loss of data, except where we cannot legally exclude liability — including death or personal injury caused by negligence, fraud, or fraudulent misrepresentation, and any other liability that UK law does not allow us to limit.',
      'Where liability can be limited, our total liability arising from these terms in any 12-month period is limited to the subscription fees you paid us in that period.',
    ],
  },
  {
    id: 'privacy',
    title: 'Privacy and data',
    paragraphs: [
      'Personal data is handled as described in our Privacy Policy. Open Banking tokens, tenancy records, and maintenance logs are processed to deliver the features you switch on.',
      'You must have a lawful basis for any resident or contractor personal data you enter into Landlord HQ.',
    ],
  },
  {
    id: 'changes-and-law',
    title: 'Changes, law, and contact',
    paragraphs: [
      'We may update these terms as the product develops. We will change the “Last updated” date on this page. If you continue to use Landlord HQ after an update, the new terms apply.',
      'These terms are governed by the laws of England and Wales. The courts of England and Wales have exclusive jurisdiction, except that consumers may also bring claims in their local UK courts where the law allows.',
      'Questions: support@landlordhq.co.uk. Landlord HQ Technologies Ltd, 12 Park Lane, Mayfair, London, UK.',
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#F8FAFC] text-[#0A192F]">
      <Navbar />
      <div className="flex-1">
        <LegalDocument
          title="Terms & Conditions"
          intro="These terms set out how landlords, agents, residents, and contractors may use Landlord HQ — including subscriptions, Open Banking rent tracking, portfolio data, and platform liability."
          sections={SECTIONS}
        />
      </div>
      <Footer />
    </main>
  );
}
