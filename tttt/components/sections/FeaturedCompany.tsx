import Link from "next/link";
import SiteImage from "@/components/ui/SiteImage";

export default function FeaturedCompany() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="absolute -left-3 -top-3 h-full w-full border-2 border-[#cd0001] sm:-left-6 sm:-top-6"></div>
            <div className="relative h-[500px] w-full overflow-hidden shadow-2xl">
              <SiteImage
                src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1200&auto=format&fit=crop"
                alt="Engineering"
              />
            </div>
          </div>
          {/* Content Side */}
          <div>
            <p className="eyebrow mb-5">
              Featured Subsidiary
            </p>
            <h2 className="editorial-section-heading mb-8">
              Gsixmas Engineering Limited
            </h2>
            <p className="text-gray-600 text-lg leading-9 mb-8">
              Delivering innovative engineering and infrastructure
              solutions designed to support sustainable development
              and industrial growth across Nigeria.
            </p>
            <div className="space-y-5 mb-10">
              <div className="flex gap-4">
                <div className="mt-2 h-2.5 w-2.5 bg-[#cd0001]"></div>
                <p className="text-gray-700">
                  Infrastructure & Industrial Engineering
                </p>
              </div>
              <div className="flex gap-4">
                <div className="mt-2 h-2.5 w-2.5 bg-[#cd0001]"></div>
                <p className="text-gray-700">
                  Operational Presence in Benin & Port-Harcourt
                </p>
              </div>
              <div className="flex gap-4">
                <div className="mt-2 h-2.5 w-2.5 bg-[#cd0001]"></div>
                <p className="text-gray-700">
                  Focused on Quality, Precision & Safety
                </p>
              </div>
            </div>
            <Link
              href="/companies/gsixmas-engineering"
              className="editorial-button"
            >
              Explore Company
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
