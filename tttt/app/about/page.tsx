import type { Metadata } from "next";
import Image from "next/image";
import { asset } from "@/lib/site";
import Story from "@/components/about/Story";
import VisionMission from "@/components/about/VisionMission";
import CoreValues from "@/components/about/CoreValues";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Neweraplus Group of Companies: our story, vision, mission and core values.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero with background image */}
      <section className="relative overflow-hidden py-32 bg-[#0b132b]">
        <div className="absolute inset-0">
          <Image
            src={asset("/assets/hero/hero-infrastructure.jpg")}
            alt="About Neweraplus Group"
            fill
            priority
            className="object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b1021]/80 via-[#0b1021]/70 to-[#0b1021]/95" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[0.3em] text-[#cd0001] font-bold text-sm">
            About Us
          </p>

          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold text-white font-serif drop-shadow-md">
            Building Sustainable Growth Across Industries
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-white/90 leading-relaxed font-normal drop-shadow">
            Neweraplus Group of Companies Ltd. is committed to delivering
            innovative, reliable and sustainable solutions across engineering,
            oil &amp; gas, healthcare and construction.
          </p>
        </div>
      </section>

      <Story />
      <VisionMission />
      <CoreValues />
      <WhyChooseUs />
      <AboutCTA />
    </main>
  );
}
