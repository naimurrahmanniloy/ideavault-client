"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const IdeaCard = ({ idea }) => {
  const { imageUrl, title, tags, detailedDescription, estimatedBudget } = idea;
  return (
    <div className="max-w-sm rounded-2xl border border-gray-200 bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Image */}
      <div className="relative">
        <Image
          src={imageUrl}
          alt={title}
          width={500}
          height={300}
          className="w-full h-48 object-cover"
        />

        {/* Tag */}
        <span className="absolute top-3 left-3 bg-white text-gray-700 text-xs font-medium px-3 py-1 rounded-full shadow">
          {tags}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>

        <p className="text-gray-500 text-sm mt-2 line-clamp-3">
          {detailedDescription}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-5">
          {/* Maturity */}
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Budget: ${estimatedBudget}
          </div>

          {/* Link */}

          <Link
            href={`/ideas/${idea._id}`}
            className="flex items-center gap-1 text-indigo-600 text-sm font-medium hover:gap-2 transition-all"
          >
            {" "}
            <button className="flex items-center gap-1 text-indigo-600 text-sm font-medium hover:gap-2 transition-all cursor-pointer">
              View Details <ArrowRight size={16} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IdeaCard;
