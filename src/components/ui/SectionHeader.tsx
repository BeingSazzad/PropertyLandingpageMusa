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
      className={`max-w-2xl space-y-5 ${
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

      <h2 className={`title-section ${isDark ? 'title-section-inverse' : ''}`}>
        {title}
      </h2>

      {subtitle && (
        <p
          className={`text-subtitle ${
            isDark ? 'text-subtitle-inverse' : ''
          } ${isCenter ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
