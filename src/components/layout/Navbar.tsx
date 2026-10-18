'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { openDownloadModal, toggleMobileMenu } from '@/redux/features/uiSlice';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { triggerSmartAppDownload } from '@/utils/deviceDownload';
import { BrandMark } from '@/components/ui/BrandMark';

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
    <header className="sticky top-0 z-40 w-full border-b border-[#E6EAEF] bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-[1360px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-10">
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <BrandMark className="h-9 w-9" />
          <span className="font-[family-name:var(--font-display)] text-[20px] font-semibold leading-6 tracking-tight text-[#131515]">
            Landlord <span className="text-[#0084FF]">HQ</span>
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center rounded-full border border-[#E6EAEF] bg-[#F8FAFC] p-1.5 md:flex"
        >
          {LINKS.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-5 py-2 font-[family-name:var(--font-nav)] text-[15px] font-medium leading-5 transition-colors ${
                  active
                    ? 'bg-white text-[#131515] shadow-[0_1px_3px_rgba(10,25,47,0.08)]'
                    : 'text-[#494d4d] hover:text-[#131515]'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Button
            type="button"
            size="sm"
            onClick={() => triggerSmartAppDownload(() => dispatch(openDownloadModal()))}
            className="hidden sm:inline-flex"
          >
            Download App
          </Button>

          <button
            type="button"
            onClick={() => dispatch(toggleMobileMenu())}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E6EAEF] bg-white text-[#131515] md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen ? (
        <div className="border-t border-[#E6EAEF] bg-white px-5 py-5 md:hidden">
          <div className="mx-auto flex max-w-[1360px] flex-col gap-1">
            {LINKS.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => dispatch(toggleMobileMenu())}
                  className={`rounded-[16px] px-4 py-3.5 font-[family-name:var(--font-nav)] text-[16px] font-medium leading-5 ${
                    active ? 'bg-[#E8F3FF] text-[#131515]' : 'text-[#494d4d] hover:bg-[#F8FAFC]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Button
              type="button"
              className="mt-3 w-full justify-center"
              onClick={() => {
                dispatch(toggleMobileMenu());
                triggerSmartAppDownload(() => dispatch(openDownloadModal()));
              }}
            >
              Download App
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
};
