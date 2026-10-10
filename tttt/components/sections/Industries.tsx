import {
  Cog,
  Fuel,
  HeartPulse,
  Building2,
} from "lucide-react";

const industries = [
  {
    title: "Engineering",
    description:
      "Innovative engineering solutions designed for modern infrastructure and industrial development.",
    icon: Cog,
  },
  {
    title: "Oil & Gas",
    description:
      "Reliable energy-sector services supporting operational efficiency and sustainability.",
    icon: Fuel,
  },
  {
    title: "Healthcare",
    description:
      "Quality healthcare and maternity services focused on patient wellbeing and excellence.",
    icon: HeartPulse,
  },
  {
    title: "Construction",
    description:
      "Modern construction solutions delivering durable and impactful infrastructure projects.",
    icon: Building2,
  },
];

export default function Industries() {
  return (
    <section id="industries" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="max-w-2xl mb-16">
          <p className="eyebrow mb-4">
            Our Industries
          </p>

          <h2 className="editorial-section-heading max-w-xl">
            Diverse Expertise Across Key Sectors
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {industries.map((industry) => (
            <div
              key={industry.title}
              className="group border border-gray-100 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center bg-blue-950 transition-all duration-500 group-hover:bg-yellow-500">
                <industry.icon size={30} className="text-white" />
              </div>

              <h3 className="text-2xl font-bold text-blue-950 mb-4">
                {industry.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {industry.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
