import Image from "next/image";
import React from "react";
import { HeartHandshake, Bookmark, Pencil, Share2, Check } from "lucide-react";
const IdeasDetailPage = async ({ params }) => {
  const { id } = await params;

  const data = await fetch(`http://localhost:5000/ideas/${id}`);
  const idea = await data.json();
  const {
    title,
    shortDescription,
    detailedDescription,
    imageUrl,
    category,
    targetAudience,
    tags,
    estimatedBudget,
    problemStatement,
    proposedSolution,
  } = idea;

  return (
    <div className="min-h-screen bg-[#FAF8FF]">
      <div className="w-10/12 md:w-11/12 mx-auto py-16 px-6 md:px-16  min-h-screen ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* left side section  */}
          <div className="lg:col-span-2">
            <div className="badge badge-soft badge-primary">{tags}</div>
            <h1 className="text-4xl font-bold mt-4">{idea.title}</h1>
            <Image
              src={imageUrl}
              alt={title}
              width={900}
              height={700}
              className="rounded-2xl mt-6"
            />

            <div>
              <h1 className="text-5xl font-semibold mt-12">
                - Concept Overview
              </h1>
              <p className="text-gray-400 text-lg mt-4">
                {detailedDescription}
              </p>
            </div>
            <div className="mt-16 space-y-10 flex gap-10">
              <div className="border border-gray-200 bg-white rounded-2xl p-10 mt-10">
                <h2 className="text-3xl font-bold text-[#111827] mb-5 flex items-center gap-3">
                  <span className="text-red-500">⚠</span>
                  Problem Statement
                </h2>

                <p className="text-gray-600 text-lg">{problemStatement}</p>
              </div>
              <div className="border border-gray-200 bg-white rounded-2xl p-10 mt-10">
                <h2 className="text-3xl font-bold text-[#111827] mb-5 flex items-center gap-3">
                  <span className="text-green-500">✦</span>
                  Proposed Solution
                </h2>
                <p className="text-gray-600 text-lg">{proposedSolution}</p>
              </div>
            </div>
          </div>
          {/* Right side section */}
          <div>
            <div className="w-full max-w-85 p-4 bg-[#f4f7ff] flex flex-col gap-6 font-sans min-h-screen">
              {/* 1. User Profile Header */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-3.5 flex items-center gap-3.5">
                <img
                  src="/api/placeholder/48/48"
                  alt="Dr. Elena Volkov"
                  className="w-11 h-11 rounded-full object-cover shadow-sm"
                />
                <div className="flex flex-col">
                  <h3 className="font-semibold text-gray-900 text-sm leading-tight">
                    Dr. Elena Volkov
                  </h3>
                  <p className="text-[11px] text-gray-500 mt-0.5">
                    Chief Visionary @ AquaSynthetix
                  </p>
                </div>
              </div>

              {/* 2. Main Action Card */}
              <div className="bg-[#eef2ff] rounded-[24px] p-6 shadow-sm">
                <h2 className="text-lg font-bold text-gray-900 mb-4 tracking-tight">
                  Support this Idea
                </h2>

                <div className="flex flex-col gap-2.5 mb-7">
                  {/* Primary Action */}
                  <button className="w-full bg-[#4f46e5] hover:bg-[#4338ca] text-white font-medium py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors">
                    <HeartHandshake size={18} />
                    <span className="text-sm">Pledge Funding</span>
                  </button>

                  {/* Secondary Action */}
                  <button className="w-full bg-transparent border border-[#a5b4fc] text-[#4f46e5] font-medium py-3 px-4 rounded-xl flex items-center justify-center gap-2 hover:bg-white/50 transition-colors">
                    <Bookmark size={18} />
                    <span className="text-sm">Save to Vault</span>
                  </button>

                  {/* Tertiary Action */}
                  <button className="w-full bg-[#dbeafe]/50 text-[#475569] font-medium py-3 px-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#dbeafe] transition-colors">
                    <Pencil size={18} />
                    <span className="text-sm">Update Idea</span>
                  </button>

                  {/* Ghost Action */}
                  <button className="w-full text-[#64748b] font-medium py-3 px-4 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-100/50 transition-colors">
                    <Share2 size={18} />
                    <span className="text-sm">Share Innovation</span>
                  </button>
                </div>

                {/* Statistics Row */}
                <div className="border-t border-[#c7d2fe] pt-5 flex justify-between px-1">
                  <div className="text-center flex flex-col gap-0.5">
                    <div className="text-xl font-bold text-gray-900">1.2k</div>
                    <div className="text-[9px] font-bold text-gray-500 tracking-wider">
                      FOLLOWERS
                    </div>
                  </div>
                  <div className="text-center flex flex-col gap-0.5">
                    <div className="text-xl font-bold text-gray-900">48</div>
                    <div className="text-[9px] font-bold text-gray-500 tracking-wider">
                      MENTORS
                    </div>
                  </div>
                  <div className="text-center flex flex-col gap-0.5">
                    <div className="text-xl font-bold text-gray-900">8</div>
                    <div className="text-[9px] font-bold text-gray-500 tracking-wider">
                      PATENTS
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeasDetailPage;
