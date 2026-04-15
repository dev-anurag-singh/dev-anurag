import Experience from "@/components/experience";
import WorkProjects from "@/components/work-projects";
import Footer from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work | Anurag Kumar",
  description:
    "Work experience and projects by Anurag Kumar — full-stack developer.",
};

export default function WorkPage() {
  return (
    <main className="min-h-screen pt-16">
      <Experience />
      <WorkProjects />
      <Footer />
    </main>
  );
}
