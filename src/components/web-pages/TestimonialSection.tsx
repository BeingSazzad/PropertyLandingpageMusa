import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import TestimonialMarquee from '@/components/ui/marquee-01';
import { Reveal } from '@/components/ui/Reveal';

export const TestimonialSection: React.FC = () => {
  return (
    <section id="testimonials" className="scroll-mt-[88px] bg-[#F8FAFC] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
      <Reveal className="mx-auto max-w-[1360px]">
        <SectionHeader
          title={
            <>
              Happy clients
              <br />
              <span className="text-[#0084FF]">of Landlord HQ</span>
            </>
          }
          subtitle="Landlords and tenants who collect rent, keep certificates current, and book Gas Safe jobs without chasing WhatsApp threads."
          align="center"
        />
      </Reveal>
      <div className="mt-12">
        <TestimonialMarquee />
      </div>
    </section>
  );
};
