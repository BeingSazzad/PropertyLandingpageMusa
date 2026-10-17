'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Headset, Plus, X } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const HOME_FAQS: FAQItem[] = [
  {
    question: 'How does the monthly subscription work for flats & buildings?',
    answer:
      'Landlord HQ charges a simple, transparent monthly subscription based on how many flats or units you manage (e.g. £15/mo for up to 3 units, £39/mo for up to 15 units). There are no hidden fees, no percentages taken from your rent, and you can add or remove units anytime.',
  },
  {
    question: 'How are certified contractors dispatched for repairs?',
    answer:
      'When a tenant reports an issue with photos (e.g. boiler pressure drop or plumbing leak), you receive an alert. You can instantly dispatch certified local contractors (like Gas Safe registered plumbers or qualified electricians). The contractor submits an itemized quote, completes the work with photographic proof, and receives invoice payout directly.',
  },
  {
    question: 'How does automated rent tracking via Open Banking work?',
    answer:
      'Tenants connect via bank standing order or Direct Debit. Rent payments are auto-reconciled with your units in real-time. If a payment is delayed, polite automated nudges are sent to the tenant, keeping arrears close to 0%.',
  },
  {
    question: 'How are Gas Safe CP12, EPC, and EICR certificates tracked?',
    answer:
      'Landlord HQ automatically tracks the expiry dates of your Gas Safety CP12 certificates, Electrical Installation Condition Reports (EICR), and Energy Performance Certificates (EPC). You receive advance reminders at 60, 30, and 14 days before expiry, keeping your portfolio 100% legal and audit-ready.',
  },
  {
    question: 'What is the physical Key Register feature?',
    answer:
      'The Key Register lets you record all physical keys and fobs for each flat (e.g., Yale front door, mortice deadlocks, mailbox keys, building communal fobs). You always know who holds each key (tenant, managing agent, or contractor).',
  },
  {
    question: 'Can I manage HMO rooms as well as whole buildings?',
    answer:
      'Yes. Landlord HQ supports both standard self-contained flats and HMO rooms. In HMO mode, you can manage individual room tenancies, shared communal utility allocations, and building council tax bands.',
  },
];

const EXTRA_FAQS: FAQItem[] = [
  {
    question: 'How do I cancel or change my subscription?',
    answer:
      'You can add or remove units as your portfolio changes. To switch package or cancel, contact support@landlordhq.co.uk or use in-app billing. Access continues until the end of the period you have already paid for, as set out in our Terms.',
  },
  {
    question: 'Who can see tenant, rent, and certificate data?',
    answer:
      'Only people you invite to a portfolio — typically you, your managing agent, the relevant resident, and a dispatched contractor for that job. Landlord HQ staff access records only to provide support. See our Privacy Policy for how data is stored and encrypted.',
  },
  {
    question: 'Do you take a cut of rent collected?',
    answer:
      'No. Rent is collected into your account via Open Banking or Direct Debit. Landlord HQ charges a monthly subscription by unit count, not a percentage of rent.',
  },
  {
    question: 'Is Landlord HQ available on iOS and Android?',
    answer:
      'Yes. Download Landlord HQ from the App Store or Google Play, or use the web app. The same portfolio, rent ledger, key register, and certificate reminders stay in sync across devices.',
  },
];

type FAQSectionProps = {
  variant?: 'home' | 'page';
};

export const FAQSection: React.FC<FAQSectionProps> = ({ variant = 'home' }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const faqs = variant === 'page' ? [...HOME_FAQS, ...EXTRA_FAQS] : HOME_FAQS;

  if (variant === 'page') {
    return (
      <section id="faq" className="bg-[#F8FAFC] px-4 pb-20 pt-10 sm:px-6 sm:pb-24 sm:pt-14 lg:px-10">
        <div className="mx-auto max-w-[800px] space-y-12 sm:space-y-16">
          <header className="mx-auto max-w-2xl text-center">
            <h1 className="title-section mx-auto">Frequently asked questions</h1>
          </header>
          <FAQList faqs={faqs} openIdx={openIdx} setOpenIdx={setOpenIdx} />
        </div>
      </section>
    );
  }

  return (
    <section id="faq" className="bg-[#F4F7FB] py-20 px-4 sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-[1120px] items-start gap-10 lg:grid-cols-[340px_minmax(0,1fr)] lg:gap-16">
        <div>
          <span className="inline-flex rounded-full border border-[#E6EAEF] bg-white px-3.5 py-1.5 font-[family-name:var(--font-nav)] text-[14px] font-normal leading-5 text-[#494d4d]">
            Common questions
          </span>

          <h2 className="title-section mt-5 max-w-[320px]">
            Frequently asked questions
          </h2>

          <div className="mt-8 max-w-[320px] rounded-[24px] border border-white bg-white px-6 py-7 shadow-[0_12px_40px_rgba(10,25,47,0.06)]">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0084FF] text-white shadow-[0_8px_18px_rgba(0,132,255,0.35)]">
              <Headset className="h-6 w-6" strokeWidth={2.25} />
            </div>
            <p className="mt-5 font-[family-name:var(--font-display)] text-[20px] font-medium leading-6 text-[#0A192F]">
              Can&apos;t find your answer?
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center justify-center rounded-full bg-[#0A192F] px-5 py-2.5 font-[family-name:var(--font-nav)] text-[15px] font-medium leading-5 text-white shadow-[0_10px_24px_rgba(10,25,47,0.28)] transition-colors hover:bg-[#132A4C]"
            >
              Contact us
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <FAQList faqs={faqs} openIdx={openIdx} setOpenIdx={setOpenIdx} />
          <Link
            href="/faq"
            className="mt-3 inline-flex items-center gap-1.5 self-start font-[family-name:var(--font-nav)] text-[15px] font-medium leading-5 text-[#0084FF] transition-colors hover:text-[#0070DE]"
          >
            See all questions
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

function FAQList({
  faqs,
  openIdx,
  setOpenIdx,
}: {
  faqs: FAQItem[];
  openIdx: number | null;
  setOpenIdx: (idx: number | null) => void;
}) {
  return (
    <div className="flex flex-col gap-3">
      {faqs.map((faq, idx) => {
        const isOpen = openIdx === idx;

        return (
          <div
            key={faq.question}
            className="overflow-hidden rounded-[16px] border border-[#E6EAEF] bg-white"
          >
            <button
              type="button"
              onClick={() => setOpenIdx(isOpen ? null : idx)}
              className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-[18px]"
              aria-expanded={isOpen}
            >
              <span className="font-[family-name:var(--font-display)] text-[18px] font-medium leading-6 text-[#0A192F] sm:text-[20px] sm:leading-6">
                {faq.question}
              </span>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0A192F] text-white">
                {isOpen ? <X className="h-4 w-4" strokeWidth={2.25} /> : <Plus className="h-4 w-4" strokeWidth={2.25} />}
              </span>
            </button>

            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 font-[family-name:var(--font-nav)] text-[16px] font-normal leading-6 tracking-normal [word-spacing:normal] text-[#494d4d] sm:px-6 sm:pb-6">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
