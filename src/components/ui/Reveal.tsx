import React from 'react';
import { cn } from '@/lib/utils';

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
};

export function Reveal({ children, className = '' }: RevealProps) {
  return <div className={cn(className)}>{children}</div>;
}
