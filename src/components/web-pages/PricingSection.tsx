'use client';

import React, { useState } from 'react';
import { useAppDispatch } from '@/redux/hooks';
import { openDownloadModal } from '@/redux/features/uiSlice';
import { Check } from 'lucide-react';
import { triggerSmartAppDownload } from '@/utils/deviceDownload';

interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  priceMonthly: number;
  priceAnnual: number;
  description: string;
  features: string[];
}

const PRICING_TIERS: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    priceMonthly: 15,
    priceAnnual: 12,
    description: 'For individual landlords managing 1 to 3 rental properties.',
    features: [
      '1 to 3 flat & tenancy profiles',
      'Automated rent tracking & Open Banking',
      'DPS deposit & lease agreement log',
      'Certified repair ticket dispatch',
    ],
  },
  {
    id: 'portfolio',
    name: 'Portfolio',
    badge: 'Popular',
    isPopular: true,
    priceMonthly: 39,
    priceAnnual: 31,
    description: 'Advanced tools for landlords with multi-unit buildings and growing portfolios.',
    features: [
      'Everything in Starter, up to 15 flats',
      'Gas Safe CP12 & EPC expiry alerts',
      'Full key & alarm code register',
      'Automated rent arrears reminders',
    ],
  },
  {
    id: 'professional',
    name: 'Enterprise',
    priceMonthly: 79,
    priceAnnual: 63,
    description: 'Complete control for large portfolios, HMO properties, and letting agents.',
    features: [
      'Unlimited buildings, flats & HMO rooms',
      'Room tenancies & utility cost splits',
      'Portfolio cashflow & yield reports',
      'Priority certified trade dispatch',
    ],
  },
];

export const PricingSection: React.FC = () => {
  const dispatch = useAppDispatch();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  return (
    <section id="pricing" className="bg-[#F8FAFC] px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1120px] space-y-12">
        <header className="mx-auto max-w-2xl space-y-4 text-center">
          <h2 className="title-section mx-auto">
            Simple, transparent pricing
            <br />
            <span className="text-[#0084FF]">for every landlord</span>
          </h2>
          <p className="text-subtitle mx-auto max-w-lg">
            No cut of your rent. Choose a plan by how many flats you manage.
          </p>

          <div className="flex justify-center pt-2">
            <div className="inline-flex items-center rounded-full border border-[#E6EAEF] bg-white p-1">
              <button
                type="button"
                onClick={() => setBillingCycle('monthly')}
                className={`rounded-full px-4 py-2 font-[family-name:var(--font-nav)] text-[16px] font-medium leading-5 transition-colors ${
                  billingCycle === 'monthly'
                    ? 'bg-[#0084FF] text-white'
                    : 'text-[#494d4d] hover:text-[#131515]'
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setBillingCycle('annual')}
                className={`rounded-full px-4 py-2 font-[family-name:var(--font-nav)] text-[16px] font-medium leading-5 transition-colors ${
                  billingCycle === 'annual'
                    ? 'bg-[#0084FF] text-white'
                    : 'text-[#494d4d] hover:text-[#131515]'
                }`}
              >
                Annual · Save 20%
              </button>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-3">
          {PRICING_TIERS.map((tier) => {
            const price = billingCycle === 'annual' ? tier.priceAnnual : tier.priceMonthly;

            return (
              <div
                key={tier.id}
                className={`flex flex-col rounded-[24px] border border-[#E6EAEF] bg-white p-7 sm:p-8 ${
                  tier.isPopular ? 'shadow-[0_20px_50px_rgba(10,25,47,0.08)]' : ''
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-[family-name:var(--font-nav)] text-[16px] font-medium leading-5 text-[#131515]">
                    {tier.name}
                  </h3>
                  {tier.badge ? (
                    <span className="rounded-full bg-[#E8F3FF] px-3 py-1 font-[family-name:var(--font-nav)] text-[13px] font-medium leading-4 text-[#0084FF]">
                      {tier.badge}
                    </span>
                  ) : null}
                </div>

                <div className="mt-5 flex items-end gap-1">
                  <span className="font-[family-name:var(--font-display)] text-[40px] font-semibold leading-none tracking-tight text-[#131515]">
                    £{price}
                  </span>
                  <span className="pb-1 font-[family-name:var(--font-nav)] text-[16px] leading-5 text-[#494d4d]">
                    /month
                  </span>
                </div>

                <p className="mt-5 font-[family-name:var(--font-nav)] text-[16px] font-normal leading-6 text-[#494d4d]">
                  {tier.description}
                </p>

                <div className="mt-6 border-t border-[#E6EAEF] pt-6">
                  <p className="font-[family-name:var(--font-nav)] text-[16px] font-medium leading-5 text-[#131515]">
                    Features included:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#0084FF] text-[#0084FF]">
                          <Check className="h-3 w-3 stroke-[2.5]" />
                        </span>
                        <span className="font-[family-name:var(--font-nav)] text-[16px] font-normal leading-6 text-[#494d4d]">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => triggerSmartAppDownload(() => dispatch(openDownloadModal()))}
                  className={`mt-8 w-full rounded-full py-3.5 font-[family-name:var(--font-nav)] text-[16px] font-medium leading-5 transition-colors ${
                    tier.isPopular
                      ? 'bg-[#0084FF] text-white hover:bg-[#0070DE]'
                      : 'border border-[#E6EAEF] bg-white text-[#131515] hover:border-[#0084FF]/40 hover:text-[#0084FF]'
                  }`}
                >
                  Get started
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
