'use client';

import React from 'react';
import { AppStoreBadges } from '../ui/AppStoreBadges';
import {
  Bell,
  MapPin,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Clock,
  CheckCircle2,
  TrendingUp,
  Wrench,
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="overview"
      className="relative pt-6 sm:pt-10 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-10 overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-white to-slate-50"
    >
      {/* Luminous Ambient Background Glows (Matching User's Reference Vibe) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-gradient-to-b from-sky-200/40 via-[#0084FF]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute top-36 -left-32 w-96 h-96 bg-[#0084FF]/12 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute top-44 -right-32 w-96 h-96 bg-cyan-300/15 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-[1360px] mx-auto text-center space-y-6 sm:space-y-8 relative z-10">
        
        <div className="inline-flex items-center gap-2 rounded-full border border-[#E6EAEF] bg-white px-4 py-1.5">
          <span className="h-2 w-2 rounded-full bg-[#0084FF]" />
          <span className="font-[family-name:var(--font-nav)] text-[14px] font-medium leading-5 text-[#494d4d]">
            Built for UK landlords
          </span>
        </div>

        <h1 className="title-display mx-auto max-w-3xl">
          Manage your properties
          <br className="hidden sm:inline" />{' '}
          <span className="text-[#0084FF]">anytime, anywhere.</span>
        </h1>

        {/* Centered Subtitle */}
        <p className="text-subtitle max-w-2xl mx-auto">
          Landlord HQ helps you collect rent via Open Banking, dispatch Gas Safe contractors, and manage tenancies — all in one simple app.
        </p>

        <AppStoreBadges className="justify-center pt-1 sm:pt-2" />

        {/* Visual Trio Smartphone Showcase (Reference: Curely 3-Device Overlapping Array) */}
        <div className="relative pt-10 sm:pt-16 pb-4 sm:pb-8 flex justify-center items-center max-w-5xl mx-auto select-none">
          
          {/* Ambient Glow immediately behind devices */}
          <div className="absolute inset-0 max-w-2xl mx-auto bg-gradient-to-r from-sky-400/20 via-[#0084FF]/25 to-cyan-400/20 rounded-full blur-3xl -z-10 pointer-events-none transform -translate-y-8" />

          {/* LEFT DEVICE (Recessed / Dark Mode Maintenance & Trade Ticket) */}
          <div className="hidden md:block absolute left-4 lg:left-12 -translate-y-2 z-10 w-[260px] lg:w-[280px] transform -rotate-3 transition-transform duration-500 hover:rotate-0 hover:scale-105">
            
            {/* Floating Top Badge: 600+ UK Landlords (Reference: "6k+ Happy Clients With Top Reviews") */}
            <div className="absolute -top-7 -left-4 z-30 flex items-center rounded-[16px] border border-[#E6EAEF] bg-white px-3 py-2 shadow-[0_8px_24px_rgba(10,25,47,0.06)]">
              <div className="text-left leading-tight">
                <div className="font-[family-name:var(--font-nav)] text-[14px] font-medium text-[#131515]">500+ UK landlords</div>
                <div className="font-[family-name:var(--font-nav)] text-[13px] text-[#494d4d]">4.9 / 5 rating</div>
              </div>
            </div>

            {/* Left Phone Frame (Titanium Dark) */}
            <div className="bg-[#0B132B] rounded-[44px] p-2.5 shadow-2xl border-2 border-slate-700/80 ring-8 ring-black/5 text-white text-left">
              <div className="bg-[#0F172A] rounded-[36px] p-4 pt-3 space-y-3.5 border border-white/10">
                {/* Screen Header */}
                <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-white/10 pb-2">
                  <span className="font-semibold text-white">Maintenance Desk</span>
                  <span className="text-[10px] bg-rose-500/20 text-rose-300 px-2 py-0.5 rounded-full font-medium">Urgent</span>
                </div>

                {/* Left Screen: Repair Card */}
                <div className="bg-slate-800/80 rounded-2xl p-3 border border-slate-700 space-y-2">
                  <div className="text-[10px] uppercase font-bold tracking-wider text-sky-400">Flat 3B • Boiler Pressure</div>
                  <div className="text-xs font-semibold text-white">Leaking radiator valve</div>
                  <div className="text-[10px] text-slate-300">Reported with 2 diagnostic photos</div>
                  <div className="pt-1 flex items-center justify-between text-[10px]">
                    <span className="text-emerald-400 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Gas Safe Assigned
                    </span>
                    <span className="text-slate-400">Dave M.</span>
                  </div>
                </div>

                {/* Action Tag */}
                <div className="bg-sky-500/10 rounded-xl p-2.5 border border-sky-400/20 flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-sky-400" />
                  <span className="text-[10px] text-sky-200">Engineer arrival scheduled: 10:30 AM</span>
                </div>
              </div>
            </div>
          </div>

          {/* CENTER DEVICE (Primary Upright Showcase Device) */}
          <div className="relative z-20 w-[310px] sm:w-[340px] transform transition-transform duration-500 hover:scale-[1.02]">
            
            {/* Phone Outer Chassis (Sleek Dark Obsidian with Dynamic Island) */}
            <div className="bg-slate-950 rounded-[48px] sm:rounded-[52px] p-3 shadow-2xl shadow-sky-950/20 border-4 border-slate-800 ring-8 ring-black/10">
              
              {/* Screen Area */}
              <div className="bg-gradient-to-b from-[#0F172A] to-[#0A192F] rounded-[40px] sm:rounded-[44px] p-4 sm:p-5 text-white space-y-4 border border-white/10 overflow-hidden relative text-left">
                
                {/* Dynamic Island Pill & Speaker Slit */}
                <div className="flex items-center justify-between px-2 pt-1 text-[11px] font-semibold text-slate-400">
                  <span>9:41</span>
                  <div className="w-20 h-5 bg-black rounded-full mx-auto flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-900 ring-1 ring-white/20" />
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3.5 h-2 border border-slate-400 rounded-xs flex items-center p-0.5">
                      <div className="w-full h-full bg-slate-300" />
                    </div>
                  </div>
                </div>

                {/* Top Location Bar */}
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#0084FF]" />
                    <span className="text-xs font-bold text-white tracking-tight">
                      Westminster, SW1 • Flat 4B
                    </span>
                  </div>
                  <div className="relative w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-slate-300">
                    <Bell className="w-3.5 h-3.5" />
                    <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#0084FF]" />
                  </div>
                </div>

                {/* Live Portfolio Health Card */}
                <div className="rounded-2xl bg-gradient-to-br from-[#0084FF] via-[#0066FF] to-[#0052CC] p-4 text-white shadow-lg space-y-1.5 relative overflow-hidden">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded-full">
                      Portfolio Health
                    </span>
                    <ShieldCheck className="w-4 h-4 text-sky-200" />
                  </div>
                  <h4 className="text-sm font-bold tracking-tight">100% Audit-Ready</h4>
                  <p className="text-[11px] text-blue-100 font-normal leading-snug">
                    All CP12 certs active • Rent collected on-time via Open Banking.
                  </p>
                </div>

                {/* Active Tenancy Card */}
                <div className="bg-white/5 rounded-2xl p-3 border border-white/10 space-y-2">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-slate-400 font-medium">Active Tenancy</span>
                    <span className="text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded-full text-[10px]">
                      Rent Paid
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white">Oliver Wright</div>
                      <div className="text-[10px] text-slate-400">Flat 4B • DPS Ref #82910</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold font-mono text-white">£1,850.00</div>
                      <div className="text-[9px] text-sky-300 font-medium">Open Banking</div>
                    </div>
                  </div>
                </div>

                {/* Top Contractors Nearby Row (Reference: "Top Doctor's Nearby") */}
                <div className="space-y-2 pt-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white">Certified Trades</span>
                    <span className="text-[11px] text-sky-400 font-medium cursor-pointer hover:underline flex items-center gap-0.5">
                      View All <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>

                  <div className="bg-slate-800/80 rounded-2xl p-2.5 flex items-center justify-between border border-slate-700">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center">
                        <Wrench className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white">Dave Miller</div>
                        <div className="text-[10px] text-slate-400">Gas Safe Heating • ★ 4.9</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-sky-400 bg-sky-500/10 px-2.5 py-1 rounded-full border border-sky-400/20">
                      Dispatch
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* RIGHT DEVICE (Recessed / Portfolio Yield & Rent Wave Chart) */}
          <div className="hidden md:block absolute right-4 lg:right-12 -translate-y-2 z-10 w-[260px] lg:w-[280px] transform rotate-3 transition-transform duration-500 hover:rotate-0 hover:scale-105">
            
            {/* Floating Top Badge 1: Direct Open Banking (Reference: "Online and Face to Face") */}
            <div className="absolute -top-7 -right-2 z-30 flex items-center gap-2 rounded-[16px] bg-[#0084FF] px-3.5 py-2 text-white">
              <Zap className="h-3.5 w-3.5" />
              <span className="font-[family-name:var(--font-nav)] text-[14px] font-medium">Open Banking</span>
            </div>

            {/* Floating Top Badge 2: 24/7 Trade Dispatch (Reference: "24/7 Service Available") */}
            <div className="absolute top-8 -right-4 z-30 flex items-center gap-2 rounded-[16px] border border-[#E6EAEF] bg-white px-3 py-2 shadow-[0_8px_24px_rgba(10,25,47,0.06)]">
              <Clock className="w-3.5 h-3.5 text-[#0084FF]" />
              <span className="text-[10px] font-bold text-[#0A192F]">24/7 Trade Dispatch</span>
            </div>

            {/* Right Phone Frame */}
            <div className="bg-[#0B132B] rounded-[44px] p-2.5 shadow-2xl border-2 border-slate-700/80 ring-8 ring-black/5 text-white text-left">
              <div className="bg-[#0F172A] rounded-[36px] p-4 pt-3 space-y-3.5 border border-white/10">
                {/* Screen Header */}
                <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-white/10 pb-2">
                  <span className="font-semibold text-white">Monthly Cashflow</span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-medium">99.4% On-time</span>
                </div>

                {/* Right Screen: Rent Revenue Curve (Reference: Heartrate wave curve in Curely) */}
                <div className="bg-slate-800/80 rounded-2xl p-3 border border-slate-700 space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Collected Rent</div>
                      <div className="text-base font-bold font-mono text-white">£28,450.00</div>
                    </div>
                    <div className="text-right text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" /> +12.4%
                    </div>
                  </div>

                  {/* SVG Wave Chart */}
                  <div className="h-14 w-full pt-1">
                    <svg viewBox="0 0 200 60" className="w-full h-full stroke-[#00C2FF] fill-none">
                      <path
                        d="M0 45 Q 30 50, 60 30 T 120 20 T 170 35 T 200 10"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M0 45 Q 30 50, 60 30 T 120 20 T 170 35 T 200 10 L 200 60 L 0 60 Z"
                        fill="url(#rentGradient)"
                        opacity="0.25"
                      />
                      <defs>
                        <linearGradient id="rentGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#00C2FF" />
                          <stop offset="100%" stopColor="#00C2FF" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>

                {/* Stat Pill */}
                <div className="bg-emerald-500/10 rounded-xl p-2.5 border border-emerald-400/20 flex items-center justify-between text-[10px]">
                  <span className="text-emerald-300 font-medium">DPS Protected Deposits</span>
                  <span className="text-white font-mono font-bold">100%</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
