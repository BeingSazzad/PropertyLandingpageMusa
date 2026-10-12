'use client';

import React from 'react';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { openDownloadModal, toggleMobileMenu } from '@/redux/features/uiSlice';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';

export const Navbar: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isMobileMenuOpen } = useAppSelector((state) => state.ui);

  return (
    <header className="sticky top-4 z-40 w-full px-4 sm:px-6 lg:px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="glass-pill rounded-full px-5 sm:px-8 py-3 flex items-center justify-between shadow-lg shadow-sky-950/5 border border-white/90">
          
          {/* Brand Logo with 3D Glowing Sphere (Matching Reference Image) */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-8 h-8 rounded-full overflow-hidden shadow-md shadow-sky-500/40 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0066FF] via-[#00A3FF] to-[#67E8F9]" />
              <div className="absolute top-1 left-1.5 w-2.5 h-2.5 rounded-full bg-white/70 blur-[0.5px]" />
              <div className="absolute bottom-1 right-1.5 w-2 h-2 rounded-full bg-[#0040B8]/40 blur-[0.5px]" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-base text-[#0A192F] leading-none font-[family-name:var(--font-heading)]">
                Landlord<span className="text-[#0084FF]">HQ</span>
              </span>
              <span className="text-[9px] font-semibold tracking-wider text-slate-400 uppercase">
                Property & Tenancy
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/70 p-1 rounded-full border border-slate-200/60">
            <Link
              href="#overview"
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-600 hover:text-[#0A192F] hover:bg-white transition-all"
            >
              Overview
            </Link>
            <Link
              href="#process"
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-600 hover:text-[#0A192F] hover:bg-white transition-all"
            >
              How It Works
            </Link>
            <Link
              href="#ecosystem"
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-600 hover:text-[#0A192F] hover:bg-white transition-all"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-600 hover:text-[#0A192F] hover:bg-white transition-all"
            >
              Packages
            </Link>
            <Link
              href="#faq"
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-600 hover:text-[#0A192F] hover:bg-white transition-all"
            >
              FAQ
            </Link>
            <Link
              href="#contact"
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-600 hover:text-[#0A192F] hover:bg-white transition-all"
            >
              Contact
            </Link>
          </nav>

          {/* Action CTAs (Reference "Connect Now" style) */}
          <div className="flex items-center gap-2">
            <Button
              variant="primary"
              size="sm"
              withArrow
              onClick={() => dispatch(openDownloadModal())}
              className="hidden sm:inline-flex"
            >
              Download App
            </Button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => dispatch(toggleMobileMenu())}
              className="md:hidden w-9 h-9 rounded-full bg-white flex items-center justify-center text-slate-700 hover:text-black border border-slate-200 shadow-xs"
              aria-label="Toggle Navigation"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 p-5 rounded-3xl bg-white shadow-xl border border-slate-200/80 flex flex-col gap-2.5 animate-in fade-in slide-in-from-top-2">
            <Link
              href="#overview"
              onClick={() => dispatch(toggleMobileMenu())}
              className="p-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-sky-50"
            >
              Overview
            </Link>
            <Link
              href="#process"
              onClick={() => dispatch(toggleMobileMenu())}
              className="p-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-sky-50"
            >
              How It Works
            </Link>
            <Link
              href="#ecosystem"
              onClick={() => dispatch(toggleMobileMenu())}
              className="p-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-sky-50"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              onClick={() => dispatch(toggleMobileMenu())}
              className="p-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-sky-50"
            >
              Packages & Pricing
            </Link>
            <Link
              href="#faq"
              onClick={() => dispatch(toggleMobileMenu())}
              className="p-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-sky-50"
            >
              FAQ
            </Link>
            <Link
              href="#contact"
              onClick={() => dispatch(toggleMobileMenu())}
              className="p-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-sky-50"
            >
              Contact Support
            </Link>
            <div className="pt-2 border-t border-slate-100">
              <Button
                variant="primary"
                size="md"
                withArrow
                onClick={() => {
                  dispatch(toggleMobileMenu());
                  dispatch(openDownloadModal());
                }}
                className="w-full"
              >
                Download App
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
