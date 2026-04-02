import React from "react";
import Magentic from "@/components/ui/magentic";
import { Header } from "@/components/header";
import { Bulge } from "../bulge";

export function WorkSection({
  index,
  item,
  color,
  length,
}: {
  index: number;
  item: {
    title: React.JSX.Element;
    navTitle: string;
    description: string | React.JSX.Element;
    link: string;
    imageLink: string;
    tech?: string;
  };
  color: "Dark" | "Light";
  length: number;
}) {
  return (
    <div
      className={`section s${index} ${
        color === "Dark" ? "lightGradient" : "darkGradient"
      } text-color${color}`}
      key={item.link}
    >
      <Header color={color} />
      <Bulge type={color} />

      {/* Main content container */}
      <div className="flex h-[100dvh] w-full items-center px-4 sm:px-8 md:px-paddingX pb-20">
        <div className="fullpage__slide mx-auto max-w-maxWidth w-full flex flex-col md:flex-row items-center gap-8 md:gap-12">

          {/* Project image - with blur effect */}
          <a
            className="image image--works anime rounded-3xl w-full md:w-1/2 h-64 md:h-96 flex-shrink-0 relative group overflow-hidden"
            target="_blank"
            href={item.link}
            rel="noreferrer"
            style={{
              background: `url(${item.imageLink}) center center / contain no-repeat`,
            }}
          >
            {/* Blur overlay - black for dark pages, white for light pages */}
            <div
              className={`absolute inset-0 backdrop-blur-sm ${
                color === "Dark" ? "bg-black/30" : "bg-white/30"
              } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
            />
            <div className="image__over">
              <div className="image__cover">1</div>
              <div className="image__cover">2</div>
            </div>
            <div className="page-num anime">
              <div className="mask absolute left-0 top-0 -z-10 h-full w-full rounded-2xl bg-colorSecondaryDark" />
              <p className="p-8 text-colorLight">0{index + 1}</p>
            </div>
          </a>

          {/* Text block - responsive alignment */}
          <div className="title w-full md:w-1/2 flex flex-col justify-center gap-4 md:gap-6">
            {/* Heading */}
            <h2 className="title__text js-letter anime mask font-bold tracking-tight text-2xl md:text-3xl">
              {item.title}
            </h2>

            {/* Tech stack pill */}
            {item.tech && (
              <p className="js-letter anime mt-2 mb-1 text-[0.65rem] sm:text-xs uppercase tracking-widest font-mono opacity-60 text-color${color}">
                {item.tech}
              </p>
            )}

            {/* Description */}
            <p className="title__lead js-letter anime leading-relaxed text-sm sm:text-base">
              {item.description}
            </p>

            {/* CTA button */}
            <div className="btn-wrap js-letter anime mt-4">
              <Magentic
                strength={50}
                className={`btn text-color${
                  color === "Dark" ? "Light" : "Dark"
                } bg-color${color} mask inline-flex items-center`}
                href={item.link}
                target="_blank"
                scrambleParams={{ text: "Show Me", chars: "-x" }}
              >
                <p className="shapka flex items-center">
                  <span className="scrambleText">Show Me</span>
                  <svg
                    className="ml-4 inline w-[0.8em] -rotate-[75deg] text-inherit"
                    viewBox="0 0 14 14"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>arrow-up-right</title>
                    <g stroke="none" strokeWidth="2" fill="none" fillRule="evenodd">
                      <g
                        transform="translate(-1019.000000, -279.000000)"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <g transform="translate(1026.000000, 286.000000) rotate(90.000000) translate(-1026.000000, -286.000000) translate(1020.000000, 280.000000)">
                          <polyline points="2.76923077 0 12 0 12 9.23076923" />
                          <line x1="12" y1="0" x2="0" y2="12" />
                        </g>
                      </g>
                    </g>
                  </svg>
                </p>
              </Magentic>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}