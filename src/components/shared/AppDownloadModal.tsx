'use client';

import React from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { closeDownloadModal } from '@/redux/features/uiSlice';
import { X } from 'lucide-react';
import { AppStoreBadges } from '../ui/AppStoreBadges';

export const AppDownloadModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isDownloadModalOpen } = useAppSelector((state) => state.ui);

  if (!isDownloadModalOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={() => dispatch(closeDownloadModal())}
    >
      <div
        className="relative w-full max-w-sm bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-200 overflow-hidden text-center space-y-5"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => dispatch(closeDownloadModal())}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:text-black transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Minimal Header */}
        <div className="space-y-1.5 pt-1">
          <div className="relative w-10 h-10 rounded-full mx-auto overflow-hidden shadow-md shadow-sky-500/30 flex items-center justify-center mb-2">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0066FF] via-[#00A3FF] to-[#67E8F9]" />
            <div className="absolute top-1.5 left-2 w-3 h-3 rounded-full bg-white/70 blur-[0.5px]" />
          </div>
          <h3 className="text-xl font-bold text-[#0A192F] font-[family-name:var(--font-display)]">
            Get Landlord HQ
          </h3>
          <p className="text-xs text-slate-500">
            Available on iOS and Android devices
          </p>
        </div>

        {/* Clean Direct Buttons (No QR clutter) */}
        <div className="flex justify-center pt-1">
          <AppStoreBadges className="flex-col items-center" />
        </div>

        <div className="text-[11px] text-slate-400 pt-1">
          Free 30-Day Evaluation • No setup fees
        </div>
      </div>
    </div>
  );
};
