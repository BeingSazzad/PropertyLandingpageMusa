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
  marcus:
    'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1200&auto=format&fit=crop&crop=faces',
  sarah:
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop&crop=faces',
  david:
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop&crop=faces',
} as const;

/** Product-in-use: landlord managing the portfolio from a phone. */
export const LIFESTYLE_IMAGES = {
  phoneUse:
    'https://images.unsplash.com/photo-1760349748488-bd2a7ef25ea0?q=80&w=1600&auto=format&fit=crop',
} as const;

export const BORDER = 'border-[#E6EAEF]';

/** Locked radii: pill = buttons/chips/nav · field = inputs/tiles · card = surfaces */
export const RADIUS = {
  pill: 'rounded-full',
  field: 'rounded-[16px]',
  card: 'rounded-[24px]',
} as const;

export const CARD = `${RADIUS.card} border border-[#E6EAEF] bg-white`;
