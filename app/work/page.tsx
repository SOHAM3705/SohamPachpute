"use client";
import React, { useState, useEffect, useCallback } from "react";
import "../work.css";
import "../header.css";
import FullpageProviderWork from "@/components/fullpageProviderWork";
import { Cursor } from "@/components/cursor";
import { HeaderNavigation } from "@/components/headerNavigation";
import { WorkSection } from "@/components/workPage/workSection";

const projectsData = [
  {
    title: (
      <>
        Invennzy <br /> Inventory
      </>
    ),
    navTitle: "Invennzy",
    description:
      "Smart Inventory Management System — Role-based access, JWT auth, RESTful APIs & real-time stock dashboards for institutional labs.",
    link: "https://invennzy.com",
    imageLink: "/img/projects/4.png",
    tech: "React.js · Node.js · Express.js · MySQL",
  },
  {
    title: (
      <>
        Gradyze <br /> Platform
      </>
    ),
    navTitle: "Gradyze",
    description:
      "Marks Management System — Full MERN-stack academic platform with result processing, auth workflows & role-specific dashboards.",
    link: "https://gradyze.com",
    imageLink: "/img/projects/3.png",
    tech: "MongoDB · Express.js · React.js · Node.js",
  },
  {
    title: (
      <>
        Incorbis <br /> Website
      </>
    ),
    navTitle: "Incorbis",
    description:
      "Company Website & Product Showcase — Responsive marketing site with optimised component reuse and clean performance.",
    link: "https://incorbis.com",
    imageLink: "/img/projects/66.png",
    tech: "React.js · Tailwind CSS",
  },
  {
    title: (
      <>
        Model School <br /> Dhanori
      </>
    ),
    navTitle: "Model School",
    description:
      "Zilla Parishad Government School — Official public-sector school site improving accessibility for students, parents & staff.",
    link: "https://modelschooldhanorepune.com",
    imageLink: "/img/projects/2.png",
    tech: "HTML · CSS · JavaScript · React",
  },
  {
    title: (
      <>
        Pixel Craft <br /> Club
      </>
    ),
    navTitle: "Pixel Craft",
    description:
      "College Technical Club Website — Digital presence for PCCOER's creative club, showcasing events and interactive UI sections.",
    link: "https://pixelcraftpccoer.in",
    imageLink: "/img/projects/55.png",
    tech: "HTML · CSS · JavaScript",
  },
];

/** Project-name navigator — all names stay centered, only color/weight animate */
function ProjectNameNav({
  projects,
  activeIndex,
}: {
  projects: typeof projectsData;
  activeIndex: number;
}) {
  // even index = dark background → white text; odd = light bg → dark text
  const isDarkBg = activeIndex % 2 === 0;
  const activeColor = isDarkBg ? "#111111" : "#ffffff";
  const dimColor    = isDarkBg ? "rgba(0,0,0,0.28)" : "rgba(255,255,255,0.28)";
  const lineColor   = isDarkBg ?  "#111111" : "#ffffff";

  return (
    <nav
      aria-label="Project navigation"
      className="fixed bottom-0 left-0 w-full flex flex-col items-center pointer-events-none z-50 pb-4 sm:pb-6"
    >
      {/* Names row — wraps gracefully on mobile */}
      <div
        className="flex items-center justify-center w-full px-3 sm:px-6"
        style={{ gap: "clamp(0.6rem, 3vw, 2.5rem)", flexWrap: "nowrap" }}
      >
        {projects.map((p, i) => {
          const isActive = i === activeIndex;
          return (
            <span
              key={p.navTitle}
              style={{
                color: isActive ? activeColor : dimColor,
                transform: `scale(${isActive ? 1.08 : 0.88})`,
                transition: "color 0.45s ease, transform 0.45s ease",
                /* clamp: 0.45rem on tiny phones → 0.78rem on desktop */
                fontSize: "clamp(0.45rem, 1.8vw, 0.78rem)",
                letterSpacing: "clamp(0.06em, 0.5vw, 0.16em)",
                fontWeight: isActive ? 700 : 400,
                whiteSpace: "nowrap",
                lineHeight: 1,
              }}
              className="uppercase font-mono"
            >
              {p.navTitle}
            </span>
          );
        })}
      </div>

      {/* Indicator line */}
      
    </nav>
  );
}

export default function WorkPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Listen for fullpage scroll events (fp.js fires a custom event or we can use
  // a MutationObserver on the active section class). Using a simple approach:
  // poll the active section via the `active` class added by fullpage.js.
  const detectActive = useCallback(() => {
    const sections = document.querySelectorAll(".section");
    sections.forEach((el, i) => {
      if (
        el.classList.contains("active") ||
        el.classList.contains("fp-completely")
      ) {
        setActiveIndex(i);
      }
    });
  }, []);

  useEffect(() => {
    // Initial detect after fullpage.js initialises
    const t = setTimeout(detectActive, 400);

    // MutationObserver watches class changes on .section elements.
    // fullpage.js adds "active" / "fp-completely" when a slide becomes current.
    const observer = new MutationObserver(detectActive);
    const t2 = setTimeout(() => {
      document.querySelectorAll(".section").forEach((el) => {
        observer.observe(el, { attributes: true, attributeFilter: ["class"] });
      });
    }, 500);

    return () => {
      clearTimeout(t);
      clearTimeout(t2);
      observer.disconnect();
    };
  }, [detectActive]);

  return (
    <>
      <Cursor />
      <HeaderNavigation />
      <FullpageProviderWork>
        <div id="fullpage">
          <div className="background">
            PROJECTS
            <br />
            PROJECTS
          </div>

          {projectsData.map((item, index) => (
            <WorkSection
              key={index}
              item={item}
              index={index}
              length={projectsData.length}
              color={index % 2 !== 0 ? "Light" : "Dark"}
            />
          ))}
        </div>
      </FullpageProviderWork>

      {/* Sliding name nav — rendered outside fullpage so it overlays all sections */}
      <ProjectNameNav projects={projectsData} activeIndex={activeIndex} />
    </>
  );
}