import type { Metadata } from 'next';
import { Google_Sans_Flex, Stack_Sans_Headline } from 'next/font/google';
import './globals.css';
import { ReduxProvider } from '@/redux/ReduxProvider';
import { AppDownloadModal } from '@/components/shared/AppDownloadModal';

const googleSansFlex = Google_Sans_Flex({
  weight: 'variable',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nav',
});

const stackSansHeadline = Stack_Sans_Headline({
  weight: 'variable',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'Landlord HQ | UK Property Management & Tenancy Platform',
  description:
    'All-in-one UK property management platform for landlords, tenants, and contractors. Track buildings, flats, rent payments, key registers, and maintenance work orders.',
  keywords: [
    'Property Management',
    'Landlord App',
    'Tenant Leases',
    'Rent Collection',
    'Contractor Dispatch',
    'Key Register',
    'UK Property Management',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${googleSansFlex.variable} ${stackSansHeadline.variable}`}>
      <body className={`${googleSansFlex.className} ${googleSansFlex.variable} ${stackSansHeadline.variable} min-h-screen flex flex-col bg-[#F8FAFC] text-[#0A192F] antialiased selection:bg-[#0084FF] selection:text-white`}>
        <ReduxProvider>
          {children}
          <AppDownloadModal />
        </ReduxProvider>
      </body>
    </html>
  );
}
