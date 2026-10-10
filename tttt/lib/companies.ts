import { companies as localCompanies } from "@/data/companies";

export type Company = (typeof localCompanies)[number];

export async function getCompanies(): Promise<Company[]> {
  return localCompanies;
}

export async function getCompany(slug: string): Promise<Company | null> {
  return localCompanies.find((c) => c.slug === slug) ?? null;
}
