import React from "react";
import { HeroMarquee } from "./heroMarquee";

export function HeroWrapper() {
  return (
   <main className="relative w-full min-h-screen mx-auto overflow-hidden flex items-start justify-center pt-[100px] md:pt-[10vh]">
  <h2 className="z-10 pointer-events-none max-w-[1200px] mx-auto text-center">
    <div
      className="text-black font-semibold mb-1 flex items-center justify-center"
      style={{ fontSize: 'clamp(28px, 6vw, 50px)' }}
    >
      Soham Pachpute
    </div>
    <div
      className="relative overflow-hidden text-black font-bold leading-none"
      style={{
        fontSize: "clamp(36px, 10vw, 130px)",
        height: "clamp(60px, 12vw, 120px)",
      }}
    >
      <div
        className="animate-skillSlide flex flex-col justify-center items-center"
        style={{
          fontSize: "clamp(36px, 10vw, 130px)",
          lineHeight: "clamp(60px, 12vw, 120px)",
        }}
      >
        <span>FULL STACK DEVELOPER.</span>
        <span>REACT DEVELOPER.</span>
        <span>NODE.JS DEVELOPER.</span>
        <span>MERN STACK DEVELOPER.</span>
        <span>AI PRODUCT BUILDER.</span>
        <span>STARTUP FOUNDER.</span>
        <span>UI/UX ENTHUSIAST.</span>
        <span>FULL STACK DEVELOPER.</span>
      </div>
    </div>
  </h2>
  <HeroMarquee />
</main>
  );
}