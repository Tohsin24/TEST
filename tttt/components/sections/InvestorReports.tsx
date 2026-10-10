import Link from "next/link";
import { Download, FileText, ArrowRight } from "lucide-react";

const reports = [
  {
    title: "Neweraplus Group 2025 Annual Review",
    subtitle: "Operational Milestones & Governance",
    year: "2025",
    color: "from-blue-900 to-indigo-950",
    href: "/about",
  },
  {
    title: "Engineering & Infrastructure Operations",
    subtitle: "Turnkey Project Delivery Highlights",
    year: "2025",
    color: "from-emerald-800 to-teal-950",
    href: "/projects",
  },
  {
    title: "HSSE & Sustainability Impact Report",
    subtitle: "Community Stewardship & Safety",
    year: "2025",
    color: "from-red-900 to-rose-950",
    href: "/about",
  },
];

export default function InvestorReports() {
  return (
    <section id="investor-relations" className="py-24 bg-[#110c5b] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Reports & Presentations */}
          <div className="lg:col-span-7">
            <div className="mb-10">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-serif mb-4">
                Reports &amp; Presentations
              </h2>
              <p className="text-blue-200 text-base sm:text-lg leading-relaxed max-w-xl">
                Neweraplus Group maintains high standards of corporate transparency,
                operational integrity, and stakeholder communication.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {reports.map((rep) => (
                <div
                  key={rep.title}
                  className="group bg-white/10 hover:bg-white/15 border border-white/15 rounded-lg p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-[#cd0001] shadow-lg"
                >
                  {/* Book / Report mock */}
                  <div
                    className={`h-40 w-full rounded bg-gradient-to-br ${rep.color} p-4 flex flex-col justify-between shadow-inner border border-white/20`}
                  >
                    <div className="flex justify-between items-start">
                      <FileText className="w-6 h-6 text-white/80" />
                      <span className="text-xs font-bold bg-white/20 px-2 py-0.5 rounded text-white">
                        {rep.year}
                      </span>
                    </div>
                    <div>
                      <div className="text-[11px] font-bold tracking-wider text-white/70 uppercase">
                        Annual Report
                      </div>
                      <div className="text-sm font-extrabold text-white leading-tight mt-1 line-clamp-2">
                        {rep.title}
                      </div>
                    </div>
                  </div>

                  {/* Title & Download link */}
                  <div className="mt-4">
                    <h3 className="text-sm font-bold text-white group-hover:text-red-300 transition-colors line-clamp-2">
                      {rep.title}
                    </h3>
                    <div className="mt-3 flex items-center gap-1.5 text-xs font-bold text-[#f95959] uppercase tracking-wider">
                      <span>View Report</span>
                      <Download className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Investor Relations info */}
          <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-10 backdrop-blur-md">
            <h3 className="text-3xl font-extrabold font-serif mb-6 leading-tight">
              <span className="text-[#cd0001]">Investor</span> &amp; Partner Relations
            </h3>

            <p className="text-blue-100 text-base leading-relaxed mb-8">
              Stay connected to the performance and strategic growth of Neweraplus
              Group. Our corporate relations portal offers access to project
              portfolios, sustainability benchmarks, and partnership opportunities
              across our active subsidiaries.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-[#cd0001] hover:bg-[#e60002] text-white text-sm font-bold uppercase tracking-wider px-8 py-4 rounded shadow-lg transition-all hover:-translate-y-0.5"
            >
              <span>Partner With Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
