import type { Metadata } from "next";
import { Inter, Syncopate, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import { MotionConfig } from "framer-motion";
import "./globals.css";

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

const ModernWarfare = localFont({
  src: '../fonts/ModernWarfare-8MM6z.ttf',
  display: 'swap', // Ensures text remains visible while the font loads
  variable: "--font-modern-warfare",
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
    <html lang="en" className={`${inter.variable} ${syncopate.variable} ${jetbrainsMono.variable} ${ModernWarfare.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <MotionConfig reducedMotion="user">
          {children}
        </MotionConfig>
      </body>
    </html>
  );
}
