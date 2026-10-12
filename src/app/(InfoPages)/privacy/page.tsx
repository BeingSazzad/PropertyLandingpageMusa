import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function PrivacyPage() {
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
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
            <ShieldCheck className="w-4 h-4" /> GDPR & Open Banking Compliant
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-[#0B0F0E] font-[family-name:var(--font-heading)]">
            Privacy Policy & Data Security
          </h1>
          <p className="text-xs text-zinc-400">Last updated: October 2026</p>
        </div>

        <div className="prose prose-sm text-zinc-600 space-y-4 text-xs leading-relaxed">
          <p>
            At Landlord HQ, we maintain bank-level security protocols for all landlord, resident, and contractor data. Our systems use 256-bit AES encryption at rest and TLS 1.3 in transit.
          </p>
          <h3 className="text-sm font-bold text-[#0B0F0E]">1. Data We Process</h3>
          <p>
            Property documents (EPC certificates, Gas Safety, lease agreements), verified banking tokens for automated rent direct debits, and maintenance communication logs.
          </p>
          <h3 className="text-sm font-bold text-[#0B0F0E]">2. Third-Party Compliance</h3>
          <p>
            We partner exclusively with FCA-regulated open-banking partners and official UK deposit protection schemes.
          </p>
        </div>

        <div className="pt-4 border-t border-black/5">
          <Link href="/">
            <Button variant="primary" size="sm">Return to Platform</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
