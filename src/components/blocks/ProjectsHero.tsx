"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Sparkles } from "lucide-react";

export default function ProjectsHero() {
  return (
    <section className="relative overflow-hidden py-20 px-6 bg-gradient-to-b from-[#2090C8] via-[#176b94] to-[#07111f]">
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-[250px_1fr] gap-16 items-center text-center lg:text-left">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="absolute top-[-120px] w-[280px] h-[500px] bg-white/20 blur-3xl rotate-12 rounded-full opacity-40" />
            <div className="absolute inset-0 bg-cyan-300/20 blur-3xl rounded-full scale-110" />

            {/* Speech bubble */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="absolute -top-16 left-1/2 -translate-x-1/2 z-20 max-w-[280px]"
            >
              <div className="relative bg-white text-gray-700 text-sm px-4 py-3 rounded-xl shadow-lg text-center">
                Welcome to check out my projects
                <div className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-3 h-3 bg-white rotate-45" />
              </div>
            </motion.div>

            <Image
              src="/projectsjenny.png"
              alt="Jenny avatar"
              width={200}
              height={200}
              className="relative z-10 object-contain drop-shadow-[0_0_60px_rgba(255,255,255,0.25)]"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center lg:items-start"
          >

            <div className="flex items-center justify-center gap-3 mb-4">
          <Sparkles className="text-yellow-300" size={18} />

          <p className="uppercase tracking-[0.3em] text-sm text-white/70">
            PROJECTS
          </p>
        </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
              Designing, Developing, Experimenting
            </h1>

            <p className="text-white/80 text-lg leading-relaxed mt-4">
              A story-driven collection of projects exploring UI systems,
              interaction design, fullstack architecture and real-world
              development.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
