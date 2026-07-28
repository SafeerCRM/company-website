import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.s4starttech.com'),

  title: {
    default:
      'S4Start Technologies | Custom CRM, ERP and Business Software',
    template: '%s | S4Start Technologies',
  },

  description:
    'S4Start Technologies develops custom CRM systems, ERP platforms, Android applications, customer portals, dashboards, workflow automation, and enterprise business software.',

  applicationName: 'S4Start Technologies',

  keywords: [
    'S4Start Technologies',
    'Custom CRM Development',
    'ERP Development',
    'Business Software Development',
    'Custom Software Company',
    'Mobile App Development',
    'Android App Development',
    'Enterprise Software',
    'Business Automation',
    'Customer Portal Development',
    'Dealer Portal Development',
    'Dashboard Development',
    'Workflow Management Software',
    'Next.js Development',
    'NestJS Development',
    'Software Development Company India',
  ],

  authors: [
    {
      name: 'S4Start Technologies',
    },
  ],

  creator: 'S4Start Technologies',
  publisher: 'S4Start Technologies',

  alternates: {
    canonical: '/',
  },

  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.s4starttech.com',
    siteName: 'S4Start Technologies',
    title:
      'S4Start Technologies | Custom CRM, ERP and Business Software',
    description:
      'Engineering intelligent business solutions through custom CRM, ERP, mobile applications, customer portals, analytics, and workflow automation.',
  },

  twitter: {
    card: 'summary_large_image',
    title:
      'S4Start Technologies | Custom CRM, ERP and Business Software',
    description:
      'Custom CRM, ERP, mobile applications, customer portals, analytics, and business automation solutions.',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
