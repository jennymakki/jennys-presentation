"use client";
import Header from "@/components/blocks/header";
import Footer from "@/components/blocks/footer";
import Introduction from "@/components/blocks/introduction";
import Contact from "@/components/blocks/contact";
import { projects } from "../data/projects";
import Hero from "@/components/blocks/Hero";
import ProjectSection from "@/components/blocks/ProjectSection";

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
      
      <section>
        <div className="flex flex-col text-gray-800 items-center mt-10 px-4">
          <h6 className="text-[#2090C8] font-roboto font-bold text-3xl md:text-4xl text-center mb-6 mt-20">
            Testimonials
          </h6>
          <div className="max-w-xl bg-[#ebebeb] rounded-2xl shadow-md p-6 mx-auto">
            <p className="text-center text-md">
              It has been a pleasure working with Jenny. She brings a positive
              energy to the team, consistently demonstrates attention to detail,
              and is always focused on achieving results. - Henrik Mattsson,
              Project Collaborator
            </p>
          </div>
          <div className="max-w-xl bg-[#ebebeb] text-gray-800 rounded-2xl mt-10 shadow-md p-6 mx-auto">
            <p className="text-center text-md">
              Working with Jenny has been incredibly inspiring. She brings
              outstanding organization and structure to everything she does,
              which helps the whole team stay focused and efficient. Her energy
              and positivity are contagious and she constantly contributes
              fresh, creative ideas. With a sharp eye for color, form, and
              design, she elevates every project visually and conceptually. She
              has a true creative force and is an invaluable member of any team.
              - Patrik Eriksson, Project Collaborator
            </p>
          </div>
        </div>
        <div className="items-center mt-10">
          <h4 className="text-[#2090C8] font-roboto font-bold text-3xl md:text-4xl text-center mb-2 mt-20">
            Currently working on
          </h4>
          <div className="max-w-xl text-gray-800 bg-[#EBEBEB] rounded-2xl shadow-md p-6 mx-auto">
            <p className="text-center text-md">
              Currently completing my studies and actively seeking opportunities
              in frontend development, with a strong interest in building
              scalable UI systems and design system–driven applications.
            </p>
          </div>
        </div>
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
