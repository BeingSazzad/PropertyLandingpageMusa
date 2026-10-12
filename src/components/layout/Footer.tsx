'use client';

import React from 'react';
import Link from 'next/link';
import { useAppDispatch } from '@/redux/hooks';
import { openDownloadModal } from '@/redux/features/uiSlice';
import { Building2, ArrowUpRight, ShieldCheck, Apple, Smartphone } from 'lucide-react';
import { Button } from '../ui/Button';

export const Footer: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <footer className="w-full bg-[#121514] text-white pt-16 pb-12 mt-20 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Top Row: Brand & CTA */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/10">
          <div className="space-y-3 max-w-md">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#2563EB] flex items-center justify-center text-white">
                <Building2 className="w-5 h-5 stroke-[1.8]" />
              </div>
              <span className="font-bold tracking-tight text-xl text-white font-[family-name:var(--font-heading)]">
                LANDLORD<span className="text-[#8A8A8A] font-light">HQ</span>
              </span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Complete property and tenancy management operations. Connecting landlords, tenants, and certified contractors across the UK.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button
              variant="primary"
              size="md"
              withArrow
              onClick={() => dispatch(openDownloadModal())}
            >
              Get Mobile App
            </Button>
            <Link href="/login">
              <Button variant="dark" size="md">
                Landlord Portal
              </Button>
            </Link>
          </div>
        </div>

        {/* Middle Grid: Navigation Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 py-12 text-xs">
          
          {/* Col 1: Platform */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 font-[family-name:var(--font-heading)]">
              Platform Modules
            </h4>
            <ul className="space-y-2 text-zinc-400">
              <li><Link href="#process" className="hover:text-white transition-colors">Tenancy Onboarding & Leases</Link></li>
              <li><Link href="#process" className="hover:text-white transition-colors">Direct Rent Auto-Pay</Link></li>
              <li><Link href="#ecosystem" className="hover:text-white transition-colors">Gas Safe & EPC Compliance</Link></li>
              <li><Link href="#ecosystem" className="hover:text-white transition-colors">Contractor Dispatch Hub</Link></li>
              <li><Link href="#overview" className="hover:text-white transition-colors">Key & Inventory Register</Link></li>
            </ul>
          </div>

          {/* Col 2: Solutions */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 font-[family-name:var(--font-heading)]">
              Solutions By Role
            </h4>
            <ul className="space-y-2 text-zinc-400">
              <li><Link href="/agent-dashboard" className="hover:text-white transition-colors">For Portfolio Landlords</Link></li>
              <li><Link href="/user-dashboard" className="hover:text-white transition-colors">For Residents & Tenants</Link></li>
              <li><Link href="/contractor-hub" className="hover:text-white transition-colors">For Certified Contractors</Link></li>
              <li><Link href="/agencies" className="hover:text-white transition-colors">Letting Agencies</Link></li>
              <li><Link href="/enterprise" className="hover:text-white transition-colors">Build-to-Rent Groups</Link></li>
            </ul>
          </div>

          {/* Col 3: Legal & Standards */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 font-[family-name:var(--font-heading)]">
              Compliance & Security
            </h4>
            <ul className="space-y-2 text-zinc-400">
              <li><Link href="/privacy" className="hover:text-white transition-colors">Deposit Protection Sync</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">GDPR & Data Vault</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Open Banking Certified</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Col 4: Stores & Downloads */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 font-[family-name:var(--font-heading)]">
              App Store Releases
            </h4>
            <p className="text-zinc-400 text-[11px]">
              Download the official Landlord HQ mobile suite for iOS and Android:
            </p>
            <div className="space-y-2 pt-1">
              <button
                onClick={() => dispatch(openDownloadModal('apple'))}
                className="w-full flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-all text-left group cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Apple className="w-4 h-4 text-white" />
                  <span className="font-semibold text-xs">iOS App Store</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-[#3B82F6]" />
              </button>

              <button
                onClick={() => dispatch(openDownloadModal('google'))}
                className="w-full flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-all text-left group cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-[#3B82F6]" />
                  <span className="font-semibold text-xs">Google Play</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-[#3B82F6]" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © {new Date().getFullYear()} Landlord HQ Technologies Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-zinc-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#3B82F6]" /> Bank-Grade Encryption
            </span>
            <span>•</span>
            <span>UK Compliance Framework</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
