import { APP_STORE_URL, PLAY_STORE_URL } from '@/lib/brand';

/**
 * iOS / Android go straight to the store listing.
 * Desktop opens the in-page download modal.
 */
export function triggerSmartAppDownload(onDesktopFallback: () => void) {
  if (typeof window === 'undefined') return;

  const ua = navigator.userAgent || navigator.vendor || '';

  if (/iPad|iPhone|iPod/.test(ua)) {
    window.location.href = APP_STORE_URL;
    return;
  }

  if (/android/i.test(ua)) {
    window.location.href = PLAY_STORE_URL;
    return;
  }

  onDesktopFallback();
}
