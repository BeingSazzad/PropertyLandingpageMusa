import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Home, Key, CreditCard, Wrench, Shield, FileText } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function UserDashboardPage() {
  return (
    <div className="min-h-screen bg-[#F6F3EC] p-4 sm:p-8">
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Top Bar */}
        <div className="flex items-center justify-between bg-white rounded-2xl p-4 sm:p-6 border border-[#E2E2D8] shadow-sm">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="w-9 h-9 rounded-full bg-[#F6F3EC] flex items-center justify-center text-zinc-600 hover:text-black transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <div>
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                Resident Portal
              </span>
              <h1 className="text-xl font-bold text-[#0B0F0E]">
                Welcome Home, Sarah Jenkins
              </h1>
            </div>
          </div>
          <Link href="/">
            <Button variant="outline" size="sm">Exit to Website</Button>
          </Link>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-[#E2E2D8] space-y-2">
            <div className="flex items-center justify-between text-xs text-zinc-500">
              <span>Next Rent Due</span>
              <CreditCard className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="text-2xl font-bold font-mono text-[#0B0F0E]">£1,450.00</div>
            <div className="text-[11px] text-emerald-700 font-semibold">Auto-pay enabled (1st of month)</div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#E2E2D8] space-y-2">
            <div className="flex items-center justify-between text-xs text-zinc-500">
              <span>Current Tenancy</span>
              <Home className="w-4 h-4 text-zinc-500" />
            </div>
            <div className="text-base font-bold text-[#0B0F0E]">Flat 4B, Victoria Mansions</div>
            <div className="text-[11px] text-zinc-500">Fixed Term until Nov 2027</div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#E2E2D8] space-y-2">
            <div className="flex items-center justify-between text-xs text-zinc-500">
              <span>Maintenance Status</span>
              <Wrench className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-base font-bold text-emerald-700">0 Active Issues</div>
            <div className="text-[11px] text-zinc-500">Last repair resolved in 24 hrs</div>
          </div>
        </div>

      </div>
    </div>
  );
}
