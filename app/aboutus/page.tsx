"use client";

import React from "react";
import { Header } from "@/components/header";
import { HeaderNavigation } from "@/components/headerNavigation";
import { Cursor } from "@/components/cursor";
import { Bulge } from "@/components/bulge";
import { links } from "@/data/data";

const skills = {
  Frontend: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap", "HTML", "CSS"],
  Backend: ["Node.js", "Express.js", "REST API"],
  Databases: ["MongoDB", "MySQL"],
  Tools: ["Git", "GitHub", "Figma", "Postman", "VS Code"],
  Languages: ["JavaScript", "Python", "C++"],
};

const projects = [
  {
    name: "Invennzy",
    desc: "Smart Inventory Management System for institutional laboratories with role-based access control.",
    stack: ["React.js", "Node.js", "Express.js", "MySQL"],
    href: "https://invennzy.com",
  },
  {
    name: "Gradyze",
    desc: "Marks management platform for institutions with authentication workflows and role-specific dashboards.",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js"],
    href: "https://gradyze.com",
  },
  {
    name: "Incorbis",
    desc: "Responsive company website highlighting products and vision.",
    stack: ["React.js", "Tailwind CSS"],
    href: "https://incorbis.com",
  },
  {
    name: "ModelSchool Dhanori",
    desc: "Official ZP government school website improving accessibility for students, parents, and staff.",
    stack: ["HTML", "CSS", "JavaScript", "React"],
    href: "https://modelschooldhanorepune.com",
  },
  {
    name: "Pixel Craft",
    desc: "College club website showcasing events and activities with interactive UI sections.",
    stack: ["HTML", "CSS", "JavaScript"],
    href: "https://pixelcraftpccoer.in",
  },
];

const achievements = [
  "Project Lead for Invennzy and Gradyze — managing planning, architecture & execution",
  "Innovation Club Lead, PCCOER — Mentored a 30-member technical team",
  "Winner — Best UI Award, Inter-College Competition (Second Year)",
  "Winner — Best Implementation Award for Invennzy (6th Semester)",
];

const education = [
  {
    degree: "B.E. in Computer Science",
    school: "PCCOER, Pune",
    year: "2023 – Present",
    score: "CGPA: 9.5 / 10",
  },
  {
    degree: "HSC — Maharashtra State Board",
    school: "Novel Jr. College, Pune",
    year: "2021 – 2023",
    score: "83.5%",
  },
  {
    degree: "SSC — Maharashtra State Board",
    school: "S.N.B.P School, Morwadi, Pune",
    year: "2011 – 2021",
    score: "92%",
  },
];

export default function About() {
  return (
    <section className="darkGradient relative text-colorLight">
      <Cursor />
      <Header color="Light"/>
       <HeaderNavigation/>
      {/* Bulge transitions from the light HeroSection above into this dark section */}
      <Bulge type="Light" />

      <div className="min-h-screen w-screen">
   
        {/* Hero */}
        <section className="flex flex-col justify-center px-paddingX pt-40 pb-20 max-w-maxWidth mx-auto">
          <p className="text-white/30 text-xs uppercase tracking-[0.3em] font-mono mb-4">
            About Me
          </p>
          <h1
            className="font-black leading-none tracking-tighter text-white mb-8"
            style={{ fontSize: "clamp(52px, 9vw, 130px)" }}
          >
            SOHAM
            <br />
            PACHPUTE
          </h1>
          <div className="flex flex-col md:flex-row gap-6 md:items-end justify-between">
            <p className="text-white/50 max-w-xl leading-relaxed text-base md:text-lg">
              Full Stack Developer & Startup Founder from Pune, India. I build
              fast, scalable products — from pixel-perfect UIs to robust
              backends. Currently pursuing B.E. in Computer Science at PCCOER
              with a 9.5 CGPA, obsessed with AI-powered tools and shipping
              things that matter.
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
        </section>

        <div className="border-t border-white/10 mx-paddingX" />

        {/* Skills */}
        <section className="px-paddingX py-20 max-w-maxWidth mx-auto">
          <p className="text-white/30 text-xs uppercase tracking-[0.3em] font-mono mb-10">
            Technical Skills
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <p className="text-white/30 text-xs font-mono uppercase tracking-wider mb-3">
                  {category}
                </p>
                <div className="flex flex-col gap-2">
                  {items.map((skill) => (
                    <span key={skill} className="text-white/70 text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-white/10 mx-paddingX" />

        {/* Projects */}
        <section className="px-paddingX py-20 max-w-maxWidth mx-auto">
          <p className="text-white/30 text-xs uppercase tracking-[0.3em] font-mono mb-10">
            Projects
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-white/10 rounded-2xl p-8 hover:border-white/30 hover:bg-white/5 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-white font-bold text-xl">{p.name}</h3>
                  <svg
                    className="w-4 h-4 text-white/30 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 flex-shrink-0 mt-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
                <p className="text-white/40 text-sm leading-relaxed mb-5">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 rounded-full border border-white/10 text-white/40 text-xs font-mono"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        <div className="border-t border-white/10 mx-paddingX" />

        {/* Achievements + Education */}
        <section className="px-paddingX py-20 max-w-maxWidth mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <p className="text-white/30 text-xs uppercase tracking-[0.3em] font-mono mb-10">
              Achievements
            </p>
            <div className="flex flex-col gap-5">
              {achievements.map((a, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-white/20 font-mono text-xs mt-1 flex-shrink-0">
                    0{i + 1}
                  </span>
                  <p className="text-white/60 text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-white/30 text-xs uppercase tracking-[0.3em] font-mono mb-10">
              Education
            </p>
            <div className="flex flex-col gap-8">
              {education.map((e, i) => (
                <div key={i} className="border-l border-white/10 pl-5">
                  <p className="text-white font-bold text-base mb-1">{e.degree}</p>
                  <p className="text-white/40 text-sm mb-1">{e.school}</p>
                  <div className="flex gap-4">
                    <span className="text-white/25 text-xs font-mono">{e.year}</span>
                    <span className="text-white/40 text-xs font-mono">{e.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="border-t border-white/10 mx-paddingX" />

        {/* Bottom CTA */}
        <section className="px-paddingX py-20 max-w-maxWidth mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-white font-black text-3xl md:text-5xl mb-2">
              Let's build something<span className="yellow__it">.</span>
            </h2>
            <p className="text-white/40 text-sm">
              Open to freelance, full-time & collaborations.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href={links.email}
              className="px-6 py-3 rounded-full bg-white text-black text-sm font-semibold hover:bg-white/80 transition-all duration-300"
            >
              Get in Touch
            </a>
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-all duration-300"
            >
              GitHub
            </a>
          </div>
        </section>

      </div>
    </section>
  );
}