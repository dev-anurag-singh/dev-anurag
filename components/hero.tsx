"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] md:min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="container flex flex-col py-28 px-4 items-center justify-center text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 lg:mb-10 2xl:mb-12"
        >
          <h1 className="text-[clamp(2.4rem,8.5vw_+_0.5rem,9rem)] leading-none font-bold mb-6 md:mb-8">
            Hi, I&apos;m{" "}
            <span className="bg-[linear-gradient(to_right,#5DFFFF_0%,#AE0CA7_100%)] text-transparent bg-clip-text animate-gradient bg-[length:200%_200%]">
              Anurag.
            </span>
          </h1>
          <h2 className="text-[clamp(1.6rem,4vw_+_0.5rem,4rem)] leading-tight text-foreground/70">
            I Build Modern Web Experiences.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 lg:mb-10 2xl:mb-12"
        >
          <p className="text-lg text-muted-foreground w-[90%] max-w-2xl mx-auto">
            Building fast, scalable web applications through clean code and
            performance-focused practices.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-6"
        >
          <Button
            asChild
            className="font-semibold w-48 h-14 rounded-full text-lg
            text-white
            bg-[linear-gradient(to_right,#00E6E6,#7A00C0)]
            bg-[length:200%_200%] bg-[position:0%_50%]
            transition-all duration-200 ease-in-out
            hover:bg-[position:100%_50%]
            hover:scale-105 hover:-translate-y-1 hover:shadow-md animate-gradient hover:shadow-[#7A00C055]"
          >
            <a href="#projects">View Projects</a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="font-semibold w-48 h-14 rounded-full text-lg transition-all duration-200 hover:scale-110 hover:shadow-lg hover:-translate-y-1"
          >
            <a href="#contact">Hire Me</a>
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 2 }}
        className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2"
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
