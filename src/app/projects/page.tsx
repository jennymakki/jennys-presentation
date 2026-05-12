"use client";

import Header from "@/components/blocks/header";
import Footer from "@/components/blocks/footer";

import { Sparkles } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col bg-[#2090C8] overflow-hidden">
      <Header />

      <main className="flex-1">
        {/* HERO */}
        <section className="group relative min-h-[90vh] flex items-center justify-center bg-[#2090C8] overflow-hidden">
          {/* background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          <div className="absolute left-[-120px] bottom-[-120px] w-[300px] h-[300px] rounded-full bg-white/10 blur-3xl" />

          <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-center md:justify-start gap-10 px-6 md:px-16">
            {/* LEFT SIDE (avatar + bubble) */}
            <div className="flex flex-col items-center md:items-start order-1 md:order-none">
              {/* bubble */}
              <div
                className="
          relative
          min-w-[260px]
          max-w-[500px]
          h-[60px]
          flex items-center justify-center
          bg-white px-4 py-2 rounded-xl shadow-md
          text-sm text-gray-700 text-center
          transition-all duration-300
          hover:scale-105 hover:shadow-2xl
        "
              >
                Here are all my projects — built while learning, experimenting
                and improving step by step.
                <div className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-4 h-4 bg-white rotate-45" />
              </div>

              {/* avatar */}
              <div
                className="
          mt-2 ml-30
          transition-all duration-500
          hover:-translate-y-2 hover:rotate-1
        "
              >
                <Image src="/newjenny.png" alt="Hero" width={150} height={50} />
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div
              className="
        text-center md:text-left
        space-y-5
        max-w-xl
        order-2 md:order-none
        transition-all duration-500
        hover:-translate-y-1
      "
            >
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
                Welcome to browse through my
                <span className="block text-cyan-200">projects</span>
              </h1>

              <p className="text-white/80 text-lg leading-relaxed">
                A curated collection of projects where design and code meet in
                interactive systems.
              </p>

              <p className="text-sm italic text-white/60">
                Each project represents a step in my journey as a fullstack
                developer.
              </p>

              <div className="flex gap-4 justify-center md:justify-start pt-2 pb-10 text-white/60 text-sm">
                Scroll down into the archive ↓
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="relative py-28 px-6 md:px-16">
          {/* background glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#2090C8] via-[#176b94] to-[#0f4f6d]" />
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-300/10 blur-3xl rounded-full" />

          <div className="relative z-10 max-w-7xl mx-auto">
            {/* header */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur mb-6">
                <Sparkles size={14} className="text-white" />
                <p className="text-sm text-white/80 font-medium">
                  Project Archive
                </p>
              </div>

              <h2 className="text-4xl md:text-6xl font-black text-white">
                Explore the builds
              </h2>

              <p className="text-white/70 mt-5 max-w-2xl mx-auto">
                Each project is a snapshot of growth — from UI experiments to
                real-world systems.
              </p>
            </motion.div>

            {/* grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
              {projects.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: i * 0.05,
                  }}
                  whileHover={{
                    y: -6,
                    scale: 1.01,
                  }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#0f4f6d]">
        <Footer />
      </footer>
    </div>
  );
}
