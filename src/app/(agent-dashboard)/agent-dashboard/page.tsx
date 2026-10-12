import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Building, Users, TrendingUp, AlertTriangle, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function AgentDashboardPage() {
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
                Landlord Command Center
              </span>
              <h1 className="text-xl font-bold text-[#0B0F0E]">
                Portfolio Overview • 18 Properties
              </h1>
            </div>
          </div>
          <Link href="/">
            <Button variant="outline" size="sm">Exit to Website</Button>
          </Link>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-[#121514] text-white border border-white/10 space-y-2">
            <span className="text-[11px] text-zinc-400">Total Monthly Rent</span>
            <div className="text-2xl font-bold font-mono text-[#60A5FA]">£32,450</div>
            <div className="text-[10px] text-zinc-400">99.4% collected</div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#E2E2D8] space-y-2">
            <span className="text-[11px] text-zinc-500">Active Tenancies</span>
            <div className="text-2xl font-bold text-[#0B0F0E]">38 Units</div>
            <div className="text-[10px] text-emerald-600 font-semibold">100% Occupancy</div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#E2E2D8] space-y-2">
            <span className="text-[11px] text-zinc-500">Contractor Triage</span>
            <div className="text-2xl font-bold text-[#0B0F0E]">1 In Progress</div>
            <div className="text-[10px] text-amber-600 font-semibold">Plumber assigned</div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#E2E2D8] space-y-2">
            <span className="text-[11px] text-zinc-500">Compliance Rating</span>
            <div className="text-2xl font-bold text-emerald-700">100%</div>
            <div className="text-[10px] text-zinc-500">Gas & EPC valid</div>
          </div>
        </div>

      </div>
    </div>
  );
}
