import type { Metadata } from "next";
import Image from "next/image";
import { Mail, MapPin, Phone, Clock, Building2, Wrench, Fuel } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the Neweraplus Group team for enquiries and project discussions.",
  alternates: { canonical: "/contact" },
};

const operationalCenters = [
  {
    title: "Corporate Headquarters & Administrative Centre",
    location: "Plot 20–21 Newlayer, Off Ughelli–Warri Road, Ughelli, Delta State",
    image: "/assets/hero/hero-ipo.png",
    icon: Building2,
    badge: "Executive Office",
    contact: "+234 805 123 4567",
  },
  {
    title: "Engineering Fabrication & Technical Yard",
    location: "Industrial Corridor, Delta State Operations Yard",
    image: "/assets/hero/hero-polypropylene.jpg",
    icon: Wrench,
    badge: "Heavy Engineering",
    contact: "+234 703 456 7890",
  },
  {
    title: "Energy & Infrastructure Operations Hub",
    location: "Regional Supply & Terminal Operations, Niger Delta",
    image: "/assets/hero/hero-refinery.jpg",
    icon: Fuel,
    badge: "Oil & Gas / Energy",
    contact: "energy@neweraplusgroup.com",
  },
];

export default function ContactPage() {
  return (
    <main>
      {/* Hero with background image */}
      <section className="relative overflow-hidden py-32 bg-[#0b132b]">
        <div className="absolute inset-0">
          <Image
            src="/assets/hero/hero-infrastructure.jpg"
            alt="Contact Neweraplus Group"
            fill
            priority
            className="object-cover object-center opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b1021]/85 via-[#0b1021]/75 to-[#0b1021]/95" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[0.3em] text-[#cd0001] font-bold text-sm">
            Contact Us
          </p>

          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold text-white font-serif drop-shadow-md">
            Let&apos;s Start a Conversation
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-white/90 leading-relaxed font-normal drop-shadow">
            We&apos;d love to hear about your project. Reach out to our multidisciplinary team
            through any of the channels below or visit our operational facilities.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div>
            <p className="uppercase tracking-[0.3em] text-[#cd0001] font-bold text-xs sm:text-sm">
              Reach Out
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#110c5b] font-serif">
              Get In Touch With Our Team
            </h2>
            <p className="mt-4 text-gray-600 leading-8">
              Our executive and project teams are available to answer your enquiries,
              review tender specifications, and discuss partnerships across our business divisions.
            </p>

            <div className="mt-10 space-y-7">
              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#110c5b] flex items-center justify-center shrink-0 border border-blue-100">
                  <Phone className="w-5 h-5 text-[#cd0001]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#110c5b] text-base">Phone Numbers</h3>
                  <p className="text-gray-600 mt-1">
                    <a href="tel:+2348051234567" className="hover:text-blue-900 hover:underline">
                      +234 805 123 4567
                    </a>
                  </p>
                  <p className="text-gray-600">
                    <a href="tel:+2347034567890" className="hover:text-blue-900 hover:underline">
                      +234 703 456 7890
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#110c5b] flex items-center justify-center shrink-0 border border-blue-100">
                  <Mail className="w-5 h-5 text-[#cd0001]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#110c5b] text-base">Official Email</h3>
                  <p className="text-gray-600 mt-1">
                    <a href="mailto:info@neweraplusgroup.com" className="hover:text-blue-900 hover:underline">
                      info@neweraplusgroup.com
                    </a>
                  </p>
                  <p className="text-gray-600">
                    <a href="mailto:admin@neweraplusgroup.com" className="hover:text-blue-900 hover:underline">
                      admin@neweraplusgroup.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#110c5b] flex items-center justify-center shrink-0 border border-blue-100">
                  <MapPin className="w-5 h-5 text-[#cd0001]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#110c5b] text-base">Registered Office</h3>
                  <p className="text-gray-600 mt-1 leading-relaxed">
                    Plot 20–21 Newlayer,
                    <br />
                    Off Ughelli–Warri Road,
                    <br />
                    Ughelli, Delta State, Nigeria.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#110c5b] flex items-center justify-center shrink-0 border border-blue-100">
                  <Clock className="w-5 h-5 text-[#cd0001]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#110c5b] text-base">Office Hours</h3>
                  <p className="text-gray-600 mt-1">Monday – Friday: 8:00 AM – 5:00 PM</p>
                  <p className="text-gray-500 text-sm">Site Operations: 24/7 Shift Coverage</p>
                </div>
              </div>
            </div>

            {/* Operational Facility Showcase Image Card in Vacant Space */}
            <div className="mt-10 relative h-72 w-full rounded-3xl overflow-hidden shadow-xl border border-gray-100 group">
              <Image
                src="/assets/hero/hero-ipo.png"
                alt="Neweraplus Corporate Operational Headquarters"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1021]/90 via-[#0b1021]/40 to-transparent" />
              <div className="absolute bottom-5 left-6 right-6 text-white">
                <span className="inline-block px-3 py-1 bg-yellow-500 text-blue-950 text-xs font-bold rounded-full uppercase tracking-wider mb-2">
                  Headquarters &amp; Yard
                </span>
                <h4 className="text-xl font-bold font-serif">Plot 20–21 Newlayer Complex</h4>
                <p className="text-xs text-blue-200 mt-1">Ughelli–Warri Corridor, Delta State, Nigeria</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-50 rounded-3xl p-8 sm:p-10 shadow-lg border border-gray-200">
            <p className="uppercase tracking-[0.2em] text-[#cd0001] font-bold text-xs">
              Direct Enquiry
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-blue-950 font-serif">
              Send Us a Message
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Fill in the form below and an appropriate project lead will respond within 24 hours.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Regional Facilities & Strategic Hubs Section with Images */}
      <section className="py-24 bg-[#f8f7f4] border-t border-[#ebe7de]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="uppercase tracking-[0.3em] text-[#cd0001] font-bold text-xs sm:text-sm">
              Our Locations
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#110c5b] font-serif">
              Operational Facilities &amp; Hubs
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed text-base sm:text-lg">
              Strategically positioned across southern Nigeria to support fast mobilization,
              engineering services, and continuous project delivery.
            </p>
            <div className="mt-4 flex justify-center">
              <span className="w-16 h-1 bg-[#cd0001] rounded-full inline-block" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {operationalCenters.map((center) => {
              const Icon = center.icon;
              return (
                <div
                  key={center.title}
                  className="bg-white rounded-3xl overflow-hidden shadow-md border border-gray-200 flex flex-col group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-56 w-full bg-zinc-900 overflow-hidden">
                    <Image
                      src={center.image}
                      alt={center.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <span className="absolute top-4 left-4 px-3 py-1 bg-yellow-500 text-blue-950 text-xs font-bold rounded-full uppercase tracking-wider">
                      {center.badge}
                    </span>
                    <div className="absolute bottom-4 left-5 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#cd0001] text-white flex items-center justify-center shadow">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-[#110c5b] font-serif">
                        {center.title}
                      </h3>
                      <p className="mt-3 text-sm text-gray-600 leading-relaxed flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-[#cd0001] shrink-0 mt-1" />
                        <span>{center.location}</span>
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                      <span className="font-medium text-[#110c5b]">Direct Line:</span>
                      <span className="font-semibold text-gray-700">{center.contact}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
