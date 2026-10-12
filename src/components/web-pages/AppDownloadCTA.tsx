'use client';

import React, { useState } from 'react';
import { useAppDispatch } from '@/redux/hooks';
import { openDownloadModal } from '@/redux/features/uiSlice';
import {
  Apple,
  Smartphone,
  QrCode,
  ShieldCheck,
  CheckCircle2,
  ArrowUpRight,
  Bell,
  CreditCard,
  KeyRound,
  Wrench,
  Sparkles,
} from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

export const AppDownloadCTA: React.FC = () => {
  const dispatch = useAppDispatch();
  const [activeTab, setActiveTab] = useState<'rent' | 'repairs' | 'compliance'>('rent');

  return (
    <section id="mobile-app" className="py-20 px-4 sm:px-6 lg:px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="rounded-[32px] sm:rounded-[44px] bg-[#FFFFFF] border border-[#E2E2D8] shadow-xl p-8 sm:p-12 lg:p-16 overflow-hidden relative">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#E4ED64]/30 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Column: Copy & Download Controls */}
            <div className="lg:col-span-7 space-y-6">
              <Badge variant="lime" dot>
                Native Mobile Suite
              </Badge>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B0F0E] leading-tight font-[family-name:var(--font-heading)]">
                Take complete property command{' '}
                <span className="text-zinc-500 font-normal">wherever you go.</span>
              </h2>

              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed max-w-xl">
                Experience the fastest, most reliable way to monitor tenancies, receive rent instantly, and dispatch certified contractors with real-time AI resolution.
              </p>

              {/* Download Buttons and QR Code Box */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                
                {/* Store Buttons */}
                <div className="space-y-3 flex-1">
                  <button
                    onClick={() => dispatch(openDownloadModal('apple'))}
                    className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-[#0B0F0E] text-white hover:bg-zinc-800 transition-all border border-black/10 group shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <Apple className="w-6 h-6 text-white" />
                      <div className="text-left">
                        <div className="text-[10px] text-zinc-400 leading-none">Download on the</div>
                        <div className="text-sm font-semibold text-white">Apple App Store</div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-[#E4ED64] transition-colors" />
                  </button>

                  <button
                    onClick={() => dispatch(openDownloadModal('google'))}
                    className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-[#0B0F0E] text-white hover:bg-zinc-800 transition-all border border-black/10 group shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <Smartphone className="w-6 h-6 text-[#E4ED64]" />
                      <div className="text-left">
                        <div className="text-[10px] text-zinc-400 leading-none">Get it on</div>
                        <div className="text-sm font-semibold text-white">Google Play Store</div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-[#E4ED64] transition-colors" />
                  </button>
                </div>

                {/* Instant QR Box */}
                <div className="p-4 rounded-2xl bg-[#F6F3EC] border border-[#E2E2D8] flex sm:flex-col items-center justify-center text-center gap-2">
                  <div className="w-20 h-20 bg-white p-1.5 rounded-xl shadow-sm border border-black/5 flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="w-full h-full text-[#0B0F0E]">
                      <path
                        fill="currentColor"
                        d="M10 10h30v30h-30zM15 15v20h20v-20zM22 22h6v6h-6zM60 10h30v30h-30zM65 15v20h20v-20zM72 22h6v6h-6zM10 60h30v30h-30zM15 65v20h20v-20zM22 72h6v6h-6zM50 15h5v5h-5zM50 30h5v15h-5zM65 50h10v5h-10zM50 65h15v5h-15zM75 65h15v5h-15zM60 75h5v15h-5zM80 80h10v10h-10z"
                      />
                    </svg>
                  </div>
                  <div className="text-[11px] font-bold text-zinc-700">Scan to Install</div>
                </div>

              </div>

              {/* Guarantees */}
              <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-zinc-500">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Free 30-Day Evaluation
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" /> Bank-Grade 256-Bit SSL
                </span>
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#CDD55A]" /> AI Autopilot Ready
                </span>
              </div>
            </div>

            {/* Right Column: Interactive Smartphone Mockup */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[340px] bg-[#121514] rounded-[48px] p-3 shadow-2xl border-4 border-[#2A302E] ring-1 ring-black/20">
                
                {/* Phone Notch / Island */}
                <div className="w-full bg-[#181C1B] rounded-[40px] p-4 text-white space-y-4">
                  <div className="w-24 h-4 bg-black rounded-full mx-auto" />

                  {/* App Screen Header */}
                  <div className="flex items-center justify-between pt-1">
                    <div>
                      <div className="text-[10px] text-zinc-400 font-medium">Portfolio Status</div>
                      <div className="text-sm font-bold text-white font-[family-name:var(--font-heading)]">
                        Landlord HQ Mobile
                      </div>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-[#E4ED64]">
                      <Bell className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Interactive Tab Switcher inside Mobile Screen */}
                  <div className="grid grid-cols-3 gap-1 bg-black/40 p-1 rounded-xl text-[10px] font-semibold text-center">
                    <button
                      onClick={() => setActiveTab('rent')}
                      className={`py-1.5 rounded-lg transition-all ${
                        activeTab === 'rent'
                          ? 'bg-[#E4ED64] text-[#0B0F0E] font-bold'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      Rent Auto
                    </button>
                    <button
                      onClick={() => setActiveTab('repairs')}
                      className={`py-1.5 rounded-lg transition-all ${
                        activeTab === 'repairs'
                          ? 'bg-[#E4ED64] text-[#0B0F0E] font-bold'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      AI Repairs
                    </button>
                    <button
                      onClick={() => setActiveTab('compliance')}
                      className={`py-1.5 rounded-lg transition-all ${
                        activeTab === 'compliance'
                          ? 'bg-[#E4ED64] text-[#0B0F0E] font-bold'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      Shield
                    </button>
                  </div>

                  {/* Tab Dynamic Content */}
                  {activeTab === 'rent' && (
                    <div className="space-y-3 animate-in fade-in">
                      <div className="p-3.5 rounded-2xl bg-gradient-to-br from-[#1F2422] to-[#141716] border border-white/10 space-y-2">
                        <div className="flex justify-between items-center text-[10px] text-zinc-400">
                          <span>This Month Collected</span>
                          <span className="text-[#E4ED64] font-bold">+100% on time</span>
                        </div>
                        <div className="text-2xl font-black text-white font-mono">
                          £14,850<span className="text-xs text-zinc-400 font-normal">.00</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-[#E4ED64] w-[99%]" />
                        </div>
                      </div>

                      <div className="space-y-2 text-xs">
                        <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <CreditCard className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-[11px] text-zinc-200">Flat 3B • Auto-Cleared</span>
                          </div>
                          <span className="text-[11px] font-mono text-[#E4ED64]">£1,650</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <CreditCard className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-[11px] text-zinc-200">Penthouse A • Standing Order</span>
                          </div>
                          <span className="text-[11px] font-mono text-[#E4ED64]">£2,400</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'repairs' && (
                    <div className="space-y-3 animate-in fade-in">
                      <div className="p-3 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
                        <div className="flex items-center justify-between text-[10px]">
                          <span className="text-amber-400 font-bold flex items-center gap-1">
                            <Wrench className="w-3 h-3" /> Urgent Boiler Triage
                          </span>
                          <span className="text-zinc-400 font-mono">14m ago</span>
                        </div>
                        <div className="text-xs font-semibold text-white">Flat 12 • Low Pressure Diagnostic</div>
                        <div className="text-[10px] text-zinc-400">
                          AI auto-matched Gas Safe Engineer Mike P.
                        </div>
                      </div>
                      <div className="p-3 rounded-xl bg-[#E4ED64]/10 border border-[#E4ED64]/30 text-[11px] text-[#E4ED64] flex items-center justify-between">
                        <span>Invoice Pre-Authorized</span>
                        <span className="font-bold">£140.00</span>
                      </div>
                    </div>
                  )}

                  {activeTab === 'compliance' && (
                    <div className="space-y-2.5 animate-in fade-in text-xs">
                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                        <span className="text-zinc-200">Gas Safety CP12</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400">Valid</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                        <span className="text-zinc-200">EICR Electrical Cert</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400">Valid</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                        <span className="text-zinc-200">EPC Energy Rating</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#E4ED64]/20 text-[#E4ED64]">Band B</span>
                      </div>
                    </div>
                  )}

                  {/* App Action Pill */}
                  <div className="pt-2">
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => dispatch(openDownloadModal())}
                      className="w-full text-xs font-bold"
                    >
                      Open Full Native App
                    </Button>
                  </div>

                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
