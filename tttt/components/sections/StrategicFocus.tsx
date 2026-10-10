import Link from "next/link";
import {
  Atom,
  PackageCheck,
  Building2,
  Factory,
  UsersRound,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const focusItems = [
  {
    title: "Sustainability in Action",
    description:
      "Investing in clean energy, recycling, and resource efficiency to build a greener, resilient Africa.",
    icon: Atom,
    href: "#sustainability",
  },
  {
    title: "Our Role in Food Security",
    description:
      "Supporting Nigeria’s agricultural value chain to ensure food availability, affordability, and national self-reliance.",
    icon: PackageCheck,
    href: "/companies",
  },
  {
    title: "Building Infrastructure",
    description:
      "Transforming skylines and roadways through cement, construction, and logistics that connect nations and economies.",
    icon: Building2,
    href: "/projects",
  },
  {
    title: "Driving Industrial Growth",
    description:
      "Powering Africa’s industries with local manufacturing that reduces imports and increases regional competitiveness.",
    icon: Factory,
    href: "#businesses",
  },
  {
    title: "Empowering Communities",
    description:
      "Creating jobs, funding education, and supporting healthcare to uplift people where we work and live.",
    icon: UsersRound,
    href: "/about",
  },
  {
    title: "Innovation for Progress",
    description:
      "Harnessing technology and forward-thinking solutions to redefine Africa’s future in business and development.",
    icon: Sparkles,
    href: "/about",
  },
];

export default function StrategicFocus() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {focusItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative bg-[#fbfbfa] border border-[#ece9e2] p-8 sm:p-10 transition-all duration-300 hover:bg-white hover:border-[#cd0001] hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-red-50 text-[#cd0001] transition-colors duration-300 group-hover:bg-[#cd0001] group-hover:text-white">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-2xl font-bold text-[#110c5b] mb-4 group-hover:text-[#cd0001] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-[15px]">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-100 flex items-center">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-sm font-bold text-gray-800 group-hover:text-[#cd0001] uppercase tracking-wider transition-colors"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
