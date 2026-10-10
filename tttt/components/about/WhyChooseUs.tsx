import Image from "next/image";
import { CircleCheck as CheckCircle2, BriefcaseBusiness, Shield, Lightbulb, Handshake, TrendingUp } from "lucide-react";

const reasons = [
  {
    title: "Experienced Professionals",
    icon: BriefcaseBusiness,
  },
  {
    title: "Quality Assurance",
    icon: CheckCircle2,
  },
  {
    title: "Innovation-Driven Solutions",
    icon: Lightbulb,
  },
  {
    title: "Safety & Compliance",
    icon: Shield,
  },
  {
    title: "Client-Centered Approach",
    icon: Handshake,
  },
  {
    title: "Sustainable Growth",
    icon: TrendingUp,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>

            <p className="uppercase tracking-[0.3em] text-yellow-600 font-semibold">
              Why Choose Us
            </p>

            <h2 className="mt-4 text-4xl font-bold text-blue-950">
              Delivering Excellence Through Every Project
            </h2>

            <p className="mt-8 text-gray-600 leading-8">
              At Neweraplus Group, we combine technical expertise,
              innovation and integrity to deliver solutions that
              consistently exceed expectations across multiple industries.
            </p>

            <div className="mt-10 space-y-6">

              {reasons.map((reason) => {
                const Icon = reason.icon;

                return (
                  <div
                    key={reason.title}
                    className="flex items-center gap-5"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-950 flex items-center justify-center">
                      <Icon className="text-white" size={22} />
                    </div>

                    <h3 className="text-lg font-semibold text-blue-950">
                      {reason.title}
                    </h3>
                  </div>
                );
              })}

            </div>

          </div>

          {/* Right */}
          <div className="relative space-y-8">

            {/* Operational Facility Showcase Image */}
            <div className="relative h-72 w-full rounded-3xl overflow-hidden shadow-xl border border-gray-100 group">
              <Image
                src="/assets/hero/hero-refinery.jpg"
                alt="Neweraplus Engineering and Operations"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1021]/80 via-transparent to-black/20" />
              <div className="absolute bottom-5 left-6 right-6 text-white">
                <span className="inline-block px-3 py-1 bg-yellow-500 text-blue-950 text-xs font-bold rounded-full uppercase tracking-wider mb-2">
                  Operational Standards
                </span>
                <h4 className="text-lg font-bold">World-Class Infrastructure &amp; Rigorous HSE Standards</h4>
              </div>
            </div>

            <div className="rounded-3xl bg-blue-950 p-10 text-white shadow-2xl">

              <p className="uppercase tracking-[0.3em] text-yellow-400 font-semibold">
                At a Glance
              </p>

              <h3 className="mt-4 text-3xl font-bold">
                A Trusted Partner Across Industries
              </h3>

              <p className="mt-6 leading-8 text-blue-100">
                Our multidisciplinary expertise allows us to serve
                diverse sectors while maintaining consistent standards
                of quality, safety and innovation.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-6">

                <div>
                  <h4 className="text-4xl font-bold text-yellow-400">
                    4
                  </h4>

                  <p className="mt-2 text-blue-200">
                    Core Industries
                  </p>
                </div>

                <div>
                  <h4 className="text-4xl font-bold text-yellow-400">
                    100%
                  </h4>

                  <p className="mt-2 text-blue-200">
                    Commitment to Quality
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
