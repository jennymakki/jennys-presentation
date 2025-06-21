"use client";
import Header from "@/components/header"
import Footer from "@/components/footer";
import Introduction from "@/components/introduction";
import { projects } from "../data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export default function Home() {
  const limitedProjects = projects.slice(0,6);
  return (
    <div className="grid grid-rows-[auto_auto_1fr_auto] bg-[#f5f5f5] items-center min-h-screen font-roboto">
      <header className="row-start-1">
        <Header />
      </header>
      <section className="flex flex-col gap-[32px] row-start-2 items-center">
        <Introduction/>
      </section>
      <section className="row-start-3 p-6">
        <h2 className="text-[#2090C8] font-roboto font-bold text-3xl md:text-4xl text-center mb-3">My Projects</h2>
        <div className="row-start-3 grid grid-cols-1 md:grid-cols-2 gap-6 p-6 max-w-6xl mx-auto w-full">
        {limitedProjects.map((project) => (
          <ProjectCard key={project.title} project={project}/>
        ))}
        </div>
        <div className="flex justify-center mt-8">
          <button className="text-white font-bold bg-[#FF6F61] px-5 py-1 rounded hover:bg-[#FF8A75] hover:cursor-pointer"
          onClick={() => {
            window.location.href ="/projects";
          }}
          >
            See All Projects
          </button>
        </div>
      </section>
      <footer className="row-start-4 bg-[#2090C8] w-full">
        <Footer />
      </footer>
    </div>
  );
}
