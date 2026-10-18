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
      'bg-white/90 text-slate-700 border border-slate-200/80 shadow-xs backdrop-blur-sm',
    dark:
      'bg-[#0D1F38] text-sky-200 border border-sky-500/20',
    blue:
      'bg-sky-50 text-sky-700 font-semibold border border-sky-200 shadow-xs',
    glass:
      'bg-white/50 text-[#0A192F] border border-white/70 backdrop-blur-md shadow-xs',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider ${styles[variant]} ${className}`}
    >
      {dot && (
        <span
          className={`w-1.5 h-1.5 rounded-full ${
            variant === 'blue' ? 'bg-[#0084FF]' : 'bg-[#0084FF]'
          }`}
        />
      )}
      {children}
    </span>
  );
};
