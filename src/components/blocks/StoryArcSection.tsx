"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";

type Props = {
  title: string;
  description: string;
  avatar: string;
  quote: string;
  accent: string;
  projects: Project[];
};

export default function StoryArcSection({
  title,
  description,
  avatar,
  quote,
  accent,
  projects,
}: Props) {
  return (
    <section className="relative py-32 px-6 bg-[#07111f]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-[240px_1fr] gap-12 items-center mb-24"
        >
          {/* Avatar + bubble */}
          <div className="relative flex justify-center">

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="absolute -top-16 left-1/2 -translate-x-1/2 z-20 max-w-[240px]"
            >
              <div className="relative bg-white text-gray-800 italic text-sm px-5 py-3 rounded-2xl shadow-lg text-center">
                {quote}
                <div className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-3 h-3 bg-white rotate-45" />
              </div>
            </motion.div>

            <div className={`absolute inset-0 blur-3xl opacity-40 rounded-full bg-gradient-to-br ${accent}`} />

            <Image src={avatar} alt={title} width={220} height={220} className="relative z-10" />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              {title}
            </h2>

            <p className="text-white/70 text-lg leading-relaxed">
              {description}
            </p>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}