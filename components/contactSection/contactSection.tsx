import { Footer } from "@/components/contactSection/footer";
import React, { useRef } from "react";

import { Header } from "../header";
import { Bulge } from "../bulge";


export function ContactSection() {
  return (
    <section  className="section section__5 third darkGradient relative">
      <Bulge type="Light" />
      <Header color="Light" />
      <Footer />
    </section>
  );
}