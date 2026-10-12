'use client';

import React from 'react';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { openDownloadModal, toggleMobileMenu } from '@/redux/features/uiSlice';
import { ArrowUpRight, Menu, X, Sparkles, Building2 } from 'lucide-react';
import { Button } from '../ui/Button';

export const Navbar: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isMobileMenuOpen } = useAppSelector((state) => state.ui);

  return (
    <header className="sticky top-4 z-40 w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="glass-pill rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between shadow-lg shadow-black/[0.03] border border-white/80">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-full bg-[#0B0F0E] flex items-center justify-center text-[#E4ED64] transition-transform duration-300 group-hover:scale-105">
              <Building2 className="w-5 h-5 stroke-[1.8]" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-base text-[#0B0F0E] leading-none font-[family-name:var(--font-heading)]">
                LANDLORD<span className="text-[#8A8A8A] font-light">HQ</span>
              </span>
              <span className="text-[9px] font-semibold tracking-widest text-[#8A8A8A] uppercase">
                AI Living Group
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links (Reference Image Style: floating pill row) */}
          <nav className="hidden md:flex items-center gap-1 bg-black/[0.04] p-1 rounded-full border border-black/[0.03]">
            <Link
              href="#overview"
              className="px-4 py-1.5 rounded-full text-xs font-semibold text-zinc-700 hover:text-black hover:bg-white/80 transition-all"
            >
              Overview
            </Link>
            <Link
              href="#process"
              className="px-4 py-1.5 rounded-full text-xs font-semibold text-zinc-700 hover:text-black hover:bg-white/80 transition-all"
            >
              Our Process
            </Link>
            <Link
              href="#ecosystem"
              className="px-4 py-1.5 rounded-full text-xs font-semibold text-zinc-700 hover:text-black hover:bg-white/80 transition-all"
            >
              Ecosystem
            </Link>
            <Link
              href="#mobile-app"
              className="px-4 py-1.5 rounded-full text-xs font-semibold text-zinc-700 hover:text-black hover:bg-white/80 transition-all"
            >
              Mobile App
            </Link>
            <Link
              href="/login"
              className="px-4 py-1.5 rounded-full text-xs font-semibold text-zinc-700 hover:text-black hover:bg-white/80 transition-all"
            >
              Portal Login
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2">
            <Button
              variant="primary"
              size="sm"
              withArrow
              onClick={() => dispatch(openDownloadModal())}
              className="hidden sm:inline-flex shadow-sm hover:shadow"
            >
              Download App
            </Button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => dispatch(toggleMobileMenu())}
              className="md:hidden w-9 h-9 rounded-full bg-white/80 flex items-center justify-center text-zinc-800 hover:text-black border border-black/5"
              aria-label="Toggle Navigation"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 p-5 rounded-3xl bg-white shadow-xl border border-black/10 flex flex-col gap-3 animate-in fade-in slide-in-from-top-2">
            <Link
              href="#overview"
              onClick={() => dispatch(toggleMobileMenu())}
              className="p-2.5 rounded-xl text-sm font-medium text-zinc-800 hover:bg-[#F6F3EC]"
            >
              Overview
            </Link>
            <Link
              href="#process"
              onClick={() => dispatch(toggleMobileMenu())}
              className="p-2.5 rounded-xl text-sm font-medium text-zinc-800 hover:bg-[#F6F3EC]"
            >
              Our Process
            </Link>
            <Link
              href="#ecosystem"
              onClick={() => dispatch(toggleMobileMenu())}
              className="p-2.5 rounded-xl text-sm font-medium text-zinc-800 hover:bg-[#F6F3EC]"
            >
              Ecosystem
            </Link>
            <Link
              href="#mobile-app"
              onClick={() => dispatch(toggleMobileMenu())}
              className="p-2.5 rounded-xl text-sm font-medium text-zinc-800 hover:bg-[#F6F3EC]"
            >
              Mobile App
            </Link>
            <Link
              href="/login"
              onClick={() => dispatch(toggleMobileMenu())}
              className="p-2.5 rounded-xl text-sm font-medium text-zinc-800 hover:bg-[#F6F3EC]"
            >
              Portal Login
            </Link>
            <div className="pt-2 border-t border-black/5">
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
