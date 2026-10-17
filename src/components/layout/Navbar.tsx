'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { openDownloadModal, toggleMobileMenu } from '@/redux/features/uiSlice';
import { ArrowRight, Menu, X } from 'lucide-react';
import { triggerSmartAppDownload } from '@/utils/deviceDownload';

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/#features', label: 'Features' },
  { href: '/contact', label: 'Contact' },
] as const;

export const Navbar: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isMobileMenuOpen } = useAppSelector((state) => state.ui);
  const pathname = usePathname();
  const [hash, setHash] = useState('');

  useEffect(() => {
    const sync = () => setHash(window.location.hash);
    sync();
    window.addEventListener('hashchange', sync);
    return () => window.removeEventListener('hashchange', sync);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/' && hash !== '#features';
    if (href === '/#features') return pathname === '/' && hash === '#features';
    return pathname === href;
  };

  return (
    <header className="sticky top-0 z-40 w-full px-4 pt-4 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1360px]">
        <div className="flex items-center justify-between rounded-full border border-white/80 bg-white/80 px-4 py-2.5 shadow-[0_8px_28px_rgba(10,25,47,0.06)] backdrop-blur-xl sm:px-6">
          <Link href="/" className="flex min-w-0 items-center gap-2.5">
            <span className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full shadow-[0_4px_12px_rgba(0,132,255,0.28)]">
              <span className="absolute inset-0 bg-gradient-to-tr from-[#0066FF] via-[#00A3FF] to-[#67E8F9]" />
              <span className="absolute top-1 left-1.5 h-2.5 w-2.5 rounded-full bg-white/70 blur-[0.5px]" />
            </span>
            <span className="font-[family-name:var(--font-display)] text-[20px] font-semibold leading-6 tracking-tight text-[#131515]">
              Landlord <span className="text-[#0084FF]">HQ</span>
            </span>
          </Link>

          <nav className="hidden items-center md:flex">
            {LINKS.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 font-[family-name:var(--font-nav)] text-[16px] font-medium leading-5 transition-colors after:absolute after:inset-x-4 after:bottom-0.5 after:h-0.5 after:rounded-full after:bg-[#0084FF] after:transition-opacity ${
                    active
                      ? 'text-[#131515] after:opacity-100'
                      : 'text-[#494d4d] after:opacity-0 hover:text-[#0084FF] hover:after:opacity-40'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => triggerSmartAppDownload(() => dispatch(openDownloadModal()))}
              className="hidden items-center gap-1.5 rounded-full bg-[#0084FF] px-5 py-2.5 font-[family-name:var(--font-nav)] text-[16px] font-medium leading-5 text-white transition-colors hover:bg-[#0070DE] sm:inline-flex"
            >
              Download App
              <ArrowRight className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={() => dispatch(toggleMobileMenu())}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E6EAEF] bg-white text-[#131515] md:hidden"
              aria-label="Toggle navigation"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen ? (
          <div className="mt-2 flex flex-col gap-1 rounded-[28px] border border-[#E6EAEF] bg-white p-3 shadow-[0_16px_40px_rgba(10,25,47,0.08)] md:hidden">
            {LINKS.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => dispatch(toggleMobileMenu())}
                  className={`rounded-2xl px-4 py-3 font-[family-name:var(--font-nav)] text-[16px] font-medium leading-5 ${
                    active ? 'bg-[#E8F3FF] text-[#131515]' : 'text-[#494d4d] hover:bg-[#F8FAFC]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <button
              type="button"
              onClick={() => {
                dispatch(toggleMobileMenu());
                triggerSmartAppDownload(() => dispatch(openDownloadModal()));
              }}
              className="mt-1 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-[#0084FF] px-5 py-3 font-[family-name:var(--font-nav)] text-[16px] font-medium text-white"
            >
              Download App
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        ) : null}
      </div>
    </header>
  );
};
