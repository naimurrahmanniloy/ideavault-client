"use client";

import Link from "next/link";

export default function CommunityStats() {
  const stats = [
    { id: 1, value: "10k+", label: "ACTIVE IDEAS" },
    { id: 2, value: "50k+", label: "VISIONARIES" },
    { id: 3, value: "250+", label: "GLOBAL PARTNERS" },
    { id: 4, value: "$1.2B", label: "FUNDING RAISED" },
  ];

  return (
    <section className="bg-[#f6f8ff] pb-24 px-6 md:px-12 flex flex-col items-center">
      <div className="max-w-6xl w-full mx-auto">
        {/* --- STATS SECTION --- */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[#111827] tracking-tight mb-12">
            Global Community Stats
          </h2>

          {/* Grid Layout for Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col items-center">
                {/* Number Dynamic Accent */}
                <span className="text-4xl md:text-5xl font-extrabold text-[#4f46e5] tracking-tight">
                  {stat.value}
                </span>
                {/* Small Header Label */}
                <span className="text-xs font-semibold text-gray-400 mt-3 tracking-widest uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* --- CTA BANNER BOX --- */}
        <div className="bg-[#4340d9] rounded-[2rem] p-8 md:p-12 text-center max-w-4xl mx-auto shadow-lg shadow-indigo-900/10">
          <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide mb-4">
            Ready to join the movement?
          </h3>
          <p className="text-indigo-100/80 max-w-2xl mx-auto text-xs md:text-sm leading-relaxed mb-8">
            Start protecting and growing your intellectual property today. Join
            the world s most secure innovation ecosystem.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Get Started Button */}
            <Link
              href="/signup"
              className="w-full sm:w-auto px-8 py-3 bg-white text-[#4340d9] font-medium text-sm rounded-xl hover:bg-indigo-50 transition-colors duration-200 shadow-sm text-center"
            >
              Get Started
            </Link>

            {/* Book a Demo Button */}
            <Link
              href="/demo"
              className="w-full sm:w-auto px-8 py-3 bg-transparent text-white/90 border border-white/30 font-medium text-sm rounded-xl hover:bg-white/10 transition-colors duration-200 text-center"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
