"use client";

import { useState } from "react";
import Button from "../ui/Button";
import Jenny from "../Jenny/Jenny";

export default function Hero() {
  const [mood, setMood] = useState<"intro" | "projects" | "contact">("intro");

  const messages = {
    intro: "Welcome to my Portfolio!",
    projects: "Want to see what I built?",
    contact: "Let’s build something together!",
  };

  return (
    <section className="group relative min-h-[90vh] flex items-center justify-center bg-[#2090C8] overflow-hidden">
      <div
        className="
          absolute inset-0
          bg-gradient-to-br from-white/5 via-transparent to-transparent
          opacity-0 group-hover:opacity-100
          transition-opacity duration-700
        "
      />

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
          transition-all duration-700
          group-hover:scale-110
          group-hover:rotate-6
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

      <div className="absolute left-[-120px] bottom-[-120px] w-[300px] h-[300px] rounded-full bg-white/10 blur-3xl" />

      <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-center md:justify-start gap-10 px-6 md:px-16">
        <div className="flex flex-col items-center md:items-start order-1 md:order-none">
          <div
            className="
    relative
    min-w-[260px]
    h-[60px]
    flex items-center justify-center
    bg-white px-4 py-2 rounded-xl shadow-md
    text-sm text-gray-700 text-center
    transition-all duration-300
    hover:scale-105 hover:shadow-2xl
  "
          >
            {messages[mood]}

            <div className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-4 h-4 bg-white rotate-45" />
          </div>

          <div
            className="
              mt-2
              transition-all duration-500
              hover:-translate-y-2 hover:rotate-1
            "
          >
            <Jenny />
          </div>
        </div>

        <div
          className="
            text-center md:text-left
            space-y-5
            max-w-2xl
            order-2 md:order-none
            transition-all duration-500
            hover:-translate-y-1
          "
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
            I build component-driven <br /> web experiences
          </h1>

          <p className="text-white/80 text-lg leading-relaxed">
            I love turning ideas into interactive systems where design and code
            work together — and where the process is just as fun as the result.
          </p>

          <p className="text-sm italic text-white/60">
            For me, programming is a creative space where structure, collaboration,
            and experimentation meet.
          </p>

          <div className="flex gap-4 justify-center md:justify-start pt-2 pb-10">
            <Button
              variant="primary"
              onMouseEnter={() => setMood("projects")}
              onMouseLeave={() => setMood("intro")}
              onClick={() => {
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="
                transition-all duration-300
                hover:scale-105
                hover:-translate-y-1
                hover:shadow-2xl
              "
            >
              View Projects
            </Button>

            <Button
              variant="secondary"
              onMouseEnter={() => setMood("contact")}
              onMouseLeave={() => setMood("intro")}
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="
                transition-all duration-300
                hover:scale-105
                hover:-translate-y-1
                hover:shadow-2xl
              "
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
