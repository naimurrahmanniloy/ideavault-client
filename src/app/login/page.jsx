"use client";

import React, { useState } from "react";

export default function LoginPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="min-h-screen w-full bg-slate-50 flex items-center justify-center p-0 sm:p-4 md:p-6 antialiased">
      {/* Main Split Layout Container */}
      <div className="w-full max-w-262.5 min-h-170 bg-white rounded-none sm:rounded-[24px] shadow-md border border-slate-100 overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT SIDE: Blue Banner (Hidden on Mobile/Tablet, visible on Desktop) */}
        <div className="hidden lg:flex flex-col justify-between bg-[#4338ca] p-12 text-white">
          <div className="flex flex-col gap-5 max-w-105 mt-6">
            <h1 className="text-[38px] font-bold leading-[1.2] tracking-tight">
              Protecting the seeds of the future.
            </h1>
            <p className="text-indigo-100 text-sm leading-relaxed font-medium">
              A secure, encrypted vault for visionaries to store, collaborate,
              and scale their most valuable intellectual property.
            </p>
          </div>

          {/* Abstract Graphic Placeholder Card */}
          <div className="w-full mt-8 rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900/40 aspect-16/10 flex flex-col justify-center items-center p-4 relative">
            <div className="absolute inset-0 bg-linear-to-b from-indigo-500/10 to-transparent pointer-events-none" />
            <span className="text-[10px] font-mono tracking-widest text-indigo-300/50 uppercase">
              Secure Vault Workspace
            </span>
          </div>
        </div>

        {/* RIGHT SIDE: Login Form Panel */}
        <div className="flex flex-col justify-center items-center p-8 sm:p-12 md:p-16 bg-white">
          <div className="w-full max-w-95 flex flex-col gap-6">
            {/* Header Titles */}
            <div className="flex flex-col gap-1.5">
              <h2 className="text-[28px] font-bold text-slate-900 tracking-tight">
                Welcome Back
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                Access your secured innovations.
              </p>
            </div>

            {/* Form Fields */}
            <form
              className="flex flex-col gap-4"
              onSubmit={(e) => e.preventDefault()}
            >
              {/* Email Input Field */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-700">
                  Email Address
                </label>
                <div className="relative flex items-center">
                  <div className="absolute left-3 text-slate-400 pointer-events-none">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <input
                    name="email"
                    type="email"
                    placeholder="name@company.com"
                    className="w-full h-11 pl-10 pr-4 bg-[#f0f2fe] text-slate-800 placeholder:text-slate-400 text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all"
                    required
                  />
                </div>
              </div>

              {/* Password Input Field */}
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-semibold text-slate-700">
                    Password
                  </label>
                  <a
                    href="#"
                    className="text-[11px] font-bold text-indigo-600 hover:underline"
                  >
                    Forgot Password?
                  </a>
                </div>
                <div className="relative flex items-center">
                  <div className="absolute left-3 text-slate-400 pointer-events-none">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <input
                    name="password"
                    type={passwordVisible ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full h-11 pl-10 pr-10 bg-[#f0f2fe] text-slate-800 placeholder:text-slate-400 text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setPasswordVisible(!passwordVisible)}
                    className="absolute right-3 text-slate-400 hover:text-slate-600 focus:outline-none"
                  >
                    {passwordVisible ? (
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me Checkbox */}
              <div className="flex items-center gap-2 mt-1">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 rounded border-slate-300 text-indigo-600 accent-indigo-600 focus:ring-indigo-500"
                />
                <label
                  required
                  htmlFor="remember"
                  className="text-xs font-medium text-slate-500 select-none cursor-pointer"
                >
                  Remember me for 30 days
                </label>
              </div>

              {/* Submit CTA Button */}
              <button
                type="submit"
                className="w-full h-11 bg-[#4f46e5] hover:bg-[#4338ca] text-white font-semibold rounded-xl text-sm shadow-md shadow-indigo-600/10 mt-2 transition-colors duration-200"
              >
                Login to Vault
              </button>
            </form>

            {/* Visual Divider Line */}
            <div className="flex items-center my-1 w-full">
              <div className="flex-1 border-t border-slate-200"></div>
              <span className="px-3 text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                OR
              </span>
              <div className="flex-1 border-t border-slate-200"></div>
            </div>

            {/* Google Sign-in Button */}
            <button
              type="button"
              className="w-full h-11 bg-[#f8fafc] border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold rounded-xl text-sm flex items-center justify-center gap-2.5 transition-colors"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Sign in with Google
            </button>

            {/* Route Action Switch Footer */}
            <div className="text-center text-xs text-slate-500 font-medium">
              New to IdeaVault?{" "}
              <a
                href="#"
                className="text-indigo-600 hover:underline font-semibold ml-0.5"
              >
                Create a secured account
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
