"use client";

import Link from "next/link";
import { ArrowLeft, SearchX } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center">
        {/* ICON */}
        <div className="mx-auto w-28 h-28 rounded-full bg-indigo-100 flex items-center justify-center shadow-sm">
          <SearchX size={50} className="text-indigo-600" />
        </div>

        {/* 404 */}
        <h1 className="mt-10 text-7xl md:text-8xl font-black text-slate-900 tracking-tight">
          404
        </h1>

        {/* TITLE */}
        <h2 className="mt-5 text-3xl md:text-4xl font-bold text-slate-800">
          Page Not Found
        </h2>

        {/* DESCRIPTION */}
        <p className="mt-5 text-slate-500 text-lg leading-8 max-w-xl mx-auto">
          The page you are looking for does not exist or may have been moved.
        </p>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-2xl bg-indigo-600 px-7 py-4 text-white font-semibold hover:bg-indigo-700 transition-all duration-300"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>

          <Link
            href="/ideas"
            className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-7 py-4 text-slate-700 font-semibold hover:bg-slate-50 transition-all duration-300"
          >
            Explore Ideas
          </Link>
        </div>

        {/* DECORATION */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-200/20 rounded-full blur-3xl -z-10"></div>

        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl -z-10"></div>
      </div>
    </div>
  );
};

export default NotFound;
