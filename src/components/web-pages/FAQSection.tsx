'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { SectionHeader } from '../ui/SectionHeader';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
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

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-10">
      <div className="max-w-[880px] mx-auto space-y-10 sm:space-y-12">
        
        {/* Design System Header */}
        <SectionHeader
          badge="Frequently Asked Questions"
          title={
            <>
              Everything You Need to Know <br className="hidden sm:inline" />
              <span className="text-[#0084FF] whitespace-nowrap">About Landlord HQ</span>
            </>
          }
          subtitle="Got questions about onboarding your flats, rent collection, or contractor dispatch? Here are the answers."
          align="center"
        />

        {/* 1-Column Full-Width Accordion List (Each FAQ Box in 1 Clean Line) */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-sky-300 shadow-md shadow-sky-500/5'
                    : 'bg-white hover:bg-slate-50/70 border-slate-200/80 shadow-xs'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-[#0A192F] font-[family-name:var(--font-heading)] leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-[#0084FF] text-white rotate-180 shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
