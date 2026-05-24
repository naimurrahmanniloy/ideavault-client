"use client";

import { authClient } from "@/lib/auth-client";
import { Eye, Lock, Mail, Image as ImageIcon, User } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { toast } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

export default function RegisterPage() {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());
    const { data, error } = await authClient.signUp.email({
      email: user.email,
      password: user.password,
      name: user.name,
      image: user.image,
    });
    if (data) {
      toast.success("You have been registered");
      redirect("/");
    }
    if (error) {
      toast.error(error);
    }
  };
  const GoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };
  return (
    <div className="min-h-screen bg-[#f5f2ff] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md rounded-[28px] border border-[#d9d2ff] bg-white/80 backdrop-blur-sm shadow-sm px-8 py-10">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-[40px] font-bold text-[#1E1E2F] leading-none">
            Create Account
          </h1>

          <p className="mt-3 text-[15px] text-[#6b7280]">
            Join the community of elite innovators.
          </p>
        </div>

        {/* Google Button */}
        <button
          className="mt-8 w-full h-13 rounded-xl border border-[#d7d7e2] bg-white hover:bg-gray-50 transition-all flex items-center justify-center gap-3 text-[15px] font-medium text-[#111827] cursor-pointer"
          onClick={GoogleSignIn}
        >
          <FcGoogle />
          Sign up with Google
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 my-7">
          <div className="flex-1 h-px bg-[#d8d8e5]" />

          <span className="text-[11px] tracking-[2px] text-[#8b8ba3] uppercase">
            Or register with email
          </span>

          <div className="flex-1 h-px bg-[#d8d8e5]" />
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-[14px] font-semibold text-[#3d3d4e] mb-2">
              Full Name
            </label>

            <div className="relative">
              <User
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8f90a6]"
              />

              <input
                name="name"
                required
                type="text"
                placeholder="Enter your full name"
                className="w-full h-13 rounded-xl bg-[#f3f2ff] pl-12 pr-4 text-[14px] outline-none border border-transparent focus:border-[#5B4DFF]"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-[14px] font-semibold text-[#3d3d4e] mb-2">
              Email Address
            </label>

            <div className="relative">
              <Mail
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8f90a6]"
              />

              <input
                name="email"
                required
                type="email"
                placeholder="name@company.com"
                className="w-full h-13 rounded-xl bg-[#f3f2ff] pl-12 pr-4 text-[14px] outline-none border border-transparent focus:border-[#5B4DFF]"
              />
            </div>
          </div>

          {/* Photo URL */}
          <div>
            <label className="block text-[14px] font-semibold text-[#3d3d4e] mb-2">
              Photo URL
            </label>

            <div className="relative">
              <ImageIcon
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8f90a6]"
              />

              <input
                name="image"
                type="text"
                placeholder="https://example.com/avatar.jpg"
                className="w-full h-13 rounded-xl bg-[#f3f2ff] pl-12 pr-4 text-[14px] outline-none border border-transparent focus:border-[#5B4DFF]"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-[14px] font-semibold text-[#3d3d4e] mb-2">
              Password
            </label>

            <div className="relative">
              <Lock
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8f90a6]"
              />

              <input
                name="password"
                type="password"
                required
                placeholder="••••••••••"
                className="w-full h-13 rounded-xl bg-[#f3f2ff] pl-12 pr-12 text-[14px] outline-none border border-transparent focus:border-[#5B4DFF]"
              />

              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8f90a6]"
              >
                <Eye size={18} />
              </button>
            </div>

            <div className="mt-2 flex items-center gap-2">
              <div className="w-4 h-4 rounded-full border border-green-500 flex items-center justify-center text-[10px] text-green-500">
                ✓
              </div>

              <p className="text-[12px] text-[#6b7280]">
                Minimum 6 characters, including uppercase and lowercase.
              </p>
            </div>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full h-14 cursor-pointer rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] transition-all text-white font-semibold text-[18px] shadow-md mt-2"
          >
            Register
          </button>
        </form>

        {/* Login */}
        <p className="text-center text-[14px] text-[#6b7280] mt-7">
          Already have an account?{" "}
          <Link href={"/login"}>
            <span className="text-[#4F46E5] font-semibold cursor-pointer hover:underline">
              Login
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
}
