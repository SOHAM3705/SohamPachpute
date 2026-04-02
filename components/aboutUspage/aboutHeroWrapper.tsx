"use client";

import React from "react";
import { links } from "@/data/data";

export function AboutHeroWrapper() {
  return (
    <main className="relative w-full min-h-screen mx-auto overflow-hidden flex flex-col justify-center px-paddingX max-w-maxWidth">
      {/* Subtle grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <p className="text-white/30 text-xs uppercase tracking-[0.3em] font-mono mb-4 relative z-10">
        About Me
      </p>

      <h1
        className="font-black leading-none tracking-tighter text-white mb-8 relative z-10"
        style={{ fontSize: "clamp(52px, 9vw, 130px)" }}
      >
        SOHAM
        <br />
        <span className="yellow__it">PACHPUTE</span>
      </h1>

      <div className="flex flex-col md:flex-row gap-6 md:items-end justify-between relative z-10">
        <p className="text-white/50 max-w-xl leading-relaxed text-base md:text-lg">
          Full Stack Developer &amp; Startup Founder from Pune, India. I build
          fast, scalable products — from pixel-perfect UIs to robust backends.
          Currently pursuing B.E. in Computer Science at PCCOER with a 9.5
          CGPA, obsessed with AI-powered tools and shipping things that matter.
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <a
            href="/resume.pdf"
            download="Soham_Pachpute_Resume.pdf"
            className="px-6 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white hover:text-black transition-all duration-300"
          >
            Download Resume
          </a>
          <a
            href={links.email}
            className="px-6 py-3 rounded-full bg-white text-black text-sm font-semibold hover:bg-white/80 transition-all duration-300"
          >
            Hire Me
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="text-white text-xs font-mono uppercase tracking-widest">scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent animate-pulse" />
      </div>
    </main>
  );
}
