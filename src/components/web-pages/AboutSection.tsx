import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { MOCK_DATA } from '@/Mockdata';
import { PROPERTY_IMAGES } from '@/lib/brand';

const STAT = MOCK_DATA.stats[1];

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="bg-[#F8FAFC] px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1360px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20 xl:gap-28">
          <div className="flex min-h-0 flex-col justify-between gap-14 lg:min-h-[420px]">
            <div className="space-y-6">
              <h2 className="title-section">About Us</h2>
              <p className="max-w-[460px] font-[family-name:var(--font-nav)] text-[18px] font-normal leading-7 tracking-normal text-[#494d4d]">
                We built Landlord HQ so UK landlords can collect rent via Open Banking,
                dispatch Gas Safe contractors, and keep tenancies, keys, and certificates
                in one simple workflow.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#0084FF] px-6 py-3.5 font-[family-name:var(--font-nav)] text-[16px] font-medium leading-5 text-white hover:bg-[#0070DE]"
              >
                About us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div>
              <p className="font-[family-name:var(--font-display)] text-[48px] font-medium leading-none tracking-tight text-[#131515] sm:text-[56px]">
                {STAT.value}
              </p>
              <p className="mt-2 max-w-[220px] font-[family-name:var(--font-nav)] text-[16px] font-normal leading-6 tracking-normal text-[#494d4d]">
                {STAT.label}
              </p>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[480px] overflow-hidden rounded-[28px] border border-[#E6EAEF] bg-[#E8F3FF] sm:max-w-[520px] lg:ml-auto lg:max-w-[540px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={PROPERTY_IMAGES.villa}
              alt="A high-end residential property in a Landlord HQ portfolio"
              className="h-[300px] w-full object-cover object-center sm:h-[400px] lg:h-[460px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
