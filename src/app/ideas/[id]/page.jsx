import Image from "next/image";
import React from "react";
import {
  HeartHandshake,
  Bookmark,
  Pencil,
  Share2,
  User,
  Trash2,
  Check,
} from "lucide-react";
import { Button } from "@heroui/react";

const IdeasDetailPage = async ({ params }) => {
  const { id } = await params;
  const comments = [
    {
      id: 1,
      name: "Marcus Chen",
      role: "Angel Investor",
      time: "2 hours ago",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
      comment:
        "The energy reduction claims are bold. Do you have comparative data from the lab prototypes yet? I'd love to see the brine disposal strategy as well.",
    },
    {
      id: 2,
      name: "Sarah Jenkins",
      role: "Marine Biologist",
      time: "5 hours ago",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
      comment:
        "Bio-mimetic osmotic structures are definitely the way forward. Have you considered the impact of bio-fouling on the neural membrane over long-term deployment?",
    },
  ];

  const data = await fetch(`http://localhost:5000/ideas/${id}`);
  const idea = await data.json();
  const {
    title,
    shortDescription,
    detailedDescription,
    imageUrl,
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
                {detailedDescription} {shortDescription}
              </p>
            </div>
            <div className="mt-16 space-y-10 flex gap-10">
              <div className="border border-gray-200 bg-[#f8fafc] rounded-2xl p-10 mt-10">
                <h2 className="text-3xl font-bold text-[#111827] mb-5 flex items-center gap-3">
                  <span className="text-red-500">⚠</span>
                  Problem Statement
                </h2>

                <p className="text-gray-600 text-lg">{problemStatement}</p>
              </div>
              <div className="border border-gray-200 bg-[#f8fafc] rounded-2xl p-10 mt-10">
                <h2 className="text-3xl font-bold text-[#111827] mb-5 flex items-center gap-3">
                  <span className="text-green-500">✦</span>
                  Proposed Solution
                </h2>
                <p className="text-gray-600 text-lg">{proposedSolution}</p>
              </div>
            </div>
            <div>
              <div className="min-h-screen bg-[#eef3ff] px-4 py-8 md:px-10">
                <div className="mx-auto max-w-5xl">
                  <div className="w-full rounded-[32px] p-5 md:p-8 mt-10 bg-[#f8fafc] border border-gray-200 shadow-sm  ">
                    <div className="grid gap-6 lg:grid-cols-2">
                      {/* Budget Card */}
                      <div className="border border-gray-200 rounded-2xl p-10 relative text-center">
                        <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-emerald-200/30 blur-3xl"></div>

                        <p className="text-2xl font-bold uppercase tracking-[0.2em] text-indigo-500">
                          Estimated Budget
                        </p>

                        <div className="mt-4 flex flex-wrap items-end gap-2 justify-center align-center">
                          <h2 className="text-4xl font-bold tracking-tight text-slate-900">
                            ${estimatedBudget}
                          </h2>
                        </div>
                      </div>

                      <div className="border border-gray-200 rounded-2xl p-10 relative text-center">
                        <div className="absolute left-0 top-0 h-32 w-32 rounded-full bg-indigo-200/30 blur-3xl"></div>

                        <p className="text-2xl font-bold uppercase tracking-[0.2em] text-indigo-500">
                          Target Audience
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3 text-sm ">
                          <div className="badge badge-outline badge-primary mx-auto">
                            {targetAudience}
                          </div>
                        </div>

                        <div className="mt-8 rounded-2xl border border-gray-500 p-4">
                          <p className="text-sm leading-6 text-slate-600">
                            Focused on sustainable infrastructure partners and
                            coastal innovation ecosystems.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Community Section */}
                  <section className="mt-16">
                    <h1 className="text-3xl font-bold text-slate-900">
                      Community Interactions
                    </h1>

                    {/* Comment Box */}
                    <div className="mt-8 flex flex-col gap-4 rounded-3xl bg-white/50 p-5 shadow-sm md:flex-row md:items-start">
                      {/* Icon */}
                      <div className="flex mb-12 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                        <User
                          className=" border border-indigo-600 rounded-full p-2 text-indigo-600"
                          size={40}
                        />
                      </div>

                      {/* Input Area */}
                      <div className="flex-1">
                        <textarea
                          rows={4}
                          placeholder="Share your professional feedback..."
                          className="w-full p-10 resize-none rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm outline-none transition focus:border-indigo-400"
                        />

                        <div className="mt-4 flex justify-end">
                          <button className="cursor-pointer rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700">
                            Post Comment
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Comments */}
                    <div className="mt-8 space-y-5">
                      {comments.map((comment) => (
                        <div
                          key={comment.id}
                          className="rounded-3xl bg-white/60 p-5 shadow-sm backdrop-blur"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex gap-4">
                              <img
                                src={comment.image}
                                alt={comment.name}
                                className="h-12 w-12 rounded-full object-cover"
                              />

                              <div>
                                <h3 className="font-semibold text-slate-900">
                                  {comment.name}
                                </h3>

                                <p className="text-xs text-slate-500">
                                  {comment.time} • {comment.role}
                                </p>
                              </div>
                            </div>

                            {/* Action Icons */}
                            <div className="flex items-center gap-3 text-slate-400">
                              <button className="hover:text-slate-700">
                                ✏️
                              </button>
                              <button className="hover:text-red-500">🗑️</button>
                            </div>
                          </div>

                          <p className="mt-5 text-[15px] leading-7 text-slate-600">
                            {comment.comment}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
          {/* Right side section */}
          <div>
            <div className=" w-full max-w-7  flex flex-col gap-6 p-10 rounded-3xl border border-gray-200 shadow-sm ">
              {/* 1. User Profile Header */}
              <div className="bg-white rounded-2xl shadow-sm border  p-5 flex items-center gap-3.5">
                {/* <img
                  src="/api/placeholder/48/48"
                  alt="Dr. Elena Volkov"
                  className="w-11 h-11 rounded-full object-cover shadow-sm"
                /> */}
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
              <div className="rounded-[24px] p-6 text-center space-y-6 ">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
                  Support this Idea
                </h2>

                <div className="flex flex-col gap-5 mb-7 ">
                  {/* Primary Action */}
                  {/* <button className="w-full border font-medium py-3 px-4 rounded-xl flex items-center justify-center gap-2 cursor-pointer ">
                    <HeartHandshake size={18} />
                    <span className="text-lg ">Pledge Funding</span>
                  </button> */}
                  <Button variant="outline" className="w-full ">
                    <HeartHandshake size={18} />
                    <span className="text-lg ">Pledge Funding</span>
                  </Button>
                  {/* Secondary Action */}
                  <Button variant="outline" className="w-full">
                    <Bookmark size={18} />
                    <span className="text-lg">Save to Vault</span>
                  </Button>

                  {/* Tertiary Action */}
                  <Button variant="outline" className="w-full">
                    <Pencil size={18} />
                    <span className="text-lg">Update Idea</span>
                  </Button>

                  {/* Ghost Action */}
                  <Button variant="outline" className="w-full">
                    <Share2 size={18} />
                    <span className="text-lg">Share Innovation</span>
                  </Button>
                </div>

                {/* Statistics Row */}
                <div className="border-t border-[#c7d2fe] pt-5 flex justify-between px-1 mt-10 ">
                  <div className="text-center flex flex-col gap-0.5 mt-4">
                    <div className="text-xl font-bold text-gray-900">1.2k</div>
                    <div className="text-[9px] font-bold text-gray-500 tracking-wider">
                      FOLLOWERS
                    </div>
                  </div>
                  <div className="text-center flex flex-col gap-0.5 mt-4">
                    <div className="text-xl font-bold text-gray-900">48</div>
                    <div className="text-[9px] font-bold text-gray-500 tracking-wider">
                      MENTORS
                    </div>
                  </div>
                  <div className="text-center flex flex-col gap-0.5 mt-4">
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
