'use client';

import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  User,
  Clock,
  ShieldCheck,
  ArrowRight,
  MessageSquare,
  Building2,
  Sparkles,
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [portfolioSize, setPortfolioSize] = useState('1-3 Flats');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-10 bg-[#F8FAFC]">
      <div className="max-w-[1360px] mx-auto">
        
        {/* Modern Luminous Split Container (Harmonized with Hero & App Showcase) */}
        <div className="rounded-[36px] sm:rounded-[48px] bg-gradient-to-br from-white via-sky-50/30 to-slate-50/80 border border-slate-200/90 shadow-xl overflow-hidden relative p-8 sm:p-12 lg:p-16">
          
          {/* Subtle Ambient Radiant Glows */}
          <div className="absolute top-0 right-1/4 w-[460px] h-[460px] bg-gradient-to-br from-sky-200/35 to-[#0084FF]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-cyan-200/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
            
            {/* Left Column: Concierge & Direct Contacts */}
            <div className="lg:col-span-5 space-y-7 text-left">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-sky-200/80 shadow-xs text-xs font-semibold text-sky-800">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Live Concierge • Mon–Fri 8am–7pm
                </div>

                <h2 className="title-section">
                  Speak with our <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] via-[#0084FF] to-[#00C2FF]">
                    UK property specialists
                  </span>
                </h2>

                <p className="text-subtitle">
                  Whether you manage 2 buy-to-let flats or a multi-unit residential building, our London team helps you set up tenancies, Open Banking rent, and certified contractor dispatch.
                </p>
              </div>

              {/* Clean Contact Cards with Subtle Elevation */}
              <div className="space-y-3 pt-1">
                <a
                  href="mailto:support@landlordhq.co.uk"
                  className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-sky-300 hover:shadow-md transition-all duration-200 group shadow-xs"
                >
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0084FF] flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-[#0084FF] group-hover:text-white transition-all">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Email Concierge
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-[#0A192F] group-hover:text-[#0084FF] transition-colors">
                      support@landlordhq.co.uk
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0084FF] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Direct Telephone
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-[#0A192F]">
                      +44 20 7946 0912
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0084FF] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      UK Operations
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-[#0A192F]">
                      12 Park Lane, Mayfair, London, UK
                    </div>
                  </div>
                </div>
              </div>

              {/* Guarantees strip */}
              <div className="flex items-center gap-6 pt-1 text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#0084FF]" /> Average reply: &lt; 15 mins
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" /> Free Property Audit
                </span>
              </div>
            </div>

            {/* Right Column: Modern High-Converting Form Card */}
            <div className="lg:col-span-7 bg-white rounded-3xl sm:rounded-[36px] p-7 sm:p-10 shadow-xl border border-slate-200/80 text-left">
              
              <div className="mb-6 space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0A192F] font-[family-name:var(--font-heading)]">
                    Get Started or Request a Demo
                  </h3>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-sky-50 text-sky-700 px-2.5 py-1 rounded-full border border-sky-100 hidden sm:inline-block">
                    Free Consultation
                  </span>
                </div>
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
                      setFormData({ name: '', email: '', message: '' });
                      setPortfolioSize('1-3 Flats');
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
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0084FF]/20 focus:border-[#0084FF] transition-all"
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
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0084FF]/20 focus:border-[#0084FF] transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Portfolio Size: Interactive Segmented Pill Switcher */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Portfolio Size</label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: '1-3 Flats', label: '1–3 Flats', sub: 'Starter' },
                        { id: '4-15 Flats', label: '4–15 Flats', sub: 'Portfolio' },
                        { id: '16+ / HMO', label: '16+ / HMO', sub: 'Multi-Unit' },
                      ].map((tier) => (
                        <button
                          key={tier.id}
                          type="button"
                          onClick={() => setPortfolioSize(tier.id)}
                          className={`py-2 px-2 sm:px-3 rounded-xl text-left border transition-all cursor-pointer ${
                            portfolioSize === tier.id
                              ? 'bg-sky-50 border-[#0084FF] text-[#0084FF] shadow-xs'
                              : 'bg-slate-50/70 hover:bg-slate-100 border-slate-200 text-slate-600'
                          }`}
                        >
                          <div className="text-xs font-bold leading-tight">{tier.label}</div>
                          <div className="text-[10px] text-slate-400 font-medium">{tier.sub}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Questions or Requirements</label>
                    <div className="relative">
                      <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                      <textarea
                        rows={3}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your units, rent collection preferences, or contractor dispatch questions..."
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0084FF]/20 focus:border-[#0084FF] transition-all resize-none"
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
                  <div className="pt-1 flex items-center justify-center gap-2 text-[11px] text-slate-400 text-center">
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
