"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="relative z-10 py-14 md:py-24">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 md:mb-16"
        >
          <span className="text-sm font-medium text-primary tracking-widest uppercase">
            About
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Who I am</h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 blur-2xl" />
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/profile.png"
                  alt="Anurag Kumar"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-3 space-y-6"
          >
            <div>
              <span className="inline-block text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
                Full-stack Developer
              </span>
              <h3 className="text-2xl font-bold mb-4">Anurag Kumar</h3>
              <p className="text-muted-foreground leading-relaxed">
                I&apos;m a full-stack developer focused on building clean,
                performant web applications. I care about the details — from how
                an interface feels to how the code behind it is structured.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                I&apos;ve been building web apps for 2+ years — starting with
                freelance projects, then moving into regular professional work
                across two roles where I shipped real products end-to-end.
              </p>
            </div>

            {/* Info chips */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-white/[0.06] backdrop-blur-sm rounded-full px-4 py-2 text-sm border border-white/[0.08]">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                Delhi, India
              </div>
              <div className="flex items-center gap-2 bg-white/[0.06] backdrop-blur-sm rounded-full px-4 py-2 text-sm border border-white/[0.08]">
                <Clock className="h-3.5 w-3.5 text-primary" />
                2+ yrs building
              </div>
              <div className="flex items-center gap-2 bg-emerald-500/10 text-emerald-400 rounded-full px-4 py-2 text-sm border border-emerald-500/20 backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for work
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 pt-2">
              <Link
                href="https://github.com/dev-anurag-singh"
                target="_blank"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-4 w-4" />
                GitHub
              </Link>
              <span className="text-border">·</span>
              <Link
                href="https://www.linkedin.com/in/iamanuragkr"
                target="_blank"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Link>
              <span className="text-border">·</span>
              <Link
                href="https://x.com/iam_anuragkr"
                target="_blank"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-4 w-4" />
                Twitter
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
