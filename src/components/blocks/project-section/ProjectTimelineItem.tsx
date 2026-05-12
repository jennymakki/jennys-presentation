"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Trophy } from "lucide-react";
import { useEffect, useState } from "react";

import { ProjectCard } from "@/components/ui/ProjectCard";
import type { Project } from "@/data/projects";

type Chapter = {
  title: string;
  subtitle: string;
  vibe: string;
  image: string;
  reward: string;
  glow: string;
};

type Props = {
  project: Project;
  chapter: Chapter;
  index: number;
  isLast: boolean;
};

export default function ProjectTimelineItem({
  project,
  chapter,
  index,
  isLast,
}: Props) {
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        delay: index * 0.05,
        ease: "easeOut",
      }}
      className="relative will-change-transform"
    >
      {/* Timeline dot */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 -top-10 w-7 h-7 rounded-full bg-white shadow-xl items-center justify-center">
        <div className="w-3 h-3 rounded-full bg-[#2090C8]" />
      </div>

      {/* Chapter heading */}
      <div className="mb-12 text-center">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-white font-bold tracking-[0.25em] text-sm uppercase"
        >
          {chapter.title}
        </motion.p>

        <p className="text-cyan-100 text-lg mt-3">{chapter.subtitle}</p>
      </div>

      {/* Main card */}
      <motion.div
        whileHover={
          !isMobile
            ? {
                y: -6,
              }
            : {}
        }
        transition={{ duration: 0.3 }}
        className="
          relative overflow-hidden
          flex flex-col md:flex-row
          items-center justify-center gap-14
          px-8 py-16 rounded-[2rem]
          bg-white/10
          md:backdrop-blur-md
          border border-white/20
          shadow-[0_20px_60px_rgba(0,0,0,0.18)]
          will-change-transform
        "
      >
        {/* Background glow */}
        <div
          className="absolute inset-0 opacity-20 blur-xl"
          style={{
            background: chapter.glow,
          }}
        />

        {/* LEFT */}
        <div className="relative flex flex-col items-center max-w-md z-10">
          {/* Bubble */}
          <motion.div
            animate={
              !isMobile
                ? {
                    y: [0, -6, 0],
                  }
                : {}
            }
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              relative bg-white
              px-6 py-5 rounded-3xl
              shadow-xl text-gray-700
              text-center mb-6
              max-w-sm
              rotate-[-2deg]
              will-change-transform
            "
          >
            <p className="leading-relaxed font-medium">{chapter.vibe}</p>

            <div className="absolute left-1/2 -bottom-3 -translate-x-1/2 w-6 h-6 bg-white rotate-45" />
          </motion.div>

          {/* Image */}
          <motion.div
            whileHover={
              !isMobile
                ? {
                    rotate: 1,
                    y: -4,
                  }
                : {}
            }
            transition={{ duration: 0.3 }}
            className="relative will-change-transform"
          >
            {/* Image glow */}
            <div
              className="absolute inset-0 rounded-3xl blur-xl opacity-30"
              style={{
                background: chapter.glow,
              }}
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

            {/* Floating badge */}
            <motion.div
              animate={
                !isMobile
                  ? {
                      y: [0, -8, 0],
                    }
                  : {}
              }
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute -top-4 -right-4
                bg-white text-[#2090C8]
                px-4 py-2 rounded-full
                shadow-lg font-semibold
                text-sm
                flex items-center gap-2
                will-change-transform
              "
            >
              <Star size={16} />
              New Skill
            </motion.div>
          </motion.div>
        </div>

        {/* RIGHT */}
        <div className="w-full md:w-[45%] relative z-10">
          <ProjectCard project={project} />
        </div>

        {/* Reward */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="
  absolute bottom-1 left-1/2
  -translate-x-1/2
  z-50
  bg-white/15
  md:backdrop-blur-md
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

      {/* Bridge */}
      {!isLast && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center mt-16"
        >
          <p className="text-white/60 italic text-center max-w-md">
            Each project became a new step in learning, experimenting and
            building with more confidence.
          </p>

          <motion.div
            animate={
              !isMobile
                ? {
                    y: [0, 8, 0],
                  }
                : {}
            }
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mt-6 will-change-transform"
          >
            <div className="w-[2px] h-20 bg-white/20" />
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}
