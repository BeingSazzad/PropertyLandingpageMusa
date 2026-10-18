import React from 'react';
import Image from 'next/image';
import { APP_STORE_URL, PLAY_STORE_URL } from '@/lib/brand';

interface AppStoreBadgeProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  onDark?: boolean;
}

const SIZE = {
  sm: { width: 108, height: 36 },
  md: { width: 120, height: 40 },
  lg: { width: 135, height: 45 },
} as const;

const badgeClass =
  'inline-flex shrink-0 overflow-hidden rounded-[7px] transition-opacity hover:opacity-90 active:scale-[0.98]';

export const AppleAppStoreBadge: React.FC<AppStoreBadgeProps> = ({
  className = '',
  size = 'md',
}) => {
  const { width, height } = SIZE[size];

  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${badgeClass} ${className}`}
      aria-label="Download Landlord HQ on the Apple App Store"
    >
      <Image
        src="/stores/app-store.png"
        alt="Download on the App Store"
        width={width}
        height={height}
        className="h-auto w-auto"
        style={{ width, height }}
      />
    </a>
  );
};

export const GooglePlayBadge: React.FC<AppStoreBadgeProps> = ({
  className = '',
  size = 'md',
}) => {
  const { width, height } = SIZE[size];

  return (
    <a
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${badgeClass} ${className}`}
      aria-label="Get Landlord HQ on Google Play"
    >
      <Image
        src="/stores/google-play.png"
        alt="Get it on Google Play"
        width={width}
        height={height}
        className="h-auto w-auto"
        style={{ width, height }}
      />
    </a>
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
