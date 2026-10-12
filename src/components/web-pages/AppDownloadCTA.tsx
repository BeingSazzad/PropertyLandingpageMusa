'use client';

import React, { useState } from 'react';
import { useAppDispatch } from '@/redux/hooks';
import { openDownloadModal } from '@/redux/features/uiSlice';
import {
  ShieldCheck,
  CheckCircle2,
  Bell,
  CreditCard,
  KeyRound,
  Wrench,
  Building2,
  Users,
} from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { AppleAppStoreBadge, GooglePlayBadge } from '../ui/AppStoreBadges';

export const AppDownloadCTA: React.FC = () => {
  const dispatch = useAppDispatch();
  const [activeTab, setActiveTab] = useState<'landlord' | 'tenant' | 'contractor'>('landlord');

  return (
    <section id="mobile-app" className="py-20 px-4 sm:px-6 lg:px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="rounded-[32px] sm:rounded-[44px] bg-white border border-slate-200 shadow-xl p-8 sm:p-12 lg:p-16 overflow-hidden relative">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#0084FF]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Column: Copy & Official Store Download Controls */}
            <div className="lg:col-span-7 space-y-6">
              <Badge variant="blue" dot>
                Landlord HQ Mobile Suite
              </Badge>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0A192F] leading-tight font-[family-name:var(--font-heading)]">
                Manage buildings, flats & tenancies{' '}
                <span className="text-slate-500 font-normal">from your phone.</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
                Simple monthly subscription fee for complete property control. Track rent auto-payments, store tenancy agreements & key registers, and dispatch certified contractors for instant repairs.
              </p>

              {/* Standard Official App Store & Google Play Badges */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                
                {/* Official Store Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 flex-1">
                  <AppleAppStoreBadge className="w-full sm:w-auto flex-1 justify-center" size="lg" />
                  <GooglePlayBadge className="w-full sm:w-auto flex-1 justify-center" size="lg" />
                </div>

                {/* Instant QR Box */}
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex sm:flex-col items-center justify-center text-center gap-2">
                  <div className="w-16 h-16 bg-white p-1 rounded-xl shadow-sm border border-black/5 flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="w-full h-full text-[#0B0F0E]">
                      <path
                        fill="currentColor"
                        d="M10 10h30v30h-30zM15 15v20h20v-20zM22 22h6v6h-6zM60 10h30v30h-30zM65 15v20h20v-20zM72 22h6v6h-6zM10 60h30v30h-30zM15 65v20h20v-20zM22 72h6v6h-6zM50 15h5v5h-5zM50 30h5v15h-5zM65 50h10v5h-10zM50 65h15v5h-15zM75 65h15v5h-15zM60 75h5v15h-5zM80 80h10v10h-10z"
                      />
                    </svg>
                  </div>
                  <div className="text-[10px] font-bold text-zinc-700">Scan to Install</div>
                </div>

              </div>

              {/* Trust Guarantees */}
              <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-zinc-500">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Transparent Subscription
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" /> Bank-Grade 256-Bit SSL
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#2563EB]" /> Gas Safe & EPC Certified
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
                      <div className="text-[10px] text-zinc-400 font-medium">Landlord HQ App</div>
                      <div className="text-sm font-bold text-white font-[family-name:var(--font-heading)]">
                        12 Park Lane, London
                      </div>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-[#60A5FA]">
                      <Bell className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Persona Tab Switcher */}
                  <div className="grid grid-cols-3 gap-1 bg-black/40 p-1 rounded-xl text-[10px] font-semibold text-center">
                    <button
                      onClick={() => setActiveTab('landlord')}
                      className={`py-1.5 rounded-lg transition-all cursor-pointer ${
                        activeTab === 'landlord'
                          ? 'bg-[#2563EB] text-white font-bold'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      Landlord
                    </button>
                    <button
                      onClick={() => setActiveTab('tenant')}
                      className={`py-1.5 rounded-lg transition-all cursor-pointer ${
                        activeTab === 'tenant'
                          ? 'bg-[#2563EB] text-white font-bold'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      Tenant
                    </button>
                    <button
                      onClick={() => setActiveTab('contractor')}
                      className={`py-1.5 rounded-lg transition-all cursor-pointer ${
                        activeTab === 'contractor'
                          ? 'bg-[#2563EB] text-white font-bold'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      Contractor
                    </button>
                  </div>

                  {/* Tab Dynamic Content */}
                  {activeTab === 'landlord' && (
                    <div className="space-y-3 animate-in fade-in">
                      <div className="p-3.5 rounded-2xl bg-gradient-to-br from-[#1F2422] to-[#141716] border border-white/10 space-y-2">
                        <div className="flex justify-between items-center text-[10px] text-zinc-400">
                          <span>Monthly Rent (4 Flats)</span>
                          <span className="text-[#60A5FA] font-bold">100% on time</span>
                        </div>
                        <div className="text-2xl font-black text-white font-mono">
                          £8,710<span className="text-xs text-zinc-400 font-normal">.00</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-[#2563EB] w-[100%]" />
                        </div>
                      </div>

                      <div className="space-y-2 text-xs">
                        <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Building2 className="w-3.5 h-3.5 text-blue-400" />
                            <span className="text-[11px] text-zinc-200">Flat 1 • £2,450/mo</span>
                          </div>
                          <span className="text-[10px] text-emerald-400 font-medium">Paid</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Building2 className="w-3.5 h-3.5 text-blue-400" />
                            <span className="text-[11px] text-zinc-200">Flat 2B • £1,850/mo</span>
                          </div>
                          <span className="text-[10px] text-emerald-400 font-medium">Paid</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'tenant' && (
                    <div className="space-y-3 animate-in fade-in">
                      <div className="p-3.5 rounded-2xl bg-gradient-to-br from-[#1F2422] to-[#141716] border border-white/10 space-y-1.5">
                        <div className="flex justify-between items-center text-[10px] text-zinc-400">
                          <span>Resident Profile</span>
                          <span className="text-emerald-400 font-semibold">Active Lease</span>
                        </div>
                        <div className="text-sm font-bold text-white">Sarah Jenkins • Flat 2B</div>
                        <div className="text-[11px] text-zinc-300">
                          Next rent: <span className="font-mono text-[#60A5FA]">£1,850.00</span> (Direct Debit)
                        </div>
                      </div>

                      <div className="space-y-2 text-xs">
                        <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <KeyRound className="w-3.5 h-3.5 text-[#60A5FA]" />
                            <span className="text-[11px] text-zinc-200">2 Yale Keys Issued</span>
                          </div>
                          <span className="text-[10px] text-zinc-400 font-medium">Logged</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-[11px] text-zinc-200">Deposit Protected (DPS)</span>
                          </div>
                          <span className="text-[10px] text-zinc-400 font-mono">£2,100</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'contractor' && (
                    <div className="space-y-3 animate-in fade-in">
                      <div className="p-3 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
                        <div className="flex items-center justify-between text-[10px]">
                          <span className="text-[#60A5FA] font-bold flex items-center gap-1">
                            <Wrench className="w-3 h-3" /> Job #104 Work Order
                          </span>
                          <span className="text-zinc-400 font-mono">Flat 2B</span>
                        </div>
                        <div className="text-xs font-semibold text-white">Low Boiler Pressure Repair</div>
                        <div className="text-[10px] text-zinc-400">
                          Assigned: Mike Plumber (Gas Safe #582104)
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-[#2563EB]/15 border border-[#2563EB]/40 text-[11px] text-[#93C5FD] flex items-center justify-between">
                        <span>Invoice Approved</span>
                        <span className="font-bold text-white">£140.00 Payout</span>
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
                      Download Native App
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
