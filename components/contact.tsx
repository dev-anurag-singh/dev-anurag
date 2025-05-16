"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { LampContainer } from "@/components/ui/lamp";
import { ContactForm } from "./contact-form";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <LampContainer>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? Feel free to reach
              out!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6">
                    Contact Information
                  </h3>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="mr-4 bg-primary/10 p-3 rounded-full">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Email</h4>
                        <p className="text-muted-foreground">
                          contact@anuragkumar.dev
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="mr-4 bg-primary/10 p-3 rounded-full">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Phone</h4>
                        <p className="text-muted-foreground">+91 7903679825</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="mr-4 bg-primary/10 p-3 rounded-full">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Location</h4>
                        <p className="text-muted-foreground">Delhi, India</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-bold mb-4">Follow Me</h3>
                    <div className="flex space-x-4">
                      <a
                        href="https://github.com/dev-anurag-singh"
                        className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors"
                      >
                        <Github className="h-5 w-5 text-primary" />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/iamanuragkr"
                        className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors"
                      >
                        <Linkedin className="h-5 w-5 text-primary" />
                      </a>
                      <a
                        href="https://x.com/iam_anuragkr"
                        className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors"
                      >
                        <Twitter className="h-5 w-5 text-primary" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>

                  <ContactForm />
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </LampContainer>
    </section>
  );
}
