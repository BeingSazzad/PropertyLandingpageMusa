import type { Metadata } from 'next';
import './globals.css';
import { ReduxProvider } from '@/redux/ReduxProvider';
import { AppDownloadModal } from '@/components/shared/AppDownloadModal';

export const metadata: Metadata = {
  title: 'Landlord HQ | AI Real Estate & Intelligent Property Operations',
  description:
    'Experience next-generation property management powered by AI. Autonomous tenant screening, zero-delay rent collection, and instant contractor dispatch in one luxury mobile suite.',
  keywords: [
    'Property Management AI',
    'Landlord App',
    'Tenant Screening',
    'Rent Collection',
    'Contractor Dispatch',
    'Real Estate Automation',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#F6F3EC] text-[#0B0F0E] antialiased selection:bg-[#E4ED64] selection:text-black">
        <ReduxProvider>
          {children}
          <AppDownloadModal />
        </ReduxProvider>
      </body>
    </html>
  );
}
