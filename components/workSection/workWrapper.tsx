import { links } from "@/data/data";
import React from "react";

const projects = [
  { name: "Project One",   image: "/projects/project1.png", href: links.work },
  { name: "Project Two",   image: "/projects/project2.png", href: links.work },
  { name: "Project Three", image: "/projects/project3.png", href: links.work },
  { name: "Project Four",  image: "/projects/project4.png", href: links.work },
  { name: "Project Five",  image: "/projects/project5.png", href: links.work },
];

const allProjects = [...projects, ...projects];

export function WorkWrapper() {
  return (
    <main className="relative flex h-full w-full max-w-maxWidth grow flex-col justify-between mx-auto overflow-hidden">

      {/* Heading — explicitly black */}
      <div className="anime">
        <h2 className="work_heading mask" style={{ color: "#000000" }}>
          Recent <br /> Work
        </h2>
      </div>

      {/* Marquee track — right to left direction */}
      <div className="anime relative w-screen left-1/2 -translate-x-1/2 overflow-hidden py-4">
        <div
  className="flex gap-6 animate-projectMarqueeRTL hover:[animation-play-state:paused]"
  style={{ width: "max-content" }}
>
          {allProjects.map((project, i) => (
            <a
              key={`${project.name}-${i}`}
              href={project.href}
              className="group relative flex-shrink-0 w-[38vw] md:w-[28vw] lg:w-[22vw] overflow-hidden rounded-2xl bg-black/5 cursor-pointer"
              style={{ aspectRatio: "4/3" }}
            >
              <img
                src={project.image}
                alt={project.name}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="
                  flex items-center justify-center rounded-full
                  bg-white text-black font-bold text-base
                  w-0 h-0 opacity-0 scale-0
                  group-hover:w-28 group-hover:h-28 group-hover:opacity-100 group-hover:scale-100
                  transition-all duration-500 ease-out
                ">
                  View
                </div>
              </div>

              <div className="
                absolute bottom-4 left-4
                bg-white/90 text-black text-sm font-bold px-4 py-2 rounded-full
                translate-y-2 opacity-0
                group-hover:translate-y-0 group-hover:opacity-100
                transition-all duration-500 ease-out
              ">
                {project.name}
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* CTA */}
      <a href={links.work} className="work__cto anime">
        <div className="left">
          <svg width="21" height="6" viewBox="0 0 21 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.5 2V4H14.5V6L20.5 3L14.5 0V2H0.5Z" fill="#000000" />
          </svg>
        </div>
        <div className="center font-bold" style={{ color: "#000000" }}>
          view all work<span className="yellow__it"> .</span>
        </div>
        <div className="right">
          <svg width="21" height="6" viewBox="0 0 21 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.5 2V4H14.5V6L20.5 3L14.5 0V2H0.5Z" fill="#000000" />
          </svg>
        </div>
      </a>

    </main>
  );
}