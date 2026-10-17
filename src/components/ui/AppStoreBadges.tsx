'use client';

import React from 'react';
import { useAppDispatch } from '@/redux/hooks';
import { openDownloadModal } from '@/redux/features/uiSlice';
import { triggerSmartAppDownload } from '@/utils/deviceDownload';

interface AppStoreBadgeProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  onDark?: boolean;
}

const SIZE = {
  sm: {
    wrap: 'h-[36px] px-[9px] gap-[6px] rounded-[7px]',
    icon: 'h-[18px] w-[18px]',
    kicker: 'text-[8px]',
    title: 'text-[13px]',
  },
  md: {
    wrap: 'h-[40px] px-[10px] gap-[8px] rounded-[8px]',
    icon: 'h-[22px] w-[22px]',
    kicker: 'text-[9px]',
    title: 'text-[15px]',
  },
  lg: {
    wrap: 'h-[44px] px-[12px] gap-[8px] rounded-[9px]',
    icon: 'h-[24px] w-[24px]',
    kicker: 'text-[9px]',
    title: 'text-[16px]',
  },
} as const;

const badgeBase =
  'inline-flex shrink-0 cursor-pointer items-center justify-start bg-black text-white font-[family-name:var(--font-nav)] shadow-[0_1px_2px_rgba(0,0,0,0.18)] transition-opacity duration-150 hover:opacity-90 active:scale-[0.98]';

export const AppleAppStoreBadge: React.FC<AppStoreBadgeProps> = ({
  className = '',
  size = 'md',
  onDark = false,
}) => {
  const dispatch = useAppDispatch();
  const s = SIZE[size];

  return (
    <button
      type="button"
      onClick={() => triggerSmartAppDownload(() => dispatch(openDownloadModal('apple')))}
      className={`${badgeBase} ${s.wrap} ${onDark ? 'ring-1 ring-white/25' : ''} ${className}`}
      aria-label="Download Landlord HQ on the Apple App Store"
    >
      <svg viewBox="0 0 170 170" className={`${s.icon} shrink-0 fill-white`} aria-hidden>
        <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.08-7.58-7.79-11.67-14.13-5.74-8.89-10.15-18.91-13.23-30.06-3.08-11.15-4.63-21.72-4.63-31.7 0-14.9 3.8-27.18 11.41-36.84 7.61-9.66 17.15-14.59 28.62-14.79 5.34 0 11.13 1.48 17.37 4.43 6.24 2.95 10.11 4.5 11.61 4.65 1.76-.2 5.86-1.83 12.31-4.89 6.45-3.06 12.22-4.43 17.3-4.12 13.06.74 23.47 5.48 31.23 14.22-11.41 6.89-16.97 16.42-16.68 28.59.29 9.87 4.09 18.06 11.41 24.58 7.32 6.52 16.03 10.37 26.13 11.55-2.22 6.88-5.02 14.07-8.41 21.57zM119.22 33.58c0-7.39 2.65-14.24 7.95-20.55 5.3-6.31 11.83-10.31 19.59-12 1.05 7.62-1.39 14.88-7.32 21.78-5.93 6.9-12.67 10.63-20.22 10.77z" />
      </svg>
      <span className="flex flex-col items-start leading-none">
        <span className={`${s.kicker} font-medium text-white`}>Download on the</span>
        <span className={`${s.title} mt-[2px] font-semibold tracking-tight text-white`}>App Store</span>
      </span>
    </button>
  );
};

export const GooglePlayBadge: React.FC<AppStoreBadgeProps> = ({
  className = '',
  size = 'md',
  onDark = false,
}) => {
  const dispatch = useAppDispatch();
  const s = SIZE[size];

  return (
    <button
      type="button"
      onClick={() => triggerSmartAppDownload(() => dispatch(openDownloadModal('google')))}
      className={`${badgeBase} ${s.wrap} ${onDark ? 'ring-1 ring-white/25' : ''} ${className}`}
      aria-label="Get Landlord HQ on Google Play"
    >
      <svg viewBox="0 0 24 24" className={`${s.icon} shrink-0`} aria-hidden>
        <path fill="#34A853" d="M3 20.5V3.5c0-.59.34-1.11.84-1.35L13.69 12 3.84 21.85C3.34 21.6 3 21.09 3 20.5z" />
        <path fill="#FBBC04" d="M16.81 15.12 6.05 21.34l8.49-8.49 2.27 2.27z" />
        <path fill="#4285F4" d="M20.16 10.81c.34.27.59.69.59 1.19s-.22.9-.57 1.18l-2.29 1.32-2.5-2.5 2.5-2.5 2.27 1.31z" />
        <path fill="#EA4335" d="M6.05 2.66 16.81 8.88l-2.27 2.27L6.05 2.66z" />
      </svg>
      <span className="flex flex-col items-start leading-none">
        <span className={`${s.kicker} font-medium uppercase tracking-[0.08em] text-white`}>GET IT ON</span>
        <span className={`${s.title} mt-[2px] font-semibold tracking-tight text-white`}>Google Play</span>
      </span>
    </button>
  );
};

export const AppStoreBadges: React.FC<AppStoreBadgeProps> = ({
  className = '',
  size = 'md',
  onDark = false,
}) => {
  return (
    <div className={`flex flex-wrap items-center gap-2.5 ${className}`}>
      <AppleAppStoreBadge size={size} onDark={onDark} />
      <GooglePlayBadge size={size} onDark={onDark} />
    </div>
  );
};
