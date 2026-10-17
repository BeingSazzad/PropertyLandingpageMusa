import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { MOCK_DATA } from '@/Mockdata';

const ABOUT_PHOTO =
  'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1400&auto=format&fit=crop';

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
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#0084FF] to-[#00A3FF] px-5 py-2.5 text-sm font-bold tracking-tight text-white shadow-md shadow-sky-500/30 transition-all duration-200 hover:from-[#0070E0] hover:to-[#0092F0] active:scale-95"
              >
                <span>About Us</span>
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[#0084FF] shadow-xs transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.5]" />
                </span>
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

          <div className="mx-auto w-full max-w-[480px] rounded-[32px] bg-[#E8F3FF] p-2.5 sm:max-w-[520px] sm:rounded-[40px] sm:p-3 lg:ml-auto lg:max-w-[540px]">
            <div className="overflow-hidden rounded-[24px] sm:rounded-[32px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={ABOUT_PHOTO}
                alt="Apartment building exterior from a Landlord HQ portfolio"
                className="h-[300px] w-full object-cover object-center sm:h-[400px] lg:h-[460px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
