import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getProjects, splitProjects } from "@/lib/projects";
import SiteImage from "@/components/ui/SiteImage";
import ProjectsExplorer from "@/components/projects/ProjectsExplorer";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects delivered by Neweraplus across engineering, oil & gas, healthcare and construction.",
  alternates: { canonical: "/projects" },
};

export const revalidate = 60;

export default async function ProjectsPage() {
  const projects = await getProjects();
  const { featured, categories } = splitProjects(projects);

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-950 to-slate-900 py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[0.3em] text-yellow-400 font-semibold">
            Our Projects
          </p>
          <h1 className="mt-6 text-5xl font-bold text-white">
            Delivering Excellence Across Industries
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-blue-100">
            Explore some of the projects and solutions that demonstrate our
            commitment to quality, innovation and client satisfaction.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-950 mb-16">
            Featured Projects
          </h2>
          <div className="space-y-24">
            {featured.map((project, index) => (
              <div
                key={project.slug}
                className={`grid lg:grid-cols-2 gap-16 items-center ${
                  index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Image */}
                <div className="relative w-full h-[400px] overflow-hidden rounded-3xl shadow-xl">
                  <SiteImage src={project.image} alt={project.title} />
                </div>
                {/* Content */}
                <div>
                  <p className="uppercase tracking-[0.3em] text-yellow-600 font-semibold">
                    {project.category}
                  </p>
                  <h3 className="mt-4 text-3xl font-bold text-blue-950">
                    {project.title}
                  </h3>
                  <div className="mt-4">
                    <span className="inline-block rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-700">
                      {project.status}
                    </span>
                  </div>
                  <p className="mt-6 text-gray-600 leading-8">
                    {project.summary}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 mt-8 rounded-xl bg-blue-950 px-6 py-4 text-white font-semibold hover:bg-blue-900 transition"
                  >
                    Learn More
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProjectsExplorer projects={projects} categories={categories} />

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-blue-950 to-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white">
            Have a Project in Mind?
          </h2>
          <p className="mt-6 text-lg text-blue-100 leading-8">
            Let&apos;s discuss how Neweraplus can bring your vision to life.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-10 rounded-xl bg-yellow-500 px-8 py-4 text-blue-950 font-semibold hover:bg-yellow-400 transition"
          >
            Contact Us
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
