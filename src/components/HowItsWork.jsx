"use client";

import { Share2, BadgeCheck, Rocket } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: "Share",
      description:
        "Post your idea in our secure vault. You control who sees it and what details are public, protected by smart NDA protocols.",
      icon: <Share2 className="w-6 h-6 text-indigo-600" />,
      bgColor: "bg-indigo-50",
    },
    {
      id: 2,
      title: "Validate",
      description:
        "Get feedback from industry experts and potential users. Use our analytics to measure market interest and refine your pitch.",
      icon: <BadgeCheck className="w-6 h-6 text-white" />,
      bgColor: "bg-indigo-600", // Image-e majher icon ta solid purple chilo
    },
    {
      id: 3,
      title: "Scale",
      description:
        "Connect with angels, VCs, and strategic partners to secure funding and resources needed to bring your vision to life.",
      icon: <Rocket className="w-6 h-6 text-emerald-600" />,
      bgColor: "bg-emerald-100",
    },
  ];

  return (
    <section className="bg-[#f6f8ff] py-20 px-6 md:px-12 text-center">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#111827] tracking-tight">
          How it Works
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto mt-4 text-sm md:text-base leading-relaxed">
          From a spark in your mind to a global enterprise, we provide the
          infrastructure for your journey.
        </p>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white rounded-[2rem] p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-50"
            >
              {/* Icon Container */}
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 ${step.bgColor}`}
              >
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
