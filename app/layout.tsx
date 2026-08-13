import type { Metadata } from "next";
import {
  Fraunces,
  Inter,
  Noto_Sans_Devanagari,
  Noto_Serif_Devanagari,
} from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const notoSansDeva = Noto_Sans_Devanagari({
  variable: "--font-devanagari",
  subsets: ["devanagari"],
  weight: ["400", "500", "600"],
});

const notoSerifDeva = Noto_Serif_Devanagari({
  variable: "--font-devanagari-serif",
  subsets: ["devanagari"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Dharmasetu | Your bridge to the divine",
    template: "%s | Dharmasetu",
  },
  description:
    "Authentic Vedic rituals performed by verified Pandits in India's holiest centres, with your Name and Gotra recited in the Sankalpa and personalised video proof delivered to you.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${notoSansDeva.variable} ${notoSerifDeva.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-sacred-cream font-body text-ink-indigo">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-temple-saffron focus:px-4 focus:py-2 focus:text-setu-indigo"
        >
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
