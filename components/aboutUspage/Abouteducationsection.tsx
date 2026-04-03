"use client";
 
import React, { useRef } from "react";
import { AboutEducationWrapper } from "./Abouteducationwrapper";
import { Bulge } from "@/components/bulge";
import { Header } from "../header";
 
export function AboutEducationSection() {
  const sectionRef = useRef(null);
 
  return (
    <section
      ref={sectionRef}
      className="section section__4 fourth lightGradient relative text-colorLight min-h-screen"
    >
      <Bulge type="Dark" />
       <Header color="Dark" />
      <AboutEducationWrapper />
    </section>
  ); 
}
 