import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import Navbar from "../ui/Navbar"
import Footer from "../ui/Footer";
import ScrollToTop from "../ui/ScrollToTop";

// Initialize Inter font with required subsets and display settings
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'], // Include all the font weights you need
});

export const metadata: Metadata = {
  metadataBase: new URL('https://onyebftech.com'),
  icons: {
    icon: "https://res.cloudinary.com/dzhbpmnan/image/upload/v1765204783/favicon_is4z6o.jpg",
  },
  title: {
    default: "Onye BF Tech - Smart Home Automation & Security Solutions",
    template: "%s | Onye BF Tech"
  },
  description: "Leading provider of professional smart home wiring, automation, CCTV, fire alarm systems, and embedded solutions in Nigeria. Transform your space with cutting-edge technology and expert installation.",
  keywords: ["smart home automation", "home automation Nigeria", "CCTV installation", "fire alarm systems", "electrical wiring", "security systems", "embedded systems", "sound system automation", "smart home Lagos", "home security Nigeria"],
  authors: [{ name: "Onye BF Tech", url: "https://onyebftech.com" }],
  creator: "Onye BF Tech",
  publisher: "Onye BF Tech",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://onyebftech.com",
    siteName: "Onye BF Tech",
    title: "Onye BF Tech - Smart Home Automation & Security Solutions",
    description: "Professional smart home wiring, automation, CCTV, fire alarm systems, and embedded solutions. Transform your space with cutting-edge technology.",
    images: [
      {
        url: "/hero1.jpg",
        width: 1200,
        height: 630,
        alt: "Onye BF Tech - Smart Home Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Onye BF Tech - Smart Home Automation & Security Solutions",
    description: "Professional smart home wiring, automation, CCTV, fire alarm systems, and embedded solutions.",
    images: ["/hero1.jpg"],
    creator: "@onyebftech",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} font-sans scroll-smooth`}>
      <body className="bg-white text-gray-900 antialiased">
        <Navbar />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
