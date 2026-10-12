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
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5',
  };

  const variantStyles = {
    // Spaciaz signature lime
    primary:
      'bg-[#E4ED64] text-[#0B0F0E] font-semibold hover:bg-[#CDD55A] shadow-sm hover:shadow-md transform active:scale-95',
    // Luxury dark button
    dark:
      'bg-[#121514] text-white hover:bg-[#202523] border border-white/10 shadow-sm transform active:scale-95',
    // Clean outline
    outline:
      'border border-[#121514]/20 text-[#121514] hover:bg-[#121514]/5 active:scale-95',
    // Ghost
    ghost:
      'text-[#121514] hover:bg-black/5 active:scale-95',
    // White pill (like Ademi reference)
    'pill-white':
      'bg-white text-[#0B0F0E] hover:bg-[#F6F3EC] shadow-sm border border-black/5 active:scale-95',
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {withArrow && (
        <span className="w-5 h-5 rounded-full bg-black/10 text-current flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          <ArrowUpRight className="w-3.5 h-3.5" />
        </span>
      )}
    </button>
  );
};
