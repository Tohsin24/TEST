"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, ChevronRight } from "lucide-react";
import { CONTACT } from "@/lib/site";

export default function Footer() {
  return (
    <footer id="colophon" className="bg-[#0b1021] text-white pt-20 pb-12 border-t-4 border-[#cd0001]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          {/* Column 1: Brand & Social */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-11 w-11 rounded bg-[#cd0001] flex items-center justify-center text-white font-extrabold text-xl shadow">
                N+
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-white block">
                  Neweraplus
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-gray-400 block -mt-1 font-semibold">
                  Group of Companies Ltd.
                </span>
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed mb-8">
              Delivering innovative, reliable, and sustainable solutions across
              engineering, oil &amp; gas, healthcare, and modern construction
              infrastructure.
            </p>

            {/* Social Icons with inline SVGs */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded bg-white/10 hover:bg-[#1877f2] flex items-center justify-center text-white transition-all hover:scale-110"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Twitter / X"
                className="w-10 h-10 rounded bg-white/10 hover:bg-black flex items-center justify-center text-white transition-all hover:scale-110"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded bg-white/10 hover:bg-[#e4405f] flex items-center justify-center text-white transition-all hover:scale-110"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded bg-white/10 hover:bg-[#0077b5] flex items-center justify-center text-white transition-all hover:scale-110"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Contact */}
          <div>
            <h3 className="text-xl font-bold font-serif mb-6 text-white tracking-wide">
              Contact
            </h3>

            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#cd0001] shrink-0 mt-0.5" />
                <div>
                  <a href={CONTACT.phoneHref} className="hover:text-white transition">
                    {CONTACT.phone}
                  </a>
                  <br />
                  <a href="tel:+2348073953300" className="hover:text-white transition">
                    +234 807 395 3300
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#cd0001] shrink-0 mt-0.5" />
                <div>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="hover:text-white transition block"
                  >
                    {CONTACT.email}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#cd0001] shrink-0 mt-0.5" />
                <div>
                  <span className="text-gray-200 font-medium">
                    {CONTACT.address}
                  </span>
                  <br />
                  <span className="text-gray-400 text-xs">
                    Operational Centers: Benin City &amp; Port-Harcourt
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links & Updates */}
          <div>
            <h3 className="text-xl font-bold font-serif mb-6 text-white tracking-wide">
              Quick Links &amp; Updates
            </h3>

            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link
                  href="/companies"
                  className="hover:text-white hover:translate-x-1 inline-flex items-center gap-2 transition"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#cd0001]" />
                  <span>Our Companies &amp; Subsidiaries</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-white hover:translate-x-1 inline-flex items-center gap-2 transition"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#cd0001]" />
                  <span>Major Delivered Projects</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white hover:translate-x-1 inline-flex items-center gap-2 transition"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#cd0001]" />
                  <span>Client &amp; Partner Inquiries</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white hover:translate-x-1 inline-flex items-center gap-2 transition"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#cd0001]" />
                  <span>Corporate Governance &amp; HSSE</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-xl font-bold font-serif mb-6 text-white tracking-wide">
              Newsletter
            </h3>

            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Subscribe to our corporate newsletter for quarterly operational
              updates and project milestones.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you for subscribing!");
              }}
              className="space-y-3"
            >
              <input
                type="email"
                placeholder="Enter your email address"
                required
                className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#cd0001] focus:ring-1 focus:ring-[#cd0001]"
              />
              <button
                type="submit"
                className="w-full bg-[#cd0001] hover:bg-[#e60002] text-white text-xs font-bold uppercase tracking-wider py-3.5 rounded transition shadow"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© 2026 Neweraplus Group of Companies Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="/about" className="hover:text-white transition">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-white transition">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
