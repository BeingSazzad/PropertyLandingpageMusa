'use client';

import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  quote: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Marcus Sterling',
    role: 'Portfolio Landlord (14 London Flats)',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    quote:
      'Managing 14 flats across Richmond and Mayfair used to mean endless WhatsApp messages and delayed rent. With Landlord HQ, rent arrives automatically via Open Banking, Gas Safe certs are always tracked, and emergency repairs are resolved with certified trades in hours.',
  },
  {
    id: '2',
    name: 'Sarah Jenkins',
    role: 'Resident Tenant (12 Park Lane)',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    quote:
      'Having everything in one clean app has made renting completely stress-free. I pay rent in one tap, our deposit is safely held in the DPS, and when our boiler stopped working, a Gas Safe engineer was dispatched and fixed it the very next morning.',
  },
  {
    id: '3',
    name: 'David Chen',
    role: 'HMO Property Investor',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    quote:
      'Having all compliance deadlines, tenancy agreements, and repair tickets centralized in one place has saved us hours each week. The subscription fee pays for itself tenfold in time saved and zero missed safety inspections.',
  },
];

export const TestimonialSection: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const prev = () => {
    console.log('Previous clicked');
    setCurrentIdx((prevIdx) => (prevIdx === 0 ? TESTIMONIALS.length - 1 : prevIdx - 1));
  };

  const next = () => {
    console.log('Next clicked');
    setCurrentIdx((prevIdx) => (prevIdx === TESTIMONIALS.length - 1 ? 0 : prevIdx + 1));
  };

  const active = TESTIMONIALS[currentIdx];

  return (
    <section id="testimonials" className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-white">
      <div className="max-w-[1360px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Subtitle & Arrow Controls (Matches Reference Image) */}
          <div className="lg:col-span-4 space-y-6">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0A192F] font-[family-name:var(--font-heading)] leading-[1.15]">
              What Say Our <br />
              Valuable Clients
            </h2>

            <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-sm">
              We wanted to streamline property management and end payment friction, and Landlord HQ was the perfect way.
            </p>

            {/* Circular Slider Controls (Matches Left Outline / Right Black Circle in reference) */}
            <div className="flex items-center gap-3 pt-2">
              <button
                id="prev-testimonial-btn"
                type="button"
                onClick={prev}
                className="w-12 h-12 rounded-full border border-slate-300 bg-white flex items-center justify-center text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-all cursor-pointer shadow-xs active:scale-95"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                id="next-testimonial-btn"
                type="button"
                onClick={next}
                className="w-12 h-12 rounded-full bg-[#0A192F] text-white flex items-center justify-center hover:bg-black transition-all cursor-pointer shadow-md active:scale-95"
                aria-label="Next testimonial"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Center: Rounded Portrait Photo (Matches Reference Image) */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="w-full max-w-[360px] aspect-[4/5] rounded-[32px] overflow-hidden bg-slate-100 shadow-lg border border-slate-200/80">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                key={active.image}
                src={active.image}
                alt={active.name}
                className="w-full h-full object-cover transition-opacity duration-300 animate-in fade-in"
              />
            </div>
          </div>

          {/* Right: Clean Quote Card (Matches Reference Image) */}
          <div className="lg:col-span-4">
            <div className="rounded-[32px] bg-[#F8FAFC] border border-slate-200/70 p-8 sm:p-10 flex flex-col justify-between min-h-[380px] shadow-sm">
              
              <div>
                {/* Soft Coral Double Quotation Mark (Matches Reference Image) */}
                <div className="text-[#F39182] mb-5">
                  <svg
                    className="w-10 h-10 fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.57-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                  </svg>
                </div>

                {/* Quote Text */}
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal animate-in fade-in">
                  {active.quote}
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6">
                <h4 className="text-base sm:text-lg font-bold text-[#0A192F] font-[family-name:var(--font-heading)]">
                  {active.name}
                </h4>
                <div className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
                  {active.role}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
