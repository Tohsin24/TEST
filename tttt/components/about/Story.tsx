import SiteImage from "@/components/ui/SiteImage";

export default function Story() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div>
            <p className="text-yellow-600 uppercase tracking-[0.3em] font-semibold">
              Our Story
            </p>

            <h2 className="mt-4 text-4xl font-bold text-blue-950">
              From Vision to a Diversified Group of Companies
            </h2>

            <p className="mt-8 text-gray-600 leading-8">
              Neweraplus Group of Companies Ltd. was founded with a vision to
              bridge the gap between service excellence and the evolving needs
              of Nigeria&apos;s industries. What began as a modest operation in
              Ughelli has grown into a diversified organization serving multiple
              sectors with professionalism, innovation and integrity.
            </p>

            <p className="mt-6 text-gray-600 leading-8">
              Today, Neweraplus continues to build sustainable businesses across
              engineering, oil & gas, healthcare and construction, delivering
              solutions that create lasting value for clients, partners and the
              communities we serve.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative h-[500px] w-full overflow-hidden rounded-3xl shadow-2xl">
              <SiteImage
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop"
                alt="Neweraplus team and operations"
              />
            </div>

            <div className="absolute -bottom-8 left-8 bg-blue-950 text-white rounded-2xl p-6 shadow-xl">
              <p className="text-sm uppercase tracking-widest text-yellow-400">
                Established
              </p>

              <h3 className="text-3xl font-bold mt-2">
                Building the Future
              </h3>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
