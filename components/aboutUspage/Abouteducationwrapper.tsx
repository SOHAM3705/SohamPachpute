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
    year: "2020 – 2021",
    score: "92%",
    current: false,
  },
];

export function AboutEducationWrapper() {
  return (
    <main className="relative w-full min-h-screen mx-auto overflow-hidden flex flex-col justify-center px-4 md:px-paddingX max-w-maxWidth bg-white text-gray-900 py-12 md:py-0">
      <p className="text-gray-400 text-xs uppercase tracking-[0.3em] font-mono mb-3 relative z-10">
        Education
      </p>
      <h2
        className="font-black leading-none tracking-tighter mb-8 md:mb-16 relative z-10 text-gray-900"
        style={{ fontSize: "clamp(28px, 5vw, 72px)" }}
      >
        ACADEMIC
        <br />
        <span className="text-yellow-500">JOURNEY</span>
      </h2>

      <div className="flex flex-col relative z-10 w-full max-w-lg mx-auto">
        {education.map((e, i) => (
          <div
            key={i}
            className="group grid grid-cols-[1fr_auto] gap-4 md:gap-6 items-start py-6 md:py-8 border-b border-gray-200 last:border-0 hover:bg-gray-50 -mx-2 md:-mx-4 px-2 md:px-4 rounded-xl transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4">
              <span className="text-gray-200 font-mono text-xs flex-shrink-0 w-6">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <div className="flex items-center gap-2 md:gap-3 mb-1">
                  <h3 className="text-gray-900 font-bold text-base md:text-lg">{e.degree}</h3>
                  {e.current && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-yellow-100 text-yellow-600 border border-yellow-200">
                      CURRENT
                    </span>
                  )}
                </div>
                <p className="text-gray-500 text-sm">{e.school}</p>
              </div>
            </div>

            <div className="flex flex-col items-end gap-1 pt-0.5">
              <span className="text-gray-600 text-sm font-bold font-mono">{e.score}</span>
              <span className="text-gray-400 text-xs font-mono">{e.year}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Ghost watermark */}
      <div
        className="absolute right-0 bottom-4 md:bottom-8 text-gray-100/20 font-black pointer-events-none select-none leading-none"
        style={{ fontSize: "clamp(60px, 12vw, 200px)" }}
      >
        EDU
      </div>
    </main>
  );
}

