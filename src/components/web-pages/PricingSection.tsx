'use client';

import React, { useState } from 'react';
import { useAppDispatch } from '@/redux/hooks';
import { openDownloadModal } from '@/redux/features/uiSlice';
import { Check, ShieldCheck, ArrowRight } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { SectionHeader } from '../ui/SectionHeader';
import { triggerSmartAppDownload } from '@/utils/deviceDownload';

interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  priceMonthly: number;
  priceAnnual: number;
  flatsLimit: string;
  description: string;
  features: string[];
}

const PRICING_TIERS: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter Landlord',
    priceMonthly: 15,
    priceAnnual: 12,
    flatsLimit: 'Up to 3 Flats',
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
    name: 'Portfolio Landlord',
    badge: 'Most Popular',
    isPopular: true,
    priceMonthly: 39,
    priceAnnual: 31,
    flatsLimit: 'Up to 15 Flats',
    description: 'For active property investors with multi-unit buildings.',
    features: [
      'Everything in Starter, up to 15 flats',
      'Gas Safe CP12 & EPC expiry alerts',
      'Full key & alarm code register',
      'Automated rent arrears reminders',
    ],
  },
  {
    id: 'professional',
    name: 'Multi-Building / HMO',
    priceMonthly: 79,
    priceAnnual: 63,
    flatsLimit: 'Unlimited Flats',
    description: 'For large portfolios, HMO properties, and letting agents.',
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
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-10 bg-[#F8FAFC]">
      <div className="max-w-[1360px] mx-auto space-y-12">
        
        {/* Design System Header */}
        <div className="space-y-4">
          <SectionHeader
            badge="Simple Subscriptions"
            title={
              <>
                Simple, Transparent Pricing <br className="hidden sm:inline" />
                <span className="text-[#0084FF]">for Every Landlord</span>
              </>
            }
            subtitle="No percentages taken from your rent. Pick a plan suited to your unit count."
            align="center"
          />

          {/* Billing Switcher */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 bg-white p-1 rounded-full border border-slate-200 shadow-xs">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                billingCycle === 'monthly'
                  ? 'bg-[#0084FF] text-white shadow-xs'
                  : 'text-slate-600 hover:text-black'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                billingCycle === 'annual'
                  ? 'bg-[#0084FF] text-white shadow-xs'
                  : 'text-slate-600 hover:text-black'
              }`}
            >
              <span>Annual Billing</span>
              <span className="text-[10px] bg-sky-100 text-sky-800 px-1.5 py-0.5 rounded-full font-bold">
                Save 20%
              </span>
            </button>
          </div>
        </div>
      </div>

        {/* Trimmed, Clutter-Free Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {PRICING_TIERS.map((tier) => {
            const price = billingCycle === 'annual' ? tier.priceAnnual : tier.priceMonthly;

            return (
              <div
                key={tier.id}
                className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 ${
                  tier.isPopular
                    ? 'bg-[#0A192F] text-white border-2 border-[#0084FF] shadow-xl md:-translate-y-1'
                    : 'bg-white text-[#0A192F] border border-slate-200/90 shadow-xs hover:border-slate-300'
                }`}
              >
                {/* Popular Badge */}
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0084FF] text-white text-[10px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                    {tier.badge}
                  </div>
                )}

                <div className="space-y-6">
                  {/* Title & Limit */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold font-[family-name:var(--font-display)]">
                        {tier.name}
                      </h3>
                      <span
                        className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                          tier.isPopular
                            ? 'bg-white/10 text-sky-300'
                            : 'bg-blue-50 text-[#0084FF]'
                        }`}
                      >
                        {tier.flatsLimit}
                      </span>
                    </div>

                    <p className={`text-xs sm:text-sm leading-relaxed ${tier.isPopular ? 'text-slate-300' : 'text-slate-500'}`}>
                      {tier.description}
                    </p>
                  </div>

                  {/* Standard Price Display */}
                  <div className="pt-2 pb-4 border-b border-slate-200/60 dark:border-white/10">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl sm:text-4xl font-extrabold font-[family-name:var(--font-display)] tracking-tight">
                        £{price}
                      </span>
                      <span className={`text-xs sm:text-sm font-medium ${tier.isPopular ? 'text-slate-400' : 'text-slate-500'}`}>
                        /month
                      </span>
                    </div>
                    {billingCycle === 'annual' && (
                      <span className="text-xs text-emerald-500 font-medium mt-1 block">
                        Billed annually (Save £{(tier.priceMonthly - tier.priceAnnual) * 12}/yr)
                      </span>
                    )}
                  </div>

                  {/* Trimmed Feature Checklist (4 clean items) */}
                  <ul className="space-y-3 text-xs sm:text-sm">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2.5">
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                            tier.isPopular ? 'bg-sky-400/20 text-sky-300' : 'bg-blue-50 text-[#0084FF]'
                          }`}
                        >
                          <Check className="w-3 h-3 stroke-[2.5]" />
                        </div>
                        <span className={tier.isPopular ? 'text-slate-200' : 'text-slate-700'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Standard Clean Action Button */}
                <div className="pt-8">
                  <button
                    type="button"
                    onClick={() => triggerSmartAppDownload(() => dispatch(openDownloadModal()))}
                    className={`w-full py-3 px-4 rounded-full font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer active:scale-95 ${
                      tier.isPopular
                        ? 'bg-[#0084FF] hover:bg-[#0070DE] text-white shadow-md shadow-sky-500/25'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200'
                    }`}
                  >
                    <span>Choose Plan</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Elevated 30-Day Free Trial Banner */}
        <div className="relative rounded-3xl p-6 sm:p-7 bg-gradient-to-r from-sky-50/90 via-white to-blue-50/90 border border-sky-200/80 shadow-md shadow-sky-500/5 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-[#0084FF]/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex items-center gap-4 relative z-10 w-full md:w-auto">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#0084FF] to-[#38BDF8] text-white flex items-center justify-center shrink-0 shadow-lg shadow-sky-500/25">
              <ShieldCheck className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <h4 className="text-base sm:text-lg font-bold text-[#0A192F] font-[family-name:var(--font-display)]">
                  30-Day Free Trial On All Packages
                </h4>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold tracking-wide uppercase">
                  Zero Risk
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 font-normal">
                No credit card required • Instant onboarding for your flats • Cancel anytime in 1 tap
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 relative z-10 w-full md:w-auto justify-end">
            <button
              onClick={() => triggerSmartAppDownload(() => dispatch(openDownloadModal()))}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#0084FF] hover:bg-[#0070DE] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-sky-500/20 hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-95 group"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
