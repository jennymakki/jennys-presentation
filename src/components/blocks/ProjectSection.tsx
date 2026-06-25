"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

import Button from "../ui/Button";
import type { Project } from "@/data/projects";

import ProjectTimelineItem from "./project-section/ProjectTimelineItem";

type ProjectSectionProps = {
  projects: Project[];
};

const chapters = [
  {
    title: "Chapter 01 — System Foundations",
    subtitle: "Understanding how modern applications are structured",
    vibe: "Learning how frontend, backend and data flow work together.",
    image: "/chapters/system-thinking.png",
    reward: "+ System Thinking Unlocked",
    glow: "linear-gradient(to bottom right, #22d3ee, #3b82f6)",
  },
  {
    title: "Chapter 02 — Fullstack Foundations",
    subtitle: "Authentication, APIs & application architecture",
    vibe: "Building real applications with frontend and backend integration.",
    image: "/chapters/fullstack-foundations.png",
    reward: "+ Fullstack Development Unlocked",
    glow: "linear-gradient(to bottom right, #a855f7, #6366f1)",
  },
  {
    title: "Chapter 03 — Real-world Applications",
    subtitle: "Complex features, data models & user-driven systems",
    vibe: "Moving from simple apps to production-like systems.",
    image: "/chapters/real-world-applications.png",
    reward: "+ Complex Systems & CMS Experience",
    glow: "linear-gradient(to bottom right, #fb923c, #ec4899)",
  },
  {
    title: "Chapter 04 — Interaction Design",
    subtitle: "Dynamic interfaces and user experience logic",
    vibe: "Making interfaces feel responsive, alive and intuitive.",
    image: "/chapters/interaction-design.png",
    reward: "+ Interaction Design Unlocked",
    glow: "linear-gradient(to bottom right, #f472b6, #fb7185)",
  },
  {
  title: "Chapter 05 — Content Systems",
  subtitle: "Scalable content architecture in modern web applications",
  vibe: "Exploring how structured content systems power large, dynamic applications.",
  image: "/chapters/content-systems.png",
  reward: "SSR • Component Architecture • Data Modeling",
  glow: "linear-gradient(135deg, #14532d, #0f766e)",
},
  {
    title: "Chapter 06 — Client Build",
    subtitle: "Real-world projects and production-ready delivery",
    vibe: "From learning to building for real users and clients.",
    image: "/chapters/author-site.png",
    reward: "+ Client Project Delivered",
    glow: "linear-gradient(to bottom right, #fbbf24, #fb7185)",
  },
];

export default function ProjectSection({
  projects,
}: ProjectSectionProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const stars = Array.from(
    { length: isMobile ? 10 : 24 },
    (_, i) => ({
      id: i,
      top: `${(i * 17) % 100}%`,
      left: `${(i * 23) % 100}%`,
    })
  );

  return (
    <section
      id="projects"
      className="
        relative overflow-hidden
        py-32 px-6 md:px-16
        bg-[radial-gradient(circle_at_top,#42b7f5,#2090C8,#176b94)]
      "
    >
      {/* Background blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 blur-xl rounded-full" />

      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-300/10 blur-xl rounded-full" />

      {/* Stars */}
      <div className="absolute inset-0 opacity-20">
        {stars.map((star) => (
          <div
            key={star.id}
            className="
              absolute w-1 h-1
              bg-white rounded-full
              md:animate-pulse
            "
            style={{
              top: star.top,
              left: star.left,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className="relative z-10 flex flex-col items-center text-center mb-32"
      >
        <div className="flex items-center gap-3 mb-4">
          <Sparkles className="text-yellow-300" />

          <p className="uppercase tracking-[0.3em] text-sm text-white/70">
            Interactive Developer Journey
          </p>
        </div>

        <h2 className="text-white font-black text-5xl md:text-7xl leading-tight">
          My Projects
        </h2>

        <p className="text-white/80 mt-6 text-lg max-w-2xl leading-relaxed">
          Not just projects — chapters of growth,
          experimentation, creativity and becoming
          a better developer through building.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="absolute left-1/2 top-0 h-full w-[2px] bg-white/10 hidden md:block" />

      {/* Timeline items */}
      <div className="relative z-10 space-y-40 max-w-6xl mx-auto">
        {projects.map((project, index) => {
          const chapter = chapters[index % chapters.length];

          return (
            <ProjectTimelineItem
              key={project.slug}
              project={project}
              chapter={chapter}
              index={index}
              isLast={index === projects.length - 1}
            />
          );
        })}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className="flex flex-col items-center mt-40 relative z-10"
      >
        <p className="uppercase tracking-[0.3em] text-white/60 text-sm mb-5">
          Chapter Complete
        </p>

        <h3 className="text-white text-3xl md:text-5xl font-black text-center max-w-2xl leading-tight mb-10">
          Continue exploring the full project archive
        </h3>

        <motion.div
          whileHover={
            !isMobile
              ? {
                  y: -2,
                }
              : {}
          }
          whileTap={{
            scale: 0.97,
          }}
          className="will-change-transform"
        >
          <Button
            variant="primary"
            onClick={() => {
              window.location.href = "/projects";
            }}
          >
            Explore All Projects →
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}