'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Building2, User, Mail, Lock } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen bg-[#F6F3EC] flex flex-col justify-center items-center p-4 sm:p-6">
      <div className="w-full max-w-md bg-white rounded-3xl p-8 shadow-xl border border-[#E2E2D8] space-y-6">
        
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

        <div className="space-y-1">
          <h1 className="text-2xl font-bold tracking-tight text-[#0B0F0E] font-[family-name:var(--font-heading)]">
            Create Your Account
          </h1>
          <p className="text-xs text-zinc-500">
            Start managing properties, tenancies, and contractors with AI.
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert(`Account registered for ${email}. Starting 30-day trial!`);
          }}
          className="space-y-4 text-xs"
        >
          <div className="space-y-1.5">
            <label className="font-semibold text-zinc-700">Full Name</label>
            <div className="relative">
              <User className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#F6F3EC] border border-black/5 focus:outline-none focus:ring-2 focus:ring-[#E4ED64] text-xs"
                required
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="font-semibold text-zinc-700">Work Email</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john@example.com"
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
                placeholder="At least 8 characters"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#F6F3EC] border border-black/5 focus:outline-none focus:ring-2 focus:ring-[#E4ED64] text-xs"
                required
              />
            </div>
          </div>

          <Button variant="primary" size="md" className="w-full font-bold">
            Start Free 30-Day Evaluation
          </Button>
        </form>

        <div className="pt-2 text-center text-xs text-zinc-500">
          Already registered?{' '}
          <Link href="/login" className="font-semibold text-black underline">
            Sign in here
          </Link>
        </div>

      </div>
    </div>
  );
}
