"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Kanban Board",
    description:
      "Kanban-style task manager built with Next.js, React, and Tailwind CSS. Features include authentication with Supabase, real-time updates, light/dark mode, and a responsive UI for organizing tasks across boards and columns.",
    image: "/kanban-preview.jpg",
    tags: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "React Query",
      "Motion",
    ],
    demoUrl: "https://kanban.anuragkumar.dev",
    githubUrl: "https://github.com/dev-anurag-singh/kanban-task-manager",
  },
  {
    id: 2,
    title: "Devlinks",
    description:
      "Custom link-sharing app built with React and Tailwind CSS. Allows users to create a profile and share multiple social links via a digital card. Features authentication and real-time database integration using Supabase.",
    image: "/devlink-preview.jpg",
    tags: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Shadcn UI"],
    demoUrl: "https://devlinks.anuragkumar.dev",
    githubUrl: "https://github.com/dev-anurag-singh/devlinks",
  },
  {
    id: 3,
    title: "Invoice Manager",
    description:
      "Invoice management tool built with React and Tailwind CSS. Lets users create, update, and filter invoices by status (paid, pending, draft). Includes light/dark mode and a responsive, user-friendly interface.",
    image: "/invoice-preview.jpg",
    tags: ["React", "Next.js", "TypeScript", "Zod", "Radix UI"],
    demoUrl: "https://invoices.anuragkumar.dev",
    githubUrl: "https://github.com/dev-anurag-singh/invoice-manager",
  },
  {
    id: 5,
    title: "Finance Dashboard",
    description:
      "Personal finance tracker built with a focus on simplicity and clarity. Helps users monitor income, expenses, and overall financial health through an intuitive, responsive dashboard with actionable spending insights.",
    image: "/finify-preview.png",
    tags: [
      "Next.js",
      "TypeScript",
      "Drizzle",
      "PostgreSQL",
      "TailwindCSS",
      "React Query",
      "Recharts",
    ],
    demoUrl: "https://finify.anuragkumar.dev",
    githubUrl: "https://github.com/dev-anurag-singh/finify",
  },
];

const testimonials = [
  {
    quote:
      "Anurag did an excellent job on the frontend project. He delivered on time, communicated clearly, and showed strong technical skills. It was a great experience working with him, and I’d be happy to collaborate again in the future. Highly recommended!",
    name: "David Melody",
    title: "Owner, Lawnote",
  },
  {
    quote:
      "Working with Anurag was a seamless experience. He brought not just technical expertise, but also a thoughtful approach to problem-solving and attention to detail. The final output exceeded expectations in both functionality and design.",
    name: "John Cole",
    title: "Owner, Ledgerly",
  },
  {
    quote:
      "Excellent work. Will definitely hire again! Anurag delivered high-quality code, communicated clearly throughout the project, and understood the requirements perfectly. It was a smooth and efficient collaboration from start to finish.",
    name: "Serg Mazur",
    title: "Product Manger, BITS",
  },
  {
    quote:
      "ANURAG delivered good work on this Frontend work and I enjoyed working with him. His communication was top-notch, he met all deadlines, and his skills were reasonably strong. Highly recommended, looking forward to work again",
    name: "Ekta Kukreja",
    title: "Owner, Treatz",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/30 relative z-10">
      <div className="max-w-6xl px-8 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects. Each project is unique and
            solves specific problems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col group">
                <div className="relative overflow-hidden">
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <Button size="icon" variant="outline" asChild>
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      </Button>
                      <Button size="icon" variant="outline" asChild>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="flex-grow pt-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2 pt-0">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        </motion.div>

        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  );
}
