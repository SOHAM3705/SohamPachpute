import React, { useRef } from "react";

import { HeroWrapper } from "@/components/heroSection/heroWrapper";
import { Header } from "@/components/header";
import { Bulge } from "@/components/bulge";

export function HeroSection({}) {
  const sectionRef = useRef(null);
  return (
 <section
  ref={sectionRef}
  className="section section__1 lightGradient first relative z-0 px-paddingX text-colorLight min-h-screen"
>
      <Bulge type="Dark" />
      <Header color="Dark" />
      <HeroWrapper />
    
    </section>
  );
}
