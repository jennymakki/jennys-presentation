"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";

export default function BackendSkillTree({ projects }: { projects: Project[] }) {
  return (
    <section className="relative py-40 px-6 bg-[#07111f]">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[0.3em] text-white/50 text-sm mb-5">
            Backend Evolution
          </p>

          <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
            Systems Beyond <br /> the UI
          </h2>

          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Diving deeper into Java, algorithms, architecture and backend thinking.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden border border-white/10 bg-white/5 rounded-3xl p-8"
            >
              <h3 className="text-white text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-white/70 mb-6">
                {project.shortDescription}
              </p>

              <div className="flex flex-wrap gap-3">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-white/10 text-white/70 text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}