"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Hero() {
  const words = [
    { text: "Building" },
    { text: "modern" },
    { text: "web" },
    { text: "experiences" },
    { text: "with" },
    { text: "React", className: "text-primary" },
    { text: "and", className: "text-muted-foreground" },
    { text: "Next.js", className: "text-primary" },
  ];
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <BackgroundBeams className="opacity-20" />

      <div className="container flex flex-col items-center justify-center text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 xl:mb-12"
        >
          <h1 className="text-[clamp(2.4rem,8.5vw_+_0.5rem,9rem)] leading-none font-bold mb-4">
            Hi, I'm <span className="text-primary">Anurag.</span>
          </h1>
          <h2 className="text-[clamp(2.4rem,8.5vw_+_0.5rem,9rem)] leading-none text-muted-foreground">
            A Developer.
          </h2>
        </motion.div>

        <div className="mb-8 xl:mb-12">
          <TypewriterEffect words={words} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button asChild size="lg">
            <a href="#projects">View My Work</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#contact">Contact Me</a>
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 2 }}
        className="absolute bottom-20 sm:bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm text-muted-foreground mb-2">
            Scroll Down
          </span>
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
              className="w-1 h-2 bg-primary rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
