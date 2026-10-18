/** Property exteriors for product / company surfaces. Reviews use PEOPLE_IMAGES. */
export const PROPERTY_IMAGES = {
  twilight:
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop',
  estate:
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop',
  modern:
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop',
  villa:
    'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1600&auto=format&fit=crop',
  mansion:
    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1600&auto=format&fit=crop',
} as const;

/** Review portraits only — landlords and tenants, not product shots. */
export const PEOPLE_IMAGES = {
  marcus: '/testimonials/marcus.jpg',
  sarah: '/testimonials/sarah.jpg',
  david: '/testimonials/david.jpg',
  sophie: '/testimonials/sophie.jpg',
  james: '/testimonials/james.jpg',
  amira: '/testimonials/amira.jpg',
  oliver: '/testimonials/oliver.jpg',
  hannah: '/testimonials/hannah.jpg',
} as const;

/** About / lifestyle: a well-kept home and a calm interior. */
export const LIFESTYLE_IMAGES = {
  phoneUse: '/about/home-dusk.jpg',
  interior: '/about/home-interior.jpg',
} as const;

export const BORDER = 'border-[#E6EAEF]';

/** Locked radii: pill = buttons/chips/nav · field = inputs/tiles · card = surfaces */
export const RADIUS = {
  pill: 'rounded-full',
  field: 'rounded-[16px]',
  card: 'rounded-[24px]',
} as const;

export const CARD = `${RADIUS.card} border border-[#E6EAEF] bg-white`;

/** Primary button classes. Colors/radius live in globals.css --cta-* tokens. */
export const BRAND_CTA = {
  root: 'brand-cta',
  sm: '',
  md: 'brand-cta-md',
  lg: 'brand-cta-lg',
} as const;

/** Store destinations — swap these when the live listings are ready. */
export const APP_STORE_URL = 'https://apps.apple.com';
export const PLAY_STORE_URL = 'https://play.google.com/store';
