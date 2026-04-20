"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Introduction from "@/components/introduction";
import Contact from "@/components/contact";
import { projects } from "../data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import Skills from "@/components/Skills";

export default function Home() {
  const limitedProjects = projects.slice(0, 6);
  return (
    <div className="grid grid-rows-[auto_auto_1fr_auto] bg-[#f5f5f5] items-center min-h-screen font-roboto">
      <header className="row-start-1">
        <Header />
      </header>
      <section className="flex flex-col gap-[32px] row-start-2 items-center">
        <Introduction />
      </section>
      <section className="row-start-3 p-6">
        <h2 className="text-[#2090C8] font-roboto font-bold text-3xl md:text-4xl text-center mb-3">
          My Projects
        </h2>
        <div className="row-start-3 grid grid-cols-1 md:grid-cols-2 gap-6 p-6 max-w-6xl mx-auto w-full">
          {limitedProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        <div className="flex justify-center mt-3">
          <button
            className="text-white font-bold bg-[#FF6F61] px-5 py-1 text-2xl rounded hover:bg-[#FF8A75] hover:cursor-pointer m-5"
            onClick={() => {
              window.location.href = "/projects";
            }}
          >
            See All Projects
          </button>
        </div>
        <div className="flex flex-col text-gray-800 items-center mt-15 px-4">
          <h5 className="text-[#2090C8] font-roboto font-bold text-3xl md:text-4xl text-center mb-6">
            Skills and Technologies
          </h5>
          <Skills />
        </div>
        <div className="flex flex-col text-gray-800 items-center mt-20 px-4">
          <h4 className="text-[#2090C8] font-roboto font-bold text-3xl md:text-4xl text-center mb-6">
            Component System
          </h4>

          <div className="max-w-2xl text-center mb-6 bg-[#EBEBEB] rounded-2xl shadow-md p-6">
            <p>
              I focus on building reusable and scalable UI components. This
              portfolio is structured using a component-based architecture, and
              I have also created a dedicated UI system project to explore
              component design, variants, and state management in depth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
            <div className="bg-[#EBEBEB] rounded-2xl shadow-md p-6">
              <h5 className="font-bold text-lg mb-2 text-[#2090C8]">
                Reusable Components
              </h5>
              <p className="text-m">
                Components like cards, navigation, and layout elements are
                reused across the portfolio to ensure consistency and
                maintainability.
              </p>
            </div>

            <div className="bg-[#EBEBEB] rounded-2xl shadow-md p-6">
              <h5 className="font-bold text-lg mb-2 text-[#2090C8]">
                State-driven UI
              </h5>
              <p className="text-m">
                Interactive elements such as menus and forms are controlled
                through state, enabling dynamic and predictable UI behavior.
              </p>
            </div>

            <div className="bg-[#EBEBEB] rounded-2xl shadow-md p-6">
              <h5 className="font-bold text-lg mb-2 text-[#2090C8]">
                Design System Thinking
              </h5>
              <p className="text-m">
                I approach frontend development by building reusable patterns
                and scalable UI systems rather than isolated features.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={() => (window.location.href = "/projects")}
              className="text-white text-xl font-bold bg-[#FF6F61] px-5 py-2 rounded hover:bg-[#FF8A75] hover:cursor-pointer"
            >
              View UI System Project
            </button>
          </div>
        </div>
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
        <div className="mt-20">
        <Contact />
        </div>
      </section>
      <footer className="row-start-4 mt-6 bg-[#2090C8] w-full">
        <Footer />
      </footer>
    </div>
  );
}
