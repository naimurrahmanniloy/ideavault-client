"use client";

import { Bookmark, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function TrendingInnovations() {
  // Image dynamic patterns onujayi discrete badge colors allocation
  const innovations = [
    {
      id: 1,
      category: "AI",
      title: "NeuralPath Diagnostix",
      description:
        "An AI-driven diagnostic engine that identifies neurological patterns with 99% accuracy using mobile sensors.",
      avatars: [
        { text: "JD", bg: "bg-blue-100 text-blue-600" },
        { text: "AK", bg: "bg-indigo-600 text-white" },
      ],
      badgeClass: "bg-indigo-50 text-indigo-600",
    },
    {
      id: 2,
      category: "Sustainability",
      title: "H2O Capture Grid",
      description:
        "Passive atmospheric water generation using advanced biomimetic materials inspired by desert beetles.",
      avatars: [{ text: "MS", bg: "bg-blue-100 text-blue-600" }],
      badgeClass: "bg-emerald-100 text-emerald-700",
    },
    {
      id: 3,
      category: "FinTech",
      title: "VaultChain Ledger",
      description:
        "Decentralized intellectual property management system for independent creators and small R&D teams.",
      avatars: [
        { text: "RV", bg: "bg-gray-100 text-gray-600" },
        { text: "LW", bg: "bg-blue-100 text-blue-600" },
      ],
      badgeClass: "bg-purple-100 text-purple-600",
    },
    {
      id: 4,
      category: "Health",
      title: "SyncSleep Wearable",
      description:
        "A non-invasive device that uses acoustic stimulation to enhance deep sleep cycles and cognitive recovery.",
      avatars: [{ text: "MT", bg: "bg-gray-100 text-gray-600" }],
      badgeClass: "bg-blue-100 text-blue-600",
    },
    {
      id: 5,
      category: "SaaS",
      title: "CollabFlow OS",
      description:
        "A workspace OS designed specifically for asynchronous hardware engineering and prototyping teams.",
      avatars: [
        { text: "PL", bg: "bg-gray-100 text-gray-600" },
        { text: "BC", bg: "bg-indigo-600 text-white" },
      ],
      badgeClass: "bg-indigo-50 text-indigo-600",
    },
    {
      id: 6,
      category: "CleanTech",
      title: "UrbanWind Tiles",
      description:
        "Modular roofing tiles that capture low-velocity wind energy in urban environments without noise pollution.",
      avatars: [{ text: "FK", bg: "bg-blue-100 text-blue-600" }],
      badgeClass: "bg-emerald-100 text-emerald-700",
    },
  ];

  return (
    <section className="bg-[#f6f8ff] py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
          <div>
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest block mb-2">
              Hot Now
            </span>
            <h2 className="text-3xl font-extrabold text-[#111827] tracking-tight">
              Trending Innovations
            </h2>
          </div>

          <Link
            href="/ideas"
            className="group flex items-center gap-1 text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            View all ideas
            <ArrowRight
              size={16}
              className="transform group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        {/* --- GRID CARDS LAYOUT --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {innovations.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[2rem] border border-gray-100 p-8 flex flex-col justify-between hover:shadow-md transition-shadow duration-300 min-h-[260px]"
            >
              <div>
                {/* Card Top: Category Badge & Bookmark Icon */}
                <div className="flex justify-between items-center mb-5">
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full ${item.badgeClass}`}
                  >
                    {item.category}
                  </span>
                  <button className="text-gray-400 hover:text-gray-600 transition-colors">
                    <Bookmark size={18} />
                  </button>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 tracking-tight mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {item.description}
                </p>
              </div>

              {/* Card Footer: Avatars Stack & View Details Link */}
              <div className="flex justify-between items-center pt-4 border-t border-gray-50">
                {/* Avatars Stack */}
                <div className="flex -space-x-2">
                  {item.avatars.map((avatar, idx) => (
                    <div
                      key={idx}
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold border-2 border-white tracking-tighter ${avatar.bg}`}
                    >
                      {avatar.text}
                    </div>
                  ))}
                </div>

                {/* View Details Action */}
                <Link
                  href={`/ideas/${item.id}`}
                  className="group flex items-center gap-0.5 text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  View Details
                  <span className="transform group-hover:translate-x-0.5 transition-transform">
                    ›
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
