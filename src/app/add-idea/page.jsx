"use client";
import React from "react";
import { Button, Input, Label, Separator } from "@heroui/react";
import { ShieldCheck } from "lucide-react";
import { SiGoogledocs } from "react-icons/si";
import { IoRocketOutline } from "react-icons/io5";
import { toast } from "react-hot-toast";
import { redirect } from "next/navigation";

const AddIdeaPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to backend)
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const res = await fetch("http://localhost:5000/ideas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    toast.success(`Idea launched successfully!`);
    redirect("/ideas");
  };

  return (
    <div className="min-h-screen  bg-[#FAF8FF] p-10">
      {/* text section  */}
      <div className="text-center pt-10">
        <div className="badge badge-soft badge-primary">
          Secure Intellectual Property
        </div>
        <h1 className="text-7xl font-semibold mt-4">Fuel Your Vision</h1>
        <p className="mt-6 text-gray-600 text-[1rem] mx-auto">
          Translate your spark of genius into a structured blueprint. Every
          great venture <br /> begins with a single, well-defined thought.
        </p>
      </div>

      {/* Input field section */}
      <form onSubmit={onSubmit}>
        <div className="w-full md:w-8/12 mx-auto px-6 md:px-16 mt-16 mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* LEFT SIDE */}
            <div className="lg:col-span-2 space-y-8">
              {/* Core Concept */}
              <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  {" "}
                  <IoRocketOutline className="text-[#4441CC]" />
                  Core Concept
                </h2>

                <div className="space-y-5">
                  <div className="flex flex-col gap-8">
                    <Label htmlFor="title">Idea Title</Label>

                    <Input
                      id="title"
                      name="title"
                      placeholder="e.g. Decentralized Green Energy Grid"
                      type="text"
                      className="h-10 bg-[#F2F3FF] "
                    />
                  </div>

                  <div className="flex flex-col gap-8">
                    <Label htmlFor="description">Short Description</Label>

                    <textarea
                      id="description"
                      name="shortDescription"
                      placeholder="A concise summary of your innovation"
                      className="min-h-30 bg-[#F2F3FF] rounded-xl border border-gray-200 p-4 outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>
              </div>

              {/* Detailed Description */}
              <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <SiGoogledocs className="text-[#4441CC]" />
                  Detailed Description
                </h2>

                <textarea
                  placeholder="Expand on the mechanics, vision, and roadmap..."
                  className="min-h-62.5 w-full bg-[#F2F3FF] rounded-xl border border-gray-200 p-4 outline-none focus:ring-2 focus:ring-indigo-500"
                  name="detailedDescription"
                />
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="space-y-8">
              {/* Category */}
              <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
                <h2 className="text-xl font-semibold mb-5">Category</h2>

                <Input
                  placeholder="Tech"
                  className="h-12 bg-[#F2F3FF] w-full"
                  name="category"
                />
              </div>

              {/* Budget */}
              <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
                <h2 className="text-xl font-semibold mb-5">Estimated Budget</h2>

                <Input
                  placeholder="$50,000"
                  className="h-12 bg-[#F2F3FF] w-full"
                  name="estimatedBudget"
                />

                <h2 className="text-xl font-semibold mb-5 mt-5">
                  Target Audience
                </h2>

                <Input
                  placeholder="e.g., Tech Enthusiasts, Entrepreneurs"
                  className="h-12 bg-[#F2F3FF] w-full"
                  name="targetAudience"
                />
              </div>

              {/* Tags */}
              <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
                <h2 className="text-xl font-semibold mb-5">Tags</h2>

                <Input
                  placeholder="SaaS, Mobile, Web3..."
                  className="h-12 w-full bg-[#F2F3FF]"
                  name="tags"
                />
              </div>
            </div>
          </div>
        </div>
        {/* problem field section */}
        <div className="w-full md:w-8/12 mx-auto px-6 md:px-16 mt-10 space-y-8">
          {/* Top Two Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Problem Statement */}
            <div className="bg-[#f8f8ff] border border-dashed border-gray-300 rounded-3xl p-8">
              <h2 className="text-3xl font-bold text-[#111827] mb-5 flex items-center gap-3">
                <span className="text-red-500">⚠</span>
                Problem Statement
              </h2>

              <textarea
                placeholder="Identify the core pain point your idea addresses..."
                className="w-full min-h-35 bg-transparent outline-none text-gray-600 placeholder:text-gray-400 resize-none"
                name="problemStatement"
              />
            </div>

            {/* Proposed Solution */}
            <div className="bg-[#f8f8ff] border border-[#cfc7ff] rounded-3xl p-8">
              <h2 className="text-3xl font-bold text-[#111827] mb-5 flex items-center gap-3">
                <span className="text-green-500">✦</span>
                Proposed Solution
              </h2>

              <textarea
                placeholder="How does your innovation solve this? Be specific about the 'magic'..."
                className="w-full min-h-35 bg-transparent outline-none text-gray-600 placeholder:text-gray-400 resize-none"
                name="proposedSolution"
              />
            </div>
          </div>

          {/* Visual Identity */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Left Side */}
              <div>
                <h2 className="text-3xl font-bold text-[#111827] mb-4">
                  Visual Identity
                </h2>

                <p className="text-gray-500 mb-6 leading-relaxed">
                  Add a cover image URL to help investors and collaborators
                  visualize your brands presence.
                </p>

                <Input
                  placeholder="https://cdn.pixabay.com/photos/your-concept-visual"
                  className="h-14 w-full rounded-xl"
                  name="imageUrl"
                />
              </div>

              {/* Right Side Preview */}
              <div className="border-2 border-dashed border-gray-300 rounded-3xl min-h-60 flex items-center justify-center bg-gray-50">
                <div className="text-center">
                  <div className="text-5xl mb-4 opacity-60">📷</div>

                  <p className="text-gray-500 font-medium">
                    Preview will appear here
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Separator className="my-10" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="flex items-center gap-2 text-gray-500">
              <ShieldCheck className="text-indigo-500" />
              Your idea is encrypted and time-stamped upon submission.
            </p>
            <div className="flex gap-4">
              <Button variant="outline" className="px-6 py-5">
                Save Draft
              </Button>
              <Button type="submit" color="primary" className="px-6 py-5">
                Launch Idea
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddIdeaPage;
