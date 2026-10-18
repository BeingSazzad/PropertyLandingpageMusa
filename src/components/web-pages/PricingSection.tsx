'use client';

import React, { useState } from 'react';
import { useAppDispatch } from '@/redux/hooks';
import { openDownloadModal } from '@/redux/features/uiSlice';
import { Check } from 'lucide-react';
import { triggerSmartAppDownload } from '@/utils/deviceDownload';
import { Button } from '@/components/ui/Button';

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
      'Rent tracking & Open Banking',
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
      'Unlimited flats & HMO rooms',
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
    <section id="pricing" className="scroll-mt-[88px] bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
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
                    : 'text-[#5B6775] hover:text-[#0A192F]'
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
                    : 'text-[#5B6775] hover:text-[#0A192F]'
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
                className={`flex flex-col rounded-[24px] border bg-white p-7 sm:p-8 ${
                  tier.isPopular
                    ? 'border-[#0084FF]/30 shadow-[0_20px_50px_rgba(10,25,47,0.08)]'
                    : 'border-[#E6EAEF]'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-[family-name:var(--font-nav)] text-[16px] font-medium leading-5 text-[#0A192F]">
                    {tier.name}
                  </h3>
                  {tier.badge ? (
                    <span className="rounded-full bg-[#E8F3FF] px-3 py-1 font-[family-name:var(--font-nav)] text-[13px] font-medium leading-4 text-[#0084FF]">
                      {tier.badge}
                    </span>
                  ) : null}
                </div>

                <div className="mt-5 flex items-end gap-1">
                  <span className="font-[family-name:var(--font-display)] text-[40px] font-semibold leading-none tracking-tight text-[#0A192F]">
                    £{price}
                  </span>
                  <span className="pb-1 font-[family-name:var(--font-nav)] text-[16px] leading-5 text-[#5B6775]">
                    /month
                  </span>
                </div>

                <p className="mt-5 font-[family-name:var(--font-nav)] text-[16px] font-normal leading-6 text-[#3F4B58]">
                  {tier.description}
                </p>

                <div className="mt-6 border-t border-[#E6EAEF] pt-6">
                  <p className="font-[family-name:var(--font-nav)] text-[16px] font-medium leading-5 text-[#0A192F]">
                    Features included:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#0084FF] text-[#0084FF]">
                          <Check className="h-3 w-3 stroke-[2.5]" />
                        </span>
                        <span className="whitespace-nowrap font-[family-name:var(--font-nav)] text-[16px] font-normal leading-6 text-[#3F4B58]">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-8">
                  <Button
                    type="button"
                    className="w-full justify-center"
                    onClick={() => triggerSmartAppDownload(() => dispatch(openDownloadModal()))}
                  >
                    Get started
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
