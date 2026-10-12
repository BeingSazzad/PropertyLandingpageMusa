'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck } from 'lucide-react';
import { Badge } from '../ui/Badge';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: 'How does the subscription fee work for managing flats and buildings?',
    answer:
      'Landlord HQ charges a simple, transparent monthly subscription based on how many flats or units you manage (e.g. £15/mo for up to 3 units, £39/mo for up to 15 units). There are no hidden fees, no percentages taken from your rent, and you can add or remove units anytime.',
  },
  {
    question: 'How do certified contractors handle maintenance in my flats?',
    answer:
      'When a tenant reports an issue with photos (e.g. boiler pressure drop or plumbing leak), you receive an alert. You can instantly dispatch certified local contractors (like Gas Safe registered plumbers or qualified electricians). The contractor submits an itemized quote, completes the work with photographic proof, and receives invoice payout directly.',
  },
  {
    question: 'How does automated rent tracking and collection work?',
    answer:
      'Tenants can connect via Direct Debit or bank standing order. Rent payments are auto-reconciled with your units in real-time. If a payment is delayed, polite automated nudges are sent to the tenant, keeping arrears close to 0%.',
  },
  {
    question: 'How are UK safety certificates (Gas Safe CP12, EPC, EICR) tracked?',
    answer:
      'Landlord HQ automatically tracks the expiry dates of your Gas Safety CP12 certificates, Electrical Installation Condition Reports (EICR), and Energy Performance Certificates (EPC). You receive advance reminders at 60, 30, and 14 days before expiry, keeping your portfolio 100% legal and audit-ready.',
  },
  {
    question: 'What is the Key Register feature?',
    answer:
      'The Key Register lets you record all physical keys and fobs for each flat (e.g., Yale front door, mortice deadlocks, mailbox keys, building communal fobs). You always know who holds each key (tenant, managing agent, or contractor).',
  },
  {
    question: 'Can I manage HMOs (Houses in Multiple Occupation) as well as whole buildings?',
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
      <div className="max-w-[1000px] mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <Badge variant="blue">Frequently Asked Questions</Badge>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0A192F] font-[family-name:var(--font-heading)] leading-tight">
            Frequently Asked Questions <br className="hidden sm:inline" />
            <span className="text-[#0084FF]">About Landlord HQ</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            Got questions about onboarding your flats, rent collection, or contractor dispatch? Here are the answers.
          </p>
        </div>

        {/* 2-Column Accordion Grid (Direct Reference Alignment) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/90 bg-white overflow-hidden transition-all duration-200 shadow-xs hover:border-slate-300"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-3 cursor-pointer hover:bg-slate-50/50 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-[#0A192F] font-[family-name:var(--font-heading)] leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-[#0084FF] text-white rotate-180 shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
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
