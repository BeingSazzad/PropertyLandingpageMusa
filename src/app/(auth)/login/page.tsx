'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Building2, Lock, Mail, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'landlord' | 'tenant' | 'contractor'>('landlord');

  return (
    <div className="min-h-screen bg-[#F6F3EC] flex flex-col justify-center items-center p-4 sm:p-6">
      <div className="w-full max-w-md bg-white rounded-3xl p-8 shadow-xl border border-[#E2E2D8] space-y-6">
        
        {/* Top Back Link */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-500 hover:text-black transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </Link>
          <div className="w-7 h-7 rounded-full bg-[#0B0F0E] flex items-center justify-center text-[#E4ED64]">
            <Building2 className="w-4 h-4" />
          </div>
        </div>

        {/* Title */}
        <div className="space-y-1">
          <h1 className="text-2xl font-bold tracking-tight text-[#0B0F0E] font-[family-name:var(--font-heading)]">
            Welcome to Landlord HQ
          </h1>
          <p className="text-xs text-zinc-500">
            Sign in to access your portfolio dashboard and properties.
          </p>
        </div>

        {/* Role Selector Pills */}
        <div className="grid grid-cols-3 gap-1 bg-[#F6F3EC] p-1 rounded-2xl text-xs font-semibold text-center">
          {(['landlord', 'tenant', 'contractor'] as const).map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setRole(r)}
              className={`py-2 rounded-xl capitalize transition-all cursor-pointer ${
                role === r
                  ? 'bg-[#0B0F0E] text-white shadow-sm'
                  : 'text-zinc-600 hover:text-black'
              }`}
            >
              {r}
            </button>
          ))}
        </div>

        {/* Login Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert(`Demo login authenticated as ${role}: ${email || 'john@landlordhq.co.uk'}`);
          }}
          className="space-y-4 text-xs"
        >
          <div className="space-y-1.5">
            <label className="font-semibold text-zinc-700">Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={role === 'landlord' ? 'john@landlordhq.co.uk' : 'user@domain.com'}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#F6F3EC] border border-black/5 focus:outline-none focus:ring-2 focus:ring-[#E4ED64] text-xs"
                required
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="font-semibold text-zinc-700">Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#F6F3EC] border border-black/5 focus:outline-none focus:ring-2 focus:ring-[#E4ED64] text-xs"
                required
              />
            </div>
          </div>

          <Button variant="primary" size="md" className="w-full font-bold">
            Sign In to Dashboard
          </Button>
        </form>

        {/* Footer */}
        <div className="pt-2 text-center text-xs text-zinc-500">
          Don&apos;t have an account?{' '}
          <Link href="/register" className="font-semibold text-black underline">
            Register your portfolio
          </Link>
        </div>

      </div>
    </div>
  );
}
