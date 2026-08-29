import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.s4starttech.com'),

  title: {
    default:
      'S4Start Technologies | Custom CRM, ERP & Business Software',
    template: '%s | S4Start Technologies',
  },

  description:
    'S4Start Technologies builds custom CRM systems, ERP platforms, mobile applications, customer and dealer portals, workflow automation, analytics, and enterprise business software.',

  applicationName: 'S4Start Technologies',

  keywords: [
    'S4Start Technologies',
    'Custom CRM Development',
    'Custom ERP Development',
    'CRM Software Development India',
    'ERP Software Development India',
    'Custom Software Development Company India',
    'Business Software Development',
    'Enterprise Software Development',
    'Mobile App Development',
    'Android App Development',
    'Business Automation',
    'Customer Portal Development',
    'Dealer Portal Development',
    'Workflow Automation Software',
    'Inventory Management Software',
    'Project Management Software',
    'HR Management Software',
    'Business Dashboard Development',
    'Next.js Development',
    'NestJS Development',
  ],

  authors: [
    {
      name: 'S4Start Technologies',
      url: 'https://www.s4starttech.com',
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
      'S4Start Technologies | Custom CRM, ERP & Business Software',

    description:
      'Custom CRM, ERP, mobile applications, portals, analytics, and workflow automation engineered around real business operations.',

    images: [
      {
        url: '/showcase/crm-dashboard.png',
        alt: 'Custom CRM and ERP platform developed by S4Start Technologies',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title:
      'S4Start Technologies | Custom CRM, ERP & Business Software',

    description:
      'Custom CRM, ERP, mobile applications, customer portals, dealer platforms, analytics, and business automation solutions.',

    images: ['/showcase/crm-dashboard.png'],
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

  other: {
    'theme-color': '#020617',
  },
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
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}