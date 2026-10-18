'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setMobileMenuOpen, toggleMobileMenu } from '@/redux/features/uiSlice';
import { Menu, X } from 'lucide-react';
import { BrandCtaLink } from '@/components/ui/Button';
import { BrandMark } from '@/components/ui/BrandMark';
import { SiteLink } from '@/components/layout/SiteLink';

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/#features', label: 'Features' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact' },
] as const;

export const Navbar: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isMobileMenuOpen } = useAppSelector((state) => state.ui);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    if (href.startsWith('/#')) return false;
    return pathname === href;
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#E6EAEF] bg-white">
      <div className="mx-auto flex h-[72px] max-w-[1360px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-10">
        <SiteLink href="/" className="flex shrink-0 items-center gap-2.5">
          <BrandMark className="h-9 w-9" />
          <span className="font-[family-name:var(--font-display)] text-[20px] font-semibold leading-6 tracking-tight text-[#0A192F]">
            Landlord <span className="text-[#0084FF]">HQ</span>
          </span>
        </SiteLink>

        <nav
          aria-label="Primary"
          className="hidden items-center rounded-full border border-[#E6EAEF] bg-[#F8FAFC] p-1.5 md:flex"
        >
          {LINKS.map((link) => {
            const active = isActive(link.href);

            return (
              <SiteLink
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 font-[family-name:var(--font-nav)] text-[15px] font-medium leading-5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0084FF] ${
                  active
                    ? 'bg-white text-[#0A192F] shadow-[0_1px_3px_rgba(10,25,47,0.08)]'
                    : 'text-[#5B6775] hover:text-[#0A192F]'
                }`}
              >
                {link.label}
              </SiteLink>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <BrandCtaLink href="/contact" size="sm" className="hidden sm:inline-flex">
            Get started
          </BrandCtaLink>

          <button
            type="button"
            onClick={() => dispatch(toggleMobileMenu())}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E6EAEF] bg-[#F8FAFC] text-[#0A192F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0084FF] md:hidden"
            aria-label={isMobileMenuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen ? (
        <div id="mobile-navigation" className="border-t border-[#E6EAEF] bg-white px-5 py-5 md:hidden">
          <div className="mx-auto flex max-w-[1360px] flex-col gap-1">
            {LINKS.map((link) => {
              const active = isActive(link.href);

              return (
                <SiteLink
                  key={link.href}
                  href={link.href}
                  onClick={() => dispatch(setMobileMenuOpen(false))}
                  className={`rounded-[16px] px-4 py-3.5 font-[family-name:var(--font-nav)] text-[16px] font-medium leading-5 ${
                    active ? 'bg-[#E8F3FF] text-[#0A192F]' : 'text-[#5B6775] hover:bg-[#F8FAFC] hover:text-[#0A192F]'
                  }`}
                >
                  {link.label}
                </SiteLink>
              );
            })}
            <BrandCtaLink href="/contact" className="mt-3 w-full justify-center">
              Get started
            </BrandCtaLink>
          </div>
        </div>
      ) : null}
    </header>
  );
};
