"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

interface Slide {
  bgSrc: string;
  subtitle?: React.ReactNode;
  title: React.ReactNode;
  description?: string;
  btnText: string;
  btnHref: string;
}

const slides: Slide[] = [
  {
    bgSrc: "/assets/hero/hero-ipo.png",
    subtitle: (
      <>
        BUILDING EXCELLENCE ACROSS <span className="text-[#CD0001] font-extrabold">NIGERIA</span>
      </>
    ),
    title: (
      <>
        Modern Solutions Across <span className="text-[#D71920]">Industry</span>
      </>
    ),
    description:
      "Neweraplus Group of Companies delivers high-impact engineering, energy, healthcare, and infrastructure services designed to drive sustainable growth.",
    btnText: "Explore Companies",
    btnHref: "/companies",
  },
  {
    bgSrc: "/assets/hero/hero-polypropylene.jpg",
    subtitle: "Engineering & Industrial Operations",
    title: "Precision Engineering & Infrastructure",
    description:
      "Delivering dependable industrial facilities, modern automation systems, and high-performance engineering infrastructure.",
    btnText: "Our Subsidiaries",
    btnHref: "/#businesses",
  },
  {
    bgSrc: "/assets/hero/hero-refinery.jpg",
    subtitle: "Energy & Infrastructure Support",
    title: "Powering Nigeria’s Industrial Transformation",
    description:
      "Driving regional self-reliance and operational excellence through world-scale engineering and energy support services.",
    btnText: "Explore Our Businesses",
    btnHref: "/#businesses",
  },
  {
    bgSrc: "/assets/hero/hero-sustainability.png",
    subtitle: "Sustainable Impact",
    title: "Sustainable Impact. Real Progress.",
    description:
      "Neweraplus Group creates ventures that serve stakeholders, host communities, and future generations with integrity and environmental stewardship.",
    btnText: "View Sustainability Strategy",
    btnHref: "/#sustainability",
  },
  {
    bgSrc: "/assets/hero/hero-infrastructure.jpg",
    subtitle: "Building for Tomorrow",
    title: "Building for Tomorrow, Today",
    description:
      "Where durable infrastructure, healthcare, and industrial innovation create lasting value for all.",
    btnText: "Our Projects",
    btnHref: "/projects",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative w-full h-[75vh] min-h-[580px] max-h-[850px] overflow-hidden bg-[#0b132b] flex items-center justify-center">
      {/* Background Slides */}
      {slides.map((s, idx) => {
        const isActive = idx === current;
        return (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <div className="relative w-full h-full">
              <Image
                src={s.bgSrc}
                alt="Neweraplus Group Hero"
                fill
                priority={idx === 0}
                className="object-cover object-center"
              />
            </div>
            {/* Dark overlay matching Index.html */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0c1124]/45 to-[#0c1124]/85" />
          </div>
        );
      })}

      {/* Slide Content */}
      <div className="relative z-20 max-w-[1180px] w-full px-6 sm:px-12 text-center text-white">
        {slide.subtitle && (
          <div className="text-sm sm:text-base md:text-[19px] font-bold tracking-[2px] uppercase mb-3.5 drop-shadow-md">
            {slide.subtitle}
          </div>
        )}

        <h1 className="text-3xl sm:text-5xl md:text-[58px] font-extrabold leading-[1.15] mb-5 font-serif drop-shadow-lg">
          {slide.title}
        </h1>

        {slide.description && (
          <p className="text-sm sm:text-base md:text-[19px] leading-relaxed max-w-[840px] mx-auto mb-8 text-white/95 font-normal drop-shadow">
            {slide.description}
          </p>
        )}

        <div>
          <Link
            href={slide.btnHref}
            className="inline-flex items-center gap-3 bg-[#cd0001] hover:bg-[#e60002] text-white text-[14px] sm:text-[15px] font-bold tracking-[1.5px] uppercase px-7 sm:px-9 py-3.5 sm:py-4 rounded transition-all duration-300 shadow-[0_4px_18px_rgba(205,0,1,0.45)] hover:shadow-[0_8px_24px_rgba(205,0,1,0.6)] hover:-translate-y-0.5"
          >
            <span>{slide.btnText}</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Prev / Next Buttons */}
      <button
        type="button"
        onClick={prev}
        aria-label="Previous Slide"
        className="absolute left-4 sm:left-9 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white/20 hover:bg-[#cd0001] hover:border-[#cd0001] backdrop-blur-md border border-white/40 text-white z-30 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <button
        type="button"
        onClick={next}
        aria-label="Next Slide"
        className="absolute right-4 sm:right-9 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white/20 hover:bg-[#cd0001] hover:border-[#cd0001] backdrop-blur-md border border-white/40 text-white z-30 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setCurrent(idx)}
            aria-label={`Slide ${idx + 1}`}
            className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
              idx === current
                ? "bg-[#cd0001] border-2 border-white scale-125"
                : "bg-white/40 border-2 border-transparent hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
