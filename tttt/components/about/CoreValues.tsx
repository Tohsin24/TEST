import Image from "next/image";
import { asset } from "@/lib/site";
import {
  ShieldCheck,
  Award,
  Lightbulb,
  Users,
  Leaf,
} from "lucide-react";

const values = [
  {
    title: "Integrity",
    description:
      "We conduct every aspect of our business with honesty, transparency and strong ethical standards.",
    icon: ShieldCheck,
  },
  {
    title: "Excellence",
    description:
      "We strive for exceptional quality in every project and every client engagement.",
    icon: Award,
  },
  {
    title: "Innovation",
    description:
      "We embrace technology and creative thinking to deliver smarter solutions.",
    icon: Lightbulb,
  },
  {
    title: "Customer Focus",
    description:
      "Our clients remain at the center of every decision we make.",
    icon: Users,
  },
  {
    title: "Safety & Sustainability",
    description:
      "We prioritize people, communities and the environment in every operation.",
    icon: Leaf,
  },
];

export default function CoreValues() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">
          <p className="uppercase tracking-[0.3em] text-yellow-600 font-semibold">
            Core Values
          </p>

          <h2 className="mt-4 text-4xl font-bold text-blue-950">
            Principles That Guide Everything We Do
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            Our culture is built on values that define how we serve our
            clients, support our employees and contribute to society.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-950 flex items-center justify-center group-hover:bg-yellow-500 transition-colors duration-300">
                  <Icon size={30} className="text-white" />
                </div>

                <h3 className="mt-8 text-2xl font-semibold text-blue-950">
                  {value.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-8">
                  {value.description}
                </p>
              </div>
            );
          })}

          {/* 6th Slot - Visual Commitment Showcase Card */}
          <div className="relative overflow-hidden rounded-3xl min-h-[300px] flex flex-col justify-end p-8 text-white group shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
            <Image
              src={asset("/assets/hero/hero-sustainability.png")}
              alt="Sustainability and Quality Commitment"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1021]/95 via-[#0b1021]/60 to-black/30" />
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-yellow-500 text-blue-950 text-xs font-bold rounded-full uppercase tracking-wider mb-3">
                Our Guarantee
              </span>
              <h3 className="text-2xl font-semibold text-white font-serif">
                Uncompromising Quality
              </h3>
              <p className="mt-2 text-sm text-blue-100/90 leading-6">
                Rooted in transparency, compliance and community stewardship in everything we build.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
