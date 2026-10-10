"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { asset } from "@/lib/site";

const newsItems = [
  {
    title:
      "Neweraplus Group Expands Infrastructure and Energy Operations Across Niger Delta",
    date: "September 17, 2026",
    excerpt:
      "Neweraplus Group of Companies has announced the commissioning of expanded operational facilities in Delta State, enhancing regional engineering delivery...",
    image: "/assets/hero/hero-refinery.jpg",
    href: "/projects",
  },
  {
    title:
      "Gsixmas Engineering Delivers Advanced Industrial Automation Milestone",
    date: "August 26, 2026",
    excerpt:
      "Gsixmas Engineering Limited has successfully handed over a state-of-the-art automated control system for a high-capacity industrial plant...",
    image: "/assets/hero/hero-polypropylene.jpg",
    href: "/companies/gsixmas-engineering",
  },
  {
    title:
      "Neweraplus Healthcare Commissions Modern Maternity & Diagnostic Center",
    date: "August 24, 2026",
    excerpt:
      "Neweraplus Healthcare has unveiled a modern community healthcare facility equipped with maternal diagnostic tools and emergency response services...",
    image: "/assets/hero/hero-sustainability.png",
    href: "/companies/neweraplus-healthcare",
  },
  {
    title:
      "Neweraplus Construction Delivers 48-Unit Master-Planned Estate Development",
    date: "August 20, 2026",
    excerpt:
      "Featuring durable civil engineering and modern utilities, Neweraplus Construction has concluded another landmark residential development...",
    image: "/assets/hero/hero-infrastructure.jpg",
    href: "/companies/neweraplus-construction",
  },
  {
    title:
      "Neweraplus Oil & Gas Achieves Zero Lost-Time Incident Safety Milestone",
    date: "August 15, 2026",
    excerpt:
      "Demonstrating world-class HSSE standards, the energy division achieved over 500,000 safe man-hours on ongoing pipeline inspection and support operations...",
    image: "/assets/hero/hero-ipo.png",
    href: "/companies/neweraplus-oil-gas",
  },
];

export default function PressReleasesNews() {
  const [startIndex, setStartIndex] = useState(0);

  const prev = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const next = () => {
    setStartIndex((prev) => Math.min(newsItems.length - 3, prev + 1));
  };

  return (
    <section id="news" className="py-24 bg-[#f8f7f4] border-t border-[#ebe7de]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#110c5b] tracking-tight">
            Press Releases and News
          </h2>
          <div className="text-gray-600 text-lg mt-3">
            Recent News and Project Milestones
          </div>
          <div className="mt-4 flex justify-center">
            <span className="w-16 h-1 bg-[#cd0001] rounded-full inline-block" />
          </div>
        </div>

        {/* News Grid / Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.slice(startIndex, startIndex + 3).map((item) => (
              <article
                key={item.title}
                className="bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group overflow-hidden"
              >
                {/* Thumbnail */}
                <div className="relative h-60 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={asset(item.image)}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                      <Clock className="w-3.5 h-3.5 text-[#cd0001]" />
                      <span>{item.date}</span>
                    </div>

                    <h3 className="text-xl font-bold text-[#110c5b] group-hover:text-[#cd0001] transition-colors leading-snug mb-3">
                      <Link href={item.href}>
                        {item.title}
                      </Link>
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {item.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#cd0001] uppercase tracking-wider hover:underline"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Controls */}
          <div className="mt-12 flex justify-center items-center gap-4">
            <button
              type="button"
              onClick={prev}
              disabled={startIndex === 0}
              aria-label="Previous news"
              className="w-12 h-12 rounded-full border border-gray-300 bg-white text-gray-700 flex items-center justify-center hover:bg-[#cd0001] hover:text-white hover:border-[#cd0001] transition disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-gray-700 disabled:hover:border-gray-300 cursor-pointer disabled:cursor-not-allowed shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={next}
              disabled={startIndex >= newsItems.length - 3}
              aria-label="Next news"
              className="w-12 h-12 rounded-full border border-gray-300 bg-white text-gray-700 flex items-center justify-center hover:bg-[#cd0001] hover:text-white hover:border-[#cd0001] transition disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-gray-700 disabled:hover:border-gray-300 cursor-pointer disabled:cursor-not-allowed shadow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
