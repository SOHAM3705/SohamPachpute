"use client";

import React, { useState } from "react";

const skillsData = {
  Frontend: {
    color: "#FFD700", // Gold
    items: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap", "HTML", "CSS"],
  },
  Backend: {
    color: "#4ade80", // Green
    items: ["Node.js", "Express.js", "REST API"],
  },
  Databases: {
    color: "#60a5fa", // Blue
    items: ["MongoDB", "MySQL"],
  },
  Tools: {
    color: "#f472b6", // Pink
    items: ["Git", "GitHub", "Figma", "Postman", "VS Code"],
  },
  Languages: {
    color: "#a78bfa", // Purple
    items: ["JavaScript", "Python", "C++"],
  },
};

const allSkills = Object.entries(skillsData).flatMap(([cat, { items, color }]) =>
  items.map((skill) => ({ skill, cat, color }))
);

const positions = [
  { top: "8%",  left: "6%"  },
  { top: "14%", left: "26%" },
  { top: "8%",  left: "48%" },
  { top: "12%", left: "68%" },
  { top: "18%", left: "87%" },
  { top: "32%", left: "14%" },
  { top: "36%", left: "38%" },
  { top: "28%", left: "58%" },
  { top: "38%", left: "78%" },
  { top: "52%", left: "4%"  },
  { top: "48%", left: "24%" },
  { top: "55%", left: "46%" },
  { top: "50%", left: "66%" },
  { top: "56%", left: "85%" },
  { top: "68%", left: "16%" },
  { top: "70%", left: "36%" },
  { top: "66%", left: "56%" },
  { top: "72%", left: "74%" },
  { top: "82%", left: "8%"  },
  { top: "80%", left: "30%" },
  { top: "84%", left: "53%" },
];

export function AboutSkillsWrapper() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <main className="relative w-full min-h-screen mx-auto overflow-hidden flex flex-col justify-center px-paddingX max-w-maxWidth bg-white">
      {/* Radial glow (light theme) */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,215,0,0.04) 0%, transparent 70%)",
        }}
      />

      {/* Header row */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 relative z-10">
        <div>
          <p className="text-gray-500 text-xs uppercase tracking-[0.3em] font-mono mb-3">
            Technical Skills
          </p>
          <h2
            className="font-black text-gray-900 leading-none tracking-tighter"
            style={{ fontSize: "clamp(36px, 5vw, 72px)" }}
          >
            WHAT I
            <br />
            <span className="text-yellow-500">WORK WITH</span>
          </h2>
        </div>

        {/* Category filter pills */}
        <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider border transition-all duration-200 ${
              activeCategory === null
                ? "bg-gray-900 text-white border-gray-900"
                : "border-gray-300 text-gray-500 hover:border-gray-400 hover:text-gray-700"
            }`}
          >
            All
          </button>
          {Object.entries(skillsData).map(([cat, { color }]) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
              className="px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider border transition-all duration-200"
              style={
                activeCategory === cat
                  ? { background: color, color: "#fff", borderColor: color }
                  : { borderColor: "#d1d5db", color: "#6b7280" }
              }
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Constellation */}
      <div className="relative w-full z-10" style={{ height: "44vh", minHeight: 280 }}>
       <svg
  className="absolute inset-0 w-full h-full pointer-events-none"
  style={{ opacity: 0.2 }} // Increased opacity
  preserveAspectRatio="none"
>
  {allSkills.slice(0, allSkills.length - 1).map((_, i) => {
    const a = positions[i];
    const b = positions[i + 1];
    if (!a || !b) return null;
    return (
      <line
        key={i}
        x1={a.left}
        y1={a.top}
        x2={b.left}
        y2={b.top}
        stroke="#000000" // Black
        strokeWidth="1"
      />
    );
  })}
</svg>

        {allSkills.map(({ skill, cat, color }, idx) => {
          const pos = positions[idx] ?? { top: "50%", left: "50%" };
          const isActive = !activeCategory || activeCategory === cat;
          return (
            <div
              key={skill}
              className="absolute transition-all duration-500"
              style={{
                top: pos.top,
                left: pos.left,
                opacity: isActive ? 1 : 0.1,
                transform: isActive ? "scale(1)" : "scale(0.85)",
              }}
            >
              <span
                className="absolute -top-1 -left-1 w-2 h-2 rounded-full"
                style={{
                  background: color,
                  boxShadow: isActive ? `0 0 8px 3px ${color}77` : "none",
                  transition: "box-shadow 0.4s",
                }}
              />
              <span
                className="pl-3 text-sm font-semibold whitespace-nowrap transition-colors duration-300"
                style={{
                  color: isActive ? "#1f2937" : "#9ca3af",
                }}
              >
                {skill}
              </span>
            </div>
          );
        })}
      </div>

      {/* Legend bar */}
      <div className="flex flex-wrap gap-6 mt-6 pt-6 border-t border-black relative z-10">
        {Object.entries(skillsData).map(([cat, { color, items }]) => (
          <div key={cat} className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: color }} />
            <span className="text-black text-xs font-mono">
              {cat} <span className="text-black">/ {items.length}</span>
            </span>
          </div>
        ))}
      </div>
    </main>
  );
}