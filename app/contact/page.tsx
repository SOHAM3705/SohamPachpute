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
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

import { Header } from "@/components/header";
import { HeaderNavigation } from "@/components/headerNavigation";
import { Bulge } from "@/components/bulge";
import { links } from "@/data/data";
import { useState } from "react";
import Magentic from "@/components/ui/magentic";
import { Cursor } from "@/components/cursor";

const formSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
});

export default function ContactPage() {
  const [status, setStatus] = useState("Initial");

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const contactMethods = [
    {
      label: "Email",
      value: "pachputesoham00@gmail.com",
      href: "mailto:pachputesoham00@gmail.com",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/soham-pachpute",
      href: "https://linkedin.com/in/soham-pachpute",
    },
    {
      label: "GitHub",
      value: "github.com/SOHAM3705",
      href: links.github,
    },
  ];

  return (
    <>
      <Cursor />
      <Header color="Light" />
      <HeaderNavigation />

      <main className="darkGradient relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 px-4 sm:px-6 lg:px-8">

        <Bulge type="Light" />

        <div className="relative z-10 w-full max-w-6xl mx-auto">

          {/* Page label */}
          <p className="text-white/30 text-xs uppercase tracking-[0.3em] font-mono mb-10 text-center lg:text-left">
            Contact
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-20 items-start">

            {/* ── LEFT: Contact Details ── */}
            <div className="flex flex-col gap-6">

              <h2 className="text-white text-4xl sm:text-5xl font-black leading-tight text-center lg:text-left">
                Let's work together<span className="yellow__it">.</span>
              </h2>

              <p className="text-white/40 text-sm leading-relaxed text-center lg:text-left">
                Have a project in mind or just want to say hi? Fill out the form
                or reach out directly — I typically respond within 24 hours.
              </p>

              <div className="flex flex-col gap-3 mt-2">
                {contactMethods.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 border border-white/10 hover:border-white/40 transition-all rounded-xl px-5 py-4 bg-white/5 hover:bg-white/10 backdrop-blur"
                  >
                    {/* Label pill */}
                    <span className="shrink-0 text-white/40 text-[10px] uppercase font-mono tracking-widest w-16">
                      {item.label}
                    </span>

                    {/* Divider */}
                    <span className="shrink-0 w-px h-4 bg-white/15" />

                    {/* Value */}
                    <span className="text-white text-sm truncate group-hover:translate-x-1 transition-transform">
                      {item.value}
                    </span>
                  </a>
                ))}
              </div>

            </div>

            {/* ── RIGHT: Form ── */}
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 sm:p-8 w-full">

              <p className="text-white text-xs uppercase tracking-[0.3em] font-mono mb-6">
                Send Message
              </p>

              <Form {...form}>
                <form className="flex flex-col gap-5">

                  {/* Name + Email row on md+ screens */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem className="flex flex-col gap-1.5">
                          <FormLabel className="text-white/40 text-xs uppercase font-mono tracking-widest">
                            Name
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Your name"
                              className="
                                bg-black/40
                                border border-white/20
                                text-white
                                placeholder:text-white/25
                                rounded-lg
                                h-11
                                px-3
                                text-sm
                                focus:border-yellow-400
                                focus:ring-2
                                focus:ring-yellow-400/30
                                transition
                              "
                            />
                          </FormControl>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="flex flex-col gap-1.5">
                          <FormLabel className="text-white/40 text-xs uppercase font-mono tracking-widest">
                            Email
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="you@email.com"
                              className="
                                bg-black/40
                                border border-white/20
                                text-white
                                placeholder:text-white/25
                                rounded-lg
                                h-11
                                px-3
                                text-sm
                                focus:border-yellow-400
                                focus:ring-2
                                focus:ring-yellow-400/30
                                transition
                              "
                            />
                          </FormControl>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />

                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className="flex flex-col gap-1.5">
                        <FormLabel className="text-white/40 text-xs uppercase font-mono tracking-widest mb-2">
                          Message
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            placeholder="Tell me about your project..."
                            className="
                              bg-black/40
                              border border-white/20
                              text-white
                              placeholder:text-white/25
                              rounded-lg
                              min-h-[140px]
                              px-3
                              py-3
                              text-sm
                              focus:border-yellow-400
                              focus:ring-2
                              focus:ring-yellow-400/30
                              transition
                              resize-none
                            "
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full rounded-full bg-white text-black py-3 text-sm font-semibold hover:bg-white/90 transition mt-1"
                  >
                    Send Message
                  </Button>

                </form>
              </Form>

            </div>

          </div>

        </div>

      </main>
    </>
  );
}