"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles } from "lucide-react";

export default function CurrentStatus() {
  return (
    <section
      className="
        relative overflow-hidden
        py-32 px-6 md:px-16
        bg-[radial-gradient(circle_at_top,#42b7f5,#2090C8,#176b94)]
      "
    >
      {/* BACKGROUND */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 blur-3xl rounded-full" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-300/10 blur-3xl rounded-full" />

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="relative z-10 text-center mb-20"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <Sparkles className="text-yellow-300" size={18} />

          <p className="uppercase tracking-[0.3em] text-sm text-white/70">
            Now
          </p>
        </div>

        <h2 className="text-white text-4xl md:text-6xl font-black mt-4">
          Currently working on
        </h2>
      </motion.div>

      {/* CONTENT CARD */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="
          relative z-10
          max-w-5xl mx-auto
          flex flex-col md:flex-row
          items-center gap-14
          px-8 py-16
          rounded-[2rem]
          bg-white/10
          backdrop-blur-xl
          border border-white/20
          shadow-[0_20px_80px_rgba(0,0,0,0.25)]
        "
      >
        {/* FULL BODY CHARACTER */}
        <div className="hidden md:block relative flex-shrink-0">
          {/* glow */}
          <div className="absolute inset-0 bg-white/20 blur-3xl rounded-full scale-110" />

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="relative w-56 md:w-72 h-auto"
          >
            <Image
              src="/newjenny.png"
              alt="Jenny full body"
              width={150}
              height={200}
              className="object-contain drop-shadow-2xl ml-25"
            />
          </motion.div>
        </div>

        {/* SPEECH BUBBLE */}
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ duration: 0.4 }}
          className="
            relative max-w-xl w-full
            bg-white
            rounded-3xl
            p-8 md:p-10
            shadow-[0_20px_80px_rgba(0,0,0,0.15)]
          "
        >
          <p className="text-black/90 text-lg leading-relaxed">
            I’m currently doing my internship at{" "}
            <span className="font-semibold text-[#2090C8]">LAYR</span>, where
            I’m building their B2B platform with a focus on scalable frontend
            architecture and clean UI systems.
          </p>
          <p className="text-black/80 text-lg leading-relaxed mt-4">
            Alongside this, I’m improving my React skills — especially component
            design, reusable UI patterns, and building consistent design systems
            that scale.
          </p>
          <p className="text-black/80 text-lg leading-relaxed mt-4">
            My focus is growing as a frontend developer where structure,
            usability and visual clarity meet.
          </p>
          {/* accent line */}
          <div className="mt-8 w-16 h-[2px] bg-[#2090C8]/40" />
          {/* speech tail */}
          <div className="hidden md:block absolute left-[-6px] top-1/2 -translate-y-1/2 w-5 h-5 rotate-45 bg-white" />{" "}
        </motion.div>
      </motion.div>
    </section>
  );
}
