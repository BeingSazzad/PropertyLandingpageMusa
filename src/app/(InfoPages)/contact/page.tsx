'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-[#F6F3EC] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-[#E2E2D8] shadow-sm space-y-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-500 hover:text-black transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
        </Link>

        <div className="space-y-2 border-b border-black/5 pb-6">
          <h1 className="text-3xl font-bold tracking-tight text-[#0B0F0E] font-[family-name:var(--font-heading)]">
            Contact Landlord HQ
          </h1>
          <p className="text-xs text-zinc-400">Our engineering and support teams are here for you 24/7</p>
        </div>

        {submitted ? (
          <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs space-y-2">
            <h4 className="font-bold text-sm">Thank you for your message!</h4>
            <p>Our property solutions team will contact you within 2 hours.</p>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="space-y-4 text-xs"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="font-semibold text-zinc-700">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="John Smith"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F6F3EC] border border-black/5 focus:outline-none focus:ring-2 focus:ring-[#E4ED64] text-xs"
                />
              </div>
              <div className="space-y-1.5">
                <label className="font-semibold text-zinc-700">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F6F3EC] border border-black/5 focus:outline-none focus:ring-2 focus:ring-[#E4ED64] text-xs"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="font-semibold text-zinc-700">Message / Portfolio Inquiries</label>
              <textarea
                rows={4}
                required
                placeholder="Tell us about your property units or questions..."
                className="w-full px-4 py-2.5 rounded-xl bg-[#F6F3EC] border border-black/5 focus:outline-none focus:ring-2 focus:ring-[#E4ED64] text-xs"
              />
            </div>

            <Button variant="primary" size="md" className="w-full sm:w-auto font-bold">
              Send Message
            </Button>
          </form>
        )}

        <div className="pt-6 border-t border-black/5 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-zinc-500">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-zinc-400" />
            <span>hello@landlordhq.co.uk</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-zinc-400" />
            <span>+44 20 7946 0912</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-zinc-400" />
            <span>London & Antalya HQ</span>
          </div>
        </div>

      </div>
    </div>
  );
}
