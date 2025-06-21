import Header from "@/components/header"
import Footer from "@/components/footer";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export default function Projects(){
    return (
        <div className="grid grid-rows-[auto_1fr_auto] min-h-screen bg-[#f5f5f5] font-roboto">
        <Header />
        <h2 className="text-[#2090C8] font-roboto font-bold text-3xl md:text-4xl text-center mt-10 mb-6">All Projects</h2>
        <div className="row-start-3 grid grid-cols-1 md:grid-cols-2 gap-6 p-6 max-w-6xl mx-auto w-full">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project}/>
        ))}
        </div>
      <footer className="row-start-4 bg-[#2090C8] w-full">
        <Footer />
      </footer>
        </div>
    )

}