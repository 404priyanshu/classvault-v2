import type { Metadata } from "next";
import { Geist, Mukta, Rozha_One } from "next/font/google";
import "./globals.css";

const mukta = Mukta({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const rozhaOne = Rozha_One({
  variable: "--font-display-serif",
  subsets: ["latin", "devanagari"],
  weight: "400",
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ClassVault | Notes worth trusting",
  description:
    "Join the ClassVault waitlist for rated notes, verified university communities, live study rooms, and source-linked study roadmaps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${mukta.variable} ${rozhaOne.variable} ${geist.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
