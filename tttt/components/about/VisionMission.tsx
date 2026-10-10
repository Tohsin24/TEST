import Image from "next/image";
import { Eye, Target } from "lucide-react";

export default function VisionMission() {
  return (
    <section className="bg-[#f8f7f4] py-24 border-t border-[#ebe7de]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="uppercase tracking-[0.3em] text-[#cd0001] font-bold text-xs sm:text-sm">
            Our Purpose
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#110c5b] font-serif">
            Driven by Vision. Guided by Mission.
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed text-base sm:text-lg">
            Every project we undertake is driven by a commitment to innovation,
            integrity and sustainable development across Nigeria.
          </p>
          <div className="mt-4 flex justify-center">
            <span className="w-16 h-1 bg-[#cd0001] rounded-full inline-block" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Vision */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-200 flex flex-col group hover:shadow-xl transition-all duration-300">
            <div className="relative h-56 w-full bg-zinc-900 overflow-hidden">
              <Image
                src="/assets/hero/hero-polypropylene.jpg"
                alt="Neweraplus Vision"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-5 left-6 flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#110c5b] text-white flex items-center justify-center shadow-lg border border-white/20">
                  <Eye className="w-6 h-6 text-[#cd0001]" />
                </div>
                <h3 className="text-2xl font-bold text-white font-serif drop-shadow">
                  Our Vision
                </h3>
              </div>
            </div>

            <div className="p-8 sm:p-10 flex-1 flex flex-col justify-center">
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                To become the premier industry leader across Nigeria and the
                West African sub-region, recognized for integrity, innovation,
                and an unwavering commitment to driving sustainable
                socioeconomic progress.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-200 flex flex-col group hover:shadow-xl transition-all duration-300">
            <div className="relative h-56 w-full bg-zinc-900 overflow-hidden">
              <Image
                src="/assets/hero/hero-sustainability.png"
                alt="Neweraplus Mission"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-5 left-6 flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#cd0001] text-white flex items-center justify-center shadow-lg border border-white/20">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white font-serif drop-shadow">
                  Our Mission
                </h3>
              </div>
            </div>

            <div className="p-8 sm:p-10 flex-1 flex flex-col justify-center">
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                To deliver reliable, high-quality, and cost-effective services
                through professional engineering excellence, advanced technology,
                and responsible business practices that consistently exceed
                client expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
