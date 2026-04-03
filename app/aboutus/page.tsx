"use client";

import React from "react";
import { Header } from "@/components/header";
import { HeaderNavigation } from "@/components/headerNavigation";
import { Cursor } from "@/components/cursor";

import { AboutHeroSection } from "@/components/aboutUspage/aboutHeroSection";
import { AboutSkillsSection } from "@/components/aboutUspage/Aboutskillssection";
import { AboutAchievementsSection } from "@/components/aboutUspage/Aboutachievementssection";
import { AboutEducationSection } from "@/components/aboutUspage/Abouteducationsection";
import FullpageProvider from "@/components/fullpageProvider";

export default function About() {
  return (
    <>
     <Cursor />
    <FullpageProvider>
      
      <HeaderNavigation />
      <AboutHeroSection />
      <AboutSkillsSection />
      <AboutAchievementsSection />
      <AboutEducationSection />
      
      </FullpageProvider>
    </>
  );
}