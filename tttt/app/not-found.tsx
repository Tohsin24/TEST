import Link from "next/link";

export default function NotFound() {
  return (
    <main className="py-32 bg-white">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p className="uppercase tracking-[0.3em] text-yellow-600 font-semibold">404</p>
        <h1 className="mt-4 text-4xl font-bold text-blue-950">Page not found</h1>
        <p className="mt-4 text-gray-600">
          The page you are looking for doesn&apos;t exist or has moved.
        </p>
        <Link
          href="/"
          className="inline-block mt-8 rounded-xl bg-blue-950 px-6 py-3 text-white font-semibold hover:bg-blue-900 transition"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
