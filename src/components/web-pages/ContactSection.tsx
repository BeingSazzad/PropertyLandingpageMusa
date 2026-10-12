'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    portfolioSize: '1-5 Flats',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-10 bg-[#F8FAFC]">
      <div className="max-w-[1400px] mx-auto">
        <div className="rounded-[32px] sm:rounded-[44px] bg-white border border-slate-200 shadow-xl p-8 sm:p-12 lg:p-16 overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Contact Information */}
            <div className="lg:col-span-5 space-y-6">
              <Badge variant="blue">Get in Touch</Badge>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0A192F] font-[family-name:var(--font-heading)] leading-tight">
                Speak with our{' '}
                <span className="text-[#0084FF]">UK property specialists</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Whether you have 2 flats or a 50-unit building, we are here to help you get your buildings, tenancies, and contractor network running seamlessly.
              </p>

              <div className="space-y-4 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0084FF] flex items-center justify-center shrink-0 border border-sky-100">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Email Us</div>
                    <a href="mailto:support@landlordhq.co.uk" className="text-sm font-semibold text-[#0A192F] hover:text-[#0084FF] transition-colors">
                      support@landlordhq.co.uk
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0084FF] flex items-center justify-center shrink-0 border border-sky-100">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Direct Telephone</div>
                    <span className="text-sm font-semibold text-[#0A192F]">+44 20 7946 0912</span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0084FF] flex items-center justify-center shrink-0 border border-sky-100">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">UK Headquarters</div>
                    <span className="text-sm font-semibold text-[#0A192F]">12 Park Lane, Mayfair, London, UK</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact & Demo Request Form */}
            <div className="lg:col-span-7 bg-slate-50/90 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-in fade-in">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0B0F0E]">Thank You!</h3>
                  <p className="text-sm text-zinc-600 max-w-md mx-auto">
                    Your message has been sent to our London team. We will get back to you within 2 business hours.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', portfolioSize: '1-5 Flats', message: '' });
                    }}
                  >
                    Send Another Note
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-zinc-700">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Smith"
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E2E2D8] text-sm focus:outline-none focus:border-[#2563EB] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-zinc-700">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.co.uk"
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E2E2D8] text-sm focus:outline-none focus:border-[#2563EB] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-zinc-700">Portfolio Size</label>
                    <select
                      value={formData.portfolioSize}
                      onChange={(e) => setFormData({ ...formData, portfolioSize: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E2E2D8] text-sm focus:outline-none focus:border-[#2563EB] transition-colors"
                    >
                      <option value="1-3 Flats">1 - 3 Flats / Units (Starter)</option>
                      <option value="4-15 Flats">4 - 15 Flats / Units (Portfolio)</option>
                      <option value="16+ Flats">16+ Flats or HMO Buildings (Professional)</option>
                      <option value="Agency / Letting">Letting Agency / Property Manager</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-zinc-700">Message / Questions</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your properties or questions about the platform..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E2E2D8] text-sm focus:outline-none focus:border-[#2563EB] transition-colors resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    withArrow
                    className="w-full font-bold shadow-md"
                  >
                    Send Message
                  </Button>
                </form>
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
