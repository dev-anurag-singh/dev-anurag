import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import { personalProjects, featuredProject } from "@/lib/data";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const all = [featuredProject, ...personalProjects];
  const project = all.find(p => p.slug === slug);
  return {
    title: project ? `${project.title} — Case Study | Anurag Kumar` : "Case Study | Anurag Kumar",
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const all = [featuredProject, ...personalProjects];
  const project = all.find(p => p.slug === slug);

  return (
    <main className="min-h-screen pt-16 flex flex-col items-center justify-center">
      <div className="container max-w-lg text-center px-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/[0.06] border border-white/[0.08] mb-8">
          <Clock className="h-7 w-7 text-primary" />
        </div>

        <div className="mb-3">
          <span className="text-xs font-medium text-primary tracking-widest uppercase">
            Case Study
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          {project ? project.title : "Coming Soon"}
        </h1>

        <p className="text-muted-foreground leading-relaxed mb-10">
          I&apos;m working on writing up this case study. Check back soon —
          it&apos;ll cover the problem, what I built, and the technical
          decisions behind it.
        </p>

        <Link
          href="/work"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/[0.12] text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-white/[0.06] transition-all duration-200"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Work
        </Link>
      </div>
    </main>
  );
}
