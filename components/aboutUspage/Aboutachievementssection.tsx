"use client";

import React, { useRef } from "react";
import { AboutAchievementsWrapper } from "./Aboutachievementswrapper";
import { Bulge } from "@/components/bulge";
import { Header } from "../header";

export function AboutAchievementsSection() {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      className="section section__3 third darkGradient relative text-colorLight min-h-screen"
    >
      <Bulge type="Light" />
      <Header color="Light" />
      <AboutAchievementsWrapper />
    </section>
  );
}