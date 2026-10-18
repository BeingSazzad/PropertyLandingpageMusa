'use client';

import React from 'react';
import Image from 'next/image';
import { Wrench } from 'lucide-react';

const AVATARS = [
  { src: '/hero/avatar-1.png', alt: 'Landlord HQ user', position: 'center 18%' },
  { src: '/hero/avatar-2.png', alt: 'Landlord HQ user', position: 'center 16%' },
  { src: '/hero/avatar-3.png', alt: 'Landlord HQ user', position: 'center 28%' },
] as const;

export const HeroSection: React.FC = () => {
  return (
    <section id="overview" className="relative overflow-hidden bg-[#F8FAFC] pb-16 sm:pb-20 lg:pb-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[82%] min-h-[640px] overflow-hidden">
        <Image
          src="/hero/clouds.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_70%] opacity-[0.78] saturate-[0.68]"
        />
        <div className="absolute inset-0 bg-[#F3F6F9]/28" />
        <div className="absolute inset-x-0 bottom-0 h-[58%] bg-gradient-to-b from-transparent via-white/62 to-[#F8FAFC]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-[1300px] flex-col items-center px-5 pt-12 sm:px-8 sm:pt-16 lg:px-10 lg:pt-[72px]">
        <div className="mx-auto max-w-[700px] text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <div className="flex w-[94px] shrink-0">
              {AVATARS.map((avatar, index) => (
                <div
                  key={avatar.src}
                  className="relative size-[42px] overflow-hidden rounded-full border-2 border-white shadow-[5px_8px_15px_rgba(0,0,0,0.15)]"
                  style={{ marginLeft: index === 0 ? 0 : -16, zIndex: index + 1 }}
                >
                  <img
                    src={avatar.src}
                    alt={avatar.alt}
                    className="size-full origin-[center_20%] scale-[2.6] object-cover"
                    style={{ objectPosition: avatar.position }}
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col items-start gap-1.5">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, index) => (
                  <img
                    key={index}
                    src="/hero/icon-star.svg"
                    alt=""
                    width={14}
                    height={14}
                  />
                ))}
              </div>
              <p className="font-[family-name:var(--font-nav)] text-[14px] font-medium leading-5 tracking-[-0.28px] text-[#5B6775]">
                500+ UK landlords
              </p>
            </div>
          </div>
          <h1 className="title-display mx-auto max-w-3xl">
            <span className="sm:hidden">
              Manage your
              <br />
              properties anytime,
              <br />
              anywhere.
            </span>
            <span className="hidden sm:inline">
              Manage your properties
              <br />
              anytime, anywhere.
            </span>
          </h1>
          <p className="text-subtitle mx-auto mt-5 max-w-[560px]">
            Landlord HQ helps you collect rent via Open Banking, dispatch Gas Safe
            contractors, and manage tenancies — all in one simple app.
          </p>
        </div>

        <div className="relative mx-auto mt-10 h-[340px] w-full max-w-[1140px] sm:mt-14 sm:h-[400px] lg:h-[480px]">
          <div
            className="absolute left-1/2 top-0 z-10 h-full w-[280px] -translate-x-1/2 overflow-hidden sm:w-[340px] lg:w-[424px]"
            style={{
              maskImage: 'linear-gradient(to bottom, #000 52%, rgba(0,0,0,0.55) 78%, transparent 100%)',
              WebkitMaskImage:
                'linear-gradient(to bottom, #000 52%, rgba(0,0,0,0.55) 78%, transparent 100%)',
            }}
          >
            <div className="absolute left-1/2 top-0 w-[400px] -translate-x-1/2 drop-shadow-[0_18px_28px_rgba(15,23,42,0.18)] sm:w-[490px] lg:w-[575px]">
              <Image
                src="/hero/phone-mockup.png"
                alt="Landlord HQ mobile app"
                width={1024}
                height={1536}
                priority
                className="h-auto w-full"
              />
            </div>
          </div>

          <div className="absolute left-[14%] top-[30%] z-20 hidden items-center gap-1.5 rounded-[40px] bg-black px-4 py-2 shadow-[4px_4px_6px_rgba(0,0,0,0.25)] lg:flex">
            <img src="/hero/icon-secure.svg" alt="" width={16} height={16} />
            <span className="font-[family-name:var(--font-nav)] text-[14px] font-normal leading-5 tracking-[-0.28px] text-white">
              Open Banking
            </span>
          </div>

          <div className="absolute left-[10%] top-[53%] z-20 hidden w-[225px] rounded-[16px] bg-white p-5 shadow-[5px_10px_20px_rgba(0,140,255,0.03),5px_10px_20px_rgba(0,0,0,0.03)] lg:block">
            <p className="font-[family-name:var(--font-nav)] text-[16px] font-normal leading-[22px] tracking-[-0.32px] text-[#5B6775]">
              Monthly rent collected
            </p>
            <p className="mt-5 font-[family-name:var(--font-nav)] text-[28px] font-medium leading-10 tracking-[-0.84px] text-[#0A192F]">
              £8,350
            </p>
            <div className="mt-3 flex items-center gap-2">
              <span className="rounded-full bg-[rgba(70,161,40,0.1)] px-1 py-0.5 font-[family-name:var(--font-nav)] text-[14px] font-medium leading-5 tracking-[-0.42px] text-[#46a128]">
                +7%
              </span>
              <span className="font-[family-name:var(--font-nav)] text-[16px] font-normal leading-5 tracking-[-0.32px] text-[#5B6775]">
                from last week
              </span>
            </div>
          </div>

          <div className="absolute right-[8.5%] top-[22%] z-20 hidden w-[210px] rounded-[16px] bg-white p-5 shadow-[5px_10px_20px_rgba(0,140,255,0.03),5px_10px_20px_rgba(0,0,0,0.03)] lg:block">
            <div className="flex size-[46px] items-center justify-center rounded-full bg-[#F4F4F4]">
                <Wrench className="size-[18px] text-[#0A192F]" strokeWidth={1.6} />
              </div>
              <div className="mt-4 flex items-center gap-2.5">
                <p className="font-[family-name:var(--font-nav)] text-[24px] font-medium leading-8 tracking-[-0.72px] text-[#0A192F]">
                  £1,235
                </p>
                <span className="rounded-full bg-[rgba(70,161,40,0.1)] px-1 py-0.5 font-[family-name:var(--font-nav)] text-[14px] font-medium leading-5 tracking-[-0.42px] text-[#46a128]">
                  +2%
                </span>
              </div>
              <p className="mt-1 font-[family-name:var(--font-nav)] text-[16px] font-normal leading-[22px] tracking-[-0.32px] text-[#5B6775]">
                Repair spend this month
              </p>
          </div>

          <div className="absolute right-[15%] top-[68%] z-20 hidden items-center gap-1.5 rounded-[40px] bg-black px-4 py-2 shadow-[4px_4px_6px_rgba(0,0,0,0.25)] lg:flex">
            <img src="/hero/icon-track.svg" alt="" width={16} height={16} />
            <span className="font-[family-name:var(--font-nav)] text-[14px] font-normal leading-5 tracking-[-0.28px] text-white">
              Track tenancies
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
