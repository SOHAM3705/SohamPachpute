import React from "react";
import { AboutMarquee } from "./aboutMarquee";

export function AboutWrapper() {
  return (
    <main className="relative flex h-full w-full max-w-maxWidth grow flex-col justify-between mx-auto">

      {/* Top — name tag + paragraph side by side */}
      <div className="anime flex flex-col md:flex-row md:items-end justify-between gap-8 mt-8">

        {/* Left — big label */}
        <div className="mask">
          <p className="text-white/30 text-sm uppercase tracking-[0.3em] mb-3 font-mono">
            About me
          </p>
          <h2
            className="font-black leading-none text-colorLight"
            style={{ fontSize: "clamp(48px, 7vw, 110px)" }}
          >
            Soham<br />Pachpute.
          </h2>
        </div>

        {/* Right — short bio */}
        <div className="md:max-w-[420px] pb-2">
          <p
            className="text-white/60 leading-relaxed"
            style={{ fontSize: "clamp(14px, 1.1vw, 17px)" }}
          >
            I'm a Full Stack Developer and Startup Founder from Pune, India.
            I build fast, beautiful products — from pixel-perfect UIs to
            scalable backends. Currently obsessed with AI-powered tools,
            great developer experience, and shipping things that matter.
          </p>

          <div className="mt-6 flex gap-3 flex-wrap">
            {["React", "Next.js", "Node.js", "AI Products", "Startups"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full border border-white/15 text-white/50 text-xs font-mono tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom — tech marquee (keep existing animation) */}
      <AboutMarquee />

    </main>
  );
}