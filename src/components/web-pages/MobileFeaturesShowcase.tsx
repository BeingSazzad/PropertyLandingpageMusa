'use client';

import React from 'react';
import {
  CreditCard,
  Wrench,
  ShieldCheck,
  Lock,
  Bell,
  CheckCircle2,
  Clock,
  Flame,
} from 'lucide-react';
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
    <div className="space-y-3 rounded-[24px] border border-[#E6EAEF] bg-white p-6 text-left">
      <div className={`flex h-11 w-11 items-center justify-center rounded-[16px] ${iconBg} ${iconColor}`}>
        {icon}
      </div>
      <h3 className="font-[family-name:var(--font-display)] text-[22px] font-semibold leading-7 text-[#131515]">
        {title}
      </h3>
      <p className="text-body">
        {description}
      </p>
    </div>
  );
};

export const MobileFeaturesShowcase: React.FC = () => {
  return (
    <section id="features" className="bg-[#F8FAFC] px-4 py-20 sm:px-6 lg:px-10">
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

          <div className="mt-12 grid grid-cols-1 items-center gap-8 lg:mt-4 lg:grid-cols-12 lg:gap-10">
            
            {/* Left 2 Feature Cards */}
            <div className="lg:col-span-3 space-y-6">
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

            {/* Center Phone Mockup */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-[340px] bg-slate-950 rounded-[48px] p-3 shadow-2xl border-4 border-slate-900 ring-4 ring-black/15">
                <div className="bg-[#0F172A] rounded-[40px] p-4 text-white space-y-3.5 border border-white/10">
                  
                  {/* Dynamic Island Notch */}
                  <div className="w-24 h-4 bg-black rounded-full mx-auto" />

                  {/* App Screen Header */}
                  <div className="flex items-center justify-between pt-1 border-b border-white/10 pb-2.5">
                    <div>
                      <div className="text-[10px] text-blue-300 font-semibold uppercase tracking-wider">
                        Landlord HQ App
                      </div>
                      <div className="text-sm font-bold text-white font-[family-name:var(--font-display)]">
                        12 Park Lane, London
                      </div>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-blue-300">
                      <Bell className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Rent Card */}
                  <div className="p-3.5 rounded-2xl bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-white/10 space-y-2">
                    <div className="flex justify-between items-center text-[11px] text-slate-300">
                      <span>Monthly Rent (Flat 2B)</span>
                      <span className="text-emerald-400 font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> Paid
                      </span>
                    </div>
                    <div className="text-2xl font-black text-white font-mono">
                      £2,450<span className="text-xs text-slate-400 font-normal">.00</span>
                    </div>
                    <div className="text-[10px] text-slate-400 flex items-center justify-between">
                      <span>Direct via Open Banking</span>
                      <span>Next due: 1st Nov</span>
                    </div>
                  </div>

                  {/* Active Tenancy */}
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1.5">
                    <div className="flex justify-between items-center text-[10px]">
                      <span className="text-slate-400">Resident Tenant</span>
                      <span className="text-blue-300 font-semibold">AST Active</span>
                    </div>
                    <div className="text-xs font-bold text-white">
                      Sarah Jenkins • Flat 2B
                    </div>
                    <div className="text-[10px] text-slate-400">
                      Deposit: £2,826 held in DPS (#DPS-8912)
                    </div>
                  </div>

                  {/* Contractor Dispatch Ticket */}
                  <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-400/20 space-y-1.5">
                    <div className="flex justify-between items-center text-[10px]">
                      <span className="text-blue-300 font-semibold flex items-center gap-1">
                        <Flame className="w-3 h-3 text-amber-400" /> Gas Safe CP12
                      </span>
                      <span className="text-emerald-300 font-bold">Audit-Ready</span>
                    </div>
                    <div className="text-xs font-semibold text-white">
                      Boiler Inspected by Mike Peterson (#582104)
                    </div>
                    <div className="text-[10px] text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> Valid until: 14 Oct 2027
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Right 2 Feature Cards */}
            <div className="lg:col-span-3 space-y-6">
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

        {/* 4 Clean Stats (Direct Reference Matching) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center pt-2">
          <div className="space-y-1">
            <div className="font-[family-name:var(--font-display)] text-[36px] font-semibold leading-none text-[#131515] sm:text-[40px]">
              10K+
            </div>
            <div className="font-[family-name:var(--font-nav)] text-[16px] leading-6 text-[#494d4d]">
              Active Tenancies
            </div>
          </div>

          <div className="space-y-1">
            <div className="font-[family-name:var(--font-display)] text-[36px] font-semibold leading-none text-[#131515] sm:text-[40px]">
              99.4%
            </div>
            <div className="font-[family-name:var(--font-nav)] text-[16px] leading-6 text-[#494d4d]">
              On-Time Rent Collection
            </div>
          </div>

          <div className="space-y-1">
            <div className="font-[family-name:var(--font-display)] text-[36px] font-semibold leading-none text-[#131515] sm:text-[40px]">
              14 Mins
            </div>
            <div className="font-[family-name:var(--font-nav)] text-[16px] leading-6 text-[#494d4d]">
              Avg Trade Dispatch
            </div>
          </div>

          <div className="space-y-1">
            <div className="font-[family-name:var(--font-display)] text-[36px] font-semibold leading-none text-[#131515] sm:text-[40px]">
              4.9 / 5
            </div>
            <div className="font-[family-name:var(--font-nav)] text-[16px] leading-6 text-[#494d4d]">
              UK Landlord Rating
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
