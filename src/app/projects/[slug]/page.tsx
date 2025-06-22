"use client";
import * as React from "react";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import Header from "@/components/header";
import Footer from "@/components/footer";
import BackButton from "@/components/BackButton";
import { Github, Globe } from "lucide-react";
import Image from "next/image";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export default function ProjectPage({ params }: ProjectPageProps) {
  const unwrappedParams = React.use(params);
  const project = projects.find((p) => p.slug === unwrappedParams.slug);

  if (!project) return notFound();

  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen bg-[#f5f5f5] font-roboto">
      <header>
        <Header />
      </header>
      <main className="p-6 max-w-4xl mx-auto space-y-5">
        <h2 className="text-4xl text-[#2090C8] font-bold">{project.title}</h2>
        <p className="text-lg font-bold text-[#FF6F61]">
          {project.shortDescription}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags?.map((tag) => (
            <span
              key={tag}
              className="bg-[#2090C8] text-white px-4 py-1 rounded-full text-sm font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="bg-[#ebebeb] rounded-2xl shadow-md p-6">
          <h3 className="text-[#2090C8] text-2xl font-semibold mb-2">
            Project Goal
          </h3>
          <p>{project.goal}</p>
        </div>
        <div className="bg-[#ebebeb] rounded-2xl shadow-md p-6">
          <h4 className="text-[#2090C8] text-2xl font-semibold mb-2">
            Key Features
          </h4>
          <ul className="list-disc list-inside space-y-1">
            {project.keyFeatures?.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>
        {project.snapshots && project.snapshots.length > 0 && (
          <div className="p-6">
            <h5 className="text-[#2090C8] text-2xl font-semibold mb-4">
              Snapshots
            </h5>
            <div className="space-y-12">
              {project.snapshots.map(({ imageUrl, description }, idx) => (
                <div
                  key={idx}
                  className="rounded bg-[#ebebeb] overflow-hidden shadow-md"
                >
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src={imageUrl}
                      alt={`Snapshot ${idx + 1}`}
                      fill
                      style={{ objectFit: "contain" }}
                      sizes="(max-width: 768px) 100vw, 8000px"
                    />
                  </div>
                  <p className="p-3">{description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="bg-[#ebebeb] rounded-2xl shadow-md p-6">
          <h6 className="text-2xl text-[#2090C8] font-semibold mb-2">
            Role & Learning
          </h6>
          <p className="whitespace-pre-line">{project.roleAndLearning}</p>
        </div>

        <div className="flex flex-col mt-10 sm:flex-row gap-4">
          <div className="bg-[#ebebeb] rounded-2xl shadow-md p-6 flex-1 min-w-[200px]">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#2090C8] text-lg font-semibold hover:underline hover:text-[#FF6F61]"
            >
              <Github /> View this repository
            </a>
          </div>

          {project.liveDemo && (
            <div className="bg-[#ebebeb] rounded-2xl shadow-md p-6 flex-1 min-w-[200px]">
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2090C8] flex items-center gap-2 text-lg font-semibold hover:underline hover:text-[#FF6F61]"
              >
                <Globe /> Live Demo
              </a>
            </div>
          )}
        </div>
        <div className="flex justify-center">
          <BackButton />
        </div>
      </main>
      <footer className="bg-[#2090C8] mt-8">
        <Footer />
      </footer>
    </div>
  );
}
