export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  stat: string;
  statLabel: string;
  image: string;
  badge: string;
}

export interface ShowcaseModule {
  id: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  actionText: string;
  badge: string;
  metrics: string;
}

export const MOCK_DATA = {
  brand: {
    name: "LANDLORD HQ",
    tagline: "All-in-One Property & Tenancy Management Platform",
    heroHeading: "Your trusted platform for property, tenancy & maintenance management",
    heroSubheading: "Seamlessly connect landlords, tenants, and certified contractors. Manage buildings, flats, rent payments, key registers, and work orders in one unified dashboard.",
  },
  
  heroPills: [
    { label: "Rent Auto-Collection", active: true },
    { label: "Tenancy Leases", active: false },
    { label: "Contractor Dispatch", active: false },
    { label: "Keys & Inventory", active: false },
    { label: "Gas & EPC Compliance", active: false },
  ],

  heroShowcase: {
    mainImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    title: "12 Park Lane & London Portfolios",
    location: "London, SW1A 1AA • Multi-Unit Building",
    stat: "99.4%",
    statLabel: "On-Time Rent Collection Rate",
    featuredPills: [
      {
        id: "01",
        title: "12 Park Lane — 4 Units",
        category: "Building & Unit Register",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=600&auto=format&fit=crop",
      },
      {
        id: "02",
        title: "Sarah Jenkins • Flat 2B",
        category: "Active Tenancy & Rent Pay",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600&auto=format&fit=crop",
      }
    ]
  },

  processSteps: [
    {
      id: "step-1",
      number: "01",
      title: "Building & Unit Records",
      subtitle: "Structured Property Architecture",
      description: "Organize buildings and individual flats cleanly. Track addresses, EPC ratings, Gas Safety CP12 certs, house rules, communal appliances, council tax bands, and building alarm codes.",
      stat: "100%",
      statLabel: "Complete property visibility",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=900&auto=format&fit=crop",
      badge: "Building Architecture"
    },
    {
      id: "step-2",
      number: "02",
      title: "Tenancy Agreements & Onboarding",
      subtitle: "Tenants, Deposits & Key Registers",
      description: "Manage tenant profiles, verified IDs, active leases, deposit protection references, and unit key registers (types, quantities, and who currently holds them).",
      stat: "0 Days",
      statLabel: "Deposit scheme compliance delay",
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=900&auto=format&fit=crop",
      badge: "Tenancy Management"
    },
    {
      id: "step-3",
      number: "03",
      title: "Automated Rent Collection & Ledger",
      subtitle: "Standing Orders & Rent Status",
      description: "Real-time rent tracking across all flats. Auto-reconcile payments, track upcoming dues, send automated tenant nudges, and eliminate payment arrears.",
      stat: "99.4%",
      statLabel: "On-time collection rate",
      image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=900&auto=format&fit=crop",
      badge: "Rent Tracking"
    },
    {
      id: "step-4",
      number: "04",
      title: "Maintenance & Contractor Dispatch",
      subtitle: "Photo Diagnostics to Job Invoice Payout",
      description: "Tenants report repairs with photos. Landlords review and dispatch certified Gas Safe engineers, plumbers, or electricians with digital quotes, proof of work, and instant payouts.",
      stat: "14 Mins",
      statLabel: "Average contractor response",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=900&auto=format&fit=crop",
      badge: "Trade Dispatch"
    }
  ] as ProcessStep[],

  showcaseModules: [
    {
      id: "module-1",
      tag: "Tenant & Resident Mobile App",
      title: "Tenant Self-Service In Your Pocket",
      description: "Tenants pay rent in 1 tap, log repair tickets with photos, access lease contracts, and review issued keys and building emergency codes.",
      image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=800&auto=format&fit=crop",
      actionText: "Download Tenant App",
      badge: "iOS & Android",
      metrics: "4.9 ★ (3,400+ reviews)"
    },
    {
      id: "module-2",
      tag: "Contractor Hub & Work Orders",
      title: "Contractor Network & Job Invoices",
      description: "Gas Safe engineers, plumbers, and electricians receive job alerts, upload repair photos, submit itemized quotes, and receive direct invoice payouts.",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
      actionText: "Explore Contractor Hub",
      badge: "Verified Trades",
      metrics: "500+ Active Trades"
    },
    {
      id: "module-3",
      tag: "Landlord Command Center",
      title: "Full Portfolio Oversight & Compliance",
      description: "Track all buildings and flats, occupancy rates, financial yield summaries, and automatic expiry alerts for EPC and Gas Safety certificates.",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=800&auto=format&fit=crop",
      actionText: "View Landlord Portal",
      badge: "Portfolio Hub",
      metrics: "100% Audit-Ready"
    }
  ] as ShowcaseModule[],

  stats: [
    { value: "28,000+", label: "Active Tenancies Managed" },
    { value: "99.4%", label: "On-Time Rent Collection" },
    { value: "14 Mins", label: "Avg Contractor Dispatch" },
    { value: "4.9 / 5", label: "Tenant & Landlord Rating" }
  ]
};
