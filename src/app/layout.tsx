import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EditorialMotion from "@/components/EditorialMotion";


const editorial = Instrument_Serif({ variable: "--font-editorial", subsets: ["latin"], weight: "400", style: ["normal", "italic"], display: "swap" });

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});



const siteUrl = "https://portfoliomaryanne.vercel.app";
const title = "Maryanne Machado — Estratégia de conteúdo e comunicação";
const description =
  "Maryanne Machado, jornalista e estrategista de conteúdo e comunicação. Trabalhos selecionados em comunicação institucional, design de conteúdo e produção editorial.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s — Maryanne Machado",
  },
  description,
  alternates: { canonical: "/" },
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
      className={`${editorial.variable} ${inter.variable}`}
    >
      <body >
        <a
          href="#conteudo"
          className="skip-link"
        >
          Pular para o conteúdo
        </a>
        <Header />
        <main id="conteudo" className="flex-1">
          {children}
        </main>
        <Footer />
        <EditorialMotion />
      </body>
    </html>
  );
}
