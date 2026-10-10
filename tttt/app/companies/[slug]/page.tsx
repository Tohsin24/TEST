import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCompanies, getCompany } from "@/lib/companies";
import CompanyHero from "@/components/companies/CompanyHero";
import CompanyContent from "@/components/companies/CompanyContent";

export const revalidate = 60;

type Params = { params: { slug: string } };

export async function generateStaticParams() {
  const companies = await getCompanies();
  return companies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const company = await getCompany(params.slug);
  if (!company) return { title: "Company not found" };

  return {
    title: company.name,
    description: company.summary,
    alternates: { canonical: `/companies/${company.slug}` },
    openGraph: { title: company.name, description: company.summary },
  };
}

export default async function CompanyPage({ params }: Params) {
  const company = await getCompany(params.slug);
  if (!company) notFound();

  return (
    <main>
      <CompanyHero company={company} />
      <CompanyContent company={company} />
    </main>
  );
}
