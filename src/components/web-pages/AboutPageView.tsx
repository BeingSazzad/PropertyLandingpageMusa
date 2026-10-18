import React from 'react';
import { Star } from 'lucide-react';
import { MOCK_DATA } from '@/Mockdata';
import { PROPERTY_IMAGES } from '@/lib/brand';

export const AboutPageView: React.FC = () => {
  return (
    <section className="bg-[#F8FAFC] px-5 pb-20 pt-10 sm:px-8 sm:pb-24 sm:pt-14 lg:px-10">
      <div className="mx-auto max-w-[1100px] space-y-16 sm:space-y-20">
        {/* 1. Heading + wide hero photo */}
        <div className="space-y-8 text-center">
          <div className="space-y-3">
            <h1 className="title-section">About Us</h1>
            <p className="mx-auto max-w-xl font-[family-name:var(--font-nav)] text-[18px] font-normal leading-7 tracking-normal text-[#3F4B58]">
              The simpler way to run UK property — rent, tenancies, keys, and certificates in one place.
            </p>
          </div>

          <div className="overflow-hidden rounded-[24px] border border-[#E6EAEF] bg-[#E8F3FF]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={PROPERTY_IMAGES.twilight}
              alt="A high-end residential property managed with Landlord HQ"
              className="h-[210px] w-full object-cover sm:h-[300px] lg:h-[340px]"
            />
          </div>
        </div>

        {/* Statement + rating */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <h2 className="max-w-lg font-[family-name:var(--font-display)] text-[28px] font-medium leading-9 text-[#0A192F] sm:text-[32px] sm:leading-10">
            One workflow for rent, tenancies, keys, and certificates — so every building stays audit-ready.
          </h2>

          <div className="flex flex-col items-start gap-3 lg:items-end">
            <div className="flex items-center gap-1" aria-label="4.9 out of 5 rating">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className="h-6 w-6 fill-amber-400 text-amber-400"
                  strokeWidth={0}
                />
              ))}
            </div>
            <p className="font-[family-name:var(--font-nav)] text-[16px] leading-6 text-[#3F4B58]">
              4.9 / 5 from UK landlords
            </p>
          </div>
        </div>

        {/* 2. Stats row — existing Landlord HQ claims */}
        <div className="grid grid-cols-2 gap-8 sm:gap-10 lg:grid-cols-4">
          {MOCK_DATA.stats.map((stat) => (
            <div key={stat.label} className="space-y-1.5">
              <div className="font-[family-name:var(--font-display)] text-[36px] font-medium leading-none tracking-tight text-[#0A192F] sm:text-[44px]">
                {stat.value}
              </div>
              <div className="max-w-[160px] font-[family-name:var(--font-nav)] text-[14px] font-normal leading-5 text-[#3F4B58] sm:text-[15px]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* 3. Journey + Vision, photo on the right */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-10">
            <div className="space-y-3">
              <h2 className="font-[family-name:var(--font-display)] text-[24px] font-medium leading-8 text-[#0A192F] sm:text-[28px]">
                Our Journey
              </h2>
              <p className="max-w-md font-[family-name:var(--font-nav)] text-[18px] font-normal leading-7 tracking-normal text-[#3F4B58]">
                Landlord HQ was founded with a singular conviction: managing properties shouldn&apos;t
                require juggling disconnected apps, spreadsheets, and midnight emergency calls. We built
                one workflow for building registers, Open Banking rent, and contractor dispatch.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-[family-name:var(--font-display)] text-[24px] font-medium leading-8 text-[#0A192F] sm:text-[28px]">
                Our Vision &amp; Mission
              </h2>
              <p className="max-w-md font-[family-name:var(--font-nav)] text-[18px] font-normal leading-7 tracking-normal text-[#3F4B58]">
                Combine flat registers, Gas Safe trades, key registers, and certificate tracking so
                landlords, residents, and contractors stay in the same picture — organised, audit-ready,
                and free of the spreadsheet scramble.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[24px] border border-[#E6EAEF] bg-[#E8F3FF]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={PROPERTY_IMAGES.modern}
              alt="A modern house exterior from a Landlord HQ portfolio"
              className="h-[250px] w-full object-cover sm:h-[320px] lg:h-[350px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
