import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AgeGate from "@/components/AgeGate";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// Import the Next.js Script component
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wellness & Health Education",
  description: "Professional wellness and health education platform.",
};

// This forces mobile browsers to render the true responsive mobile device size
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full w-full antialiased`}
    >
      <head>
        {/* AdSense verification code */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3428451258675604"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        
        {/* Google Analytics 4 (GA4) Global Site Tag */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
      </head>
      <body className="min-h-full w-full flex flex-col overflow-x-hidden bg-white dark:bg-black text-zinc-900 dark:text-zinc-50">
        {/* Temporarily bypassed AgeGate wrapper to fix mobile blank page rendering */}
        <Header />
        <main className="flex-grow w-full max-w-full overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}