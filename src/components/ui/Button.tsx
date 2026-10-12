import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'dark' | 'outline' | 'ghost' | 'pill-white';
  size?: 'sm' | 'md' | 'lg';
  withArrow?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  withArrow = false,
  children,
  className = '',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer select-none rounded-full tracking-tight disabled:opacity-50 disabled:cursor-not-allowed group';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 gap-2',
    md: 'text-sm px-5 py-2.5 gap-2.5',
    lg: 'text-base px-6 py-3.5 gap-3',
  };

  const variantStyles = {
    // Electric Azure AI Vibe (Reference "Solar" button style)
    primary:
      'bg-gradient-to-r from-[#0084FF] to-[#00A3FF] hover:from-[#0070E0] hover:to-[#0092F0] text-white font-bold shadow-md shadow-sky-500/30 transform active:scale-95',
    // Sleek Midnight Navy
    dark:
      'bg-[#0A192F] text-white hover:bg-[#132A4C] border border-white/10 shadow-sm transform active:scale-95',
    // Clean outline
    outline:
      'border border-slate-300 text-[#0A192F] hover:bg-sky-50/50 hover:border-[#0084FF]/40 active:scale-95',
    // Ghost
    ghost:
      'text-[#0A192F] hover:bg-black/5 active:scale-95',
    // White pill
    'pill-white':
      'bg-white text-[#0A192F] hover:bg-slate-50 shadow-sm border border-slate-200 active:scale-95',
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {withArrow && (
        <span className="w-5 h-5 rounded-full bg-white text-[#0084FF] flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shadow-xs">
          <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
        </span>
      )}
    </button>
  );
};
