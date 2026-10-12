'use client';

import React from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setActiveProcessStep, openDownloadModal } from '@/redux/features/uiSlice';
import { ArrowUpRight, Check, Sparkles, Shield, Cpu, Zap } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { MOCK_DATA } from '@/Mockdata';

export const ProcessSection: React.FC = () => {
  const dispatch = useAppDispatch();
  const { activeProcessStepId } = useAppSelector((state) => state.ui);

  const activeStep =
    MOCK_DATA.processSteps.find((s) => s.id === activeProcessStepId) ||
    MOCK_DATA.processSteps[1];

  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-10 bg-[#F8FAFC]">
      <div className="max-w-[1400px] mx-auto space-y-12">
        
        {/* Section Header (Matching Reference Image) */}
        <div className="space-y-4 max-w-4xl">
          <Badge variant="blue">Our Process</Badge>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0A192F] leading-tight font-[family-name:var(--font-heading)]">
            Streamlined Property Operations <br className="hidden sm:inline" />
            <span className="text-[#0084FF]">in 4 Simple Steps</span>
          </h2>

          <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-slate-400">
            From Building Setup to Tenancy & Maintenance
          </p>
        </div>

        {/* Two-Column Process Grid (Reference Image Structure) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Interactive Numbered Accordion (01, 02, 03, 04) */}
          <div className="lg:col-span-5 space-y-3">
            {MOCK_DATA.processSteps.map((step) => {
              const isActive = step.id === activeStep.id;

              return (
                <div
                  key={step.id}
                  onClick={() => dispatch(setActiveProcessStep(step.id))}
                  className={`p-5 rounded-2xl transition-all duration-300 cursor-pointer border flex items-center justify-between gap-4 group ${
                    isActive
                      ? 'bg-sky-50/90 border-sky-300 shadow-sm'
                      : 'bg-white hover:bg-slate-50/80 border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-sm font-mono font-bold ${
                        isActive ? 'text-[#0084FF]' : 'text-slate-400'
                      }`}
                    >
                      {step.number}
                    </span>
                    <div className="space-y-0.5">
                      <div
                        className={`text-base font-bold font-[family-name:var(--font-heading)] transition-colors ${
                          isActive
                            ? 'text-[#0A192F]'
                            : 'text-slate-700 group-hover:text-black'
                        }`}
                      >
                        {step.title}
                      </div>
                      <div className="text-xs text-slate-500">
                        {step.subtitle}
                      </div>
                    </div>
                  </div>

                  {/* Circular Arrow Button (Reference Image signature element) */}
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-[#0084FF] to-[#00A3FF] text-white rotate-45 scale-105 shadow-md shadow-sky-500/20'
                        : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200 group-hover:text-black'
                    }`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Visual Preview & Dynamic Content Card (Matching Reference Layout) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            
            {/* Visual Frame */}
            <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-[#121514] border border-black/5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activeStep.image}
                alt={activeStep.title}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              {/* Floating Step Badge inside image */}
              <div className="absolute top-4 left-4">
                <Badge variant="glass">{activeStep.badge}</Badge>
              </div>

              {/* Floating Stat at the bottom edge */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between glass-pill-dark rounded-xl p-3 px-4 border border-white/10 text-white">
                <div>
                  <div className="text-lg font-bold font-mono text-[#60A5FA]">
                    {activeStep.stat}
                  </div>
                  <div className="text-[10px] text-zinc-300">
                    {activeStep.statLabel}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-semibold text-white">
                    Step {activeStep.number} of 04
                  </div>
                  <div className="text-[10px] text-[#60A5FA]">Standard Protocol</div>
                </div>
              </div>
            </div>

            {/* Description Microcopy (Matching typography in reference) */}
            <div className="space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                Detailed Workflow Execution
              </div>

              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
                {activeStep.description}
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-black/5 text-xs text-zinc-500">
                <span className="flex items-center gap-1.5 font-medium text-zinc-700">
                  <Check className="w-4 h-4 text-emerald-600 stroke-[2.5]" />
                  Zero manual data entry required
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  withArrow
                  onClick={() => dispatch(openDownloadModal())}
                >
                  Test on Mobile App
                </Button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
