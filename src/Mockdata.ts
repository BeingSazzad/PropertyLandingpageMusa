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

export interface PropertyFeature {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tag: string;
}

export const MOCK_DATA = {
  brand: {
    name: "LANDLORD HQ",
    tagline: "AI-Powered Real Estate & Property Intelligence",
    heroHeading: "Your trusted partner in intelligent property management",
    heroSubheading: "Seamlessly connect landlords, residents, and certified contractors with real-time AI triage, automated rent recovery, and mobile-first compliance.",
  },
  
  heroPills: [
    { label: "AI Tenant Screening", active: true },
    { label: "Smart Leases", active: false },
    { label: "Auto Maintenance", active: false },
    { label: "Rent Automation", active: false },
    { label: "Contractor Dispatch", active: false },
  ],

  heroShowcase: {
    mainImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    title: "Marina Heights Residential Complex",
    location: "Antalya, Mediterranean Coast",
    stat: "99.4%",
    statLabel: "On-Time Rent Collection Rate",
    featuredPills: [
      {
        id: "01",
        title: "Residential complex in Alanya",
        category: "Interior design & Operations",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=600&auto=format&fit=crop",
      },
      {
        id: "02",
        title: "French-style boutique flats",
        category: "Unit Leases & Compliance",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600&auto=format&fit=crop",
      }
    ]
  },

  processSteps: [
    {
      id: "step-1",
      number: "01",
      title: "Discovery & Smart Onboarding",
      subtitle: "Instant Digital Portfolio Setup",
      description: "Our AI scanner ingests floor plans, tenancy agreements, Gas Safe certs, and EPC documents into structured building and unit records in seconds.",
      stat: "2 Mins",
      statLabel: "Average unit onboarding time",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=900&auto=format&fit=crop",
      badge: "Smart Ingestion"
    },
    {
      id: "step-2",
      number: "02",
      title: "AI Screening & Tenant Matching",
      subtitle: "Risk-Free Vetting with Open Banking",
      description: "Automated credit verification, employer referencing, and algorithmic affordability scoring ensure verified tenancies without weeks of back-and-forth.",
      stat: "100%",
      statLabel: "Fraud prevention check",
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=900&auto=format&fit=crop",
      badge: "AI Screening"
    },
    {
      id: "step-3",
      number: "03",
      title: "Automated Rent & Legal Compliance",
      subtitle: "Zero Arrears with Direct Debits",
      description: "Automated standing order sync, auto-reconciliation, rent reminder nudges, and statutory notice generators keep your properties compliant.",
      stat: "99.4%",
      statLabel: "Collection success rate",
      image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=900&auto=format&fit=crop",
      badge: "Automated Flow"
    },
    {
      id: "step-4",
      number: "04",
      title: "24/7 AI Maintenance & Contractor Routing",
      subtitle: "From Tenant Ticket to Job Invoice",
      description: "Residents report issues with photos; our AI diagnoses urgency, requests contractor quotes from pre-vetted trades, and handles digital sign-off.",
      stat: "14 Mins",
      statLabel: "Average emergency dispatch",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=900&auto=format&fit=crop",
      badge: "Instant Dispatch"
    }
  ] as ProcessStep[],

  showcaseModules: [
    {
      id: "module-1",
      tag: "Mobile App • Resident & Landlord",
      title: "Villa & Apartment Mobile Experience",
      description: "One-tap rent payments, live maintenance progress tracking, key registers, and instant lease renewal notifications.",
      image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=800&auto=format&fit=crop",
      actionText: "Download Mobile App",
      badge: "iOS & Android",
      metrics: "4.9 ★ (3,400+ reviews)"
    },
    {
      id: "module-2",
      tag: "Contractor Network • AI Routing",
      title: "Contractor Hub & Instant Work Orders",
      description: "Pre-vetted Gas Safe engineers, plumbers, and electricians with instant digital POs, photo completion proof, and fast automated payouts.",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
      actionText: "View Contractor Hub",
      badge: "Vetted Trades",
      metrics: "500+ Verified Pros"
    },
    {
      id: "module-3",
      tag: "Portfolio Analytics • Tax & Yield",
      title: "Financial Intelligence & Yield Radar",
      description: "Automated monthly P&L statements, real-time ROI tracking, council tax tracking, and one-click accountant export.",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=800&auto=format&fit=crop",
      actionText: "Explore Analytics",
      badge: "Automated P&L",
      metrics: "+18% Yield Efficiency"
    }
  ] as ShowcaseModule[],

  stats: [
    { value: "28,000+", label: "Units Managed Under AI" },
    { value: "99.4%", label: "On-Time Rent Collection" },
    { value: "14 Mins", label: "Avg Maintenance Resolution" },
    { value: "4.9 / 5", label: "App Store & Play Rating" }
  ],

  appFeatures: [
    {
      title: "1-Tap Digital Rent Collection",
      desc: "Direct debit integration with instant automated receipts and rent reminders."
    },
    {
      title: "Smart Photo Diagnostic Repair",
      desc: "Tenants snap a photo; AI diagnoses the issue and alerts the exact trade required."
    },
    {
      title: "Digital Key & Inventory Register",
      desc: "Track physical fobs, keys, and appliance conditions with timestamped logs."
    },
    {
      title: "Statutory Compliance Shields",
      desc: "Automated reminders before gas safety, EICR, or EPC certificates expire."
    }
  ]
};
