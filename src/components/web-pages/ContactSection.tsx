'use client';

import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  User,
  Building2,
  Clock,
  ShieldCheck,
  ArrowRight,
  MessageSquare,
} from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    portfolioSize: '1-3 Flats (Starter)',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-10 bg-[#F8FAFC]">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Luxury Tech Split Container (Deep Midnight Navy + Modern Pure White Form Card) */}
        <div className="rounded-[36px] sm:rounded-[48px] bg-[#0A192F] text-white shadow-2xl border border-sky-900/40 overflow-hidden relative p-8 sm:p-12 lg:p-16">
          
          {/* Ambient Lighting Accents */}
          <div className="absolute top-0 right-1/3 w-96 h-96 bg-[#0084FF]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center relative z-10">
            
            {/* Left Column: Direct Property Concierge Information */}
            <div className="lg:col-span-5 space-y-7">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-sky-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Live Concierge • Mon–Fri 8am–7pm
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-[family-name:var(--font-heading)] leading-tight">
                  Speak with our <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-[#0084FF]">
                    UK property specialists
                  </span>
                </h2>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  Whether you have 2 buy-to-let flats or a 50-unit residential building, our London team helps you set up tenancies, automated rent collection, and Gas Safe contractor dispatch.
                </p>
              </div>

              {/* Contact Pill Cards */}
              <div className="space-y-3 pt-2">
                <a
                  href="mailto:support@landlordhq.co.uk"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#38BDF8]/50 hover:bg-white/10 transition-all duration-200 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#0084FF] to-[#38BDF8] text-white flex items-center justify-center shrink-0 shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Email Concierge
                    </div>
                    <div className="text-sm font-semibold text-white group-hover:text-[#38BDF8] transition-colors">
                      support@landlordhq.co.uk
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#0084FF] to-[#38BDF8] text-white flex items-center justify-center shrink-0 shadow-md shadow-sky-500/20">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Direct Telephone
                    </div>
                    <div className="text-sm font-semibold text-white">
                      +44 20 7946 0912
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#0084FF] to-[#38BDF8] text-white flex items-center justify-center shrink-0 shadow-md shadow-sky-500/20">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      UK Operations
                    </div>
                    <div className="text-sm font-semibold text-white">
                      12 Park Lane, Mayfair, London, UK
                    </div>
                  </div>
                </div>
              </div>

              {/* Guarantees strip */}
              <div className="flex items-center gap-6 pt-2 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#38BDF8]" /> Average reply: &lt; 15 mins
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" /> Free Property Audit
                </span>
              </div>
            </div>

            {/* Right Column: Modern High-Converting Form Card */}
            <div className="lg:col-span-7 bg-white rounded-3xl sm:rounded-[36px] p-8 sm:p-10 shadow-2xl text-slate-800 border border-slate-100">
              
              <div className="mb-6 space-y-1">
                <h3 className="text-xl sm:text-2xl font-bold text-[#0A192F] font-[family-name:var(--font-heading)]">
                  Get Started or Request a Demo
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-normal">
                  Tell us about your portfolio and a UK specialist will reach out with customized setup guidance.
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-9 h-9 stroke-[2.2]" />
                  </div>
                  <h4 className="text-2xl font-bold text-[#0A192F] font-[family-name:var(--font-heading)]">
                    Inquiry Received!
                  </h4>
                  <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                    Thank you. One of our London property managers will call or email you within 2 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', portfolioSize: '1-3 Flats (Starter)', message: '' });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Row: Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">Full Name</label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Marcus Sterling"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0084FF]/20 focus:border-[#0084FF] transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">Email Address</label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="marcus@example.co.uk"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0084FF]/20 focus:border-[#0084FF] transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Portfolio Size */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Portfolio Size</label>
                    <div className="relative">
                      <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                      <select
                        value={formData.portfolioSize}
                        onChange={(e) => setFormData({ ...formData, portfolioSize: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0084FF]/20 focus:border-[#0084FF] transition-all appearance-none cursor-pointer"
                      >
                        <option value="1-3 Flats (Starter)">1 - 3 Flats / Units (Starter Landlord)</option>
                        <option value="4-15 Flats (Portfolio)">4 - 15 Flats / Units (Portfolio Investor)</option>
                        <option value="16+ Flats or HMO">16+ Flats or HMO Multi-Building Portfolio</option>
                        <option value="Letting Agency">Letting Agency / Property Management Firm</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Questions or Requirements</label>
                    <div className="relative">
                      <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your units, rent collection preferences, or contractor dispatch questions..."
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0084FF]/20 focus:border-[#0084FF] transition-all resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-full bg-[#0084FF] hover:bg-[#0070DE] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-sky-500/25 hover:shadow-xl transition-all duration-200 cursor-pointer active:scale-95 group"
                    >
                      <span>Send Message & Book Call</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  {/* Privacy reassurance */}
                  <div className="pt-2 flex items-center justify-center gap-2 text-xs text-slate-400 text-center">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Bank-grade 256-bit SSL encrypted. 100% confidential. No spam.</span>
                  </div>

                </form>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
