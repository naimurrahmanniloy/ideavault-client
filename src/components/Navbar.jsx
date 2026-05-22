"use client";

import Link from "next/link";

const Navbar = () => {
  const link = (
    <>
      <Link href="/">
        <li className="hover:text-[#4441CC]/80 transition duration-300 ease-in-out">
          Home
        </li>
      </Link>
      <Link href="/ideas">
        <li className="hover:text-[#4441CC]/80 transition duration-300 ease-in-out">
          Ideas
        </li>
      </Link>
      <Link href="/add-idea">
        <li className="hover:text-[#4441CC]/80 transition duration-300 ease-in-out">
          Add Idea
        </li>
      </Link>
      <Link href="/my-ideas">
        <li className="hover:text-[#4441CC]/70 transition duration-300 ease-in-out">
          My Ideas
        </li>
      </Link>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 p-3 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-[#4441CC]"
            >
              {link}
            </ul>
          </div>
          <h1 className="text-[#4441CC] font-bold text-2xl">IdeaVault</h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-7 text-[#4441CC] text-[15px] font-semibold  ">
            {link}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar "
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z--1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">Profile</a>
              </li>

              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
