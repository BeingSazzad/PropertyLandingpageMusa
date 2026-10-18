'use client';

import React from 'react';
import Image from 'next/image';
import { CreditCard, Wrench, ShieldCheck, Lock } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

interface FeatureCardProps {
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  iconBg,
  iconColor,
  title,
  description,
}) => {
  return (
    <div className="space-y-3 rounded-[24px] border border-[#E6EAEF] bg-white p-5 text-left">
      <div className={`flex h-10 w-10 items-center justify-center rounded-[14px] ${iconBg} ${iconColor}`}>
        {icon}
      </div>
      <h3 className="font-[family-name:var(--font-display)] text-[18px] font-semibold leading-6 text-[#0A192F] sm:text-[20px]">
        {title}
      </h3>
      <p className="font-[family-name:var(--font-nav)] text-[15px] font-normal leading-6 text-[#3F4B58]">
        {description}
      </p>
    </div>
  );
};

export const MobileFeaturesShowcase: React.FC = () => {
  return (
    <section id="features" className="scroll-mt-[88px] bg-[#F8FAFC] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
      <div className="mx-auto max-w-[1360px] space-y-16">
        <SectionHeader
          title={
            <>
              Powerful features for
              <br />
              <span className="text-[#0084FF]">every tenancy</span>
            </>
          }
          subtitle="Rent, repairs, keys, and certificates — for landlords, tenants, and certified trades."
          align="center"
        />

        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-6 xl:gap-8">
          <div className="order-2 space-y-5 lg:order-1 lg:col-span-3">
            <FeatureCard
              icon={<CreditCard className="w-5 h-5" />}
              iconBg="bg-[#E8F3FF]"
              iconColor="text-[#0084FF]"
              title="Rent Auto-Collection"
              description="Collect rent via Open Banking directly into your account with automatic ledger reconciliation."
            />
            <FeatureCard
              icon={<Wrench className="w-5 h-5" />}
              iconBg="bg-[#E8F3FF]"
              iconColor="text-[#0084FF]"
              title="Emergency Trade Dispatch"
              description="Tenants report issues with photos; certified Gas Safe trades quote and repair fast."
            />
          </div>

          <div className="order-1 relative mx-auto w-full max-w-[560px] overflow-hidden lg:order-2 lg:col-span-6 lg:max-w-[760px]">
            <div
              className="relative"
              style={{
                maskImage:
                  'linear-gradient(to bottom, #000 68%, rgba(0,0,0,0.55) 86%, transparent 100%)',
                WebkitMaskImage:
                  'linear-gradient(to bottom, #000 68%, rgba(0,0,0,0.55) 86%, transparent 100%)',
              }}
            >
              <Image
                src="/features/app-phones.webp"
                alt="Landlord HQ home screens — meters, a flat overview, and properties"
                width={1400}
                height={1046}
                className="mx-auto h-auto w-full object-contain"
                sizes="(max-width: 1023px) 92vw, 760px"
                priority={false}
              />
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[28%] bg-gradient-to-b from-transparent via-[#F8FAFC]/55 to-[#F8FAFC]" />
          </div>

          <div className="order-3 space-y-5 lg:col-span-3">
            <FeatureCard
              icon={<ShieldCheck className="w-5 h-5" />}
              iconBg="bg-[#E8F3FF]"
              iconColor="text-[#0084FF]"
              title="Tenancy & Key Register"
              description="Track active AST leases, DPS deposit IDs, and physical key loggers in one place."
            />
            <FeatureCard
              icon={<Lock className="w-5 h-5" />}
              iconBg="bg-[#E8F3FF]"
              iconColor="text-[#0084FF]"
              title="Compliance Tracker"
              description="Automated advance alerts for Gas Safe CP12, EICR, and EPC certificate expiries."
            />
          </div>
        </div>
      </div>
    </section>
  );
};
