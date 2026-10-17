'use client';

import React, { useMemo } from 'react';
import { useAppDispatch } from '@/redux/hooks';
import { openDownloadModal } from '@/redux/features/uiSlice';
import { triggerSmartAppDownload } from '@/utils/deviceDownload';
import { AppStoreBadges } from '../ui/AppStoreBadges';
import { PhoneMock } from '../ui/PhoneMock';

/** Drop a UI screenshot in /public/phones and set this path, e.g. '/phones/download.png' */
const DOWNLOAD_PHONE_SRC: string | undefined = undefined;

/** Hand-holding-phone PNG with a transparent screen cutout, e.g. '/phones/hand-overlay.png' */
const HAND_PHONE_OVERLAY_SRC: string | null = null;

export const AppDownloadCTA: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <section
      id="download-app"
      className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-10"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 45% at 8% 78%, rgba(186, 214, 235, 0.45) 0%, transparent 58%), radial-gradient(ellipse 55% 40% at 92% 18%, rgba(226, 236, 246, 0.8) 0%, transparent 50%), radial-gradient(ellipse 50% 32% at 72% 92%, rgba(210, 228, 242, 0.5) 0%, transparent 46%), linear-gradient(180deg, #ffffff 0%, #F8FAFC 46%, #ffffff 100%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 bottom-0 h-52 w-[480px] rounded-full bg-[#D7E8F5]/70 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-6 h-48 w-[420px] rounded-full bg-[#E7F1F8] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-10 right-[18%] h-36 w-[320px] rounded-full bg-white/90 blur-2xl"
      />

      <div className="relative z-10 mx-auto grid max-w-[1360px] items-center gap-12 lg:grid-cols-[minmax(300px,1.15fr)_auto_minmax(280px,1fr)] lg:gap-8 xl:gap-12">
        <div className="max-w-[480px] space-y-5 text-left lg:justify-self-start">
          <h2 className="title-section">
            <span className="sm:whitespace-nowrap">Take Landlord HQ</span>
            <br />
            <span className="text-[#0084FF]">Anywhere!</span>
          </h2>

          <p className="text-subtitle max-w-sm">
            Real-time rent tracking, digital lease agreements, and certified trade
            dispatch — right in your pocket.
          </p>

          <AppStoreBadges className="pt-1" />
        </div>

        <div
          data-download-phone-visual
          className="relative mx-auto flex min-h-[540px] w-[min(100%,400px)] items-center justify-center"
        >
          <PhoneMock
            src={DOWNLOAD_PHONE_SRC}
            overlaySrc={HAND_PHONE_OVERLAY_SRC}
            alt="Landlord HQ app preview"
            className="w-[258px] sm:w-[276px]"
          />
        </div>

        <div className="mx-auto flex max-w-[380px] flex-col items-center text-center lg:justify-self-end">
          <h3 className="font-[family-name:var(--font-display)] text-[32px] font-semibold leading-10 text-[#131515] sm:text-[36px] sm:leading-[44px]">
            <span className="sm:whitespace-nowrap">Scan the QR code</span>
            <br />
            <span className="sm:whitespace-nowrap">to download the app</span>
          </h3>

          <button
            type="button"
            onClick={() => triggerSmartAppDownload(() => dispatch(openDownloadModal()))}
            className="mt-7 cursor-pointer rounded-[28px] border border-white bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition-transform duration-200 hover:-translate-y-0.5"
            aria-label="Scan or tap to download Landlord HQ"
          >
            <DownloadQr />
          </button>
        </div>
      </div>
    </section>
  );
};

function DownloadQr() {
  const modules = useMemo(() => createVisualQrModules(25), []);
  const cell = 6.4;
  const inset = 4;
  const size = modules.length * cell + inset * 2;

  return (
    <div className="relative">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="block"
        role="img"
        aria-label="QR code to download Landlord HQ"
      >
        <rect width={size} height={size} fill="white" />
        {modules.map((row, y) =>
          row.map((on, x) =>
            on ? (
              <rect
                key={`${x}-${y}`}
                x={inset + x * cell}
                y={inset + y * cell}
                width={cell}
                height={cell}
                fill="#131515"
              />
            ) : null,
          ),
        )}
      </svg>
      <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-sm">
        <div className="relative h-7 w-7 overflow-hidden rounded-full">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0066FF] via-[#00A3FF] to-[#67E8F9]" />
          <div className="absolute left-1.5 top-1 h-2 w-2 rounded-full bg-white/70 blur-[0.5px]" />
        </div>
      </div>
    </div>
  );
}

function createVisualQrModules(n: number): boolean[][] {
  const grid = Array.from({ length: n }, () => Array<boolean>(n).fill(false));

  const paintFinder = (ox: number, oy: number) => {
    for (let y = 0; y < 7; y += 1) {
      for (let x = 0; x < 7; x += 1) {
        const edge = x === 0 || x === 6 || y === 0 || y === 6;
        const core = x >= 2 && x <= 4 && y >= 2 && y <= 4;
        grid[oy + y][ox + x] = edge || core;
      }
    }
  };

  paintFinder(0, 0);
  paintFinder(n - 7, 0);
  paintFinder(0, n - 7);

  for (let i = 8; i < n - 8; i += 1) {
    grid[6][i] = i % 2 === 0;
    grid[i][6] = i % 2 === 0;
  }

  const ax = n - 9;
  const ay = n - 9;
  for (let y = 0; y < 5; y += 1) {
    for (let x = 0; x < 5; x += 1) {
      grid[ay + y][ax + x] =
        y === 0 || y === 4 || x === 0 || x === 4 || (x === 2 && y === 2);
    }
  }

  const isReserved = (x: number, y: number) => {
    const inFinder = (ox: number, oy: number) =>
      x >= ox - 1 && x <= ox + 7 && y >= oy - 1 && y <= oy + 7;
    if (inFinder(0, 0) || inFinder(n - 7, 0) || inFinder(0, n - 7)) return true;
    if (x === 6 || y === 6) return true;
    if (x >= ax && x < ax + 5 && y >= ay && y < ay + 5) return true;
    if (x >= 9 && x <= 15 && y >= 9 && y <= 15) return true;
    return false;
  };

  const seed = 'LANDLORD-HQ-12-PARK-LANE';
  for (let y = 0; y < n; y += 1) {
    for (let x = 0; x < n; x += 1) {
      if (isReserved(x, y)) continue;
      const ch = seed.charCodeAt((x * 3 + y * 5) % seed.length);
      grid[y][x] = (x * 17 + y * 29 + ch) % 5 !== 0;
    }
  }

  return grid;
}
