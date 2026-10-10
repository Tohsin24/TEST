import type { Metadata } from "next";
import { getCompanies } from "@/lib/companies";
import CompanyShowcase from "@/components/companies/CompanyShowcase";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Our Companies",
  description:
    "Explore the Neweraplus subsidiaries across engineering, oil & gas, healthcare and construction.",
  alternates: { canonical: "/companies" },
};

export default async function CompaniesPage() {
  const companies = await getCompanies();

  return (
    <main>

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-950 to-slate-900 py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[0.3em] text-yellow-400 font-semibold">
            Our Companies
          </p>

          <h1 className="mt-6 text-5xl font-bold text-white">
            Four Businesses.
            <br />
            One Vision.
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-blue-100">
            Discover the companies driving innovation across engineering,
            oil & gas, healthcare and construction.
          </p>

        </div>
      </section>

      {companies.map((company, index) => (
        <CompanyShowcase
          key={company.slug}
          company={company}
          reverse={index % 2 !== 0}
        />
      ))}

    </main>
  );
}
