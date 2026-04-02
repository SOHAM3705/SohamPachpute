"use client";
 
import React, { useRef } from "react";
import { AboutSkillsWrapper } from "./Aboutskillswrapper";
import { Bulge } from "@/components/bulge";
 
export function AboutSkillsSection() {
  const sectionRef = useRef(null);
 
  return (
    <section
      ref={sectionRef}
      className="section lightGradient relative text-colorLight min-h-screen"
    >
      <Bulge type="Dark" />
      <AboutSkillsWrapper />
    </section>
  );
}