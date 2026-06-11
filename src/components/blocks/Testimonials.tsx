"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote, Sparkles } from "lucide-react";

const testimonials = [
  {
    text: "Jenny is a pleasure to work with. She is attentive, solution-oriented, and highly adaptable, always bringing a positive mindset to new challenges. Her ability to combine efficiency with attention to detail consistently results in high-quality work. Throughout our collaboration, she demonstrated strong technical skills, reliability, and a genuine willingness to learn and contribute. It has been an excellent experience working with her.",
    author: "Sarah Hellström",
    role: "Supervisor at LAYR",
    image: "/testimonials/happy3.png",
  },
  {
    text: "It has been a pleasure working with Jenny. She brings a positive energy to the team, consistently demonstrates attention to detail, and is always focused on achieving results.",
    author: "Henrik Mattsson",
    role: "Project Collaborator",
    image: "/testimonials/happy2.png",
  },
  {
    text: "Working with Jenny has been incredibly inspiring. She brings outstanding organization, structure and creative energy to everything she does. Her eye for design elevates every project.",
    author: "Patrik Eriksson",
    role: "Project Collaborator",
    image: "/testimonials/happy1.png",
  },
];

export default function Testimonials() {
  return (
    <section
      className="
        relative overflow-hidden
        py-32 px-6 md:px-16
        bg-[linear-gradient(to_bottom,#ffffff,#f7fbff)]
      "
    >
      {/* BACKGROUND GLOWS */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#2090C8]/10 blur-3xl rounded-full" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-200/20 blur-3xl rounded-full" />

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center mb-24"
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="text-[#2090C8]" size={18} />

          <p className="uppercase tracking-[0.3em] text-sm text-[#2090C8] font-semibold">
            Testimonials
          </p>
        </div>

        <h2 className="text-4xl md:text-6xl font-black text-gray-900">
          What people say
        </h2>

        <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
          Feedback from collaborators and projects I’ve had the pleasure to work
          on.
        </p>
      </motion.div>

      {/* CONTENT */}
      <div className="relative z-10 space-y-24 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.author}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className={`
              flex flex-col md:flex-row items-center gap-12
              ${i % 2 === 1 ? "md:flex-row-reverse" : ""}
            `}
          >
            {/* AVATAR */}
            <div className="relative flex-shrink-0">
              {/* soft glow */}
              <div className="absolute inset-0 bg-[#2090C8]/10 blur-2xl rounded-full scale-110" />

              <div className="relative w-45 h-45 md:w-50 md:h-60 rounded-3xl overflow-hidden shadow-xl border border-white">
                <Image
                  src={t.image}
                  alt={t.author}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* QUOTE CARD */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4 }}
              className="
                relative max-w-xl w-full
                bg-white
                border border-gray-100
                rounded-3xl
                p-8 md:p-10
                shadow-[0_10px_40px_rgba(31,41,55,0.08)]
              "
            >
              {/* quote icon */}
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-[#2090C8]/10 rounded-full flex items-center justify-center">
                <Quote className="text-[#2090C8]" size={16} />
              </div>

              <p className="text-gray-700 text-lg leading-relaxed">
                “{t.text}”
              </p>

              {/* author */}
              <div className="mt-8">
                <div className="w-12 h-[2px] bg-[#2090C8]/30 mb-3" />
                <p className="font-bold text-gray-900">{t.author}</p>
                <p className="text-sm text-[#2090C8]">{t.role}</p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
