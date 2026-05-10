"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ui/ProjectCard";
import Button from "../ui/Button";
import type { Project } from "@/data/projects";
import Image from "next/image";
import { Sparkles, Star, Trophy } from "lucide-react";

type ProjectSectionProps = {
  projects: Project[];
};

export default function ProjectSection({
  projects,
}: ProjectSectionProps) {
  const chapters = [
    {
      title: "Chapter 01 — System Thinking",
      subtitle: "Designing scalable UI architecture",
      vibe: "Building systems before building screens.",
      image: "/chapters/system-thinking.png",
      reward: "+ UI Architecture Unlocked",
      glow: "from-cyan-400 to-blue-500",
    },
    {
      title: "Chapter 02 — Fullstack Foundations",
      subtitle: "Data, authentication & user flows",
      vibe: "Frontend finally meets real backend logic.",
      image: "/chapters/fullstack-foundations.png",
      reward: "+ Auth & APIs Mastered",
      glow: "from-purple-400 to-indigo-500",
    },
    {
      title: "Chapter 03 — Real-world Applications",
      subtitle: "APIs, booking systems & complex logic",
      vibe: "Things become more production-like.",
      image: "/chapters/real-world-applications.png",
      reward: "+ Complex Systems Built",
      glow: "from-orange-400 to-pink-500",
    },
    {
      title: "Chapter 04 — Interaction Design",
      subtitle: "Game logic & dynamic UI feedback",
      vibe: "Interfaces become playful and alive.",
      image: "/chapters/interaction-design.png",
      reward: "+ Interaction Design Unlocked",
      glow: "from-pink-400 to-rose-500",
    },
    {
      title: "Chapter 05 — Content Systems",
      subtitle: "Server-side rendering & structured content",
      vibe: "Learning how content scales beautifully.",
      image: "/chapters/content-systems.png",
      reward: "+ SSR & CMS Experience",
      glow: "from-emerald-400 to-teal-500",
    },
    {
      title: "Chapter 06 — Fundamentals",
      subtitle: "Core frontend mastery & DOM logic",
      vibe: "Back to where everything started.",
      image: "/chapters/fundamentals.gif",
      reward: "+ Frontend Core Complete",
      glow: "from-yellow-400 to-orange-500",
    },
  ];

  return (
    <section
      id="projects"
      className="
        relative overflow-hidden
        py-32 px-6 md:px-16
        bg-[radial-gradient(circle_at_top,#42b7f5,#2090C8,#176b94)]
      "
    >
      <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 blur-3xl rounded-full" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-300/10 blur-3xl rounded-full" />

      <div className="absolute inset-0 opacity-20">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
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
          Not just projects — chapters of growth, experimentation,
          creativity and becoming a better developer through building.
        </p>
      </motion.div>

      <div className="absolute left-1/2 top-0 h-full w-[2px] bg-white/10 hidden md:block" />

      <div className="relative z-10 space-y-40 max-w-6xl mx-auto">
        {projects.map((project, index) => {
          const chapter = chapters[index % chapters.length];

          return (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 120 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                delay: index * 0.08,
              }}
              className="relative"
            >
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 -top-10 w-7 h-7 rounded-full bg-white shadow-2xl items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-[#2090C8]" />
              </div>

              <div className="mb-12 text-center">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-white font-bold tracking-[0.25em] text-sm uppercase"
                >
                  {chapter.title}
                </motion.p>

                <p className="text-cyan-100 text-lg mt-3">
                  {chapter.subtitle}
                </p>
              </div>

              <motion.div
                whileHover={{
                  y: -8,
                }}
                transition={{ duration: 0.4 }}
                className="
                  relative overflow-hidden
                  flex flex-col md:flex-row items-center justify-center gap-14
                  px-8 py-16 rounded-[2rem]
                  bg-white/10
                  backdrop-blur-xl
                  border border-white/20
                  shadow-[0_20px_80px_rgba(0,0,0,0.2)]
                "
              >
                <div
                  className={`
                    absolute inset-0 opacity-20 blur-3xl
                    bg-gradient-to-br ${chapter.glow}
                  `}
                />

                <div className="relative flex flex-col items-center max-w-md z-10">
                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                    }}
                    className="
                      relative bg-white
                      px-6 py-5 rounded-3xl
                      shadow-2xl text-gray-700
                      text-center mb-6
                      max-w-sm
                      rotate-[-2deg]
                    "
                  >
                    <p className="leading-relaxed font-medium">
                      {chapter.vibe}
                    </p>

                    <div className="absolute left-1/2 -bottom-3 -translate-x-1/2 w-6 h-6 bg-white rotate-45" />
                  </motion.div>

                  <motion.div
                    whileHover={{
                      rotate: 2,
                      scale: 1.03,
                    }}
                    transition={{ duration: 0.4 }}
                    className="relative"
                  >
                    <div
                      className={`
                        absolute inset-0 rounded-3xl blur-2xl opacity-40
                        bg-gradient-to-br ${chapter.glow}
                      `}
                    />

                    <Image
                      src={chapter.image}
                      alt={chapter.title}
                      width={800}
                      height={900}
                      className="
                        relative rounded-3xl
                        object-cover
                        w-full h-auto
                        shadow-2xl
                      "
                    />

                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                      }}
                      className="
                        absolute -top-4 -right-4
                        bg-white text-[#2090C8]
                        px-4 py-2 rounded-full
                        shadow-xl font-semibold
                        text-sm
                        flex items-center gap-2
                      "
                    >
                      <Star size={16} />
                      New Skill
                    </motion.div>
                  </motion.div>
                </div>

                <motion.div
                  whileHover={{
                    rotateX: 2,
                    rotateY: -2,
                  }}
                  transition={{ duration: 0.4 }}
                  className="w-full md:w-[45%] relative z-10"
                >
                  <ProjectCard project={project} />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="
                    absolute bottom-4 left-1/2
                    -translate-x-1/2
                    bg-white/20
                    backdrop-blur-lg
                    border border-white/20
                    text-white
                    px-5 py-3 rounded-full
                    text-sm font-medium
                    flex items-center gap-2
                  "
                >
                  <Trophy size={16} />
                  {chapter.reward}
                </motion.div>
              </motion.div>

              {index !== projects.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-col items-center mt-16"
                >
                  <p className="text-white/60 italic text-center max-w-md">
                    The projects became more ambitious as the journey
                    continued...
                  </p>

                  <motion.div
                    animate={{
                      y: [0, 10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="mt-6"
                  >
                    <div className="w-[2px] h-20 bg-white/20" />
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center mt-40 relative z-10"
      >
        <p className="uppercase tracking-[0.3em] text-white/60 text-sm mb-5">
          Chapter Complete
        </p>

        <h3 className="text-white text-3xl md:text-5xl font-black text-center max-w-2xl leading-tight mb-10">
          Continue exploring the full project archive
        </h3>

        <motion.div
          whileHover={{
            scale: 1.06,
          }}
          whileTap={{
            scale: 0.96,
          }}
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