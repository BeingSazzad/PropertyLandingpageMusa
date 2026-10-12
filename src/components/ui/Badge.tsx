import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'light' | 'dark' | 'blue' | 'glass';
  className?: string;
  dot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'light',
  className = '',
  dot = false,
}) => {
  const styles = {
    light:
      'bg-white/80 text-[#4B4B4B] border border-black/10 backdrop-blur-sm',
    dark:
      'bg-[#1F2322] text-[#D1D5DB] border border-white/10',
    blue:
      'bg-[#EFF6FF] text-[#1D4ED8] font-semibold border border-[#BFDBFE]',
    glass:
      'bg-white/40 text-[#121514] border border-white/60 backdrop-blur-md shadow-sm',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider ${styles[variant]} ${className}`}
    >
      {dot && (
        <span
          className={`w-1.5 h-1.5 rounded-full ${
            variant === 'blue' ? 'bg-[#2563EB]' : 'bg-[#2563EB]'
          }`}
        />
      )}
      {children}
    </span>
  );
};
