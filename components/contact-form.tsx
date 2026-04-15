"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(3, { message: "Invalid name" }),
  email: z.string().email({ message: "Invalid email" }),
  subject: z.string().min(5, { message: "Provide a valid subject" }),
  message: z.string().min(10, { message: "Provide a valid message" }),
});

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/mldbznqv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        form.reset();
        toast({
          title: "Message sent!",
          description: "Thank you for your message, I'll get back to you soon.",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong, please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "bg-white/[0.06] border-white/[0.10] focus:border-primary/50 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground/50 transition-colors";

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-muted-foreground text-xs uppercase tracking-widest">Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" className={inputClass} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-muted-foreground text-xs uppercase tracking-widest">Email</FormLabel>
                <FormControl>
                  <Input placeholder="your@email.com" className={inputClass} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-muted-foreground text-xs uppercase tracking-widest">Subject</FormLabel>
              <FormControl>
                <Input placeholder="What's this about?" className={inputClass} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-muted-foreground text-xs uppercase tracking-widest">Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell me about your project..."
                  className={`${inputClass} min-h-32 resize-none`}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="w-full font-semibold
            text-white
            bg-[linear-gradient(to_right,#00E6E6,#7A00C0)]
            bg-[length:200%_200%] bg-[position:0%_50%]
            transition-all duration-200 ease-in-out
            hover:bg-[position:100%_50%]
            hover:shadow-md animate-gradient hover:shadow-[#7A00C055]"
          disabled={isSubmitting}
          type="submit"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </Form>
  );
}
