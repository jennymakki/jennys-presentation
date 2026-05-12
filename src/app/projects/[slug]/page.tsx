"use client";

import * as React from "react";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Globe, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

import { projects } from "@/data/projects";
import Footer from "@/components/blocks/footer";
import Button from "@/components/ui/Button";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export default function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = React.use(params);

  const project = projects.find((p) => p.slug === slug);

  const router = useRouter();

  if (!project) return notFound();

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#2090C8] font-roboto">
      {/* Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 blur-3xl rounded-full" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-300/10 blur-3xl rounded-full" />

      <main className="relative z-10 max-w-4xl mx-auto px-6 py-24 space-y-28">
        {/* HERO */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-tight">
            {project.title}
          </h1>

          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            {project.shortDescription}
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="bg-white/10 border border-white/20 text-white px-5 py-1.5 rounded-full text-sm backdrop-blur-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.section>

        {/* SECTION WRAPPER  */}
        <div className="space-y-20">
          <Section title="Project Goal">
            <p>{project.goal}</p>
          </Section>

          <Section title="Key Features">
            <ul className="list-disc list-inside space-y-2">
              {project.keyFeatures.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </Section>

          {project.uiArchitecture && (
            <Section title="UI Architecture">
              <ul className="list-disc list-inside space-y-2">
                {project.uiArchitecture.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </Section>
          )}

          {/* SNAPSHOTS */}
          {project.snapshots?.length > 0 && (
            <Section title="Snapshots">
              <div className="space-y-14">
                {project.snapshots.map((snap, i) => (
                  <motion.div
                    key={i}
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 25 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/10 border border-white/10 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl"
                  >
                    <div className="relative aspect-[16/9] w-full">
                      <Image
                        src={snap.imageUrl}
                        alt={`snapshot-${i}`}
                        fill
                        className="object-contain"
                      />
                    </div>

                    <p className="p-6 text-white/80 text-sm md:text-base leading-relaxed">
                      {snap.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </Section>
          )}

          <Section title="Role & Learning">
            <p className="whitespace-pre-line leading-relaxed">
              {project.roleAndLearning}
            </p>
          </Section>
        </div>

        {/* LINKS */}
        <section className="grid md:grid-cols-2 gap-8 pt-6">
          <a
            href={project.link}
            target="_blank"
            className="group flex items-center justify-center gap-3 p-7 rounded-3xl bg-white/10 border border-white/10 text-white hover:bg-white/20 transition shadow-xl backdrop-blur-md"
          >
            <Github className="group-hover:scale-110 transition" />
            View Repository
          </a>

          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              className="group flex items-center justify-center gap-3 p-7 rounded-3xl bg-white/10 border border-white/10 text-white hover:bg-white/20 transition shadow-xl backdrop-blur-md"
            >
              <Globe className="group-hover:scale-110 transition" />
              Live Demo
            </a>
          )}
        </section>

        {/* BACK */}
        <div className="flex justify-center items-center">
        <Button
          variant="primary"
          className="flex items-center gap-2 bg-white/10 border border-white/10 hover:bg-white/20"
          onClick={() => router.back()}
        >
          <ArrowLeft size={16} />
          Back
        </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="
        bg-white/10
        border border-white/10
        backdrop-blur-md
        rounded-3xl
        p-10 md:p-12
        text-white
        space-y-5
        shadow-2xl
      "
    >
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>

      <div className="text-white/80 leading-relaxed text-base md:text-lg">
        {children}
      </div>
    </motion.section>
  );
}
