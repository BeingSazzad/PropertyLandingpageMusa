'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';
import { AppleAppStoreBadge, GooglePlayBadge } from '../ui/AppStoreBadges';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#0A192F] text-white py-12 sm:py-14 border-t border-sky-500/20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 space-y-8">
        
        {/* Main Row: Logo + Links + Standard Badges */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10 text-center lg:text-left">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-8 h-8 rounded-full overflow-hidden shadow-md shadow-sky-500/40 flex items-center justify-center shrink-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0066FF] via-[#00A3FF] to-[#67E8F9]" />
              <div className="absolute top-1 left-1.5 w-2.5 h-2.5 rounded-full bg-white/70 blur-[0.5px]" />
              <div className="absolute bottom-1 right-1.5 w-2 h-2 rounded-full bg-[#0040B8]/40 blur-[0.5px]" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-bold tracking-tight text-lg text-white font-[family-name:var(--font-heading)] leading-none">
                Landlord<span className="text-[#0084FF]">HQ</span>
              </span>
              <span className="text-[9px] font-semibold tracking-wider text-slate-400 uppercase mt-0.5">
                Property & Tenancy Operations
              </span>
            </div>
          </Link>

          {/* Simple Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-slate-300">
            <a href="#overview" className="hover:text-white transition-colors">Overview</a>
            <a href="#process" className="hover:text-white transition-colors">How It Works</a>
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="hover:text-white transition-colors">Packages</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          {/* Official App Badges with Standard Dimensions */}
          <div className="flex items-center gap-3">
            <AppleAppStoreBadge size="md" />
            <GooglePlayBadge size="md" />
          </div>

        </div>

        {/* Bottom Line: Copyright and Trust Reassurance */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Landlord HQ Technologies Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-slate-400 text-xs">
            <ShieldCheck className="w-4 h-4 text-[#0084FF]" />
            <span>Bank-Grade 256-Bit SSL • UK Property Compliance Standard</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
