"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import { BookOpen, Sparkles, Trophy } from "lucide-react";

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
        bg-[linear-gradient(to_bottom,#ffffff,#f7fbff)]
      "
    >
      {/* Background glows */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#2090C8]/10 blur-3xl rounded-full" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-200/20 blur-3xl rounded-full" />

      {/* Particles */}
      <div className="absolute inset-0 opacity-40">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute w-1 h-1 bg-[#2090C8]/20 rounded-full animate-pulse"
            style={{
              top: p.top,
              left: p.left,
            }}
          />
        ))}
      </div>


      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center space-y-10">

        {/* PROFILE CARD */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-4xl"
        >
          {/* glow */}
          <div className="absolute inset-0 flex justify-center">
            <div className="w-[500px] h-[300px] bg-[#2090C8]/10 blur-3xl rounded-full" />
          </div>

          <div
            className="
              relative overflow-hidden
              bg-white/80 backdrop-blur-2xl
              border border-white
              shadow-[0_20px_80px_rgba(31,41,55,0.12)]
              rounded-[2rem]
              px-8 md:px-12 py-10
              flex flex-col md:flex-row
              items-center gap-10
            "
          >
            {/* IMAGE */}
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 rounded-full bg-[#2090C8]/20 blur-2xl scale-110" />

              <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-[2rem] overflow-hidden shadow-2xl">
                <Image
                  src="/JennyMakki.png"
                  alt="Jenny Makki"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* TEXT */}
            <div className="flex-1 text-center md:text-left">
              <p className="text-[#2090C8] font-semibold uppercase tracking-[0.25em] text-sm mb-4">
                Full Stack Developer
              </p>

              <h2 className="text-3xl md:text-2xl font-black text-gray-900 leading-tight mb-6">
                Building digital experiences through{" "}
                <span className="text-[#2090C8]">creativity</span>
              </h2>

              <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
                <p>
                  My journey into tech started with curiosity — a fascination
                  for how ideas can become interactive experiences.
                </p>

                <p>
                  What began as experimentation quickly turned into a passion
                  for building things where design, structure and
                  problem-solving come together.
                </p>

                <p>
                  I love programming because it feels limitless — a creative
                  space where ideas can grow into experiences that are both
                  meaningful and fun to build.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* SKILLS */}
        <div className="w-full max-w-5xl space-y-8">
          <div className="flex items-center justify-center gap-2 text-gray-800 font-semibold">
            <Sparkles size={16} className="text-[#2090C8]" />
            My Capabilities
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {Object.entries(skills).map(([category, items]) => (
              <motion.div
                key={category}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                transition={{ duration: 0.3 }}
                className="
                  group relative overflow-hidden
                  rounded-3xl
                  border border-[#2090C8]/10
                  bg-white
                  p-6
                  shadow-[0_10px_40px_rgba(31,41,55,0.08)]
                "
              >
                {/* Top glow */}
                <div
                  className="
                    absolute top-0 left-0
                    w-full h-1
                    bg-gradient-to-r
                    from-[#2090C8]
                    to-cyan-400
                  "
                />

                {/* Hover glow */}
                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-br
                    from-[#2090C8]/5
                    to-transparent
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                  "
                />

                <div className="relative z-10">
                  {/* Badge */}
                  <div
                    className="
                      inline-flex items-center gap-2
                      bg-[#2090C8]/10
                      text-[#2090C8]
                      px-3 py-1
                      rounded-full
                      text-xs font-semibold
                      mb-5
                    "
                  >
                    <Sparkles size={12} />
                    {category}
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="
                          px-3 py-2
                          rounded-full
                          bg-gray-100
                          text-gray-700
                          text-sm
                          font-medium
                        "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
