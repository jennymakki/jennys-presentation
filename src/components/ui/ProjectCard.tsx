import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/projects";
import Button from "@/components/ui/Button";

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div
      className="
        group relative
        rounded-2xl
        bg-white/10
        backdrop-blur-xl
        border border-white/20
        shadow-[0_20px_60px_rgba(0,0,0,0.2)]
        overflow-hidden
        transition-all duration-300
        hover:-translate-y-2
        hover:shadow-[0_30px_80px_rgba(0,0,0,0.3)]
      "
    >
      {/* IMAGE */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 600px"
        />

        {/* subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="flex flex-col flex-grow p-5">
        <h3 className="text-2xl font-bold text-white">
          {project.title}
        </h3>

        <p className="mt-2 text-white/80 leading-relaxed">
          {project.description}
        </p>

        {/* CTA */}
        <div className="mt-6 flex justify-end">
          <Link href={`/projects/${project.slug}`}>
            <Button variant="primary">
              Read More →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};