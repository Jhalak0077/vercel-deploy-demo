import type { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { Layout } from '@/components/layouts';
import { Roboto } from 'next/font/google';
import { Navbar, Footer } from '@/components/organisms';
import { Sitemap } from '@/components/molecules';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
});
export const metadata: Metadata = {
  applicationName: 'Thabho',
  keywords: ['Thabho', 'tech', 'social media', 'nowiknow'],
  authors: [{ name: 'Thabho Team' }],
  creator: 'Thabho',
  publisher: 'Thabho',
  appleWebApp: {
    title: 'Thabho',
    statusBarStyle: 'black-translucent',
    capable: true,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.png',
    apple: '/apple-icon.png',
  },
};

// Viewport settings for responsiveness
export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

// TODO: Clean up meta data and make it dynamic
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <html
    //   lang="en"
    //   className="h-full bg-[#00000099]"
    // >
    //   <body className={poppins.className}>
    //     <Layout>{children}</Layout>
    //   </body>
    // </html>

    <html
      lang="en"
      className={`h-full bg-[#00000099] ${poppins.variable} ${roboto.variable}`}
    >
      <body>
        <Navbar />
        <Layout>{children}</Layout>

        {/* @params of footer map defaults to true */}
        <Footer />
        {/* Sitemap Section, Don't Remove */}
        <Sitemap />
      </body>
    </html>
  );
}
