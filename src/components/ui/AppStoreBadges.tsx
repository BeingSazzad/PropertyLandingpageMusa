'use client';

import React from 'react';
import { useAppDispatch } from '@/redux/hooks';
import { openDownloadModal } from '@/redux/features/uiSlice';

interface AppStoreBadgeProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const AppleAppStoreBadge: React.FC<AppStoreBadgeProps> = ({
  className = '',
  size = 'md',
}) => {
  const dispatch = useAppDispatch();

  const sizeClasses = {
    sm: 'h-10 px-3.5 gap-2.5',
    md: 'h-12 px-4 gap-3',
    lg: 'h-14 px-5 gap-3.5',
  };

  return (
    <button
      type="button"
      onClick={() => dispatch(openDownloadModal('apple'))}
      className={`inline-flex items-center justify-start rounded-xl bg-black text-white border border-white/20 hover:border-white/40 hover:bg-zinc-900 transition-all duration-200 shadow-md group cursor-pointer ${sizeClasses[size]} ${className}`}
      aria-label="Download Landlord HQ on the Apple App Store"
    >
      {/* Official Apple Logo SVG */}
      <svg
        viewBox="0 0 170 170"
        className="w-5 h-5 sm:w-6 sm:h-6 fill-white shrink-0 group-hover:scale-105 transition-transform"
      >
        <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.08-7.58-7.79-11.67-14.13-5.74-8.89-10.15-18.91-13.23-30.06-3.08-11.15-4.63-21.72-4.63-31.7 0-14.9 3.8-27.18 11.41-36.84 7.61-9.66 17.15-14.59 28.62-14.79 5.34 0 11.13 1.48 17.37 4.43 6.24 2.95 10.11 4.5 11.61 4.65 1.76-.2 5.86-1.83 12.31-4.89 6.45-3.06 12.22-4.43 17.3-4.12 13.06.74 23.47 5.48 31.23 14.22-11.41 6.89-16.97 16.42-16.68 28.59.29 9.87 4.09 18.06 11.41 24.58 7.32 6.52 16.03 10.37 26.13 11.55-2.22 6.88-5.02 14.07-8.41 21.57zM119.22 33.58c0-7.39 2.65-14.24 7.95-20.55 5.3-6.31 11.83-10.31 19.59-12 1.05 7.62-1.39 14.88-7.32 21.78-5.93 6.9-12.67 10.63-20.22 10.77z" />
      </svg>
      <div className="flex flex-col text-left leading-none">
        <span className="text-[9px] sm:text-[10px] text-zinc-300 font-medium">Download on the</span>
        <span className="text-xs sm:text-[15px] font-bold text-white tracking-tight mt-0.5">App Store</span>
      </div>
    </button>
  );
};

export const GooglePlayBadge: React.FC<AppStoreBadgeProps> = ({
  className = '',
  size = 'md',
}) => {
  const dispatch = useAppDispatch();

  const sizeClasses = {
    sm: 'h-10 px-3.5 gap-2.5',
    md: 'h-12 px-4 gap-3',
    lg: 'h-14 px-5 gap-3.5',
  };

  return (
    <button
      type="button"
      onClick={() => dispatch(openDownloadModal('google'))}
      className={`inline-flex items-center justify-start rounded-xl bg-black text-white border border-white/20 hover:border-white/40 hover:bg-zinc-900 transition-all duration-200 shadow-md group cursor-pointer ${sizeClasses[size]} ${className}`}
      aria-label="Get Landlord HQ on Google Play"
    >
      {/* Official Standard Google Play Multi-Color Logo SVG */}
      <svg
        viewBox="0 0 512 512"
        className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 group-hover:scale-105 transition-transform"
      >
        <path
          fill="#00C1A6"
          d="M37.8 8.1c-6.8 6.4-10.8 16.3-10.8 28.8v438.2c0 12.5 4 22.4 10.8 28.8l238.4-247.9L37.8 8.1z"
        />
        <path
          fill="#00E5FF"
          d="M356.1 198.8l-79.9 83.2L356.1 365l99.5-56.5c14.6-8.3 14.6-21.9 0-30.2l-99.5-79.5z"
        />
        <path
          fill="#FFD700"
          d="M276.2 282l79.9-83.2-225.1-137c-9.2-5.6-18.7-2.7-23.2 4.3L276.2 282z"
        />
        <path
          fill="#FF334B"
          d="M107.8 445.9l248.3-140.9-79.9-83-191.6 219.6c4.5 7 14 9.9 23.2 4.3z"
        />
      </svg>
      <div className="flex flex-col text-left leading-none">
        <span className="text-[9px] sm:text-[10px] text-zinc-300 font-medium tracking-wider uppercase">GET IT ON</span>
        <span className="text-xs sm:text-[15px] font-bold text-white tracking-tight mt-0.5">Google Play</span>
      </div>
    </button>
  );
};
