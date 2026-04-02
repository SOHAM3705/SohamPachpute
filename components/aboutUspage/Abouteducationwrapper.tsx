"use client";

import React from "react";

const education = [
  {
    degree: "B.E. in Computer Science",
    school: "PCCOER, Pune",
    year: "2023 – Present",
    score: "CGPA: 9.5 / 10",
    current: true,
  },
  {
    degree: "HSC — Maharashtra State Board",
    school: "Novel Jr. College, Pune",
    year: "2021 – 2023",
    score: "83.5%",
    current: false,
  },
  {
    degree: "SSC — Maharashtra State Board",
    school: "S.N.B.P School, Morwadi, Pune",
    year: "2011 – 2021",
    score: "92%",
    current: false,
  },
];

export function AboutEducationWrapper() {
  return (
    <main className="relative w-full min-h-screen mx-auto overflow-hidden flex flex-col justify-center px-paddingX max-w-maxWidth">
      <p className="text-white/30 text-xs uppercase tracking-[0.3em] font-mono mb-3 relative z-10">
        Education
      </p>
      <h2
        className="font-black text-white leading-none tracking-tighter mb-16 relative z-10"
        style={{ fontSize: "clamp(36px, 5vw, 72px)" }}
      >
        ACADEMIC
        <br />
        <span className="yellow__it">JOURNEY</span>
      </h2>

      <div className="flex flex-col relative z-10">
        {education.map((e, i) => (
          <div
            key={i}
            className="group grid grid-cols-[1fr_auto] gap-6 items-start py-8 border-b border-white/10 last:border-0 hover:bg-white/[0.02] -mx-4 px-4 rounded-xl transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <span className="text-white/15 font-mono text-xs flex-shrink-0 w-6">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-white font-bold text-lg">{e.degree}</h3>
                  {e.current && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-yellow-400/10 text-yellow-400 border border-yellow-400/20">
                      CURRENT
                    </span>
                  )}
                </div>
                <p className="text-white/40 text-sm">{e.school}</p>
              </div>
            </div>

            <div className="flex flex-col items-end gap-1 pt-0.5">
              <span className="text-white/50 text-sm font-bold font-mono">{e.score}</span>
              <span className="text-white/20 text-xs font-mono">{e.year}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Ghost watermark */}
      <div
        className="absolute right-0 bottom-8 text-white/[0.025] font-black pointer-events-none select-none leading-none"
        style={{ fontSize: "clamp(80px, 14vw, 200px)" }}
      >
        EDU
      </div>
    </main>
  );
}