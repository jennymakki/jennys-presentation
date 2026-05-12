"use client";

import Header from "@/components/blocks/header";
import Footer from "@/components/blocks/footer";

import ProjectsHero from "@/components/blocks/ProjectsHero";
import StoryArcSection from "@/components/blocks/StoryArcSection";
import BackendSkillTree from "@/components/blocks/BackendSkillTree";

import { projects } from "@/data/projects";
import Contact from "@/components/blocks/contact";

const getProjects = (slugs: string[]) =>
  projects.filter(p => slugs.includes(p.slug));

const frontendArc = ["To-do-app", "Teachers-site", "ESC"];
const interactionArc = ["wordle-game", "ui-system"];
const fullstackArc = ["grocery-helper", "kino-movie-theatre"];
const professionalArc = ["anders-eklund-portfolio", "oican-b2b-shopify", "personal-portfolio"];
const backendArc = [
  "To-do-app-java",
  "java-exercise-object-manipulation",
  "java-exercise-collections-logic",
  "java-exercise-algorithms-structures",
];

export default function ProjectsPage() {
  return (
    <main className="overflow-hidden">
      <Header />

      <ProjectsHero />

      <StoryArcSection
        title="Frontend Foundations"
        description="Learning how interfaces, layouts and interactions work."
        avatar="/jenny-curious.png"
        quote="This was where everything started clicking for me."
        accent="from-cyan-400 to-blue-500"
        projects={getProjects(frontendArc)}
      />

      <StoryArcSection
        title="Interactive Systems"
        description="State-driven UI and interaction-focused development."
        avatar="/jenny-system.png"
        quote="I stopped thinking in pages and started thinking in systems."
        accent="from-pink-500 to-orange-400"
        projects={getProjects(interactionArc)}
      />

      <StoryArcSection
        title="Fullstack Growth"
        description="Frontend meets backend architecture."
        avatar="/jenny-fullstack.png"
        quote="This was when projects started feeling real."
        accent="from-violet-500 to-indigo-500"
        projects={getProjects(fullstackArc)}
      />

      <StoryArcSection
        title="Professional Work"
        description="Production-focused client work."
        avatar="/jenny-professional.png"
        quote="Real users change everything."
        accent="from-amber-400 to-rose-500"
        projects={getProjects(professionalArc)}
      />

      <BackendSkillTree projects={getProjects(backendArc)} />
      <Contact/>
      <Footer />
    </main>
  );
}