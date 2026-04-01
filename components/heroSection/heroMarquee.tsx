import React from "react";

export function HeroMarquee() {
  return (
    <div className="absolute inset-0 z-20 flex items-end justify-center pointer-events-none select-none">
      <img
        src="/Hero/image.png"
        alt="Soham Pachpute"
        className="
          h-[70vh] 
          w-full object-cover object-bottom

          md:w-auto md:object-contain md:h-[60vh]
          lg:h-[70vh]
        "
      />
    </div>
  );
}     