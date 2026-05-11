"use client";
import Header from "@/components/blocks/header";
import Footer from "@/components/blocks/footer";
import Introduction from "@/components/blocks/introduction";
import Contact from "@/components/blocks/contact";
import { projects } from "../data/projects";
import Hero from "@/components/blocks/Hero";
import ProjectSection from "@/components/blocks/ProjectSection";
import Testimonials from "@/components/blocks/Testimonials";
import CurrentStatus from "@/components/blocks/CurrentStatus";

export default function Home() {
  const limitedProjects = projects.slice(0, 6);

  return (
    <div className="bg-[#f5f5f5] min-h-screen font-roboto flex flex-col">
      <Header />

      <section className="p0">
        <Hero />
      </section>

      <section className="p-0">
        <Introduction />
      </section>

      <section id="projects" className="relative overflow-hidden bg-white">
        <ProjectSection projects={limitedProjects} />
      </section>
      
      <section id="testimonials" className="p-0">
      <Testimonials/>
      </section>

      <section id="currentstatus" className="p-0">
      <CurrentStatus/>
      </section>

      <section>
        <section id="contact">
          <div className="mt-20">
            <Contact />
          </div>
        </section>
      </section>
      <footer className="row-start-4 mt-6 bg-[#2090C8] w-full">
        <Footer />
      </footer>
    </div>
  );
}
