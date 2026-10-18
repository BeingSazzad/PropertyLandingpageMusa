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

const SOCIALS = [
  { label: 'X', href: 'https://x.com', icon: IconX },
  { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: IconLinkedIn },
  { label: 'Instagram', href: 'https://www.instagram.com', icon: IconInstagram },
  { label: 'Facebook', href: 'https://www.facebook.com', icon: IconFacebook },
] as const;

const linkClass =
  'font-[family-name:var(--font-nav)] text-[15px] font-normal leading-6 text-slate-400 transition-colors hover:text-white';

const columnTitleClass =
  'font-[family-name:var(--font-nav)] text-[15px] font-medium leading-6 text-white';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="w-full bg-[#F8FAFC]">
      <div className="relative overflow-visible rounded-t-[40px] bg-[#071324] px-5 pt-16 pb-8 sm:rounded-t-[64px] sm:px-10 sm:pt-20 sm:pb-10 lg:rounded-t-[80px] lg:px-16 lg:pt-24 lg:pb-12">
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-t-[40px] sm:rounded-t-[64px] lg:rounded-t-[80px]">
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#0084FF]/16 blur-3xl" />
          <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-[#00C2FF]/10 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1360px] space-y-16 sm:space-y-20 lg:space-y-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="space-y-8 lg:col-span-5">
              <div className="space-y-5">
                <h2 className="title-section title-section-inverse footer-headline max-w-[14ch]">
                  Keep every tenancy under control.
                </h2>
                <p className="text-body text-body-inverse max-w-sm">
                  Collect rent, book Gas Safe jobs, and keep every tenancy file in one place.
                </p>
                <AppStoreBadges onDark />
              </div>

              <div className="space-y-3">
                <p className="font-[family-name:var(--font-nav)] text-[14px] font-medium text-slate-400">
                  Social
                </p>
                <div className="flex items-center gap-4">
                  {SOCIALS.map(({ label, href, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className="text-white transition-colors hover:text-[#0084FF]"
                    >
                      <Icon className="h-[18px] w-[18px]" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 lg:pt-2">
              <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                <FooterColumn title="Main Pages" links={MAIN_PAGES} />
                <FooterColumn title="Resources" links={RESOURCES} />
                <FooterColumn title="Company" links={COMPANY} />
              </div>
            </div>
          </div>

          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden text-center">
            <WordmarkLockup />
            <div className="footer-wordmark-reflection flex w-full justify-center" aria-hidden>
              <WordmarkLockup />
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="absolute right-0 bottom-[38%] hidden h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-[#0084FF] sm:flex"
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
    <div className="mx-auto flex w-max shrink-0 items-end justify-center gap-3 sm:gap-5 lg:gap-7">
      <BrandMark className="mb-1 h-10 w-10 shrink-0 sm:mb-1.5 sm:h-16 sm:w-16 lg:h-[5.5rem] lg:w-[5.5rem]" />
      <p className="footer-wordmark overflow-visible whitespace-nowrap">Landlord HQ</p>
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
    <div className="space-y-4">
      <p className={columnTitleClass}>{title}</p>
      <ul className="space-y-3">
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

function IconX({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}

function IconLinkedIn({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function IconFacebook({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}
