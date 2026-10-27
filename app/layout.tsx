import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { JsonLd } from "@/components/ui/JsonLd";
import { SITE_DATA } from "@/constants/siteData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["600"],
});

export const viewport: Viewport = {
  themeColor: "#0B0F19",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "DMK Industrial Consultancy | Srikakulam, Andhra Pradesh",
    template: "%s | DMK Industrial Consultancy",
  },
  description:
    "Leading industrial consultancy in Srikakulam, Andhra Pradesh offering practical guidance for industrial planning, plant setup, project execution, documentation support, and operational excellence.",
  keywords: [
    "DMK Industrial Consultancy",
    "Industrial consultancy Srikakulam",
    "Project planning Andhra Pradesh",
    "Plant setup consultancy",
    "Industrial project DPR documentation",
    "Factory license compliance Srikakulam",
    "Operational excellence AP",
  ],
  authors: [{ name: "DMK Industrial Consultancy" }],
  creator: "DMK Industrial Consultancy",
  publisher: "DMK Industrial Consultancy",
  metadataBase: new URL(SITE_DATA.siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DMK Industrial Consultancy | Srikakulam, Andhra Pradesh",
    description:
      "Expert guidance for industrial planning, plant setup, project execution, and compliance in Srikakulam, Andhra Pradesh.",
    url: SITE_DATA.siteUrl,
    siteName: "DMK Industrial Consultancy",
    images: [
      {
        url: SITE_DATA.ogImage,
        width: 1200,
        height: 630,
        alt: "DMK Industrial Consultancy",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DMK Industrial Consultancy | Srikakulam",
    description:
      "Practical guidance for industrial planning, development and execution in Srikakulam, Andhra Pradesh.",
    images: [SITE_DATA.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preload" as="image" href="/industrial/hero-refinery.jpg" fetchPriority="high" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..800;1,6..96,400..800&family=Fraunces:opsz,wght@9..144,400..800&family=Inter:wght@400;500;600;700;800&family=Noto+Sans+Telugu:wght@400;500;600;700&display=swap"
        />
        <JsonLd />
      </head>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${fraunces.variable} bg-[#0B0F19] text-white antialiased selection:bg-[#FF5500] selection:text-white`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
