import type { Metadata } from "next";
import { Syne, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/effects/CustomCursor";
import { AmbientGlow } from "@/components/effects/AmbientGlow";
import { NoiseOverlay } from "@/components/effects/NoiseOverlay";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Cortex Defense | AI-Powered Security Solutions",
  description: "Next-generation autonomous security systems leveraging advanced AI and distributed protection architectures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${syne.variable} ${ibmPlexMono.variable} antialiased bg-[#080c0e] selection:bg-[#13a4ec]/30 selection:text-white`}
      >
        <ScrollProgress />
        <NoiseOverlay />
        <AmbientGlow />
        <CustomCursor />
        <div className="scanline" />
        {children}
      </body>
    </html>
  );
}
