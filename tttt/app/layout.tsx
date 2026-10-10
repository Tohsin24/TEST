import './globals.css';
import type { Metadata } from 'next';
import { Abhaya_Libre, Inter } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { SITE_URL, SITE_NAME } from '@/lib/site';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const abhayaLibre = Abhaya_Libre({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-display',
});


const DESCRIPTION =
  "Innovative solutions across Engineering, Oil & Gas, Healthcare and Construction.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_NAME, template: `%s | ${SITE_NAME}` },
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: SITE_NAME,
    description: DESCRIPTION,
    url: "/",
    siteName: SITE_NAME,
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${abhayaLibre.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
