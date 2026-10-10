import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { getCompanies } from "@/lib/companies";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const companies = await getCompanies();
  const pages = ["", "/about", "/companies", "/projects", "/contact"].map((p) => ({
    url: `${SITE_URL}${p}`,
    lastModified: new Date(),
  }));
  const companyPages = companies.map((c) => ({
    url: `${SITE_URL}/companies/${c.slug}`,
    lastModified: new Date(),
  }));
  return [...pages, ...companyPages];
}
