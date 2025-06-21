import Header from "@/components/header"
import Footer from "@/components/footer";
import Introduction from "@/components/introduction";
import { projects } from "../data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_auto_1fr_auto] bg-[#f5f5f5] items-center min-h-screen font-roboto">
      <header className="row-start-1">
        <Header />
      </header>
      <section className="flex flex-col gap-[32px] row-start-2 items-center">
        <Introduction/>
      </section>
      <section className="row-start-3 p-6">
        <h2 className="text-[#2090C8] font-roboto font-bold text-3xl md:text-4xl text-center mb-10">My Projects</h2>
        <div className="row-start-3 grid grid-cols-1 md:grid-cols-2 gap-6 p-6 max-w-6xl mx-auto w-full">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project}/>
        ))}
        </div>
      </section>
      <footer className="row-start-4 bg-[#2090C8] w-full">
        <Footer />
      </footer>
    </div>
  );
}
