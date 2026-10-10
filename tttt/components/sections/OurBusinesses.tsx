import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const businesses = [
  {
    title: "Gsixmas Engineering Limited",
    industry: "Engineering",
    tags: ["Infrastructure", "Automation", "Industrial Growth"],
    description:
      "Delivers high-quality engineering, automation, and infrastructure services designed to support sustainable industrial growth across Nigeria.",
    image: "/assets/hero/hero-polypropylene.jpg",
    href: "/companies/gsixmas-engineering",
  },
  {
    title: "Neweraplus Oil & Gas",
    industry: "Oil & Gas",
    tags: ["Energy Solutions", "Pipeline Inspection", "Operational Support"],
    description:
      "Operational support, inspection, and energy-sector solutions focused on reliability, safety, zero-incident culture, and environmental protection.",
    image: "/assets/hero/hero-refinery.jpg",
    href: "/companies/neweraplus-oil-gas",
  },
  {
    title: "Neweraplus Healthcare",
    industry: "Healthcare",
    tags: ["Maternity Care", "Community Health", "Diagnostics"],
    description:
      "Providing compassionate, quality healthcare and maternity services designed to enhance patient wellbeing and community health outcomes.",
    image: "/assets/hero/hero-sustainability.png",
    href: "/companies/neweraplus-healthcare",
  },
  {
    title: "Neweraplus Construction",
    industry: "Construction",
    tags: ["Civil Works", "Commercial Real Estate", "Durable Infrastructure"],
    description:
      "Delivering precision building and civil construction projects with exceptional structural integrity, speed, and modern engineering design.",
    image: "/assets/hero/hero-infrastructure.jpg",
    href: "/companies/neweraplus-construction",
  },
];

export default function OurBusinesses() {
  return (
    <section id="businesses" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#110c5b] tracking-tight">
            Our Businesses
          </h2>
          <p className="text-gray-600 text-lg mt-3">
            As a diversified corporate group, our multidisciplinary presence
            across four vital sectors reflects our commitment to creating
            sustainable value.
          </p>
          <div className="mt-4">
            <span className="w-16 h-1 bg-[#cd0001] rounded-full inline-block" />
          </div>
        </div>

        {/* Business Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {businesses.map((biz) => (
            <div
              key={biz.title}
              className="group bg-white border border-[#e5e2da] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-60 w-full bg-zinc-900 overflow-hidden">
                  <Image
                    src={biz.image}
                    alt={biz.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-5 right-5 text-white">
                    <span className="text-[10px] font-bold tracking-wider uppercase bg-[#cd0001] px-2 py-0.5 rounded text-white inline-block mb-1.5">
                      {biz.industry}
                    </span>
                    <h3 className="text-xl font-bold font-serif leading-tight drop-shadow">
                      {biz.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-[11px] font-semibold text-gray-500 mb-3">
                    {biz.tags.join(" • ")}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {biz.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={biz.href}
                  className="w-full inline-flex items-center justify-between bg-[#110c5b] group-hover:bg-[#cd0001] text-white text-xs font-bold uppercase tracking-wider py-3.5 px-5 rounded transition-colors"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-14 text-center">
          <Link
            href="/companies"
            className="inline-flex items-center gap-3 bg-[#cd0001] hover:bg-[#b00001] text-white text-sm font-bold uppercase tracking-wider px-8 py-4 rounded shadow-md hover:shadow-lg transition-all"
          >
            <span>View All Subsidiaries</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
