import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hilltop Global Group | Study Abroad & Internships in Africa | Education Consulting",
  description: "Diaspora-led education consulting firm delivering study abroad programs, internships, and faculty development across Ghana, Rwanda, Kenya, and beyond. Partnering with top U.S. universities since 2017.",
  keywords: ["study abroad in Africa", "Africa internship programs for students", "experiential learning Africa", "education consulting Africa", "faculty development programs Africa", "study abroad Ghana", "study abroad Rwanda", "international internships Africa"],
  icons: {
    icon: "/logos/fav.ico",
    shortcut: "/logos/fav.ico",
    apple: "/logos/fav.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Hilltop Global Group",
    "url": "https://hilltop-platform.vercel.app",
    "logo": "https://hilltop-platform.vercel.app/logos/logo.png",
    "description": "Diaspora-led education consulting firm delivering study abroad programs, internships, and faculty development across Ghana, Rwanda, Kenya, and beyond.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "700 12th Street NW, Suite 700",
      "addressLocality": "Washington",
      "addressRegion": "DC",
      "postalCode": "20005",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-202-499-2284",
      "contactType": "customer service",
      "email": "support@hilltopglobalgroup.com"
    },
    "sameAs": [
      "https://www.linkedin.com/company/hilltopglobally",
      "https://www.instagram.com/hilltopglobally",
      "https://www.facebook.com/hilltopglobally",
      "https://www.tiktok.com/@hilltopglobally",
      "https://x.com/hilltopglobally"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${barlowCondensed.variable} ${inter.variable} font-sans antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
