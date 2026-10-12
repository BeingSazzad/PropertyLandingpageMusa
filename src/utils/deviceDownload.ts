/**
 * Smart download helper:
 * - On iOS (iPhone/iPad) -> redirects directly to Apple App Store
 * - On Android -> redirects directly to Google Play Store
 * - On Desktop -> triggers the clean, minimal modal
 */
export function triggerSmartAppDownload(onDesktopFallback: () => void) {
  if (typeof window === 'undefined') return;
  const ua = navigator.userAgent || navigator.vendor || (window as any).opera || '';
  
  // iOS detection
  if (/iPad|iPhone|iPod/.test(ua) && !(window as any).MSStream) {
    window.location.href = 'https://apps.apple.com';
    return;
  }
  
  // Android detection
  if (/android/i.test(ua)) {
    window.location.href = 'https://play.google.com';
    return;
  }
  
  // Desktop fallback (minimal modal)
  onDesktopFallback();
}
