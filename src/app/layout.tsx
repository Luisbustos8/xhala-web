import type { Metadata } from "next";
import { Geist, Geist_Mono, Dancing_Script } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import CookieBanner from "@/components/CookieBanner";
import { organizationSchema, localBusinessSchema, webPageSchema, breadcrumbSchema } from "@/lib/structured-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Xhala Pilates y Osteopatía en Navalcarnero | Centro de Bienestar Integral",
  description: "Pilates máquinas, pilates suelo, barre, osteopatía, prenatal, postparto y presoterapia en Navalcarnero. Movimiento, fuerza y cuidado para sentirte bien en tu cuerpo. Grupos reducidos y atención personalizada.",
  keywords: ["Pilates máquinas", "Pilates suelo", "Barre", "Osteopatía", "Pilates prenatal", "Postparto", "Mamás y bebés", "Presoterapia", "Navalcarnero", "Pilates Madrid", "Osteopatía Madrid", "Bienestar", "Salud", "Dolor de espalda", "Postura", "Movimiento consciente", "Rehabilitación", "Suelo pélvico", "Reformer", "Torre", "Wunda chair"],
  authors: [{ name: "Xhala Pilates y Osteopatía" }],
  creator: "Xhala Pilates y Osteopatía",
  publisher: "Xhala Pilates y Osteopatía",
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
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://xhalapilates.com",
    title: "Xhala Pilates y Osteopatía en Navalcarnero | Centro de Bienestar Integral",
    description: "Pilates máquinas, pilates suelo, barre, osteopatía, prenatal, postparto y presoterapia en Navalcarnero. Movimiento, fuerza y cuidado para sentirte bien en tu cuerpo.",
    siteName: "Xhala Pilates y Osteopatía",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Xhala Pilates y Osteopatía - Centro de Bienestar en Navalcarnero",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Xhala Pilates y Osteopatía en Navalcarnero | Centro de Bienestar Integral",
    description: "Pilates máquinas, pilates suelo, barre, osteopatía, prenatal, postparto y presoterapia en Navalcarnero. Movimiento, fuerza y cuidado para sentirte bien en tu cuerpo.",
    images: ["/og-image.jpg"],
  },
  metadataBase: new URL('https://xhalapilates.com'),
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} ${dancingScript.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col">
        <JsonLd data={organizationSchema} />
        <JsonLd data={localBusinessSchema} />
        <JsonLd data={webPageSchema('/')} />
        <JsonLd data={breadcrumbSchema([{ name: 'Inicio', item: '/' }])} />
        
        <a href="#main-content" className="skip-to-content">
          Saltar al contenido principal
        </a>
        
        <Navigation />
        
        <main id="main-content" className="flex-1">
          {children}
        </main>
        
        <Footer />
        
        <CookieBanner />
      </body>
    </html>
  );
}
