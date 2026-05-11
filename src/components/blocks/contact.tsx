"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

import ContactForm from "../ui/ContactForm";
import ContactLinks from "../ui/ContactLinks";

export default function Contact() {
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
        className="text-center mb-20 relative z-10"
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="text-[#2090C8]" size={18} />

          <p className="uppercase tracking-[0.3em] text-sm text-[#2090C8] font-semibold">
            Contact
          </p>
        </div>

        <h2 className="text-4xl md:text-6xl font-black text-gray-900 mt-4">
          Let’s work together
        </h2>
      </motion.div>

      {/* CARD */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="
          relative z-10
          max-w-5xl mx-auto
          grid md:grid-cols-2 gap-12
          px-8 py-12
          rounded-[2rem]

          bg-[radial-gradient(circle_at_top,#42b7f5,#2090C8,#176b94)]
          backdrop-blur-xl
          border border-[#2090C8]/20
          shadow-[0_20px_80px_rgba(0,0,0,0.15)]
        "
      >
        <ContactForm />
        <ContactLinks />
      </motion.div>
    </section>
  );
}