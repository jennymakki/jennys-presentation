"use client";

import { useEffect, useState } from "react";
import Button from "./Button";
import Jenny from "./Jenny";

export default function Hero() {
  const [mood, setMood] = useState("intro");

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setMood("scroll");
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-[#2090C8] overflow-hidden">
      <div
        className="
        hidden md:block
        absolute 
        right-[-80px] md:right-[-220px] 
        top-1/2 -translate-y-1/2 
        w-[320px] md:w-[650px] 
        h-[320px] md:h-[650px]
        opacity-70 md:opacity-100
        z-0
        pointer-events-none
      "
      >
        <div
          className="w-full h-full blur-sm"
          style={{
            backgroundColor: "rgba(255,255,255,0.2)",
            clipPath:
              "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
          }}
        />
      </div>

      <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-center md:justify-between gap-10 px-6 md:px-16">
        <div className="flex flex-col items-center md:items-start order-1 md:order-none">
          <div className="relative bg-white px-4 py-2 rounded-xl shadow-md text-sm text-gray-700">
            Welcome to my Portfolio!
            <div className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-4 h-4 bg-white rotate-45" />
          </div>

          <div className="mt-2">
            <Jenny />
          </div>
        </div>

        <div className="text-center md:text-left space-y-5 max-w-2xl order-2 md:order-none">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
            I build component-driven <br /> web experiences
          </h1>

          <p className="text-white/80 text-lg">
            I love turning ideas into interactive systems where design and code
            work together — and where the process is just as fun as the result.
          </p>

          <p className="text-sm italic text-white/60">
            For me, frontend is a creative space where structure, collaboration,
            and experimentation meet.
          </p>

          <div className="flex gap-4 justify-center md:justify-start pt-2 pb-10">
            <Button
              variant="primary"
              onClick={() => {
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Projects
            </Button>

            <Button
              variant="secondary"
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
