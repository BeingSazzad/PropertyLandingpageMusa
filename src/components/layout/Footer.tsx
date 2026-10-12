'use client';

import React from 'react';
import Link from 'next/link';
import { useAppDispatch } from '@/redux/hooks';
import { openDownloadModal } from '@/redux/features/uiSlice';
import { Building2, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '../ui/Button';
import { AppleAppStoreBadge, GooglePlayBadge } from '../ui/AppStoreBadges';

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
              Complete property, building & tenancy management operations with a simple monthly subscription. Connecting landlords, residents, and certified contractors across the UK.
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
            <a href="#pricing">
              <Button variant="dark" size="md">
                View Packages
              </Button>
            </a>
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
              <li><a href="#process" className="hover:text-white transition-colors">Building & Unit Setup</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Tenancy Leases & DPS</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Direct Rent Auto-Pay</a></li>
              <li><a href="#ecosystem" className="hover:text-white transition-colors">Gas Safe & EPC Tracker</a></li>
              <li><a href="#ecosystem" className="hover:text-white transition-colors">Contractor Dispatch Hub</a></li>
            </ul>
          </div>

          {/* Col 2: Solutions */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 font-[family-name:var(--font-heading)]">
              Navigation
            </h4>
            <ul className="space-y-2 text-zinc-400">
              <li><a href="#overview" className="hover:text-white transition-colors">Platform Overview</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Subscription Packages</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Frequently Asked Questions</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Support</a></li>
            </ul>
          </div>

          {/* Col 3: Contact & Support */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 font-[family-name:var(--font-heading)]">
              UK Office & Contact
            </h4>
            <ul className="space-y-2 text-zinc-400">
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#60A5FA]" />
                <a href="mailto:support@landlordhq.co.uk" className="hover:text-white transition-colors">support@landlordhq.co.uk</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#60A5FA]" />
                <span>+44 20 7946 0912</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#60A5FA]" />
                <span>London, United Kingdom</span>
              </li>
              <li>
                <span className="text-[11px] text-zinc-500">Mon-Fri: 8:00 AM - 6:00 PM GMT</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Stores & Downloads */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 font-[family-name:var(--font-heading)]">
              Official Mobile Apps
            </h4>
            <p className="text-zinc-400 text-[11px]">
              Download Landlord HQ for iOS and Android:
            </p>
            <div className="space-y-2.5 pt-1">
              <AppleAppStoreBadge className="w-full justify-center" size="sm" />
              <GooglePlayBadge className="w-full justify-center" size="sm" />
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
              <ShieldCheck className="w-4 h-4 text-[#60A5FA]" /> Bank-Grade 256-Bit SSL
            </span>
            <span>•</span>
            <span>UK Property Compliance Standard</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
