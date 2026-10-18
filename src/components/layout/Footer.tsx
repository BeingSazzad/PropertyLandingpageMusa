'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUp } from 'lucide-react';
import { AppStoreBadges } from '@/components/ui/AppStoreBadges';
import { BrandMark } from '@/components/ui/BrandMark';

const MAIN_PAGES = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Features', href: '/#features' },
] as const;

const RESOURCES = [
  { label: 'Pricing', href: '/#pricing' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
] as const;

const COMPANY = [
  { label: 'Terms', href: '/terms' },
  { label: 'Privacy', href: '/privacy' },
] as const;

const linkClass =
  'font-[family-name:var(--font-nav)] text-[15px] font-normal leading-6 text-[#94A3B8] transition-colors hover:text-white';

const columnTitleClass =
  'font-[family-name:var(--font-nav)] text-[15px] font-medium leading-6 text-white';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="w-full bg-[#F8FAFC]">
      <div className="relative overflow-x-hidden overflow-y-visible rounded-t-[40px] bg-[#071324] px-5 pt-12 pb-20 sm:rounded-t-[64px] sm:px-10 sm:pt-16 sm:pb-24 lg:rounded-t-[80px] lg:px-16 lg:pt-16 lg:pb-28">
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-t-[40px] sm:rounded-t-[64px] lg:rounded-t-[80px]">
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#0084FF]/16 blur-3xl" />
          <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-[#00C2FF]/10 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1360px] space-y-10 sm:space-y-12 lg:space-y-14">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="space-y-5 lg:col-span-5">
              <h2 className="title-section title-section-inverse footer-headline max-w-[14ch]">
                Keep every tenancy under control.
              </h2>
              <p className="text-body text-body-inverse max-w-sm">
                Collect rent, book Gas Safe jobs, and keep every tenancy file in one place.
              </p>
              <AppStoreBadges onDark />
            </div>

            <div className="lg:col-span-7 lg:pt-1">
              <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                <FooterColumn title="Main Pages" links={MAIN_PAGES} />
                <FooterColumn title="Resources" links={RESOURCES} />
                <FooterColumn title="Company" links={COMPANY} />
              </div>
            </div>
          </div>

          <div className="relative w-full overflow-visible px-2 text-center sm:px-4">
            <div className="footer-wordmark-block">
              <WordmarkLockup />
              <div className="footer-wordmark-reflection" aria-hidden>
                <WordmarkLockup />
              </div>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="absolute right-0 top-[18%] hidden h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-[#0084FF] sm:flex"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

function WordmarkLockup() {
  return (
    <div className="footer-wordmark-lockup flex flex-row flex-nowrap items-center">
      <span className="footer-wordmark-mark">
        <BrandMark className="h-full w-full max-w-none" alt="" />
      </span>
      <p className="footer-wordmark">Landlord HQ</p>
    </div>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div className="space-y-3">
      <p className={columnTitleClass}>{title}</p>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            {link.href.startsWith('/') ? (
              <Link href={link.href} className={linkClass}>
                {link.label}
              </Link>
            ) : (
              <a href={link.href} className={linkClass}>
                {link.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
