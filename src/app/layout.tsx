import type { Metadata } from "next";
import { Schibsted_Grotesk, Young_Serif } from "next/font/google";
import "./globals.css";

const schibsted = Schibsted_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
});

const youngSerif = Young_Serif({
  variable: "--font-display-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "ClassVault | Notes your classmates already trust",
  description:
    "A study platform for Indian college students: rated notes, verified university communities, live study rooms, and study roadmaps built from material worth your time.",
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
      className={`${schibsted.variable} ${youngSerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
