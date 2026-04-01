import React from "react";
import { Header } from "@/components/header";
import { Bulge } from "@/components/bulge";
import { WorkWrapper } from "@/components/workSection/workWrapper";

export function WorkSection({}) {
  return (
    <section className="section section__3 third lightGradient overflow-hidden px-paddingX py-paddingY">
      <Bulge type="Dark" />
      <Header color="Dark" />
      <WorkWrapper />
    </section>
  );
}