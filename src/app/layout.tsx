import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { LightboxProvider } from "@/components/ImageLightbox";
import { LanguageProvider } from "@/components/LanguageProvider";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Henrique Santos · Engenheiro de Software",
  description:
    "Engenheiro de software que conecta IA, automação e sistemas industriais. Projetos em Java, Spring Boot, Next.js, Laravel, React e agentes de IA.",
  openGraph: {
    title: "Henrique Santos · Engenheiro de Software",
    description: "IA, automação e sistemas industriais.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${geist.variable} ${geistMono.variable} ${instrumentSerif.variable}`}>
      <body>
        <LanguageProvider>
          <LightboxProvider>{children}</LightboxProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
