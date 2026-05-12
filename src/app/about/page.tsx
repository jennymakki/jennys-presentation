"use client";

import Footer from "@/components/blocks/footer";
import Image from "next/image";
import { motion } from "framer-motion";
import Contact from "@/components/blocks/contact";

import { Sparkles } from "lucide-react";

export default function About() {
  return (
<div className="relative min-h-screen bg-[#2090C8] font-roboto overflow-x-hidden">
          {/* blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 blur-3xl rounded-full" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-300/10 blur-3xl rounded-full" />

      <main className="relative z-10 max-w-5xl mx-auto px-6 py-24 space-y-28">
        {/* HERO */}
        <section className="text-center space-y-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="text-yellow-300" size={18} />

            <p className="uppercase tracking-[0.3em] text-sm text-white/70">
              About me
            </p>
          </div>

          {/* MAIN HEADING */}
          <h1 className="text-5xl md:text-6xl font-black leading-tight text-white">
            I build things that feel personal
          </h1>

          {/* IMAGE ROW */}
          <div className="flex flex-col md:flex-row gap-6 items-center justify-center pt-4">
            <ImageBubble src="/silly1.png" rotate="-3deg" />
            <ImageBubble src="/silly2.png" rotate="2deg" />
            <ImageBubble src="/silly3.png" rotate="-1deg" />
          </div>

          {/* DESCRIPTION */}
          <p className="text-white/70 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            What I love most about programming is how creative it is. There is
            no limit — only ideas waiting to be built, animated, and improved.
          </p>
        </section>
        {/* FLOATING IMAGE + TEXT */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, rotate: -2, y: 20 }}
            whileInView={{ opacity: 1, rotate: 0, y: 0 }}
            transition={{ duration: 0.7 }}
            className="w-64 md:w-80 mx-auto rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/JennyMakki.png"
              alt="me"
              width={400}
              height={400}
              className="object-cover"
            />
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-white max-w-md space-y-4 mx-auto md:mx-0"
          >
            <h2 className="text-2xl font-bold tracking-tight">My approach</h2>
            <p className="text-white/80 leading-relaxed">
              I like building interfaces that feel thoughtful and intentional.
              Not just functional — but clear, structured, and pleasant to use.
              I care just as much about how something works under the surface as
              how it looks on the screen.
            </p>

            <p className="text-white/70 leading-relaxed">
              For me, design and development are deeply connected. I enjoy
              working with React, building reusable components, and thinking in
              systems rather than single pages.
            </p>

            <p className="text-white/70 leading-relaxed">
              Small details matter to me: spacing, hierarchy, and how a user
              naturally moves through a page — but also how clean and
              maintainable the code is behind it.
            </p>
          </motion.div>
        </section>

        {/* STORY BLOCKS */}
        <section className="grid md:grid-cols-2 gap-8">
          <Card
            title="From teaching → coding"
            text="I used to teach, and I think I still do — I just do it through interfaces now. I like when things explain themselves without needing too many words."
          />

          <Card
            title="Why I code"
            text="Because I like the moment when an idea stops being abstract and becomes something you can actually click, scroll and understand."
          />

          <Card
            title="What I enjoy"
            text="Tiny UI details. Hover states. Micro animations. Things most people don’t notice — but feel when they’re missing."
          />

          <Card
            title="My mindset"
            text="I like the idea that nothing is ever done — just improved until it feels right in both design and code."
          />
        </section>
      </main>
      <Contact />
      <Footer />
    </div>
  );
}

function Card({ title, text }: { title: string; text: string }) {
  return (
    <div className="bg-white/10 border border-white/10 backdrop-blur-md rounded-3xl p-6 text-white shadow-lg hover:scale-[1.02] transition">
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-white/70">{text}</p>
    </div>
  );
}

function ImageBubble({ src, rotate }: { src: string; rotate: string }) {
  return (
    <div
      className="w-40 h-40 rounded-3xl overflow-hidden shadow-2xl border border-white/10"
      style={{ transform: `rotate(${rotate})` }}
    >
      <Image
        src={src}
        alt="bubble"
        width={200}
        height={200}
        className="object-cover"
      />
    </div>
  );
}
