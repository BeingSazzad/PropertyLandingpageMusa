import React from 'react';

export type PhoneMockProps = {
  /** Inner UI screenshot. Leave unset for a blank light screen. Example: `/phones/dashboard.png` */
  src?: string;
  alt: string;
  className?: string;
  /** Optional PNG overlay (hand holding the phone with a transparent screen cutout). */
  overlaySrc?: string | null;
};

/**
 * Standard iPhone bezel. Swap only `src` (and optional `overlaySrc`) later —
 * do not rebuild in-phone UI in code.
 */
export const PhoneMock: React.FC<PhoneMockProps> = ({
  src,
  alt,
  className = '',
  overlaySrc = null,
}) => {
  return (
    <div className={`relative ${className}`}>
      <div
        aria-hidden
        className="absolute -left-[3px] top-[18%] z-20 h-[14px] w-[3px] rounded-l-sm bg-[#3a3d44]"
      />
      <div
        aria-hidden
        className="absolute -left-[3px] top-[26%] z-20 h-[32px] w-[3px] rounded-l-sm bg-[#3a3d44]"
      />
      <div
        aria-hidden
        className="absolute -left-[3px] top-[36%] z-20 h-[32px] w-[3px] rounded-l-sm bg-[#3a3d44]"
      />
      <div
        aria-hidden
        className="absolute -right-[3px] top-[30%] z-20 h-[46px] w-[3px] rounded-r-sm bg-[#3a3d44]"
      />

      <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2.35rem] bg-[#1a1c20] p-[7px] shadow-[0_28px_56px_rgba(10,25,47,0.22)] ring-1 ring-black/40">
        <div className="relative h-full w-full overflow-hidden rounded-[1.9rem] bg-[#EEF3F8]">
          <div
            aria-hidden
            className="absolute left-1/2 top-[2.2%] z-20 h-[3.8%] min-h-[12px] w-[28%] max-w-[78px] -translate-x-1/2 rounded-full bg-black"
          >
            <span className="absolute right-[18%] top-1/2 h-[6px] w-[6px] -translate-y-1/2 rounded-full bg-[#1c2230] ring-1 ring-white/10" />
          </div>

          {src ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={src}
              alt={alt}
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          ) : (
            <div className="h-full w-full bg-[#EEF3F8]" role="img" aria-label={alt} />
          )}
        </div>
      </div>

      {overlaySrc ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={overlaySrc}
          alt=""
          className="pointer-events-none absolute inset-0 z-30 h-full w-full object-contain"
        />
      ) : null}
    </div>
  );
};
