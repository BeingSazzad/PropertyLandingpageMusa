'use client';

import React from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { closeDownloadModal } from '@/redux/features/uiSlice';
import { X } from 'lucide-react';
import { AppStoreBadges } from '../ui/AppStoreBadges';
import { BrandMark } from '@/components/ui/BrandMark';

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
        className="relative w-full max-w-sm overflow-hidden rounded-[24px] border border-[#E6EAEF] bg-white p-6 text-center shadow-2xl sm:p-7 space-y-5"
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
          <BrandMark className="mx-auto mb-2 h-10 w-10" />
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
