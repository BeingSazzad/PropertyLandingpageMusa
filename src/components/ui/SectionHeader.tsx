import React from 'react';
import { Badge } from './Badge';

interface SectionHeaderProps {
  badge?: string;
  badgeDot?: boolean;
  title: React.ReactNode;
  subtitle?: string;
  align?: 'center' | 'left';
  theme?: 'light' | 'dark';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  badgeDot = true,
  title,
  subtitle,
  align = 'center',
  theme = 'light',
  className = '',
}) => {
  const isCenter = align === 'center';
  const isDark = theme === 'dark';

  return (
    <div
      className={`space-y-3.5 max-w-2xl ${
        isCenter ? 'mx-auto text-center' : 'text-left'
      } ${className}`}
    >
      {badge && (
        <div className={isCenter ? 'flex justify-center' : ''}>
          <Badge
            variant={isDark ? 'glass' : 'blue'}
            dot={badgeDot}
            className={isDark ? 'text-white border-white/30 bg-white/15' : ''}
          >
            {badge}
          </Badge>
        </div>
      )}

      <h2
        className={`title-section ${
          isDark ? 'text-white' : 'text-[#0A192F]'
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`text-subtitle ${
            isDark ? 'text-blue-100' : 'text-slate-500'
          } ${isCenter ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
