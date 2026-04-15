import About from "@/components/about";
import Skills from "@/components/skills";
import Footer from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Anurag Kumar",
  description:
    "Learn about Anurag Kumar — full-stack developer, skills, and background.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-16">
      <About />
      <Skills />
      <Footer />
    </main>
  );
}
