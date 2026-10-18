'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

type SiteLinkProps = {
  href: string;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
};

export function SiteLink({ href, className, onClick, children }: SiteLinkProps) {
  const pathname = usePathname();

  return (
    <a
      href={href}
      className={className}
      onClick={(event) => {
        if (href === '/' && pathname === '/') {
          event.preventDefault();
          onClick?.();
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
        onClick?.();
      }}
    >
      {children}
    </a>
  );
}
