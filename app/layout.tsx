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
          {/* Background orbs */}
          <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-cyan-500/10 blur-[120px]" />
            <div className="absolute -bottom-40 -left-40 w-[700px] h-[700px] rounded-full bg-purple-600/10 blur-[120px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[100px]" />
          </div>
          <Navbar />
          <div className="h-dvh overflow-y-auto">
            {children}
          </div>
          <Toaster />
          <FluidCursor />
        </ThemeProvider>
      </body>
    </html>
  );
}
