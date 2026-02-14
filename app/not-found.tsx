import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-4">
      <h1 className="text-2xl font-semibold text-slate-200">Page not found</h1>
      <p className="text-slate-400">The page you’re looking for doesn’t exist.</p>
      <Link
        href="/"
        className="text-sm font-medium text-indigo-400 hover:text-indigo-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
      >
        Back to home →
      </Link>
    </div>
  );
}
