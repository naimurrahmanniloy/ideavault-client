"use client";

import { useState, useEffect } from "react";
import { Bookmark, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function TrendingInnovations() {
  // Empty array state dynamic assignment
  const [innovations, setInnovations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTrendingData = async () => {
      try {
        const response = await fetch("http://localhost:5000/ideas");
        const data = await response.json();
        setInnovations(data); //
      } catch (error) {
        console.error("Error fetching trending data:", error);
      } finally {
        setLoading(false);
      }
    };

    getTrendingData();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-20 text-gray-500">
        Loading innovations...
      </div>
    );
  }

  return (
    <section className="bg-[#f6f8ff] py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* HEADER SECTION */}
        <div className="flex justify-between items-end mb-10">
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
            className="group flex items-center gap-1 text-sm font-semibold text-indigo-600"
          >
            View all ideas <ArrowRight size={16} />
          </Link>
        </div>

        {/* 3-COLUMN DISPLAY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {innovations.slice(0, 3).map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-[2rem] p-8 flex flex-col justify-between min-h-[260px] border border-gray-100"
            >
              <div>
                <span className="text-xs font-bold px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-4 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm line-clamp-3">
                  {item.shortDescription}
                </p>
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-gray-50 mt-6">
                <span className="text-xs font-bold text-gray-500">
                  Budget: ${item.estimatedBudget}
                </span>
                <Link
                  href={`/ideas/${item._id}`}
                  className="text-xs font-bold text-indigo-600"
                >
                  View Details ›
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
