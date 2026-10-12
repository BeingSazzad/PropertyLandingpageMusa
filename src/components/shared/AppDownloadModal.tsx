'use client';

import React from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { closeDownloadModal } from '@/redux/features/uiSlice';
import { X, Smartphone, QrCode, ArrowUpRight, CheckCircle2, Apple } from 'lucide-react';
import { Button } from '../ui/Button';
import { AppleAppStoreBadge, GooglePlayBadge } from '../ui/AppStoreBadges';

export const AppDownloadModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isDownloadModalOpen, selectedStore } = useAppSelector((state) => state.ui);

  if (!isDownloadModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-[#FFFFFF] rounded-3xl p-6 sm:p-8 shadow-2xl border border-black/10 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#2563EB]/20 rounded-bl-full pointer-events-none blur-2xl" />

        {/* Close Button */}
        <button
          onClick={() => dispatch(closeDownloadModal())}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#F6F3EC] flex items-center justify-center text-zinc-600 hover:text-black transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="space-y-1 pr-8">
          <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
            Official Mobile Experience
          </span>
          <h3 className="text-2xl font-bold text-[#0B0F0E] tracking-tight">
            Download Landlord HQ App
          </h3>
          <p className="text-sm text-zinc-500">
            Available on iOS and Android. Manage units, collect rent, and dispatch trades on the go.
          </p>
        </div>

        {/* QR Code and Stores Grid */}
        <div className="mt-6 p-4 rounded-2xl bg-[#F6F3EC] border border-black/5 flex flex-col sm:flex-row items-center gap-5">
          <div className="w-28 h-28 rounded-xl bg-white p-2 border border-black/10 shadow-sm flex flex-col items-center justify-center text-center">
            {/* SVG simulated QR Code */}
            <svg viewBox="0 0 100 100" className="w-full h-full text-[#0B0F0E]">
              <path
                fill="currentColor"
                d="M10 10h30v30h-30zM15 15v20h20v-20zM22 22h6v6h-6zM60 10h30v30h-30zM65 15v20h20v-20zM72 22h6v6h-6zM10 60h30v30h-30zM15 65v20h20v-20zM22 72h6v6h-6zM50 15h5v5h-5zM50 30h5v15h-5zM65 50h10v5h-10zM50 65h15v5h-15zM75 65h15v5h-15zM60 75h5v15h-5zM80 80h10v10h-10z"
              />
            </svg>
          </div>
          <div className="space-y-2 text-center sm:text-left flex-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-100/80 px-2.5 py-0.5 rounded-full">
              <QrCode className="w-3.5 h-3.5" /> Scan with mobile camera
            </div>
            <p className="text-xs text-zinc-600">
              Point your phone camera to instantly download the latest build (v2.4.1).
            </p>
            <div className="flex items-center gap-2 text-[11px] text-zinc-400">
              <span>✓ Instant Sync</span>
              <span>•</span>
              <span>✓ FaceID Login</span>
            </div>
          </div>
        </div>

        {/* Download Buttons */}
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <AppleAppStoreBadge className="w-full justify-center" size="lg" />
          <GooglePlayBadge className="w-full justify-center" size="lg" />
        </div>

        {/* Feature Checkpoints */}
        <div className="mt-5 pt-4 border-t border-black/5 flex items-center justify-between text-xs text-zinc-500">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Free 30-Day Trial
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Bank-grade 256-bit
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> UK Landlord Compliant
          </span>
        </div>
      </div>
    </div>
  );
};
