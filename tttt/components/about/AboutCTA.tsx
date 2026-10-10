import Link from "next/link";
import Image from "next/image";
import { asset } from "@/lib/site";

export default function AboutCTA() {
  return (
    <section className="relative overflow-hidden py-28 bg-[#0b132b]">
      <div className="absolute inset-0">
        <Image
          src={asset("/assets/hero/hero-refinery.jpg")}
          alt="Partner with Neweraplus Group"
          fill
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1021]/95 via-[#0b1021]/80 to-[#110c5b]/90" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="uppercase tracking-[0.3em] text-[#cd0001] font-bold text-sm">
          Collaborate With Us
        </p>
        <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-white font-serif drop-shadow-md">
          Partner With Neweraplus Group
        </h2>
        <p className="mt-6 text-lg text-white/90 leading-8 max-w-2xl mx-auto drop-shadow">
          Talk to our leadership and project engineers about delivering reliable,
          high-impact industrial, oil &amp; gas, infrastructure, and healthcare solutions.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-xl bg-[#cd0001] px-8 py-4 text-white font-semibold hover:bg-red-700 transition shadow-lg shadow-red-900/30"
          >
            Contact Our Team
          </Link>
          <Link
            href="/projects"
            className="rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur border border-white/20 px-8 py-4 text-white font-semibold transition"
          >
            View Our Projects
          </Link>
        </div>
      </div>
    </section>
  );
}

