"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { experiences } from "@/lib/data";

export default function Experience() {
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
            Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Where I&apos;ve worked
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 top-2 bottom-2 w-px bg-border hidden md:block" />

          <div className="space-y-6 md:space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="md:pl-10 relative"
              >
                <div
                  className={`absolute left-0 top-3 w-2 h-2 rounded-full -translate-x-[3px] hidden md:block ${exp.dot}`}
                />

                <div className="rounded-2xl border border-border bg-card p-5 md:p-8 space-y-4 md:space-y-5">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div>
                      <a
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-base md:text-lg hover:text-primary transition-colors inline-flex items-center gap-1.5"
                      >
                        {exp.company}
                        <ExternalLink className="h-3.5 w-3.5 opacity-40" />
                      </a>
                      <p className="text-muted-foreground text-sm mt-0.5">
                        {exp.role}
                      </p>
                    </div>
                    <span className="text-xs font-medium text-muted-foreground bg-muted px-3 py-1.5 rounded-full whitespace-nowrap self-start">
                      {exp.duration}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Bullets */}
                  <ul className="space-y-2.5">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <span
                          className={`mt-[7px] h-1.5 w-1.5 rounded-full flex-shrink-0 bg-gradient-to-r ${exp.color}`}
                        />
                        <span className="text-muted-foreground">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {exp.tech.map(t => (
                      <Badge key={t} variant="secondary" className="text-xs">
                        {t}
                      </Badge>
                    ))}
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
