"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  Layout,
  Database,
  GitBranch,
  Smartphone,
  Zap,
  Server,
} from "lucide-react";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function Skills() {
  const skills = [
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Frontend Development",
      description:
        "Building responsive and interactive UIs with React, Next.js, TypeScript & Tailwind CSS",
    },
    {
      icon: <Server className="h-10 w-10 text-primary" />,
      title: "Api Development",
      description:
        "Building performant APIs with Next.js, Prisma/Drizzle, Trpc, and PostgreSQL.",
    },
    {
      icon: <Database className="h-10 w-10 text-primary" />,
      title: "Backend Integration",
      description:
        "Connecting frontend applications with APIs and backend services.",
    },
    {
      icon: <GitBranch className="h-10 w-10 text-primary" />,
      title: "Version Control",
      description:
        "Managing code with Git, GitHub, and implementing CI/CD workflows.",
    },
    {
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      title: "Responsive Design",
      description:
        "Ensuring applications work flawlessly across all devices and screen sizes.",
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Performance Optimization",
      description:
        "Optimizing web applications for speed, accessibility, and SEO.",
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of the technologies and skills I've been working with
          </p>
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
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            "React",
            "Next.js",
            "TypeScript",
            "JavaScript",
            "Tailwind CSS",
            "Clerk",
            "Prisma",
            "HTML/CSS",
            "Redux",
            "React Query",
            "Supabase",
            "Framer Motion",
          ].map((tech, index) => (
            <Card key={tech} className="border border-primary/20">
              <CardContent className="flex items-center justify-center p-6">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <span className="block text-lg font-medium">{tech}</span>
                </motion.div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
