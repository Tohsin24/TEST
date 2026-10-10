import { Leaf, Lightbulb, UsersRound } from "lucide-react";

const highlights = [
  {
    title: "Sustainability in Action",
    description:
      "Investing in clean energy, responsible resource use, and long-term environmental stewardship to build a greener, more resilient Africa.",
    icon: Leaf,
  },
  {
    title: "Innovation for Growth",
    description:
      "Leveraging cutting-edge technology and engineering expertise to create modern solutions that solve real-world industry challenges.",
    icon: Lightbulb,
  },
  {
    title: "Empowering Communities",
    description:
      "Creating opportunities through quality work, trusted partnerships and services that improve everyday lives across the communities we serve.",
    icon: UsersRound,
  },
];

export default function ImpactHighlights() {
  return (
    <section id="impact" className="bg-blue-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="eyebrow mb-4 text-[#e43c3d]">
            Our Impact
          </p>
          <h2 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
            Building for Tomorrow, Today.
          </h2>
          <p className="mt-6 text-lg leading-8 text-blue-100">
            Neweraplus brings together practical expertise, responsible delivery
            and a long-term commitment to the communities we serve.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {highlights.map((highlight) => (
            <article
              key={highlight.title}
              className="border border-white/15 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-[#cd0001] hover:bg-white/10"
            >
              <highlight.icon className="h-9 w-9 text-yellow-400" aria-hidden="true" />
              <h3 className="mt-7 text-2xl font-bold">{highlight.title}</h3>
              <p className="mt-4 leading-7 text-blue-100">{highlight.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
