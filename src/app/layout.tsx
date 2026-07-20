import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteUrl = "https://maryannemachado.vercel.app";
const title = "Maryanne Machado — Estrategista de Marketing e Conteúdo";
const description =
  "Jornalista e estrategista de conteúdo. Trabalho na fronteira entre narrativa, dados e inteligência artificial integrada a inteligência humana e social.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s — Maryanne Machado",
  },
  description,
  keywords: [
    "Maryanne Machado",
    "estrategista de conteúdo",
    "marketing",
    "jornalista",
    "estratégia de marketing",
    "email marketing",
    "mídias sociais",
    "Recife",
  ],
  authors: [{ name: "Maryanne Machado" }],
  creator: "Maryanne Machado",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    title,
    description,
    siteName: "Maryanne Machado",
    images: [
      {
        url: "https://i.postimg.cc/s2Kw48JR/magic-edit-TUFIUDg5SFJUN2Mj-MSMw-Mz-Vh-ODRl-Yjhm-Mj-Q2Y2U4ODEx-MDBm-ZTQy-NTlh-M2Vl-Ni-Mx-Mjgw-Iy-NUU.jpg",
        width: 1200,
        height: 1200,
        alt: "Maryanne Machado",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${bricolage.variable} ${inter.variable} ${plexMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-ocean text-ink">
        <div className="grain-overlay" aria-hidden="true" />
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-copper focus:px-4 focus:py-2 focus:text-ocean focus:font-medium"
        >
          Pular para o conteúdo
        </a>
        <Header />
        <main id="conteudo" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
