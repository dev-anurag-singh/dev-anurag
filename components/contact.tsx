"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import { ContactForm } from "./contact-form";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/dev-anurag-singh" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/iamanuragkr" },
  { icon: Twitter, label: "Twitter", href: "https://x.com/iam_anuragkr" },
];

export default function Contact() {
  return (
    <section className="py-14 md:py-24 relative z-10">
      <div className="container max-w-2xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 md:mb-12"
        >
          <span className="text-sm font-medium text-primary tracking-widest uppercase">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Let&apos;s work together
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Available for freelance and full-time roles. Have a project in mind
            or just want to say hi? Send me a message and I&apos;ll get back to
            you.
          </p>
          <div className="flex items-center gap-2 mt-4">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm text-emerald-400">Available for work</span>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm p-6 md:p-8">
            <ContactForm />
          </div>
        </motion.div>

        {/* Contact info + socials */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:contact@anuragkumar.dev"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-3.5 w-3.5" />
              contact@anuragkumar.dev
            </a>
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" />
              Delhi, India
            </span>
          </div>

          <div className="flex items-center gap-2">
            {socials.map(social => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/[0.06] border border-white/[0.08] text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-200"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
