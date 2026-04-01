import { links } from "@/data/data";
import { cn, getJoinedDate } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Magentic from "@/components/ui/magentic";

export function Footer({ className }: { className?: string }) {
  const [currentTime, setCurrentTime] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const options: Intl.DateTimeFormatOptions[] = [
      { month: "short", day: "numeric" },
      { hour: "numeric", minute: "numeric" },
    ];
    setCurrentTime(getJoinedDate(options));
    const interval = setInterval(() => setCurrentTime(getJoinedDate(options)), 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText("soham@example.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className={cn("absolute inset-0 flex flex-col justify-between px-paddingX py-10", className)}>
      <div className="mx-auto w-full max-w-maxWidth flex flex-col justify-between h-full">

        {/* TOP ROW — contact pills */}
        <div className="flex flex-wrap items-center gap-3 mt-[12vh]">

          {/* Location */}
          <a
            href="https://maps.google.com/?q=Pune,India"
            target="_blank"
            className="flex items-center gap-2 border border-white/20 rounded-full px-5 py-2.5 text-sm font-medium text-white/60 hover:bg-white hover:text-black transition-all duration-300"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
            </svg>
            Pune, India
          </a>

          {/* Phone */}
          <a
            href="tel:+91XXXXXXXXXX"
            className="flex items-center gap-2 border border-white/20 rounded-full px-5 py-2.5 text-sm font-medium text-white/60 hover:bg-white hover:text-black transition-all duration-300"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.73a16 16 0 0 0 5.38 5.38l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z"/>
            </svg>
            +91 9373617934
          </a>

          {/* Email + copy */}
          <div className="flex items-center border border-white/20 rounded-full overflow-hidden text-sm font-medium text-white/60">
            <a
              href={links.email}
              className="flex items-center gap-2 px-5 py-2.5 text-white/60 hover:bg-white hover:text-black transition-all duration-300"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              pachputesoham00@gmail.com
            </a>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 border-l border-white/20 px-4 py-2.5 hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
            >
              {copied ? (
                <>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Copied!
                </>
              ) : (
                <>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                  </svg>
                  copy
                </>
              )}
            </button>
          </div>

        </div>

        {/* MIDDLE — big name */}
        <div className="select-none">
          <h1
            className="font-black leading-none tracking-tighter text-white w-full"
            style={{ fontSize: "clamp(60px, 13vw, 180px)" }}
          >
            SOHAM
          </h1>
          <h1
            className="font-black leading-none tracking-tighter text-white w-full"
            style={{ fontSize: "clamp(60px, 13vw, 180px)" }}
          >
            PACHPUTE<span style={{ color: "var(--primary-color2)" }}>.</span>
          </h1>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex items-center justify-between border-t border-white/10 pt-4">

          <div className="flex gap-6">
            {[
              { text: "GitHub",   href: links.github },
              { text: "Email",    href: links.email },
            ].map((s) => (
              <Magentic
                key={s.text}
                href={s.href}
                target="_blank"
                strength={30}
                className="text-xs text-white/40 hover:text-white transition-colors duration-200 font-mono uppercase tracking-widest"
                scrambleParams={{ text: s.text, chars: "-xx" }}
                hoverUnderline
              >
                <span className="scrambleText">{s.text}</span>
              </Magentic>
            ))}
          </div>


          <p className="text-xs text-white/30 font-mono">
            Soham Pachpute © {new Date().getFullYear()}
          </p>

        </div>
      </div>
    </footer>
  );
}