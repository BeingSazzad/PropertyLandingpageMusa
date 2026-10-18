'use client';

import React, { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { closeDownloadModal } from '@/redux/features/uiSlice';
import { X } from 'lucide-react';
import { AppStoreBadges } from '../ui/AppStoreBadges';
import { BrandMark } from '@/components/ui/BrandMark';

export const AppDownloadModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isDownloadModalOpen } = useAppSelector((state) => state.ui);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isDownloadModalOpen) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        dispatch(closeDownloadModal());
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [dispatch, isDownloadModalOpen]);

  if (!isDownloadModalOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={() => dispatch(closeDownloadModal())}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="download-title"
        className="relative w-full max-w-sm space-y-5 overflow-hidden rounded-[24px] border border-[#E6EAEF] bg-white p-6 text-center shadow-2xl sm:p-7"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={() => dispatch(closeDownloadModal())}
          className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-full bg-[#F8FAFC] text-[#5B6775] hover:text-[#0A192F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0084FF]"
          aria-label="Close download options"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="space-y-1.5 pt-1">
          <BrandMark className="mx-auto mb-2 h-10 w-10" />
          <h2 id="download-title" className="font-[family-name:var(--font-display)] text-xl font-bold text-[#0A192F]">
            Get Landlord HQ
          </h2>
          <p className="text-xs text-[#5B6775]">
            Available on iOS and Android devices
          </p>
        </div>

        <div className="flex justify-center pt-1">
          <AppStoreBadges className="flex-col items-center" />
        </div>

        <p className="pt-1 text-[11px] text-[#94A3B8]">
          Free 30-Day Evaluation • No setup fees
        </p>
      </div>
    </div>
  );
};
