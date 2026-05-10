import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/projects";

export const ProjectCard = ({ project }: { project: Project }) => (
  <div className="rounded-xl shadow-md flex flex-col h-full">
    
    <div className="relative h-48 w-full rounded-lg mb-3 overflow-hidden">
      <Image
        src={project.imageUrl}
        alt={project.title}
        fill
        style={{
          objectFit: "cover",
          objectPosition: "top",
        }}
        sizes="(max-width: 768px) 100vw, 600px"
      />
    </div>

    <div className="flex flex-col flex-grow px-4 pb-4">
      
      <h3 className="text-2xl text-white font-bold">
        {project.title}
      </h3>

      <p className="mt-2 text-white">
        {project.description}
      </p>

      <div className="mt-auto flex justify-end">
        <Link href={`/projects/${project.slug}`}>
          <button className="text-white font-bold bg-[#FF6F61] px-5 py-1 rounded mt-4 hover:bg-[#FF8A75] hover:cursor-pointer">
            Read More
          </button>
        </Link>
      </div>

    </div>
  </div>
);