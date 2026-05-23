import IdeaCard from "@/components/IdeaCard";
import React from "react";

const IdeasPage = async () => {
  const data = await fetch("http://localhost:5000/ideas");
  const ideas = await data.json();

  return (
    <div className=" bg-[#FAF8FF] min-h-screen py-16 px-6 md:px-16">
      <h1 className="text-4xl font-bold ">Discover Your Next Venture</h1>
      <p className="text-lg text-gray-600">
        Explore a curated collection of innovative concepts waiting for the
        right visionary to bring them to life.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 w-10/12 md:w-11/12 mx-auto px-6 md:px-16  space-y-4 ">
        {ideas.map((idea) => (
          <IdeaCard key={idea._id} idea={idea} />
        ))}
      </div>
    </div>
  );
};

export default IdeasPage;
