import React from 'react';
import Image from 'next/image';
import { AppStoreBadges } from '@/components/ui/AppStoreBadges';

const STATS = [
  { value: '99.4%', label: 'On-time rent' },
  { value: '4.9', label: 'Rating out of 5' },
] as const;

export const AppShowcaseSection: React.FC = () => {
  return (
    <section id="app-showcase" className="scroll-mt-[88px] bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
      <div className="mx-auto grid max-w-[1360px] items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="font-[family-name:var(--font-display)] text-[40px] font-semibold leading-[48px] tracking-[-0.025em] text-[#0A192F] sm:text-[52px] sm:leading-[62px]">
              One app for
              <br />
              <span className="text-[#0084FF]">every tenancy</span>
            </h2>
            <p className="max-w-[420px] font-[family-name:var(--font-nav)] text-[18px] font-normal leading-7 text-[#3F4B58]">
              Rent, Gas Safe jobs, and certificates — on your phone.
            </p>
            <AppStoreBadges size="lg" className="pt-1" />
          </div>

          <div className="flex flex-wrap gap-10 pt-2">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="font-[family-name:var(--font-display)] text-[36px] font-semibold leading-none tracking-tight text-[#0A192F] sm:text-[40px]">
                  {stat.value}
                </p>
                <p className="mt-2 font-[family-name:var(--font-nav)] text-[15px] leading-5 text-[#5B6775]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[560px] lg:max-w-none">
          <div
            className="pointer-events-none absolute inset-x-[4%] bottom-0 top-[26%] rounded-[32px] bg-[#E8F3FF] sm:inset-x-[6%]"
            aria-hidden
          />
          <Image
            src="/showcase/app-phones.webp"
            alt="Landlord HQ on iPhone and the App Store"
            width={1024}
            height={765}
            className="relative z-10 h-auto w-full drop-shadow-[0_22px_40px_rgba(10,25,47,0.12)]"
            sizes="(max-width: 1023px) 90vw, 640px"
            priority={false}
          />
        </div>
      </div>
    </section>
  );
};
