'use client';

import React from 'react';
import { useAppDispatch } from '@/redux/hooks';
import { openDownloadModal } from '@/redux/features/uiSlice';
import { ArrowUpRight, Smartphone, Wrench, BarChart3, ChevronRight } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { MOCK_DATA } from '@/Mockdata';

export const DarkShowcaseSection: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <section id="ecosystem" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Dark Luxury Rounded Container (Direct Reference Alignment) */}
        <div className="rounded-[32px] sm:rounded-[40px] bg-[#121514] text-white p-6 sm:p-12 lg:p-16 border border-white/10 shadow-2xl space-y-12">
          
          {/* Header */}
          <div className="space-y-4 max-w-2xl">
            <Badge variant="dark">Our Ecosystem</Badge>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight font-[family-name:var(--font-heading)]">
              Experience property control where intelligence meets simplicity{' '}
              <span className="font-light text-zinc-400">in perfect harmony</span>
            </h2>

            <p className="text-sm font-semibold tracking-wider uppercase text-zinc-400">
              What we&apos;ve engineered for landlords, residents, and contractors:
            </p>
          </div>

          {/* 3 Tall Showcase Cards (Matching Reference Grid of 3 Tall Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {MOCK_DATA.showcaseModules.map((item, idx) => (
              <div
                key={item.id}
                className="group relative rounded-3xl overflow-hidden bg-[#1A1E1D] border border-white/10 flex flex-col justify-end min-h-[460px] sm:min-h-[500px] p-6 transition-all duration-300 hover:border-[#E4ED64]/40 hover:shadow-2xl"
              >
                {/* Background Image with Cinematic Dark Gradient */}
                <div className="absolute inset-0 z-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121514] via-[#121514]/60 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
                </div>

                {/* Top Corner Pill Tags (Reference Image Style: Small Badges in Image) */}
                <div className="absolute top-5 left-5 z-10 flex flex-wrap gap-2">
                  <span className="glass-pill-dark px-3 py-1 rounded-full text-[10px] font-semibold text-white/90 border border-white/15">
                    {item.badge}
                  </span>
                  <span className="glass-pill-dark px-3 py-1 rounded-full text-[10px] font-medium text-[#E4ED64] border border-white/15">
                    {item.metrics}
                  </span>
                </div>

                {/* Bottom Content Area */}
                <div className="relative z-10 space-y-3 pt-6">
                  <div className="text-[11px] font-bold text-[#E4ED64] uppercase tracking-wider">
                    {item.tag}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white font-[family-name:var(--font-heading)] leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-zinc-300/80 line-clamp-3 leading-relaxed">
                    {item.description}
                  </p>

                  {/* "More details >" Pill Button (Direct Reference Image signature style) */}
                  <div className="pt-2">
                    <button
                      onClick={() => dispatch(openDownloadModal())}
                      className="w-full py-2.5 px-4 rounded-full bg-white/10 hover:bg-[#E4ED64] text-white hover:text-[#0B0F0E] text-xs font-semibold flex items-center justify-between border border-white/15 transition-all duration-200 cursor-pointer group/btn"
                    >
                      <span>{item.actionText}</span>
                      <ChevronRight className="w-4 h-4 text-zinc-400 group-hover/btn:text-[#0B0F0E] transition-colors" />
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
