import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Building2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function AboutPage() {
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
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-700 bg-zinc-100 px-2.5 py-1 rounded-full">
            <Sparkles className="w-4 h-4 text-[#CDD55A]" /> About Landlord HQ AI
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-[#0B0F0E] font-[family-name:var(--font-heading)]">
            Architecting the Future of Living
          </h1>
          <p className="text-xs text-zinc-400">Our Mission & Engineering Standards</p>
        </div>

        <div className="space-y-4 text-xs text-zinc-600 leading-relaxed">
          <p>
            Landlord HQ was founded with a singular conviction: managing properties shouldn&apos;t require juggling 12 different disconnected apps, spreadsheets, and midnight emergency phone calls.
          </p>
          <p>
            By combining autonomous document intelligence, seamless direct debits, and a pre-certified contractor dispatch network, we create harmony between property owners and residents.
          </p>
        </div>

        <div className="pt-4 border-t border-black/5">
          <Link href="/">
            <Button variant="primary" size="sm">Explore Platform</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
