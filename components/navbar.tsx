"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Work", href: "/work" },
  { name: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-4 left-0 right-0 z-50 flex items-center h-14 px-5 md:px-8 pointer-events-none"
    >
      {/* Logo — hidden on mobile */}
      <Link href="/" className="hidden md:block font-bold text-xl pointer-events-auto">
        <span className="text-primary">{`<Dev>`}</span>Anurag
      </Link>

      {/* Pill nav — centered on all screens */}
      <nav className="pointer-events-auto absolute left-1/2 -translate-x-1/2">
        <div className="flex items-center gap-1 px-2 py-1.5 rounded-full border border-white/[0.10] bg-black/30 backdrop-blur-xl shadow-[0_2px_20px_rgba(0,0,0,0.3)]">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "relative px-3.5 py-1.5 text-sm font-medium rounded-full transition-colors duration-200",
                isActive(item.href)
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {isActive(item.href) && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 rounded-full bg-white/[0.10] border border-white/[0.12]"
                  transition={{ type: "spring", stiffness: 400, damping: 35 }}
                />
              )}
              <span className="relative z-10">{item.name}</span>
            </Link>
          ))}
        </div>
      </nav>
    </motion.header>
  );
};
