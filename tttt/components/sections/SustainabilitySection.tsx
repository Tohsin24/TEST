import Link from "next/link";
import { CheckCircle2, TrendingUp, DollarSign } from "lucide-react";

const pillars = [
  "Financial",
  "Institutional",
  "Economic",
  "Operational",
  "Cultural",
  "Environmental",
  "Social",
];

export default function SustainabilitySection() {
  return (
    <section id="sustainability" className="py-24 bg-[#f4f3ef] border-t border-[#e2ded5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
          {/* Left Column: Story & 7 Pillars */}
          <div className="lg:col-span-7">
            <div className="text-xs sm:text-sm font-bold text-[#cd0001] uppercase tracking-[0.2em] mb-3">
              Sustainability
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#110c5b] font-serif leading-tight mb-6">
              Building prosperity &amp; self-sufficiency
            </h2>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
              At Neweraplus Group, our approach to sustainability goes beyond
              compliance with regulatory expectations. We are driven by a desire
              to contribute to, and positively impact the development of our host
              communities and society at large.
            </p>

            <div className="mb-6 font-semibold text-[#110c5b] text-base">
              Our 7 Sustainability Pillars are:
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 mb-10">
              {pillars.map((pillar) => (
                <div
                  key={pillar}
                  className="flex items-center gap-2.5 bg-white border border-gray-200 px-4 py-3 rounded-lg shadow-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span className="text-sm font-bold text-gray-800">{pillar}</span>
                </div>
              ))}
            </div>

            <div>
              <Link
                href="/about"
                className="inline-flex items-center gap-3 bg-[#110c5b] hover:bg-[#cd0001] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-8 py-4 rounded shadow transition-all duration-300"
              >
                <span>Get started today!</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Key Metrics */}
          <div className="lg:col-span-5 space-y-6">
            {/* Metric 1 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-md flex items-start gap-6">
              <div className="w-16 h-16 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <TrendingUp className="w-8 h-8" />
              </div>
              <div>
                <div className="text-4xl sm:text-5xl font-black text-[#110c5b] tracking-tight">
                  30<span className="text-[#cd0001]">%</span>
                </div>
                <h4 className="text-base font-bold text-gray-900 mt-1 uppercase tracking-wide">
                  Growth
                </h4>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  Year-on-year operational and project delivery growth across all
                  subsidiary engineering, energy, and construction operations.
                </p>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-md flex items-start gap-6">
              <div className="w-16 h-16 rounded-xl bg-blue-50 text-[#110c5b] flex items-center justify-center shrink-0">
                <DollarSign className="w-8 h-8 text-[#cd0001]" />
              </div>
              <div>
                <div className="text-4xl sm:text-5xl font-black text-[#110c5b] tracking-tight">
                  100<span className="text-[#cd0001]">%</span>
                </div>
                <h4 className="text-base font-bold text-gray-900 mt-1 uppercase tracking-wide">
                  Safety &amp; Compliance
                </h4>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  Strict adherence to statutory safety regulations, environmental
                  stewardship, and community development charters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
