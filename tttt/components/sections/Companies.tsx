import Link from "next/link";
import { getCompanies } from "@/lib/companies";

export default async function Companies() {
  const companies = await getCompanies();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="max-w-2xl mb-16">
          <p className="eyebrow mb-4">
            Our Companies
          </p>

          <h2 className="editorial-section-heading">
            Subsidiaries Driving Innovation & Growth
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {companies.map((company) => (
            <div
              key={company.slug}
              className="group border border-gray-100 bg-white p-10 transition-all duration-500 hover:-translate-y-2 hover:border-[#cd0001] hover:shadow-2xl"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="bg-yellow-100 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-yellow-700">
                  {company.industry}
                </span>
              </div>

              <h3 className="text-3xl font-bold text-blue-950 mb-4">
                {company.name}
              </h3>

              <p className="text-gray-600 leading-7 mb-8">
                {company.description}
              </p>

              <Link
                href={`/companies/${company.slug}`}
                className="text-blue-950 font-semibold inline-flex items-center gap-2 group-hover:gap-4 transition-all duration-300"
              >
                <span>View Company</span>
                <span>→</span>
              </Link>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
