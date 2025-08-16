import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";
import FluidCursor from "@/components/fluid-cursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Anurag Kumar | Full-stack Developer",
  icons: { icon: "/favicon.svg" },
  description:
    "Explore the portfolio of Anurag Kumar, a full-stack developer crafting fast, accessible, and responsive web experiences using React, Next.js, and modern web technologies.",
  keywords: [
    "Anurag Kumar",
    "Front-end Developer",
    "Full-stack Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer Portfolio",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
  ],
  authors: [{ name: "Anurag Kumar", url: "https://anuragkumar.dev" }],
  creator: "Anurag Kumar",
  openGraph: {
    title: "Anurag Kumar | Full-stack Developer",
    description:
      "Showcasing Anurag Kumar's work in full-stack development with React, Next.js, and performance-focused design.",
    url: "https://anuragkumar.dev",
    siteName: "Anurag Kumar Portfolio",
    images: [
      {
        url: "https://anuragkumar.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Anurag Kumar Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Toaster />
          <FluidCursor />
        </ThemeProvider>
      </body>
    </html>
  );
}
