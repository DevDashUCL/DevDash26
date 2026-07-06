import type { Metadata } from "next";
import { Inter, Syncopate, JetBrains_Mono, Geist } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const syncopate = Syncopate({
  variable: "--font-syncopate",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "DevDash '26 | UCL's Inaugural University Hackathon",
  description: "Join UCL ICT Club's first-ever university-wide hackathon. 10 hours. Builders of all levels welcome. Register today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full", "antialiased", inter.variable, syncopate.variable, jetbrainsMono.variable, "font-sans", geist.variable)}>
      <body className="min-h-full flex flex-col">
        <MotionConfig reducedMotion="user">
          {children}
        </MotionConfig>
      </body>
    </html>
  );
}
