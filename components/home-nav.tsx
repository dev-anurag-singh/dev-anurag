"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { User, Briefcase, FolderKanban, Mail, ArrowRight } from "lucide-react";

const sections = [
  {
    title: "About Me",
    description: "My background, skills, and what I bring to the table.",
    href: "/about",
    icon: User,
    gradient: "from-cyan-500/10 to-cyan-500/5",
    border: "hover:border-cyan-500/40",
    iconColor: "text-cyan-400",
  },
  {
    title: "Experience",
    description: "1 year of professional work across two roles.",
    href: "/experience",
    icon: Briefcase,
    gradient: "from-purple-500/10 to-purple-500/5",
    border: "hover:border-purple-500/40",
    iconColor: "text-purple-400",
  },
  {
    title: "Projects",
    description: "Things I've built — personal and professional.",
    href: "/projects",
    icon: FolderKanban,
    gradient: "from-pink-500/10 to-pink-500/5",
    border: "hover:border-pink-500/40",
    iconColor: "text-pink-400",
  },
  {
    title: "Contact",
    description: "Available for freelance and full-time opportunities.",
    href: "/contact",
    icon: Mail,
    gradient: "from-emerald-500/10 to-emerald-500/5",
    border: "hover:border-emerald-500/40",
    iconColor: "text-emerald-400",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function HomeNav() {
  return (
    <section className="relative z-10 py-20 px-4">
      <div className="container max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-muted-foreground text-lg">
            Here&apos;s everything you need to know.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <motion.div key={section.href} variants={cardVariants}>
                <Link href={section.href} className="group block h-full">
                  <div
                    className={`
                      h-full rounded-2xl border border-border bg-gradient-to-br ${section.gradient}
                      p-6 transition-all duration-300
                      ${section.border}
                      hover:shadow-lg hover:-translate-y-1
                    `}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-2 rounded-xl bg-background/60 ${section.iconColor}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground/40 group-hover:text-muted-foreground group-hover:translate-x-1 transition-all duration-200" />
                    </div>
                    <h3 className="font-semibold text-lg mb-1">{section.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {section.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
