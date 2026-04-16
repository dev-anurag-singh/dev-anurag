"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "TailwindCSS",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-dvh flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Subtle dot grid */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,black_30%,transparent_100%)]" />

      <div className="container flex flex-col py-16 md:py-28 px-4 items-center justify-center text-center z-10 max-w-5xl">

        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8 md:mb-10"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.10] bg-white/[0.04] text-sm text-muted-foreground backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            Available for new projects
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-5 md:mb-6"
        >
          <h1 className="text-[clamp(2.6rem,8.5vw_+_0.5rem,8.5rem)] leading-none font-bold mb-4 md:mb-5">
            Hi, I&apos;m{" "}
            <span className="bg-[linear-gradient(to_right,#5DFFFF_0%,#AE0CA7_100%)] text-transparent bg-clip-text animate-gradient bg-[length:200%_200%]">
              Anurag.
            </span>
          </h1>
          <h2 className="text-[clamp(1.2rem,2.5vw_+_0.5rem,2.4rem)] leading-tight text-foreground/50 font-medium tracking-wide">
            Full-Stack Developer
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base md:text-lg text-muted-foreground max-w-lg mx-auto mb-10 md:mb-12 leading-relaxed"
        >
          I build fast, production-ready web apps with clean code and a sharp
          eye for design. Currently focused on full-stack TypeScript.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4 mb-8 md:mb-14"
        >
          <Button
            asChild
            className="font-semibold px-8 h-12 rounded-full text-base
              text-white
              bg-[linear-gradient(to_right,#00E6E6,#7A00C0)]
              bg-[length:200%_200%] bg-[position:0%_50%]
              transition-all duration-200 ease-in-out
              hover:bg-[position:100%_50%]
              hover:scale-105 hover:-translate-y-0.5
              hover:shadow-lg animate-gradient hover:shadow-[#7A00C044]"
          >
            <Link href="/work" className="flex items-center gap-2">
              View My Work <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="font-semibold px-8 h-12 rounded-full text-base border-white/[0.12] bg-transparent hover:bg-white/[0.06] hover:-translate-y-0.5 transition-all duration-200"
          >
            <Link href="/contact">Let&apos;s Talk</Link>
          </Button>
        </motion.div>

        {/* Tech stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="flex flex-col items-center gap-3"
        >
          <p className="text-[11px] text-muted-foreground/40 uppercase tracking-[0.2em]">
            Tech I work with
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs md:text-sm rounded-full bg-white/[0.04] border border-white/[0.08] text-muted-foreground/70 backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

    </section>
  );
}
