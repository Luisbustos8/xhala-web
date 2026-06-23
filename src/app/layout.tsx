import type { Metadata } from "next";
import { Geist, Geist_Mono, Dancing_Script } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
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
});

export const metadata: Metadata = {
  title: "Xhala Pilates y Osteopatía | Centro de Salud y Bienestar en España",
  description: "Centro especializado en Pilates terapéutico, Pilates en suelo, Osteopatía y Barre. Mejora tu salud y bienestar físico a través del movimiento consciente y el tratamiento manual en Xhala.",
  keywords: ["Pilates", "Osteopatía", "Pilates terapéutico", "Pilates en suelo", "Barre", "Rehabilitación física", "Bienestar", "Salud", "Tratamiento manual", "Dolor de espalda", "Postura", "Movimiento consciente", "Prevención de lesiones", "Suelo pélvico", "Pilates Madrid", "Osteopatía Madrid"],
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
    title: "Xhala Pilates y Osteopatía | Centro de Salud y Bienestar en España",
    description: "Centro especializado en Pilates terapéutico, Pilates en suelo, Osteopatía y Barre. Mejora tu salud y bienestar físico a través del movimiento consciente.",
    siteName: "Xhala Pilates y Osteopatía",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Xhala Pilates y Osteopatía - Centro de Salud y Bienestar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Xhala Pilates y Osteopatía | Centro de Salud y Bienestar en España",
    description: "Centro especializado en Pilates terapéutico, Pilates en suelo, Osteopatía y Barre. Mejora tu salud y bienestar físico a través del movimiento consciente.",
    images: ["/og-image.jpg"],
  },
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
      </body>
    </html>
  );
}
