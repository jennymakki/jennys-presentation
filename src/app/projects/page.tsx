"use client";

import Header from "@/components/blocks/header";
import Footer from "@/components/blocks/footer";

import Image from "next/image";
import { motion } from "framer-motion";

import { projects, type Project } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";

const frontendArc = ["To-do-app", "Teachers-site", "ESC"];

const interactionArc = ["wordle-game", "ui-system"];

const fullstackArc = ["grocery-helper", "kino-movie-theatre"];

const professionalArc = ["anders-eklund-portfolio", "shopify-lia"];

const backendArc = [
  "To-do-app-java",
  "java-exercise-object-manipulation",
  "java-exercise-collections-logic",
  "java-exercise-algorithms-structures",
];

type StoryArcSectionProps = {
  title: string;
  description: string;
  avatar: string;
  quote: string;
  accent: string;
  projects: Project[];
};

function ProjectsHero() {
  return (
    <section
      className="
    relative overflow-hidden
    py-20 px-6
    bg-gradient-to-b
    from-[#2090C8]
    via-[#176b94]
    to-[#07111f]
  "
    >
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[250px_1fr] gap-16 items-center">
          {/* Avatar Side */}
{/* Avatar Side */}
<motion.div
  initial={{ opacity: 0, x: -40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="relative flex justify-center"
>
  {/* Spotlight */}
  <div
    className="
      absolute top-[-120px]
      w-[280px]
      h-[500px]
      bg-white/20
      blur-3xl
      rotate-12
      rounded-full
      opacity-40
    "
  />

  {/* Glow */}
  <div
    className="
      absolute inset-0
      bg-cyan-300/20
      blur-3xl
      rounded-full
      scale-110
    "
  />

  {/* 💬 PRATBUBBLA (NY) */}
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2, duration: 0.6 }}
    className="
      absolute
      -top-16
      left-1/2
      -translate-x-1/2
      z-20
      max-w-[220px]
    "
  >
    <div
      className="
        relative
        bg-white
        text-gray-700
        text-sm
        px-4 py-3
        rounded-xl
        shadow-lg
        text-center
      "
    >
      Let me show you

      {/* tail */}
      <div
        className="
          absolute
          left-1/2
          -bottom-2
          -translate-x-1/2
          w-3 h-3
          bg-white
          rotate-45
        "
      />
    </div>
  </motion.div>

  <Image
    src="/projectsjenny.png"
    alt="Jenny avatar"
    width={200}
    height={200}
    className="
      relative z-10
      object-contain
      drop-shadow-[0_0_60px_rgba(255,255,255,0.25)]
    "
  />
</motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-500"
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white max-w-500">
              Building Through Curiosity
            </h1>

            <p className="text-white/80 text-lg leading-relaxed max-w-500">
              {" "}
              A story-driven collection of projects exploring UI systems,
              interaction design, fullstack architecture and real-world
              development.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StoryArcSection({
  title,
  description,
  avatar,
  quote,
  accent,
  projects,
}: StoryArcSectionProps) {
  return (
    <section className="relative py-32 px-6 bg-[#07111f]">
      <div className="max-w-7xl mx-auto">
        {/* Arc Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-[240px_1fr] gap-12 items-center mb-24"
        >
          {/* Avatar */}
          <div className="relative">
            <div
              className={`
                absolute inset-0 blur-3xl opacity-40 rounded-full
                bg-gradient-to-br ${accent}
              `}
            />

            <Image
              src={avatar}
              alt={title}
              width={220}
              height={220}
              className="relative z-10 object-contain"
            />
          </div>

          {/* Narrative */}
          <div>
            <p className="uppercase tracking-[0.3em] text-white/50 text-sm mb-4">
              Story Arc
            </p>

            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
              {title}
            </h2>

            <p className="text-white/70 text-lg leading-relaxed max-w-3xl mb-8">
              {description}
            </p>

            <div className="inline-block border border-white/10 bg-white/5 rounded-3xl px-6 py-5 backdrop-blur-sm">
              <p className="text-white/80 italic text-lg">“{quote}”</p>
            </div>
          </div>
        </motion.div>

        {/* Featured Project */}
        {projects[0] && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <ProjectCard project={projects[0]} />
          </motion.div>
        )}

        {/* Secondary Projects */}
        {projects.length > 1 && (
          <div className="grid md:grid-cols-2 gap-8">
            {projects.slice(1).map((project: Project, index: number) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function BackendSkillTree({ projects }: { projects: Project[] }) {
  return (
    <section className="relative py-40 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[0.3em] text-white/50 text-sm mb-5">
            Backend Evolution
          </p>

          <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
            Systems Beyond
            <br />
            the UI
          </h2>

          <p className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">
            Diving deeper into Java, algorithms, architecture and backend
            thinking.
          </p>
        </motion.div>

        {/* Skill Tree */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project: Project, index: number) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="
                  relative overflow-hidden
                  border border-white/10
                  bg-white/5
                  backdrop-blur-sm
                  rounded-3xl
                  p-8
                "
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/10 blur-3xl rounded-full" />

              <p className="text-cyan-300 text-sm uppercase tracking-[0.2em] mb-3">
                Skill Unlocked
              </p>

              <h3 className="text-white text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-white/70 leading-relaxed mb-6">
                {project.shortDescription}
              </p>

              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="
                        px-3 py-1
                        rounded-full
                        bg-white/10
                        text-white/70
                        text-sm
                      "
                  >
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

export default function ProjectsPage() {
  const getProjects = (slugs: string[]): Project[] =>
    projects.filter((project: Project) => slugs.includes(project.slug));

  return (
    <main className="overflow-hidden">
      <Header />

      <ProjectsHero />

      <StoryArcSection
        title="Frontend Foundations"
        description="Learning how interfaces, layouts and interactions work through early frontend projects and experimentation."
        avatar="/avatars/jenny-curious.png"
        quote="This was where everything started clicking for me."
        accent="from-cyan-400 to-blue-500"
        projects={getProjects(frontendArc)}
      />

      <StoryArcSection
        title="Interactive Systems"
        description="Moving from isolated pages into reusable systems, state-driven UI and interaction-focused development."
        avatar="/avatars/jenny-system.png"
        quote="I stopped thinking in pages and started thinking in systems."
        accent="from-pink-500 to-orange-400"
        projects={getProjects(interactionArc)}
      />

      <StoryArcSection
        title="Fullstack Growth"
        description="Connecting frontend architecture with backend logic, APIs and real application flow."
        avatar="/avatars/jenny-fullstack.png"
        quote="This was when projects started feeling real."
        accent="from-violet-500 to-indigo-500"
        projects={getProjects(fullstackArc)}
      />

      <StoryArcSection
        title="Professional Work"
        description="Building production-focused experiences, client projects and scalable frontend structures."
        avatar="/avatars/jenny-professional.png"
        quote="Working with real users changed how I think about frontend."
        accent="from-amber-400 to-rose-500"
        projects={getProjects(professionalArc)}
      />

      <BackendSkillTree projects={getProjects(backendArc)} />

      <Footer />
    </main>
  );
}
