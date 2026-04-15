"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { featuredProject, personalProjects } from "@/lib/data";

export default function WorkProjects() {
  return (
    <section className="py-14 md:py-20 relative z-10">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 md:mb-14"
        >
          <span className="text-sm font-medium text-primary tracking-widest uppercase">
            Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            What I&apos;ve built
          </h2>
        </motion.div>

        {/* Featured work project */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 md:mb-12"
        >
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-4">
            Professional
          </p>
          <div className="rounded-2xl border border-border bg-card overflow-hidden">
            {/* Full-width image on top */}
            <div className="relative aspect-video w-full bg-muted overflow-hidden">
              <Image
                src={featuredProject.image}
                alt={featuredProject.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Content below */}
            <div className="p-5 md:p-8 space-y-5">
              {/* Company + title + description */}
              <div>
                <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                  {featuredProject.company}
                </span>
                <h3 className="text-xl font-bold mt-3">{featuredProject.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed max-w-2xl">
                  {featuredProject.description}
                </p>
              </div>

              {/* Highlights */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5">
                {featuredProject.highlights?.map(h => (
                  <li key={h} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {featuredProject.tags.map(tag => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-3 pt-1">
                <Button
                  size="sm"
                  variant="outline"
                  asChild
                  className="border-primary/40 text-primary hover:bg-primary/10 hover:text-primary"
                >
                  <a href={featuredProject.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-3.5 w-3.5 mr-1.5" />
                    Live Site
                  </a>
                </Button>
                <Button size="sm" variant="ghost" asChild>
                  <Link href={`/work/${featuredProject.slug}`}>
                    Case Study
                    <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Personal projects */}
        <div>
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-4">
            Personal
          </p>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
            {personalProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group rounded-2xl border border-border bg-card overflow-hidden flex flex-col"
              >
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-4 md:p-5 flex flex-col flex-1 gap-3">
                  <div>
                    <h3 className="font-semibold mb-1">{project.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tags.slice(0, 4).map(tag => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-8 text-xs"
                      asChild
                    >
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Demo
                      </a>
                    </Button>
                    {project.githubUrl && (
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-8 text-xs"
                        asChild
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-3 w-3 mr-1" />
                          Code
                        </a>
                      </Button>
                    )}
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-8 text-xs ml-auto"
                      asChild
                    >
                      <Link href={`/work/${project.slug}`}>
                        Details
                        <ArrowRight className="h-3 w-3 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
