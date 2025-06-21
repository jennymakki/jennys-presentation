import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import Header from "@/components/header";
import Footer from "@/components/footer";

type ProjectPageProps = {
  params: { slug: string };
};

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen bg-[#f5f5f5] font-roboto">
    <header>
      <Header />
    </header>
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <img
        src={project.imageUrl}
        alt={project.title}
        className="rounded mb-4"
      />
      <p className="text-lg text-gray-700">{project.description}</p>
      <div className="mt-4 space-x-4">
        {project.liveDemo && (
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Live Demo
          </a>
        )}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          GitHub
        </a>
      </div>
    </main>
    <footer className="bg-[#2090C8] mt-8">
        <Footer />
      </footer>
    </div>
  );
}
