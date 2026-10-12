'use client';

import React from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { openDownloadModal, setActiveHeroFilter } from '@/redux/features/uiSlice';
import { ArrowUpRight, ShieldCheck, CheckCircle2, Building2, KeyRound } from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { MOCK_DATA } from '@/Mockdata';

export const HeroSection: React.FC = () => {
  const dispatch = useAppDispatch();
  const { activeHeroFilter } = useAppSelector((state) => state.ui);

  return (
    <section id="overview" className="relative pt-6 sm:pt-8 pb-16 px-4 sm:px-6 lg:px-10">
      <div className="max-w-[1400px] mx-auto space-y-12">
        
        {/* Main Hero Card Container (Luminous Modern Tech & Architectural Alignment) */}
        <div className="relative rounded-[32px] sm:rounded-[44px] overflow-hidden bg-[#0A192F] text-white shadow-2xl border border-sky-900/40 min-h-[640px] sm:min-h-[720px] lg:min-h-[760px] flex flex-col justify-between p-6 sm:p-10 lg:p-14">
          
          {/* Background Image with Cinematic Luxury Aesthetic & Soft Ambient Cyan Glow */}
          <div className="absolute inset-0 z-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={MOCK_DATA.heroShowcase.mainImage}
              alt="Luxury Architecture and Property Management Operations"
              className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
            />
            {/* Modern AI Multi-Layer Gradient: Deep navy to transparent with cyan ambient lighting */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#071324]/95 via-[#071324]/75 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071324] via-transparent to-[#071324]/40" />
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#0084FF]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#00B4D8]/15 rounded-full blur-3xl pointer-events-none" />
          </div>

          {/* Top Row: Mini Navigation / Pills inside Hero */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="glass-pill-dark px-4 py-2 rounded-full text-xs font-semibold text-white/95 flex items-center gap-2 border border-sky-400/20 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#00C2FF] animate-pulse" />
                Landlord & Tenant Operations
              </span>
              <span className="hidden sm:inline-flex glass-pill-dark px-3.5 py-2 rounded-full text-[11px] font-medium text-sky-200/80 border border-sky-400/15">
                UK Multi-Unit Portfolios
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="pill-white"
                size="sm"
                withArrow
                onClick={() => dispatch(openDownloadModal())}
                className="font-semibold shadow-md text-xs"
              >
                Book a Demo
              </Button>
            </div>
          </div>

          {/* Middle Row: Massive Headline & Primary Action (Matching User's Reference Vibe) */}
          <div className="relative z-10 max-w-3xl lg:max-w-4xl my-auto py-8 sm:py-12 space-y-6">
            
            <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-bold tracking-tight text-white leading-[1.05] font-[family-name:var(--font-heading)]">
              Your trusted partner{' '}
              <span className="font-light text-slate-300">in property, tenancy &</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#00A3FF] to-[#60EFFF]">
                maintenance operations
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              Connect landlords, tenants, and certified contractors. Manage buildings, flats, automated rent tracking, key registers, and work orders in one unified system.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                variant="primary"
                size="lg"
                withArrow
                onClick={() => dispatch(openDownloadModal())}
                className="font-bold text-white shadow-xl hover:shadow-2xl"
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
                      ? 'bg-gradient-to-r from-[#0084FF] to-[#00A3FF] text-white shadow-md font-bold scale-105'
                      : 'bg-black/40 hover:bg-black/60 text-white/90 border border-white/15 backdrop-blur-md'
                  }`}
                >
                  {pill.label}
                </button>
              ))}
            </div>

            {/* Right: Floating Stats & Image Card (Direct Reference to "Project Success 459+" Card) */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 w-full lg:w-auto">
              
              {/* Deep Navy Stats Card (Solar Reference Card Style) */}
              <div className="glass-pill-dark rounded-2xl p-3.5 pr-5 border border-sky-400/25 shadow-xl space-y-1 flex-1 sm:flex-initial min-w-[210px]">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-[#38BDF8] uppercase tracking-wider">
                    Portfolio Reach
                  </span>
                  <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-white">
                    <ArrowUpRight className="w-3 h-3" />
                  </div>
                </div>
                <div className="text-2xl font-black font-mono text-white tracking-tight">
                  450+ <span className="text-xs font-normal text-slate-300">Flats</span>
                </div>
                <div className="text-[11px] text-slate-300">
                  99.4% on-time rent collection
                </div>
              </div>

              {/* Featured Property Card */}
              <div className="glass-pill-dark rounded-2xl p-2.5 pr-4 flex items-center gap-3 border border-sky-400/20 hover:border-[#38BDF8]/60 transition-all cursor-pointer group flex-1 sm:flex-initial">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={MOCK_DATA.heroShowcase.featuredPills[0].image}
                  alt={MOCK_DATA.heroShowcase.featuredPills[0].title}
                  className="w-14 h-14 rounded-xl object-cover"
                />
                <div className="space-y-0.5">
                  <div className="text-[10px] font-bold text-[#38BDF8] uppercase tracking-wider">
                    {MOCK_DATA.heroShowcase.featuredPills[0].id} Property
                  </div>
                  <div className="text-xs font-semibold text-white group-hover:text-[#38BDF8] transition-colors leading-tight">
                    {MOCK_DATA.heroShowcase.featuredPills[0].title}
                  </div>
                  <div className="text-[10px] text-slate-400">
                    {MOCK_DATA.heroShowcase.featuredPills[0].category}
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Partner Trust Strip (Directly matching the Mailchimp, GitHub, Notion, Intercom logo strip in user's reference!) */}
        <div className="pt-2">
          <div className="text-center text-[11px] font-semibold tracking-wider uppercase text-slate-400 mb-6">
            Trusted by UK Property Standards & Leading Institutions
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-between gap-8 px-4 py-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs text-slate-600">
            <div className="flex items-center gap-2 font-bold text-sm text-slate-700">
              <ShieldCheck className="w-5 h-5 text-[#0084FF]" />
              <span>Open Banking</span>
            </div>

            <div className="flex items-center gap-2 font-bold text-sm text-slate-700">
              <Building2 className="w-5 h-5 text-[#0084FF]" />
              <span>Gas Safe Register</span>
            </div>

            <div className="flex items-center gap-2 font-bold text-sm text-slate-700">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>DPS Deposit Scheme</span>
            </div>

            <div className="flex items-center gap-2 font-bold text-sm text-slate-700">
              <KeyRound className="w-5 h-5 text-[#0084FF]" />
              <span>EPC Register UK</span>
            </div>

            <div className="flex items-center gap-2 font-bold text-sm text-slate-700">
              <span className="font-mono text-base font-black text-slate-800">stripe</span>
              <span className="text-xs text-slate-400">Payments</span>
            </div>

            <div className="flex items-center gap-2 font-bold text-sm text-slate-700">
              <span className="font-semibold text-slate-700">BARCLAYS</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
