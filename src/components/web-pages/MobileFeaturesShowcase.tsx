'use client';

import React from 'react';
import {
  CreditCard,
  Wrench,
  ShieldCheck,
  Lock,
  Building2,
  Bell,
  CheckCircle2,
  Clock,
  Flame,
} from 'lucide-react';

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
    <div className="rounded-2xl sm:rounded-3xl bg-white p-6 shadow-xl border border-white/60 space-y-3 text-left transition-transform duration-200 hover:-translate-y-1">
      <div className={`w-11 h-11 rounded-xl ${iconBg} ${iconColor} flex items-center justify-center shadow-xs`}>
        {icon}
      </div>
      <h3 className="text-base sm:text-lg font-bold text-[#0A192F] font-[family-name:var(--font-heading)] leading-snug">
        {title}
      </h3>
      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
        {description}
      </p>
    </div>
  );
};

export const MobileFeaturesShowcase: React.FC = () => {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-10 bg-white">
      <div className="max-w-[1400px] mx-auto space-y-16">
        
        {/* The Radiant Blue Container (Direct Alignment with Reference Image) */}
        <div className="rounded-[36px] sm:rounded-[48px] bg-gradient-to-b from-[#0072F5] via-[#1E78FF] to-[#3B92FE] p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden shadow-2xl shadow-blue-500/15">
          
          {/* Subtle Ambient Background Glows */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-sky-200/15 rounded-full blur-3xl pointer-events-none" />

          {/* Section Header */}
          <div className="text-center space-y-4 max-w-2xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-semibold tracking-wide">
              <span>✦</span> Features
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white font-[family-name:var(--font-heading)] leading-tight">
              Powerful Features for <br className="hidden sm:inline" />
              Every Tenancy
            </h2>

            <p className="text-sm sm:text-base text-blue-100 max-w-lg mx-auto font-normal leading-relaxed">
              Everything landlords, tenants, and certified contractors need to manage flats and building tenancies from anywhere.
            </p>
          </div>

          {/* 3-Column Centerpiece: Left 2 Cards + Phone Mockup + Right 2 Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center mt-12 sm:mt-16 relative z-10">
            
            {/* Left 2 Feature Cards */}
            <div className="lg:col-span-3 space-y-6">
              <FeatureCard
                icon={<CreditCard className="w-5 h-5" />}
                iconBg="bg-blue-50"
                iconColor="text-[#0072F5]"
                title="Effortless Renting"
                description="Collect rent via Open Banking directly into your landlord account with automated rent reconciliation."
              />

              <FeatureCard
                icon={<Wrench className="w-5 h-5" />}
                iconBg="bg-rose-50"
                iconColor="text-rose-500"
                title="24/7 Support"
                description="Tenants report issues with diagnostic photos; certified Gas Safe trades quote and repair fast."
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
                      <div className="text-sm font-bold text-white font-[family-name:var(--font-heading)]">
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
                iconBg="bg-amber-50"
                iconColor="text-amber-500"
                title="Trip Automation"
                description="Automated tenancy renewals, key registers, and inspection scheduling without paperwork."
              />

              <FeatureCard
                icon={<Lock className="w-5 h-5" />}
                iconBg="bg-purple-50"
                iconColor="text-purple-500"
                title="Secure Payments"
                description="Bank-grade 256-bit encryption for tenant deposits, rent collection, and contractor invoice payouts."
              />
            </div>

          </div>

        </div>

        {/* 4 Clean Stats (Direct Reference Matching) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center pt-2">
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#0A192F] font-[family-name:var(--font-heading)]">
              10K+
            </div>
            <div className="text-xs sm:text-sm text-slate-500 font-medium">
              Active Tenancies
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#0A192F] font-[family-name:var(--font-heading)]">
              99%
            </div>
            <div className="text-xs sm:text-sm text-slate-500 font-medium">
              On-Time Rent Rate
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#0A192F] font-[family-name:var(--font-heading)]">
              50%
            </div>
            <div className="text-xs sm:text-sm text-slate-500 font-medium">
              Faster Repairs
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#0A192F] font-[family-name:var(--font-heading)]">
              24/7
            </div>
            <div className="text-xs sm:text-sm text-slate-500 font-medium">
              Certified Trade Support
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
