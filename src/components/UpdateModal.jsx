"use client";

import { Envelope, Pencil, ShieldCheck } from "@gravity-ui/icons";
import {
  Button,
  Input,
  Label,
  Modal,
  Separator,
  Surface,
  TextField,
} from "@heroui/react";
import { redirect } from "next/navigation";
import { toast } from "react-hot-toast";
import { IoRocketOutline } from "react-icons/io5";
import { SiGoogledocs } from "react-icons/si";

export function UpdateModal({ idea }) {
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
    category,
    _id,
  } = idea;
  const onSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to backend)
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const res = await fetch(`http://localhost:5000/ideas/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    toast.success(`Idea updated successfully!`);
  };
  return (
    <Modal>
      <Button variant="outline" className="w-full">
        <Pencil size={20} />
        <span className="text-lg text-bold">Update Idea</span>
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden rounded-2xl">
            <Modal.CloseTrigger />

            <Modal.Header className=" border-b p-6 ">
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground border  border-gray-300">
                <Envelope width={30} height={20} />
              </Modal.Icon>

              <Modal.Heading className="text-2xl">
                Update Your Idea
              </Modal.Heading>
              <p className="mt-1.5 text-lg leading-5 text-muted">
                Fill out the details below to refine and update your concept.
              </p>
            </Modal.Header>

            <Modal.Body className="p-6 md:p-10 overflow-y-auto bg-gray-50/50">
              <Surface variant="default" className="bg-transparent">
                <form className="w-full" onSubmit={onSubmit}>
                  <div className="w-full mx-auto mb-10">
                    <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
                      <div className="lg:col-span-2 space-y-8">
                        {/* Core Concept */}
                        <div className="bg-white p-10 rounded-3xl border border-gray-200 shadow-sm">
                          <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2">
                            <IoRocketOutline className="text-[#4441CC]" />
                            Core Concept
                          </h2>

                          <div className="space-y-6 ">
                            <div className="flex flex-col p-10 gap-3">
                              <Label
                                htmlFor="title"
                                className="font-semibold text-gray-700 text-lg"
                              >
                                Idea Title
                              </Label>
                              <Input
                                defaultValue={title}
                                id="title"
                                name="title"
                                placeholder="e.g. Decentralized Green Energy Grid"
                                type="text"
                                className="h-12 bg-[#F2F3FF] w-full px-4 rounded-xl"
                              />
                            </div>

                            <div className="flex flex-col p-10 gap-3">
                              <Label
                                htmlFor="description"
                                className="font-semibold text-gray-700 text-lg"
                              >
                                Short Description
                              </Label>
                              <textarea
                                defaultValue={shortDescription}
                                id="description"
                                name="shortDescription"
                                placeholder="A concise summary of your innovation"
                                className="min-h-30 bg-[#F2F3FF] rounded-xl border border-gray-200 p-4 outline-none focus:ring-2 focus:ring-indigo-500 w-full resize-y"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Detailed Description */}
                        <div className="bg-white p-10 rounded-3xl border border-gray-200 shadow-sm">
                          <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                            <SiGoogledocs className="text-[#4441CC]" />
                            Detailed Description
                          </h2>
                          <textarea
                            defaultValue={detailedDescription}
                            placeholder="Expand on the mechanics, vision, and roadmap..."
                            className="min-h-62.5 w-full bg-[#F2F3FF] rounded-xl border border-gray-200 p-4 outline-none focus:ring-2 focus:ring-indigo-500 resize-y"
                            name="detailedDescription"
                          />
                        </div>
                      </div>

                      {/* RIGHT SIDE */}
                      <div className="space-y-8">
                        {/* Category */}
                        <div className="bg-white p-10 rounded-3xl border border-gray-200 shadow-sm">
                          <h2 className="text-xl font-semibold mb-4">
                            Category
                          </h2>
                          <Input
                            defaultValue={category}
                            placeholder="Tech"
                            className="h-12 bg-[#F2F3FF] w-full px-4 rounded-xl"
                            name="category"
                          />
                        </div>

                        {/* Budget & Target Audience */}
                        <div className="bg-white p-10 rounded-3xl border border-gray-200 shadow-sm">
                          <h2 className="text-xl font-semibold mb-4">
                            Estimated Budget
                          </h2>
                          <Input
                            defaultValue={estimatedBudget}
                            placeholder="$50,000"
                            className="h-12 bg-[#F2F3FF] w-full px-4 rounded-xl mb-6"
                            name="estimatedBudget"
                          />

                          <h2 className="text-xl font-semibold mb-4">
                            Target Audience
                          </h2>
                          <Input
                            defaultValue={targetAudience}
                            placeholder="e.g., Tech Enthusiasts, Entrepreneurs"
                            className="h-12 bg-[#F2F3FF] w-full px-4 rounded-xl"
                            name="targetAudience"
                          />
                        </div>

                        {/* Tags */}
                        <div className="bg-white p-10 rounded-3xl border border-gray-200 shadow-sm">
                          <h2 className="text-xl font-semibold mb-4">Tags</h2>
                          <Input
                            defaultValue={tags}
                            placeholder="SaaS, Mobile, Web3..."
                            className="h-12 w-full bg-[#F2F3FF] px-4 rounded-xl"
                            name="tags"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Problem Field Section */}
                  <div className="w-full mx-auto space-y-8">
                    {/* Top Two Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
                      {/* Problem Statement */}
                      <div className="bg-[#f8f8ff] border border-dashed border-gray-300 rounded-3xl p-10 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#111827] mb-5 flex items-center gap-3">
                          <span className="text-red-500">⚠</span>
                          Problem Statement
                        </h2>
                        <textarea
                          defaultValue={problemStatement}
                          placeholder="Identify the core pain point your idea addresses..."
                          className="w-full min-h-[140px] bg-transparent outline-none text-gray-600 placeholder:text-gray-400 resize-none"
                          name="problemStatement"
                        />
                      </div>

                      {/* Proposed Solution */}
                      <div className="bg-[#f8f8ff] border border-[#cfc7ff] rounded-3xl p-10 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#111827] mb-5 flex items-center gap-3">
                          <span className="text-green-500">✦</span>
                          Proposed Solution
                        </h2>
                        <textarea
                          defaultValue={proposedSolution}
                          placeholder="How does your innovation solve this? Be specific about the 'magic'..."
                          className="w-full min-h-[140px] bg-transparent outline-none text-gray-600 placeholder:text-gray-400 resize-none"
                          name="proposedSolution"
                        />
                      </div>
                    </div>

                    {/* Visual Identity */}
                    <div className="bg-white border border-gray-200 rounded-3xl p-6 md:p-8 shadow-sm">
                      <div className="grid grid-cols-1 p-10 gap-8 items-center">
                        {/* Left Side */}
                        <div>
                          <h2 className="text-2xl md:text-3xl font-bold text-[#111827] mb-4">
                            Visual Identity
                          </h2>
                          <p className="text-gray-500 mb-6 leading-relaxed">
                            Add a cover image URL to help investors and
                            collaborators visualize your brands presence.
                          </p>
                          <Input
                            defaultValue={imageUrl}
                            placeholder="https://cdn.pixabay.com/photos/your-concept-visual"
                            className="h-14 w-full px-4 rounded-xl bg-[#F2F3FF]"
                            name="imageUrl"
                          />
                        </div>
                      </div>
                    </div>

                    <Separator className="my-8" />
                  </div>
                  <Button className="w-full" type="submit" variant="primary">
                    Update Idea
                  </Button>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
