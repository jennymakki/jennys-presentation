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
            className="text-white font-bold bg-[#FF6F61] px-5 py-1 text-2xl rounded hover:bg-[#FF8A75] hover:cursor-pointer"
            onClick={() => {
              window.location.href = "/projects";
            }}
          >
            See All Projects
          </button>
        </div>
        <div className="flex flex-col text-gray-800 items-center mt-10 px-4">
          <h5 className="text-[#2090C8] font-roboto font-bold text-3xl md:text-4xl text-center mb-6">
            Skills and Technologies
          </h5>
          <Skills />
        </div>
        <div className="flex flex-col text-gray-800 items-center mt-10 px-4">
          <h6 className="text-[#2090C8] font-roboto font-bold text-3xl md:text-4xl text-center mb-6">
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
              has a true creative force and is an invaluable member of any team. -
              Patrik Eriksson, Project Collaborator
            </p>
          </div>
        </div>
        <div className="items-center mt-10">
          <h4 className="text-[#2090C8] font-roboto font-bold text-3xl md:text-4xl text-center mb-2">
            Currently working on
          </h4>
          <div className="max-w-xl text-gray-800 bg-[#EBEBEB] rounded-2xl shadow-md p-6 mx-auto">
            <p className="text-center text-md">
            Currently wrapping up my exam project, Grocery Helper, and looking forward to starting my praktik in February. Excited to apply my skills in full-stack development and continue building impactful web applications.
            </p>
          </div>
        </div>
        <Contact />
      </section>
      <footer className="row-start-4 mt-6 bg-[#2090C8] w-full">
        <Footer />
      </footer>
    </div>
  );
}
