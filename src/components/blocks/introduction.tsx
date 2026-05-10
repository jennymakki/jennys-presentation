"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import { BookOpen, Sparkles, Star, Trophy } from "lucide-react";

export default function Introduction() {
  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    top: `${(i * 17) % 100}%`,
    left: `${(i * 31) % 100}%`,
  }));

  return (
    <section
      className="
        relative overflow-hidden
        py-32 px-6 md:px-16
        bg-[radial-gradient(circle_at_top,#2090C8,#2090C8,#42b7f5)]
      "
    >
      {/* Glow background */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 blur-3xl rounded-full" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-300/10 blur-3xl rounded-full" />

      {/* particles */}
      <div className="absolute inset-0 opacity-20">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{ top: p.top, left: p.left }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center space-y-20">

        {/* HEADER TAG */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 text-white/80 uppercase tracking-[0.3em] text-sm"
        >
          <Sparkles size={16} />
          Developer Origin Story
        </motion.div>

        {/* IDENTITY CARD */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative"
        >
          {/* glow */}
          <div className="absolute inset-0 flex justify-center">
            <div className="w-56 h-56 bg-white/20 blur-3xl rounded-full" />
          </div>

          <div className="
            relative flex items-center gap-5
            bg-white/10 backdrop-blur-xl
            border border-white/20
            shadow-2xl
            rounded-3xl px-6 py-5
          ">
            <div className="relative w-50 h-50 rounded-2xl overflow-hidden">
              <Image
                src="/JennyMakki.png"
                alt="Jenny"
                fill
                className="object-cover"
              />
            </div>

            <div className="text-left">
              <p className="text-white font-semibold">Jenny Makki</p>
              <p className="text-cyan-100 text-sm">Full Stack Developer</p>
            </div>

            <div className="ml-auto bg-white/20 px-3 py-2 rounded-full text-xs text-white flex items-center gap-2">
              <Star size={14} />
              Builder Mode
            </div>
          </div>
        </motion.div>

        {/* STORY */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-3xl space-y-6"
        >
          <div className="
            inline-flex gap-2
            bg-white/10 text-white
            px-5 py-2 rounded-full
            text-sm font-semibold
            border border-white/20
          ">
            <BookOpen size={14} />
            Chapter 00 — Origin Story
          </div>

          <h2 className="text-white text-4xl md:text-5xl font-black leading-tight">
            I build systems that start with{" "}
            <span className="text-cyan-200">curiosity</span>.
          </h2>

          <p className="text-white/80 text-lg leading-relaxed">
            I didn’t start as a developer — I started as someone fascinated by
            how digital experiences come alive.
          </p>

          <p className="text-white/70 text-lg leading-relaxed">
            Over time, that curiosity turned into experimentation, and
            experimentation turned into structured thinking.
          </p>

          <p className="text-white/60 text-lg leading-relaxed">
            Today I think in systems — not pages. In interactions — not screens.
            In experiences — not components.
          </p>
        </motion.div>

        {/* SKILLS (upgraded cards like project style) */}
        <div className="w-full max-w-5xl space-y-6">
          <div className="flex items-center justify-center gap-2 text-white/80 font-semibold">
            <Sparkles size={16} />
            My Capabilities
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {Object.entries(skills).map(([category, items]) => (
              <motion.div
                key={category}
                whileHover={{ y: -6 }}
                className="
                  relative overflow-hidden
                  bg-white/10 backdrop-blur-xl
                  border border-white/20
                  rounded-2xl p-6
                  shadow-xl
                "
              >
                <div className="absolute inset-0 bg-white/5 opacity-0 hover:opacity-100 transition" />

                <h4 className="text-cyan-200 font-semibold mb-3 capitalize">
                  {category}
                </h4>

                <p className="text-white/70 text-sm leading-relaxed">
                  {items.join(" • ")}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* QUOTE (upgrade like reward system) */}
        <motion.div
          whileInView={{ scale: [0.95, 1] }}
          className="
            relative max-w-2xl
            bg-white/10 backdrop-blur-xl
            border border-white/20
            rounded-2xl p-8
          "
        >
          <Trophy className="text-yellow-300 mx-auto mb-4" />

          <p className="italic text-white/80 text-lg">
            “I don’t just build features — I build systems where everything connects.”
          </p>
        </motion.div>
      </div>
    </section>
  );
}