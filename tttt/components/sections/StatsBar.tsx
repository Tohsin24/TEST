import { Globe, Users, Factory } from "lucide-react";

export default function StatsBar() {
  return (
    <section className="relative z-20 -mt-10 sm:-mt-14 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="bg-white rounded-lg shadow-[0_12px_40px_rgba(0,0,0,0.12)] border border-gray-100 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 overflow-hidden">
        {/* Item 1 */}
        <div className="p-6 sm:p-8 flex items-center gap-5 hover:bg-slate-50 transition-colors">
          <div className="w-14 h-14 rounded-full bg-red-50 text-[#cd0001] flex items-center justify-center shrink-0">
            <Globe className="w-7 h-7" />
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#110c5b] tracking-tight">
              12+
            </div>
            <div className="text-sm font-medium text-gray-600 mt-1">
              Operational Hubs &amp; States
            </div>
          </div>
        </div>

        {/* Item 2 */}
        <div className="p-6 sm:p-8 flex items-center gap-5 hover:bg-slate-50 transition-colors">
          <div className="w-14 h-14 rounded-full bg-red-50 text-[#cd0001] flex items-center justify-center shrink-0">
            <Users className="w-7 h-7" />
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#110c5b] tracking-tight">
              5,000+
            </div>
            <div className="text-sm font-medium text-gray-600 mt-1">
              Skilled Professionals &amp; Workforce
            </div>
          </div>
        </div>

        {/* Item 3 */}
        <div className="p-6 sm:p-8 flex items-center gap-5 hover:bg-slate-50 transition-colors">
          <div className="w-14 h-14 rounded-full bg-red-50 text-[#cd0001] flex items-center justify-center shrink-0">
            <Factory className="w-7 h-7" />
          </div>
          <div>
            <div className="text-lg sm:text-xl font-extrabold text-[#110c5b] leading-tight">
              100+ Turnkey Projects
            </div>
            <div className="text-sm font-medium text-gray-600 mt-1">
              Delivered with Safety &amp; Excellence
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
