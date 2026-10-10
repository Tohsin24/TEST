import { projects as localProjects } from "@/data/projects";

export type Project = {
  slug: string;
  title: string;
  category: string;
  status: string;
  image: string;
  summary: string;
  featured: boolean;
};

function fromLocal(): Project[] {
  return localProjects.map((p, i) => ({
    ...p,
    slug: p.title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    featured: i < 2,
  }));
}

export async function getProjects(): Promise<Project[]> {
  return fromLocal();
}

/** Featured projects are the first two local entries. */
export function splitProjects(projects: Project[]) {
  const flagged = projects.filter((p) => p.featured).slice(0, 2);
  const featured = flagged.length > 0 ? flagged : projects.slice(0, 2);
  return { featured, categories: ["All", ...Array.from(new Set(projects.map((p) => p.category)))] };
}
