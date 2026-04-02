"use client";

import React, { useRef } from "react";
import { AboutAchievementsWrapper } from "./Aboutachievementswrapper";
import { Bulge } from "@/components/bulge";

export function AboutAchievementsSection() {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      className="section section__1 darkGradient relative text-colorLight min-h-screen"
    >
      <Bulge type="Light" />
      <AboutAchievementsWrapper />
    </section>
  );
}