import React from 'react';
import Image from 'next/image';
import { AppStoreBadges } from '@/components/ui/AppStoreBadges';
import { Reveal } from '@/components/ui/Reveal';

const STATS = [
  { value: '99.4%', label: 'On-time rent' },
  { value: '4.9', label: 'Rating out of 5' },
] as const;

export const AppShowcaseSection: React.FC = () => {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
      <div className="mx-auto grid max-w-[1360px] items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <Reveal className="space-y-6">
          <div className="space-y-4">
            <h2 className="title-section">
              Take Full Control of
              <br />
              <span className="text-[#0084FF]">Your Properties Today</span>
            </h2>
            <p className="text-subtitle max-w-[460px]">
              Join thousands of happy landlords. Download the app today for hassle-free rent management!
            </p>
            <AppStoreBadges size="lg" className="pt-1" />
          </div>

          <div className="flex flex-wrap gap-10 pt-2">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="flex items-center gap-2 font-[family-name:var(--font-display)] text-[36px] font-semibold leading-none tracking-tight text-[#0A192F] sm:text-[40px]">
                  {stat.value}
                  {stat.value === '4.9' ? (
                    <img src="/hero/icon-star.svg" alt="" width={28} height={28} className="shrink-0" />
                  ) : null}
                </p>
                <p className="mt-2 font-[family-name:var(--font-nav)] text-[16px] leading-6 text-[#5B6775]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="relative mx-auto w-full max-w-[720px] lg:max-w-none">
          <div
            className="pointer-events-none absolute inset-x-[8%] bottom-0 top-[22%] rounded-[32px] bg-[#E8F3FF] sm:inset-x-[10%]"
            aria-hidden
          />
          <Image
            src="/showcase/app-phones.png"
            alt="Landlord HQ on iPhone and the App Store"
            width={1451}
            height={1044}
            quality={90}
            className="relative z-10 h-auto w-full object-contain [mask-image:linear-gradient(to_bottom,#000_88%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,#000_88%,transparent_100%)]"
            sizes="(max-width: 639px) 94vw, (max-width: 1023px) 720px, 760px"
          />
        </div>
      </div>
    </section>
  );
};
