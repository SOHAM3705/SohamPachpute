"use client";

import React from "react";

const achievements = [
  {
    title: "Project Lead — Invennzy & Gradyze",
    desc: "Managing planning, architecture & end-to-end execution of two production SaaS platforms.",
  },
  {
    title: "Innovation Club Lead, PCCOER",
    desc: "Mentored a 30-member technical team, driving projects, workshops, and inter-college initiatives.",
  },
  {
    title: "Best UI Award",
    desc: "Winner at inter-college design competition during second year.",
  },
  {
    title: "Best Implementation Award",
    desc: "Recognized for Invennzy at the 6th Semester project showcase.",
  },
];

export function AboutAchievementsWrapper() {
  return (
    <main className="relative w-full min-h-screen mx-auto overflow-hidden flex flex-col justify-center px-paddingX max-w-maxWidth md:py-0 py-12">
      <p className="text-white/30 text-xs uppercase tracking-[0.3em] font-mono mb-3 relative z-10">
        Achievements
      </p>
      <h2
        className="font-black text-white leading-none tracking-tighter mb-12 md:mb-16 relative z-10"
        style={{ fontSize: "clamp(28px, 5vw, 72px)" }}
      >
        MILESTONES
        <br />
        <span className="yellow__it">&amp; WINS</span>
      </h2>

      <div className="relative z-10 w-full max-w-lg mx-auto">
        {/* Vertical timeline line */}
        <div className="absolute left-[22px] top-0 bottom-0 w-px bg-white/10 md:block hidden" />
        <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10 md:hidden block" />

        <div className="flex flex-col gap-8 md:gap-12">
          {achievements.map((a, i) => (
            <div key={i} className="flex gap-6 md:gap-10 items-start group">
              {/* Numbered bubble */}
              <div className="relative z-10 flex-shrink-0 w-9 h-9 md:w-11 md:h-11 rounded-full border border-white/20 flex items-center justify-center bg-black transition-all duration-300 group-hover:border-yellow-400/60">
                <span className="text-white/40 font-mono text-xs group-hover:text-yellow-400 transition-colors duration-300">
                  0{i + 1}
                </span>
              </div>
              <div className="pt-1 md:pt-2">
                <h3 className="text-white font-bold text-lg md:text-xl mb-1 md:mb-2 leading-tight group-hover:text-yellow-400 transition-colors duration-300">
                  {a.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed max-w-lg">
                  {a.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}