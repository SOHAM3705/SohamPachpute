"use client";
 
import React, { useRef } from "react";
import { AboutSkillsWrapper } from "./Aboutskillswrapper";
import { Bulge } from "@/components/bulge";
import { Header } from "../header";

 
export function AboutSkillsSection() {
  const sectionRef = useRef(null);
 
  return (
    <section
      ref={sectionRef}
      className="section section__2 second lightGradient relative text-colorLight min-h-screen"
    >
      <Header color="Dark" />
      <Bulge type="Dark" />
      <AboutSkillsWrapper />
    </section>
  );
}