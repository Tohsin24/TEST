"use client";

import { useState } from "react";
import SiteImage from "@/components/ui/SiteImage";

type Project = {
  slug: string;
  title: string;
  category: string;
  status: string;
  image: string;
  summary: string;
};

export default function ProjectsExplorer({
  projects,
  categories,
}: {
  projects: Project[];
  categories: string[];
}) {
  const [active, setActive] = useState("All");
  const visible =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <section className="py-12 bg-slate-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4" role="group" aria-label="Filter projects by category">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                aria-pressed={active === category}
                onClick={() => setActive(category)}
                className={`rounded-full px-6 py-2 text-sm font-semibold transition border ${
                  active === category
                    ? "bg-blue-950 text-white border-blue-950"
                    : "border-gray-300 text-gray-700 hover:bg-blue-950 hover:text-white hover:border-blue-950"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-950 mb-16">All Projects</h2>

          {visible.length === 0 ? (
            <p className="text-gray-600">No projects in this category yet.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {visible.map((project) => (
                <div
                  key={project.slug}
                  className="group rounded-3xl overflow-hidden shadow-lg bg-white border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="relative h-56 overflow-hidden">
                    <SiteImage
                      src={project.image}
                      alt={project.title}
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <p className="uppercase tracking-widest text-xs font-semibold text-yellow-600">
                        {project.category}
                      </p>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          project.status === "Completed"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-blue-950">{project.title}</h3>
                    <p className="mt-3 text-gray-600 leading-7">{project.summary}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
