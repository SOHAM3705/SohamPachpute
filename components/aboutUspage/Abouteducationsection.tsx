"use client";
 
import React, { useRef } from "react";
import { AboutEducationWrapper } from "./Abouteducationwrapper";
import { Bulge } from "@/components/bulge";
 
export function AboutEducationSection() {
  const sectionRef = useRef(null);
 
  return (
    <section
      ref={sectionRef}
      className="section darkGradient relative text-colorLight min-h-screen"
    >
      <Bulge type="Light" />
      <AboutEducationWrapper />
    </section>
  );
}
 