import React from 'react';
import { ArrowRight } from 'lucide-react';
import { BRAND_CTA } from '@/lib/brand';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'dark' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  withArrow?: boolean;
  children: React.ReactNode;
  className?: string;
}

function ctaClass(size: 'sm' | 'md' | 'lg', className: string) {
  return `${BRAND_CTA.root} ${BRAND_CTA[size]} ${className}`.trim();
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  withArrow = false,
  children,
  className = '',
  ...props
}) => {
  if (variant === 'primary') {
    return (
      <button className={ctaClass(size, className)} {...props}>
        <span>{children}</span>
        {withArrow ? <ArrowRight className="h-4 w-4" /> : null}
      </button>
    );
  }

  const baseStyles =
    'inline-flex items-center justify-center rounded-[var(--cta-radius)] font-[family-name:var(--font-nav)] font-medium leading-5 transition-colors disabled:cursor-not-allowed disabled:opacity-50';

  const sizeStyles = {
    sm: 'gap-1.5 px-5 py-2.5 text-[15px]',
    md: 'gap-1.5 px-6 py-3 text-[16px]',
    lg: 'gap-2 px-7 py-3.5 text-[16px]',
  };

  const variantStyles = {
    dark: 'bg-[#0A192F] text-white hover:bg-[#132A4C]',
    outline:
      'border border-[#E6EAEF] bg-white text-[#131515] hover:border-[#0084FF]/40 hover:text-[#0084FF]',
    ghost: 'text-[#494d4d] hover:text-[#0084FF]',
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {withArrow ? <ArrowRight className="h-4 w-4" /> : null}
    </button>
  );
};

type BrandCtaLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
};

export function BrandCtaLink({
  href,
  children,
  className = '',
  size = 'md',
}: BrandCtaLinkProps) {
  return (
    <a href={href} className={ctaClass(size, className)}>
      <span>{children}</span>
    </a>
  );
}
