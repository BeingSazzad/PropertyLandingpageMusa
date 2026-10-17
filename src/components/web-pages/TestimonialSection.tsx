'use client';

import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { PROPERTY_IMAGES } from '@/lib/brand';

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
    role: 'Portfolio landlord, 14 London flats',
    image: PROPERTY_IMAGES.twilight,
    quote:
      'Managing 14 flats across Richmond and Mayfair used to mean endless WhatsApp messages and delayed rent. With Landlord HQ, rent arrives via Open Banking, Gas Safe certs stay tracked, and certified trades resolve repairs in hours.',
  },
  {
    id: '2',
    name: 'Sarah Jenkins',
    role: 'Resident tenant, 12 Park Lane',
    image: PROPERTY_IMAGES.estate,
    quote:
      'Rent, deposit, and repairs sit in one place. I pay in one tap, the DPS holds our deposit, and when the boiler failed a Gas Safe engineer was dispatched the next morning.',
  },
  {
    id: '3',
    name: 'David Chen',
    role: 'HMO property investor',
    image: PROPERTY_IMAGES.mansion,
    quote:
      'Compliance dates, tenancy agreements, and repair tickets in one register have saved hours each week. The subscription pays for itself in time saved and no missed inspections.',
  },
];

export const TestimonialSection: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const prev = () => {
    setCurrentIdx((prevIdx) => (prevIdx === 0 ? TESTIMONIALS.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrentIdx((prevIdx) => (prevIdx === TESTIMONIALS.length - 1 ? 0 : prevIdx + 1));
  };

  const active = TESTIMONIALS[currentIdx];

  return (
    <section id="testimonials" className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-white">
      <div className="max-w-[1360px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Subtitle & Arrow Controls (Matches Reference Image) */}
          <div className="lg:col-span-4 space-y-6">
            <h2 className="title-section">
              What Our Landlords <br />
              Say About Us
            </h2>

            <p className="text-subtitle max-w-sm">
              We wanted to streamline property management and end payment friction, and Landlord HQ was the perfect way.
            </p>

            {/* Circular Slider Controls (Matches Left Outline / Right Black Circle in reference) */}
            <div className="flex items-center gap-3 pt-2">
              <button
                id="prev-testimonial-btn"
                type="button"
                onClick={prev}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E6EAEF] bg-white text-[#131515] hover:border-[#0084FF]/40 hover:text-[#0084FF]"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                id="next-testimonial-btn"
                type="button"
                onClick={next}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0A192F] text-white hover:bg-[#132A4C]"
                aria-label="Next testimonial"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Center: Rounded Portrait Photo (Matches Reference Image) */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="aspect-[4/5] w-full max-w-[360px] overflow-hidden rounded-[28px] border border-[#E6EAEF] bg-[#E8F3FF]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                key={active.image}
                src={active.image}
                alt={`${active.name}'s property`}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Right: Clean Quote Card (Matches Reference Image) */}
          <div className="lg:col-span-4">
            <div className="flex min-h-[380px] flex-col justify-between rounded-[28px] border border-[#E6EAEF] bg-[#F8FAFC] p-8 sm:p-10">
              <div>
                <div className="mb-5 text-[#0084FF]">
                  <svg
                    className="w-10 h-10 fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.57-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                  </svg>
                </div>

                {/* Quote Text */}
                <p className="font-[family-name:var(--font-nav)] text-[16px] font-normal leading-6 text-[#494d4d]">
                  {active.quote}
                </p>
              </div>

              <div className="pt-6">
                <h4 className="font-[family-name:var(--font-display)] text-[22px] font-semibold leading-7 text-[#131515]">
                  {active.name}
                </h4>
                <div className="mt-1 font-[family-name:var(--font-nav)] text-[16px] leading-6 text-[#494d4d]">
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
