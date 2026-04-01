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

  const [status,setStatus] = useState("Initial");

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues:{
      name:"",
      email:"",
      message:""
    }
  });



  const contactMethods = [
    {
      label:"Email",
      value:"pachputesoham00@gmail.com",
      href:"mailto:pachputesoham00@gmail.com"
    },
    {
      label:"LinkedIn",
      value:"linkedin.com/in/soham-pachpute",
      href:"https://linkedin.com/in/soham-pachpute"
    },
    {
      label:"GitHub",
      value:"github.com/SOHAM3705",
      href:links.github
    }
  ];

  return (
    <>
    <Cursor />
      <Header color="Light"/>
      <HeaderNavigation/>

      <main className="darkGradient relative min-h-screen flex items-center justify-center overflow-hidden pt-[80px] pb-[40px]">

        <Bulge type="Light"/>

        <div className="relative z-10 w-full max-w-[1200px] px-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

            {/* LEFT CONTACT DETAILS */}

            <div className="flex flex-col gap-8">

              <p className="text-white/30 text-xs uppercase tracking-[0.3em] font-mono">
                Contact
              </p>

              <h2 className="text-white text-5xl font-black leading-tight">
                Let's work together<span className="yellow__it">.</span>
              </h2>

              <div className="flex flex-col gap-4 mt-4">

                {contactMethods.map((item)=>(
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    className="group border border-white/10 hover:border-white/40 transition-all rounded-xl px-6 py-4 bg-white/5 hover:bg-white/10 backdrop-blur"
                  >

                    <p className="text-white/40 text-xs uppercase font-mono">
                      {item.label}
                    </p>

                    <p className="text-white text-sm group-hover:translate-x-1 transition">
                      {item.value}
                    </p>

                  </a>
                ))}

              </div>

            </div>


            {/* RIGHT FORM */}

            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8">

              <p className="text-white/30 text-xs uppercase tracking-[0.3em] font-mono mb-6">
                Send Message
              </p>

              <Form {...form}>
                <form
                
                  className="space-y-6"
                >

                  <FormField
                    control={form.control}
                    name="name"
                    render={({field})=>(
                      <FormItem>
                        <FormLabel className="text-white/40 text-xs uppercase font-mono">
                          Name
                        </FormLabel>

                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Your name"
                            className=" p-2 
                            bg-black/40
                            border border-white/20
                            text-white
                            placeholder:text-white/30
                            rounded-lg
                            h-12
                            focus:border-yellow-400
                            focus:ring-2
                            focus:ring-yellow-400/40
                            transition
                            "
                          />
                        </FormControl>

                        <FormMessage/>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({field})=>(
                      <FormItem>
                        <FormLabel className="text-white/40 text-xs uppercase font-mono">
                          Email
                        </FormLabel>

                        <FormControl>
                          <Input
                            {...field}
                            placeholder="you@email.com"
                            className=" p-2 
                            bg-black/40
                            border border-white/20
                            text-white
                            placeholder:text-white/30
                            rounded-lg
                            h-12
                            focus:border-yellow-400
                            focus:ring-2
                            focus:ring-yellow-400/40
                            transition
                            "
                          />
                        </FormControl>

                        <FormMessage/>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({field})=>(
                      <FormItem>
                        <FormLabel className="text-white/40 text-xs uppercase font-mono">
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
                            placeholder:text-white/30
                            rounded-lg
                            min-h-[120px]
                            focus:border-yellow-400
                            focus:ring-2
                            focus:ring-yellow-400/40
                            transition
                            p-2 "
                          />
                        </FormControl>

                        <FormMessage/>
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full rounded-full bg-white text-black py-4 font-semibold hover:bg-white/90"
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