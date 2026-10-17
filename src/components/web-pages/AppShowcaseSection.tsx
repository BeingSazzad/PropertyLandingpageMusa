'use client';

import React from 'react';
import { AppStoreBadges } from '../ui/AppStoreBadges';
import { PhoneMock } from '../ui/PhoneMock';
import { MOCK_DATA } from '@/Mockdata';

/** Drop screenshots in /public/phones and set these paths. */
const SHOWCASE_PHONE_SRCS = {
  primary: undefined as string | undefined, // e.g. '/phones/showcase-front.png'
  secondary: undefined as string | undefined, // e.g. '/phones/showcase-back.png'
};

const SHOWCASE_STATS = [
  {
    value: MOCK_DATA.stats[1].value,
    label: MOCK_DATA.stats[1].label,
  },
  {
    value: MOCK_DATA.stats[3].value,
    label: MOCK_DATA.stats[3].label,
  },
] as const;

export const AppShowcaseSection: React.FC = () => {
  return (
    <section id="app-showcase" className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-10">
      <div className="mx-auto max-w-[1360px]">
        <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-r from-[#F7FBFF] via-[#EEF5FF] to-[#E8F3FF]">
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full text-white/70"
            viewBox="0 0 1200 520"
            fill="none"
            aria-hidden="true"
            preserveAspectRatio="none"
          >
            <path
              d="M0 360C280 300 520 410 780 250C960 140 1080 170 1200 90"
              stroke="currentColor"
              strokeWidth="1.2"
            />
          </svg>

          <div className="relative grid items-center gap-10 px-6 py-10 sm:px-10 sm:py-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)] lg:gap-6 lg:px-16 lg:py-16">
            <div className="flex min-h-[320px] flex-col justify-between gap-12 lg:min-h-[440px]">
              <div className="space-y-5">
                <h2 className="title-section">
                  App that powers
                  <br />
                  every tenancy
                </h2>
                <p className="text-subtitle max-w-[340px]">
                  Landlord HQ helps you collect rent via Open Banking, manage
                  tenancies, and stay Gas Safe compliant.
                </p>
                <AppStoreBadges className="pt-1" />
              </div>

              <div className="flex flex-wrap gap-10 sm:gap-14">
                {SHOWCASE_STATS.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-[family-name:var(--font-display)] text-[40px] font-semibold leading-none text-[#131515] sm:text-[48px]">
                      {stat.value}
                    </p>
                    <p className="mt-2 max-w-[150px] font-[family-name:var(--font-nav)] text-[14px] font-normal leading-5 text-[#494d4d]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex h-[400px] items-center justify-center sm:h-[460px] lg:h-[500px]">
              <div className="pointer-events-none absolute right-1/4 top-1/2 h-[340px] w-[340px] -translate-y-1/2 rounded-full bg-[#0084FF]/[0.07] blur-3xl sm:h-[400px] sm:w-[400px]" />
              <PhoneMock
                src={SHOWCASE_PHONE_SRCS.primary}
                alt="Landlord HQ app screen"
                className="relative z-20 w-[160px] sm:w-[190px] lg:w-[208px]"
              />
              <PhoneMock
                src={SHOWCASE_PHONE_SRCS.secondary}
                alt="Landlord HQ app screen"
                className="relative z-10 -ml-7 w-[144px] translate-y-10 sm:-ml-9 sm:w-[168px] lg:w-[180px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
