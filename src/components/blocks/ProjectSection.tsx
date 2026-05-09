"use client";

import Jenny from "@/components/ui/Jenny";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import Button from "../ui/Button";

export default function ProjectSection() {
  const limitedProjects = projects.slice(0, 6);

  const chapters = [
    {
      title: "Chapter 01 — Exploration",
      subtitle: "Playing with UI & interaction",
      vibe: "We start simple — focusing on interaction ✨",
    },
    {
      title: "Chapter 02 — Architecture",
      subtitle: "Reusable components & structure",
      vibe: "Now we build structure & reusable systems 🧠",
    },
    {
      title: "Chapter 03 — Growth",
      subtitle: "Scaling UI systems",
      vibe: "Here things get more advanced 🚀",
    },
  ];

  return (
    <section
      id="projects"
      className="relative overflow-hidden py-28 px-6 md:px-16 bg-[#2090C8]"
    >

      <div className="relative z-10 flex flex-col items-center text-center mb-24">

        <h2 className="text-[#FFFFFF] font-bold text-4xl md:text-5xl">
          My Projects
        </h2>

        <p className="text-gray-200 mt-3 text-sm md:text-base max-w-xl">
          A narrative journey through my development — not just a list of work,
          but chapters of growth.
        </p>

      </div>

      {/* 📖 CHAPTER FLOW */}
      <div className="relative z-10 space-y-24 max-w-6xl mx-auto">

        {limitedProjects.map((project, index) => {
          const chapter = chapters[index % chapters.length];

          return (
            <div key={project.title}>

              {/* 📌 CHAPTER HEADER */}
              <div className="mb-10 text-center md:text-left">

                <p className="text-[#FF6F61] font-semibold tracking-widest text-sm uppercase">
                  {chapter.title}
                </p>

                <p className="text-gray-500 text-sm mt-1">
                  {chapter.subtitle}
                </p>

              </div>

              {/* 🎬 SCENE BLOCK */}
              <div
                className={`
                  flex flex-col md:flex-row items-center justify-center gap-12
                  px-6 py-14 rounded-3xl
                  bg-white/70
                  backdrop-blur-md
                  border border-[#2090C8]/10
                  transition-all duration-500
                  hover:bg-white/90
                  hover:shadow-2xl
                `}
              >

                {/* 🤖 JENNY NARRATOR */}
                <div className="flex flex-col items-center max-w-[220px]">

                  <div className="
                    relative bg-[#EBEBEB]
                    px-5 py-4 rounded-2xl
                    shadow-lg text-sm text-gray-700
                    text-center mb-4
                    transition-all duration-300
                    hover:scale-105 hover:shadow-2xl
                  ">

                    {chapter.vibe}

                    <div className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-4 h-4 bg-[#EBEBEB] rotate-45" />
                  </div>

                  <div className="
                    transition-transform duration-500
                    hover:-translate-y-2 hover:rotate-1
                  ">
                    <Jenny />
                  </div>

                </div>

                {/* 🟣 PROJECT CARD */}
                <div className="
                  w-full md:w-[55%]
                  transition-all duration-500
                  hover:-translate-y-2
                ">
                  <ProjectCard project={project} />
                </div>

              </div>

              {/* 🌑 CHAPTER SEPARATOR */}
              <div className="h-20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#2090C8]/30" />
              </div>

            </div>
          );
        })}

      </div>

      {/* 🔘 CTA */}
      <div className="flex justify-center mt-24 relative z-10">

        <Button
          variant="primary"
          onClick={() => {
            window.location.href = "/projects";
          }}
        >
          See All Projects
        </Button>

      </div>

    </section>
  );
}