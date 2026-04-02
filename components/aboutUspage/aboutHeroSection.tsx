"use client";

import React, { useRef } from "react";
import { AboutHeroWrapper } from "./aboutHeroWrapper";
import { Bulge } from "@/components/bulge";

export function AboutHeroSection() {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      className="section section__1 first darkGradient relative text-colorLight min-h-screen"
    >
      <Bulge type="Light" />
      <AboutHeroWrapper />
    </section>
  );
}
