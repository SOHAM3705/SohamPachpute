import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { Header } from "./header";
import { useAppSelector } from "@/hooks/reduxHooks";
import { Footer } from "./contactSection/footer";
import Magentic from "./ui/magentic";
import { isDesktop } from "@/lib/utils";
import { links } from "@/data/data";

export function HeaderNavigation() {
  const { isMenuOpen, color } = useAppSelector((state) => state.menuReducer);
  const ease = CustomEase.create("custom", "M0,0 C0.52,0.01 0.16,1 1,1 ");

  const headerAnimation = useRef<gsap.core.Timeline | null>(null);
  const isNavDark = color === "Dark";
  const bgClass = isNavDark ? "darkGradient" : "lightGradient";
  const textClass = isNavDark ? "text-colorLight" : "text-colorDark";
  const borderClass = isNavDark ? "border-white/15" : "border-black/15";
  const hoverFill = isNavDark ? "bg-white/5" : "bg-black/5";
  const indexOpacity = isNavDark ? "text-white/30" : "text-black/30";
  const headerColor = isNavDark ? "Light" : "Dark";

  useEffect(() => {
    const flexHeight = isDesktop() ? "20vh" : "7vh";
    headerAnimation.current = gsap
      .timeline()
      .set("#headerNavigation", {
        display: "flex",
      })
      .to("#headerNavigation", {
        duration: 1,
        y: "0%",
        ease,
      })
      .fromTo(
        "#headerNavigation .rounded__div__up",
        {
          height: flexHeight,
        },
        {
          height: "0vh",
          duration: 1,
          ease,
        },
        "-=0.9",
      )
      .fromTo(
        ".headerAnimate",
        {
          y: "-20vh",
        },
        {
          y: "0vh",
          duration: 1,
          stagger: -0.08,
          ease,
        },
        "-=1.2",
      );

    return () => {
      headerAnimation.current?.kill();
    };
  }, []);

  const handleNavClick = () => {
    if (!headerAnimation.current) return;
    headerAnimation.current.reverse();
    headerAnimation.current.eventCallback("onReverseComplete", () => {
      gsap.set("#headerNavigation", { display: "none", y: "-100%" });
      headerAnimation.current?.kill();
      headerAnimation.current = null;
    });
  };

  useEffect(() => {
    if (isMenuOpen) {
      headerAnimation.current?.play();
    } else {
      headerAnimation.current?.reverse();
    }
  }, [isMenuOpen]);

  const headerData = [
    {
      name: "Projects",
      href: links.work,
    },
    {
      name: "About US",
      href: links.about,
    },
    {
      name: "Home",
      href: links.home,
    },
    {
      name: "Contact",
      href: links.contact,
    },
  ];

  return (
    <div
      id="headerNavigation"
      className={`fixed left-0 top-0 z-[6000] hidden h-full w-full -translate-y-full flex-col ${bgClass}`}
    >
      {/* Top bar */}
      <div className={`headerAnimate flex items-center justify-between px-12 py-10 border-b ${borderClass}`}>
        <Header mode="cross" className="" color={headerColor} />
      </div>

      {/* 2×2 Grid for Desktop, 1×4 Grid for Mobile */}
      <nav className="flex-1 grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2">
        {headerData.map((data, i) => (
          <div
            key={data.name}
            className={`
              headerAnimate group relative flex items-end p-6 md:p-10 overflow-hidden
              border-b ${borderClass}
              ${i % 2 === 0 ? `border-r ${borderClass}` : ""}
              ${i >= 2 ? "border-b-0 md:border-b" : ""}
              md:col-span-1 col-span-1
            `}
          >
            {/* Hover sweep */}
            <div className={`absolute inset-0 scale-y-0 origin-bottom ${hoverFill} transition-transform duration-500 ease-out group-hover:scale-y-100`} />

            {/* Wrap Magentic in a div with onClick */}
            <div onClick={handleNavClick}>
              <Magentic
                href={data.href}
                className={`relative z-10 font-bold leading-none ${textClass}`}
                style={{ fontSize: "clamp(24px, 5vw, 80px)" }}
                scrambleParams={{ text: data.name, chars: "-xx" }}
              >
                <span className="scrambleText block transition-transform duration-300 group-hover:translate-x-3">
                  {data.name}
                </span>
              </Magentic>
            </div>

            {/* Index number */}
            <span className={`absolute top-4 right-6 md:top-8 md:right-10 text-sm font-mono ${indexOpacity}`}>
              0{i + 1}
            </span>
          </div>
        ))}
      </nav>

      {/* Rounded div for GSAP animation */}
      <div className="absolute left-0 top-0 -z-40 flex h-full w-full flex-col pointer-events-none">
        <div className={`${bgClass} h-full w-full grow`} />
        <div className="rounded__div__up !relative z-50">
          <div className={`round__bg__up ${bgClass}`} />
        </div>
      </div>
    </div>
  );
}