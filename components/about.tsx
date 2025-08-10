"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative z-10 py-20 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm a Full-stack developer who loves crafting clean, responsive, and
            accessible interfaces that deliver smooth user experiences.
          </p>
        </motion.div>

        <TracingBeam>
          <div className="grid md:grid-cols-2 gap-10  items-center overflow-x-hidden">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-none shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-square bg-muted relative overflow-hidden">
                    <Image
                      src="/profile.png"
                      alt="Profile"
                      fill
                      className="object-cover w-full h-full"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold">
                Full-stack React & Next.js Developer
              </h3>
              <p className="text-muted-foreground">
                With over 2 years of experience in web development, I specialize
                in creating responsive, accessible, and performant web
                applications using modern technologies like React and Next.js.
              </p>
              <p className="text-muted-foreground">
                I'm passionate about creating intuitive user interfaces and
                delivering exceptional user experiences. My approach combines
                technical expertise with creative problem-solving to build web
                applications that are both functional and visually appealing.
              </p>
              <div className="grid grid-cols-2 gap-4 md:gap-x-0  pt-4">
                <div>
                  <h4 className="font-medium mb-2">Name:</h4>
                  <p className="text-muted-foreground">Anurag Kumar</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Location:</h4>
                  <p className="text-muted-foreground">Delhi, India</p>
                </div>
                <div className="col-span-2">
                  <h4 className="font-medium mb-2">Availability:</h4>
                  <p className="text-muted-foreground">Freelance / Full-time</p>
                </div>
              </div>
            </motion.div>
          </div>
        </TracingBeam>
      </div>
    </section>
  );
}
