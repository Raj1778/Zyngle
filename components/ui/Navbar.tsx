"use client";

import React from "react";
import { IconDots } from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";

const ZyngleNavbar: React.FC = () => {
  return (
    <nav className="w-full fixed top-0 left-0 z-40 bg-white dark:bg-neutral-900 border-b border-gray-200 dark:border-neutral-800 shadow-sm">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex items-center ">
            <Link
              href="#"
              className="text-xl font-bold text-blue-600 dark:text-blue-400"
            >
              <Image
                src="/logo.png"
                alt="Zyngle Logo"
                width={120}
                height={100}
              />
            </Link>
          </div>

          {/* Center Search */}
          <div className="flex-1 px-4 max-w-md hidden md:block">
            <input
              type="text"
              placeholder=" 🔍  Search Zyngle..."
              className="w-full px-3 py-1.5 rounded-full bg-gray-100 dark:bg-neutral-800 text-black dark:text-white placeholder-gray-500 dark:placeholder-neutral-400 border border-gray-300 dark:border-neutral-700 focus:outline-none  hover:outline-none "
            />
          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center gap-4">
            <button className="text-sm px-5 py-2 rounded-xl font-medium text-white bg-gradient-to-r from-fuchsia-700 via-pink-700 to-indigo-700 hover:from-fuchsia-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 transition">
              Login
            </button>

            <IconDots className="w-5 h-5 text-gray-700 dark:text-gray-300 cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ZyngleNavbar;
