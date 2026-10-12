'use client';

import React from 'react';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { openDownloadModal, setActiveHeroFilter } from '@/redux/features/uiSlice';
import { ArrowUpRight, ShieldCheck, Sparkles, Star, Download, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { MOCK_DATA } from '@/Mockdata';

export const HeroSection: React.FC = () => {
  const dispatch = useAppDispatch();
  const { activeHeroFilter } = useAppSelector((state) => state.ui);

  return (
    <section id="overview" className="relative pt-6 sm:pt-8 pb-16 px-4 sm:px-6 lg:px-10">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Main Hero Card Container (Mimicking Reference Image) */}
        <div className="relative rounded-[32px] sm:rounded-[44px] overflow-hidden bg-[#181C1B] text-white shadow-2xl border border-black/10 min-h-[620px] sm:min-h-[700px] lg:min-h-[740px] flex flex-col justify-between p-6 sm:p-10 lg:p-14">
          
          {/* Background Image with Architectural Luxury Aesthetic */}
          <div className="absolute inset-0 z-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={MOCK_DATA.heroShowcase.mainImage}
              alt="Luxury Architecture and AI Property Operations"
              className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
            />
            {/* Subtle multi-layer gradient to ensure pristine typography legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-black/35" />
          </div>

          {/* Top Row: Mini Navigation / Pills inside the Hero Card */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-4">
            
            <div className="flex items-center gap-2">
              <span className="glass-pill-dark px-4 py-2 rounded-full text-xs font-semibold text-white/90 flex items-center gap-2 border border-white/10">
                <span className="w-2 h-2 rounded-full bg-[#E4ED64] animate-pulse" />
                AI Real Estate Intelligence
              </span>
              <span className="hidden sm:inline-flex glass-pill-dark px-3.5 py-2 rounded-full text-[11px] font-medium text-zinc-300 border border-white/10">
                UK & Mediterranean
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="pill-white"
                size="sm"
                withArrow
                onClick={() => dispatch(openDownloadModal())}
                className="font-semibold shadow-md"
              >
                Book a Demo
              </Button>
            </div>
          </div>

          {/* Middle Row: Massive Headline & Primary Action (Direct Reference Image Alignment) */}
          <div className="relative z-10 max-w-3xl lg:max-w-4xl my-auto py-8 sm:py-12 space-y-6">
            
            <h1 className="text-4xl sm:text-6xl lg:text-[66px] font-bold tracking-tight text-white leading-[1.05] font-[family-name:var(--font-heading)]">
              Your trusted partner{' '}
              <span className="font-light text-zinc-300">in real estate &</span>{' '}
              <span className="text-[#E4ED64] underline decoration-[#E4ED64]/40 decoration-wavy decoration-2">
                AI property operations
              </span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-300/90 max-w-2xl font-normal leading-relaxed">
              Empowering landlords and property managers with autonomous tenant screening, zero-delay rent collection, and instant certified contractor dispatch.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                variant="primary"
                size="lg"
                withArrow
                onClick={() => dispatch(openDownloadModal())}
                className="font-bold text-[#0B0F0E] shadow-xl hover:shadow-2xl"
              >
                Download Mobile App
              </Button>

              <a href="#process">
                <Button
                  variant="pill-white"
                  size="lg"
                  className="bg-white/10 text-white hover:bg-white/20 border-white/20 backdrop-blur-md"
                >
                  Explore Features
                </Button>
              </a>
            </div>
          </div>

          {/* Bottom Row: Filter Chips & Floating Showcase Cards (Matching Reference Visual) */}
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 pt-6 border-t border-white/15">
            
            {/* Left Filter Badges */}
            <div className="flex flex-wrap gap-2 max-w-lg">
              {MOCK_DATA.heroPills.map((pill) => (
                <button
                  key={pill.label}
                  onClick={() => dispatch(setActiveHeroFilter(pill.label))}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    activeHeroFilter === pill.label
                      ? 'bg-[#E4ED64] text-[#0B0F0E] shadow-sm font-bold scale-105'
                      : 'bg-black/40 hover:bg-black/60 text-white/90 border border-white/15 backdrop-blur-md'
                  }`}
                >
                  {pill.label}
                </button>
              ))}
            </div>

            {/* Right: Floating Project & Feature Cards (Directly matching 01 & 02 cards in reference image) */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 w-full lg:w-auto">
              
              {/* Card 01 */}
              <div className="glass-pill-dark rounded-2xl p-2.5 pr-4 flex items-center gap-3 border border-white/15 hover:border-[#E4ED64]/50 transition-all cursor-pointer group flex-1 sm:flex-initial">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={MOCK_DATA.heroShowcase.featuredPills[0].image}
                  alt={MOCK_DATA.heroShowcase.featuredPills[0].title}
                  className="w-14 h-14 rounded-xl object-cover"
                />
                <div className="space-y-0.5">
                  <div className="text-[10px] font-bold text-[#E4ED64] uppercase tracking-wider">
                    {MOCK_DATA.heroShowcase.featuredPills[0].id} Portfolio
                  </div>
                  <div className="text-xs font-semibold text-white group-hover:text-[#E4ED64] transition-colors leading-tight">
                    {MOCK_DATA.heroShowcase.featuredPills[0].title}
                  </div>
                  <div className="text-[10px] text-zinc-400">
                    {MOCK_DATA.heroShowcase.featuredPills[0].category}
                  </div>
                </div>
              </div>

              {/* Card 02 */}
              <div className="glass-pill-dark rounded-2xl p-2.5 pr-4 flex items-center gap-3 border border-white/15 hover:border-[#E4ED64]/50 transition-all cursor-pointer group flex-1 sm:flex-initial">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={MOCK_DATA.heroShowcase.featuredPills[1].image}
                  alt={MOCK_DATA.heroShowcase.featuredPills[1].title}
                  className="w-14 h-14 rounded-xl object-cover"
                />
                <div className="space-y-0.5">
                  <div className="text-[10px] font-bold text-[#E4ED64] uppercase tracking-wider">
                    {MOCK_DATA.heroShowcase.featuredPills[1].id} Live Yield
                  </div>
                  <div className="text-xs font-semibold text-white group-hover:text-[#E4ED64] transition-colors leading-tight">
                    {MOCK_DATA.heroShowcase.featuredPills[1].title}
                  </div>
                  <div className="text-[10px] text-zinc-400">
                    {MOCK_DATA.heroShowcase.featuredPills[1].category}
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Live Metrics Trust Banner */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {MOCK_DATA.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white/70 border border-[#E2E2D8] backdrop-blur-sm shadow-sm flex flex-col justify-between"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-[#0B0F0E] font-[family-name:var(--font-heading)] tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs text-[#8A8A8A] font-medium mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
