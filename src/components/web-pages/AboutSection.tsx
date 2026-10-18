import React from 'react';
import Image from 'next/image';
import { BrandCtaLink } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { LIFESTYLE_IMAGES } from '@/lib/brand';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="scroll-mt-[88px] bg-white px-5 pb-20 pt-5 sm:px-8 sm:pb-24 sm:pt-7 lg:px-10 lg:pb-28 lg:pt-8"
    >
      <Reveal className="mx-auto grid max-w-[1360px] grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
        <div className="space-y-5 lg:col-span-5">
          <Image
            src={LIFESTYLE_IMAGES.phoneUse}
            alt="A well-kept home managed with Landlord HQ"
            width={1600}
            height={1200}
            className="aspect-[5/4] w-full rounded-[24px] object-cover object-[center_46%]"
            sizes="(max-width: 1023px) 100vw, 560px"
          />
          <div className="max-w-sm space-y-1.5">
            <p className="font-[family-name:var(--font-display)] text-[18px] font-semibold leading-6 text-[#0A192F]">
              Less chasing. More control.
            </p>
            <p className="text-subtitle">
              A register that feels as calm as a well-run home.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-9 lg:col-span-7 lg:pt-1">
          <h2 className="max-w-[18em] text-pretty font-[family-name:var(--font-display)] text-[32px] font-semibold leading-10 tracking-[-0.02em] text-[#0A192F] sm:text-[40px] sm:leading-[48px]">
            “We believe landlords should run the whole portfolio in one place — rent in, jobs booked, certificates current.”
          </h2>

          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
            <Image
              src={LIFESTYLE_IMAGES.interior}
              alt="A calm living space in a managed home"
              width={1400}
              height={1000}
              className="h-[220px] w-full rounded-[24px] object-cover lg:h-full lg:min-h-[280px]"
              sizes="(max-width: 639px) 100vw, 360px"
            />

            <div className="space-y-5">
              <p className="text-subtitle max-w-[320px]">
                Start with the tenancies you already have. Collect rent, book Gas Safe jobs, and keep every file together.
              </p>
              <BrandCtaLink href="/about" size="sm">
                Learn more
              </BrandCtaLink>

              <div className="rounded-[24px] bg-[#E8F3FF] px-6 py-5">
                <p className="font-[family-name:var(--font-nav)] text-[12px] font-medium uppercase tracking-[0.14em] text-[#5B6775]">
                  On-time rent
                </p>
                <p className="mt-2 font-[family-name:var(--font-display)] text-[40px] font-semibold leading-none tracking-tight text-[#0A192F] sm:text-[44px]">
                  99.4%
                </p>
                <p className="mt-2 font-[family-name:var(--font-nav)] text-[14px] leading-5 text-[#5B6775]">
                  Collected through Open Banking.
                </p>
                <div className="mt-5 flex items-center gap-2" aria-hidden>
                  <span className="h-2 w-2 rounded-full bg-[#0084FF]" />
                  <span className="h-2 w-2 rounded-full bg-[#0A192F]/15" />
                  <span className="h-2 w-2 rounded-full bg-[#0A192F]/15" />
                  <span className="h-2 w-2 rounded-full bg-[#0A192F]/15" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};
