"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "sending" | "success" | "error";

const field =
  "w-full rounded-xl border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-yellow-500";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      form.reset();
      setStatus("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 space-y-6" noValidate={false}>
      <div>
        <label htmlFor="name" className="sr-only">Full Name</label>
        <input id="name" name="name" type="text" required maxLength={120}
          autoComplete="name" placeholder="Full Name" className={field} />
      </div>
      <div>
        <label htmlFor="email" className="sr-only">Email Address</label>
        <input id="email" name="email" type="email" required
          autoComplete="email" placeholder="Email Address" className={field} />
      </div>
      <div>
        <label htmlFor="subject" className="sr-only">Subject</label>
        <input id="subject" name="subject" type="text" maxLength={200}
          placeholder="Subject" className={field} />
      </div>
      <div>
        <label htmlFor="message" className="sr-only">Your Message</label>
        <textarea id="message" name="message" rows={6} required maxLength={5000}
          placeholder="Your Message" className={field} />
      </div>

      {/* Honeypot — hidden from people */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-xl bg-blue-950 py-4 text-white font-semibold hover:bg-blue-900 transition disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>

      <div aria-live="polite">
        {status === "success" && (
          <p className="rounded-xl bg-green-50 p-4 text-green-700">
            Thank you! Your message has been sent. We&apos;ll be in touch soon.
          </p>
        )}
        {status === "error" && (
          <p className="rounded-xl bg-red-50 p-4 text-red-700">{error}</p>
        )}
      </div>
    </form>
  );
}
