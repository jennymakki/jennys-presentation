"use client";

import Jenny from "@/components/Jenny/Jenny";
import { ProjectCard } from "@/components/ui/ProjectCard";
import Button from "../ui/Button";
import type { Project } from "@/data/projects";

type ProjectSectionProps = {
  projects: Project[];
};

export default function ProjectSection({ projects }: ProjectSectionProps) {
  const chapters = [
    {
      title: "Chapter 01 — System Thinking",
      subtitle: "Designing scalable UI architecture",
      vibe: "We start with structure — building a full UI system",
    },
    {
      title: "Chapter 02 — Fullstack Foundations",
      subtitle: "Data, authentication & user flows",
      vibe: "Now we connect frontend with backend systems",
    },
    {
      title: "Chapter 03 — Real-world Applications",
      subtitle: "APIs, booking systems & complex logic",
      vibe: "We step into production-like applications",
    },
    {
      title: "Chapter 04 — Interaction Design",
      subtitle: "Game logic & dynamic UI feedback",
      vibe: "Now things become playful and interactive",
    },
    {
      title: "Chapter 05 — Content Systems",
      subtitle: "Server-side rendering & structured content",
      vibe: "We build structured learning experiences",
    },
    {
      title: "Chapter 06 — Fundamentals",
      subtitle: "Core frontend mastery & DOM logic",
      vibe: "We end where it all begins — the fundamentals",
    },
  ];

  return (
    <section
      id="projects"
      className="relative overflow-hidden py-28 px-6 md:px-16 bg-[#2090C8]"
    >
      <div className="relative z-10 flex flex-col items-center text-center mb-24">
        <h2 className="text-white font-bold text-3xl md:text-4xl">
          My Projects
        </h2>

        <p className="text-gray-200 mt-3 text-sm md:text-lg max-w-xl">
          A narrative journey through my development — not just a list of work,
          but chapters of growth.
        </p>
      </div>

      <div className="relative z-10 space-y-24 max-w-6xl mx-auto">
        {projects.map((project, index) => {
          const chapter = chapters[index % chapters.length];

          return (
            <div key={project.slug}>
              <div className="mb-10 text-center md:text-left">
                <p className="text-white font-semibold tracking-widest text-lg uppercase">
                  {chapter.title}
                </p>

                <p className="text-gray-200 text-base mt-1">
                  {chapter.subtitle}
                </p>
              </div>

              <div className="
                flex flex-col md:flex-row items-center justify-center gap-12
                px-6 py-14 rounded-3xl
                bg-white/70
                backdrop-blur-md
                border border-[#2090C8]/10
                transition-all duration-500
                hover:bg-white/90
                hover:shadow-2xl
              ">
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

                  <div className="transition-transform duration-500 hover:-translate-y-2 hover:rotate-1">
                    <Jenny />
                  </div>
                </div>

                <div className="w-full md:w-[45%] transition-all duration-500 hover:-translate-y-2">
                  <ProjectCard project={project} />
                </div>
              </div>

              <div className="h-20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white/30" />
              </div>
            </div>
          );
        })}
      </div>

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