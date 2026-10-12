import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'light' | 'dark' | 'lime' | 'glass';
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
    lime:
      'bg-[#E4ED64] text-[#0B0F0E] font-semibold border border-[#CDD55A]',
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
            variant === 'lime' ? 'bg-black' : 'bg-[#E4ED64]'
          }`}
        />
      )}
      {children}
    </span>
  );
};
