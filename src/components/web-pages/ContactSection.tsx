'use client';

import React, { useState } from 'react';
import { CheckCircle2, Mail, MapPin, Phone } from 'lucide-react';

import { PROPERTY_IMAGES } from '@/lib/brand';

const CONTACT_PHOTO = PROPERTY_IMAGES.estate;

const fieldClass =
  'mt-2 w-full rounded-full border border-[#E6EAEF] bg-[#F8FAFC] px-5 py-3.5 font-[family-name:var(--font-nav)] text-[16px] font-normal leading-6 text-[#131515] placeholder:text-[#94A3B8] outline-none transition-shadow focus:border-[#0084FF]/40 focus:bg-white';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({ fullName: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="bg-white px-4 pb-20 pt-10 sm:px-6 sm:pb-24 sm:pt-14 lg:px-10">
      <div className="mx-auto max-w-[1120px] space-y-12 sm:space-y-16">
        <header className="mx-auto max-w-2xl space-y-4 text-center">
          <h1 className="title-section mx-auto">
            Connect with Landlord HQ
            <br />
            <span className="text-[#0084FF]">for support and inquiries</span>
          </h1>
          <p className="text-subtitle mx-auto max-w-xl">
            Reach our London team for product questions, tenancy setup, or general inquiries. We help with Open Banking rent, certificates, and contractor dispatch.
          </p>
        </header>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-[32px] font-semibold leading-10 text-[#131515]">
              Send us a message
            </h2>
            <p className="mt-3 max-w-md font-[family-name:var(--font-nav)] text-[16px] font-normal leading-6 text-[#494d4d]">
              Fill out the form below and our team will get back to you as soon as possible.
            </p>

            {submitted ? (
              <div className="mt-10 space-y-4 rounded-[28px] bg-[#F8FAFC] px-6 py-10 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#E8F3FF] text-[#0084FF]">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-[22px] font-semibold text-[#131515]">
                  Message received
                </h3>
                <p className="mx-auto max-w-sm font-[family-name:var(--font-nav)] text-[16px] leading-6 text-[#494d4d]">
                  Thank you. A Landlord HQ specialist will email or call you within 2 business hours.
                </p>
                <button
                  type="button"
                  onClick={resetForm}
                  className="mt-2 rounded-full border border-[#E6EAEF] px-5 py-2.5 font-[family-name:var(--font-nav)] text-[16px] font-medium text-[#131515] hover:border-[#0084FF]/40 hover:text-[#0084FF]"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div>
                  <label htmlFor="fullName" className="font-[family-name:var(--font-nav)] text-[16px] font-medium leading-5 text-[#131515]">
                    Full name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    autoComplete="name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Full name"
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="font-[family-name:var(--font-nav)] text-[16px] font-medium leading-5 text-[#131515]">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter your email"
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="font-[family-name:var(--font-nav)] text-[16px] font-medium leading-5 text-[#131515]">
                    Phone number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Enter your number"
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="font-[family-name:var(--font-nav)] text-[16px] font-medium leading-5 text-[#131515]">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Type your message here"
                    className={`${fieldClass} min-h-[140px] resize-none rounded-[22px] py-4`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-[#0A192F] py-3.5 font-[family-name:var(--font-nav)] text-[16px] font-medium leading-5 text-white transition-colors hover:bg-[#132A4C]"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          <div className="space-y-4">
            <div className="overflow-hidden rounded-[28px] border border-[#E6EAEF] bg-[#E8F3FF]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={CONTACT_PHOTO}
                alt="A high-end property from a Landlord HQ portfolio"
                className="h-[280px] w-full object-cover object-center sm:h-[320px]"
              />
            </div>

            <a
              href="mailto:support@landlordhq.co.uk"
              className="flex items-center gap-4 rounded-[28px] border border-[#E6EAEF] bg-[#F8FAFC] px-5 py-5 transition-colors hover:bg-[#E8F3FF]"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#E6EAEF] bg-white text-[#0084FF]">
                <Mail className="h-5 w-5" />
              </span>
              <span>
                <span className="block font-[family-name:var(--font-nav)] text-[16px] font-medium leading-5 text-[#131515]">
                  Email
                </span>
                <span className="mt-1 block font-[family-name:var(--font-nav)] text-[16px] leading-6 text-[#494d4d]">
                  support@landlordhq.co.uk
                </span>
              </span>
            </a>

            <a
              href="tel:+442079460912"
              className="flex items-center gap-4 rounded-[28px] border border-[#E6EAEF] bg-[#F8FAFC] px-5 py-5 transition-colors hover:bg-[#E8F3FF]"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#E6EAEF] bg-white text-[#0084FF]">
                <Phone className="h-5 w-5" />
              </span>
              <span>
                <span className="block font-[family-name:var(--font-nav)] text-[16px] font-medium leading-5 text-[#131515]">
                  Phone
                </span>
                <span className="mt-1 block font-[family-name:var(--font-nav)] text-[16px] leading-6 text-[#494d4d]">
                  +44 20 7946 0912
                </span>
              </span>
            </a>

            <div className="flex items-center gap-4 rounded-[28px] border border-[#E6EAEF] bg-[#F8FAFC] px-5 py-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#E6EAEF] bg-white text-[#0084FF]">
                <MapPin className="h-5 w-5" />
              </span>
              <span>
                <span className="block font-[family-name:var(--font-nav)] text-[16px] font-medium leading-5 text-[#131515]">
                  Address
                </span>
                <span className="mt-1 block font-[family-name:var(--font-nav)] text-[16px] leading-6 text-[#494d4d]">
                  12 Park Lane, Mayfair, London, UK
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
