import React from 'react';
import Image from 'next/image';
import { Building2, Clock, ShieldCheck, Wallet } from 'lucide-react';
import { BrandCtaLink } from '@/components/ui/Button';
import { LIFESTYLE_IMAGES } from '@/lib/brand';

const STATS = [
  {
    value: '10K+',
    label: 'Active tenancies',
    detail: 'Leases, deposits, and units kept in one register.',
    icon: Building2,
  },
  {
    value: '99.4%',
    label: 'On-time rent',
    detail: 'Collected through Open Banking, not chased by hand.',
    icon: Wallet,
  },
  {
    value: '14 mins',
    label: 'Average dispatch',
    detail: 'Gas Safe trades sent when a tenant reports a job.',
    icon: Clock,
  },
  {
    value: '4.9 / 5',
    label: 'Landlord rating',
    detail: 'From landlords running their portfolio in the app.',
    icon: ShieldCheck,
  },
] as const;

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="bg-[#F8FAFC] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1360px] space-y-16 sm:space-y-20">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-6 lg:col-span-5">
            <h2 className="title-section">
              About
              <br />
              <span className="text-[#0084FF]">Landlord HQ</span>
            </h2>
            <p className="text-subtitle max-w-[440px]">
              Landlord HQ helps UK landlords collect rent, send Gas Safe jobs,
              and keep every tenancy record in one app.
            </p>
            <BrandCtaLink href="/about">Learn more</BrandCtaLink>
          </div>

          <div className="lg:col-span-7">
            <Image
              src={LIFESTYLE_IMAGES.phoneUse}
              alt="A UK home managed with Landlord HQ"
              width={1600}
              height={1200}
              className="h-[280px] w-full rounded-[24px] object-cover object-[center_78%] sm:h-[380px] lg:h-[440px]"
              sizes="(max-width: 1023px) 100vw, 720px"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 border-t border-[#E6EAEF] pt-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {STATS.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="space-y-3">
                <Icon className="h-5 w-5 text-[#0084FF]" strokeWidth={1.8} />
                <p className="font-[family-name:var(--font-display)] text-[36px] font-medium leading-none text-[#0A192F] sm:text-[40px]">
                  {stat.value}
                </p>
                <div className="space-y-1.5">
                  <p className="font-[family-name:var(--font-nav)] text-[15px] font-medium leading-5 text-[#0A192F]">
                    {stat.label}
                  </p>
                  <p className="max-w-[220px] font-[family-name:var(--font-nav)] text-[14px] leading-5 text-[#5B6775]">
                    {stat.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
