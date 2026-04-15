import Contact from "@/components/contact";
import Footer from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Anurag Kumar",
  description:
    "Get in touch with Anurag Kumar for freelance work, collaborations, or just to say hi.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-16 flex flex-col">
      <div className="flex-1">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
