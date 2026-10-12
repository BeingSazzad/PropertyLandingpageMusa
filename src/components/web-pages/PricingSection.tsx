'use client';

import React, { useState } from 'react';
import { useAppDispatch } from '@/redux/hooks';
import { openDownloadModal } from '@/redux/features/uiSlice';
import { Check, ShieldCheck, Zap, Building2, ArrowUpRight } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

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
    flatsLimit: 'Up to 3 Flats / Units',
    description: 'Perfect for individual or accidental landlords managing 1 to 3 rental flats.',
    features: [
      'Building & Flat unit profiles',
      'Automated Rent ledger & payment tracking',
      'Tenancy lease dates & DPS deposit log',
      'Tenant mobile app for 1-tap rent pay',
      'Contractor repair ticket dispatch',
      'Digital key register for tenants',
    ],
  },
  {
    id: 'portfolio',
    name: 'Portfolio Landlord',
    badge: 'Most Popular',
    isPopular: true,
    priceMonthly: 39,
    priceAnnual: 31,
    flatsLimit: 'Up to 15 Flats / Units',
    description: 'Designed for active property investors with multi-unit buildings and growing portfolios.',
    features: [
      'Everything in Starter Landlord',
      'Multi-building & flat architecture',
      'Gas Safe CP12, EICR & EPC compliance expiry alerts',
      'Full unit key register (Yale, Deadlock, Fobs)',
      'Contractor quote approval & digital invoice payouts',
      'Building house rules, alarm codes & communal log',
      'Automated arrears reminders to tenants',
    ],
  },
  {
    id: 'professional',
    name: 'Multi-Building / HMO',
    priceMonthly: 79,
    priceAnnual: 63,
    flatsLimit: 'Unlimited Flats & Portfolios',
    description: 'Complete operational command for multi-property landlords, HMOs, and letting agencies.',
    features: [
      'Everything in Portfolio Landlord',
      'Unlimited flats, units & buildings',
      'HMO individual room & tenancy management',
      'Council tax band & communal utility allocation',
      'Priority certified contractor dispatch',
      'Portfolio cashflow & yield accounting reports',
      'Priority UK telephone & WhatsApp support',
    ],
  },
];

export const PricingSection: React.FC = () => {
  const dispatch = useAppDispatch();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-10 bg-[#F8FAFC]">
      <div className="max-w-[1400px] mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="blue">Transparent Subscription</Badge>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0A192F] font-[family-name:var(--font-heading)] leading-tight">
            Manage your flats & buildings with a{' '}
            <span className="text-[#0084FF]">simple monthly subscription</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            No expensive management percentages. Pick a package suited to your units and give your tenants, contractors, and properties a seamless platform.
          </p>

          {/* Billing Switcher */}
          <div className="pt-2 inline-flex items-center gap-2 bg-white p-1.5 rounded-full border border-slate-200 shadow-sm">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                billingCycle === 'monthly'
                  ? 'bg-gradient-to-r from-[#0084FF] to-[#00A3FF] text-white shadow-sm'
                  : 'text-slate-600 hover:text-black'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                billingCycle === 'annual'
                  ? 'bg-gradient-to-r from-[#0084FF] to-[#00A3FF] text-white shadow-sm'
                  : 'text-slate-600 hover:text-black'
              }`}
            >
              <span>Annual Billing</span>
              <span className="text-[10px] bg-sky-100 text-sky-700 px-1.5 py-0.5 rounded-full font-bold">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {PRICING_TIERS.map((tier) => {
            const price = billingCycle === 'annual' ? tier.priceAnnual : tier.priceMonthly;

            return (
              <div
                key={tier.id}
                className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  tier.isPopular
                    ? 'bg-[#0A192F] text-white border-2 border-[#0084FF] shadow-2xl scale-[1.02]'
                    : 'bg-white text-[#0A192F] border border-slate-200 shadow-sm hover:shadow-md'
                }`}
              >
                {/* Popular Badge */}
                {tier.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#2563EB] text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                    {tier.badge}
                  </div>
                )}

                <div className="space-y-6">
                  {/* Title & Limits */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold font-[family-name:var(--font-heading)]">
                        {tier.name}
                      </h3>
                      <span
                        className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${
                          tier.isPopular
                            ? 'bg-white/10 text-[#60A5FA]'
                            : 'bg-[#EFF6FF] text-[#1D4ED8]'
                        }`}
                      >
                        {tier.flatsLimit}
                      </span>
                    </div>

                    <p className={`text-xs leading-relaxed ${tier.isPopular ? 'text-zinc-300' : 'text-zinc-500'}`}>
                      {tier.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="pt-2 pb-4 border-b border-black/10 dark:border-white/10">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-black font-mono tracking-tight">
                        £{price}
                      </span>
                      <span className={`text-xs ${tier.isPopular ? 'text-zinc-400' : 'text-zinc-500'}`}>
                        / flat portfolio / month
                      </span>
                    </div>
                    {billingCycle === 'annual' && (
                      <span className="text-[11px] text-emerald-600 font-medium mt-1 block">
                        Billed annually (save £{(tier.priceMonthly - tier.priceAnnual) * 12}/yr)
                      </span>
                    )}
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3">
                    <div className={`text-[11px] font-bold uppercase tracking-wider ${tier.isPopular ? 'text-zinc-400' : 'text-zinc-400'}`}>
                      What&apos;s Included:
                    </div>
                    <ul className="space-y-2.5 text-xs">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <Check
                            className={`w-4 h-4 shrink-0 mt-0.5 ${
                              tier.isPopular ? 'text-[#60A5FA]' : 'text-[#2563EB]'
                            }`}
                          />
                          <span className={tier.isPopular ? 'text-zinc-200' : 'text-zinc-700'}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-8">
                  <Button
                    variant={tier.isPopular ? 'primary' : 'outline'}
                    size="lg"
                    withArrow
                    onClick={() => dispatch(openDownloadModal())}
                    className="w-full font-bold"
                  >
                    Select {tier.name}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Money-Back Guarantee Strip */}
        <div className="rounded-2xl p-4 sm:p-5 bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-[#0A192F] block">30-Day Free Trial On All Packages</span>
              <span>No credit card required to start. Cancel anytime in 1 tap from your app.</span>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => dispatch(openDownloadModal())}
          >
            Start Free Trial
          </Button>
        </div>

      </div>
    </section>
  );
};
