"use client";

import { motion } from "framer-motion";
import { Code, Database, GitBranch, Smartphone, Zap, Server } from "lucide-react";
import { HoverEffect } from "@/components/ui/card-hover-effect";

const skills = [
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    title: "Frontend Engineering",
    description:
      "React, Next.js, TypeScript, Tailwind CSS, Framer Motion — building fast, accessible UIs with clean component architecture.",
  },
  {
    icon: <Server className="h-10 w-10 text-primary" />,
    title: "Backend & APIs",
    description:
      "Node.js, Express.js, Next.js API routes, tRPC — designing RESTful and type-safe APIs that are easy to maintain and scale.",
  },
  {
    icon: <Database className="h-10 w-10 text-primary" />,
    title: "Databases & ORMs",
    description:
      "PostgreSQL, Neon DB, Supabase — with Prisma and Drizzle ORM for type-safe queries, migrations, and schema management.",
  },
  {
    icon: <GitBranch className="h-10 w-10 text-primary" />,
    title: "Auth & Security",
    description:
      "NextAuth, OAuth 2.0, Clerk — implementing secure authentication flows including social login, sessions, and role-based access.",
  },
  {
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    title: "Responsive Design",
    description:
      "Mobile-first layouts that work flawlessly across all screen sizes, with attention to spacing, typography, and accessibility.",
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: "Performance & DX",
    description:
      "Code splitting, caching, image optimization, CI/CD with GitHub Actions, and Vercel deployments for smooth workflows.",
  },
];

const techStack = [
  { name: "React", color: "text-cyan-400 bg-cyan-400/10" },
  { name: "Next.js", color: "text-white bg-white/10" },
  { name: "TypeScript", color: "text-blue-400 bg-blue-400/10" },
  { name: "JavaScript", color: "text-yellow-400 bg-yellow-400/10" },
  { name: "Node.js", color: "text-green-400 bg-green-400/10" },
  { name: "Express.js", color: "text-gray-300 bg-gray-300/10" },
  { name: "Tailwind CSS", color: "text-sky-400 bg-sky-400/10" },
  { name: "Prisma", color: "text-emerald-400 bg-emerald-400/10" },
  { name: "Drizzle ORM", color: "text-lime-400 bg-lime-400/10" },
  { name: "PostgreSQL", color: "text-indigo-400 bg-indigo-400/10" },
  { name: "Neon DB", color: "text-teal-400 bg-teal-400/10" },
  { name: "Supabase", color: "text-green-300 bg-green-300/10" },
  { name: "NextAuth", color: "text-purple-400 bg-purple-400/10" },
  { name: "OAuth 2.0", color: "text-orange-400 bg-orange-400/10" },
  { name: "tRPC", color: "text-blue-300 bg-blue-300/10" },
  { name: "React Query", color: "text-red-400 bg-red-400/10" },
  { name: "Redux", color: "text-violet-400 bg-violet-400/10" },
  { name: "Framer Motion", color: "text-pink-400 bg-pink-400/10" },
  { name: "Clerk", color: "text-amber-400 bg-amber-400/10" },
  { name: "HTML/CSS", color: "text-rose-400 bg-rose-400/10" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-12 md:py-20 relative z-10">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 md:mb-12"
        >
          <span className="text-sm font-medium text-primary tracking-widest uppercase">
            Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">What I work with</h2>
        </motion.div>

        <HoverEffect
          items={skills.map(skill => ({
            title: skill.title,
            description: skill.description,
            icon: skill.icon,
          }))}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10"
        >
          <p className="text-sm text-muted-foreground uppercase tracking-widest mb-5">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-2.5">
            {techStack.map((tech, index) => (
              <motion.span
                key={tech.name}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className={`px-3.5 py-1.5 rounded-full text-sm font-medium ${tech.color}`}
              >
                {tech.name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
