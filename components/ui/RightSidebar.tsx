"use client";

import React from "react";

export default function RightSidebar() {
  const trending = [
    "Panchayat S4 Breaks Records",
    "Hasina Sentenced by ICT",
    "Nolan's Odyssey Trailer Out",
    "NASA Moon Base by 2030",
  ];

  const suggestedUsers = [
    { name: "Aman", username: "@aman_2002" },
    { name: "Riya", username: "@riya_dev" },
    { name: "Kunal", username: "@kunal.codes" },
  ];

  const links = ["Privacy", "Terms", "Help", "Settings"];

  return (
    <div className="w-55 p-4 text-sm bg-white dark:bg-neutral-900 text-black dark:text-white  dark:border-neutral-700">
      {/* Trending */}
      <div className="mb-6">
        <h2 className="font-bold mb-2 text-lg">Popular</h2>
        <ul className="space-y-2">
          {trending.map((topic, i) => (
            <li key={i} className="hover:underline cursor-pointer">
              • {topic}
            </li>
          ))}
        </ul>
      </div>

      {/* Suggestions */}
      <div className="mb-6">
        <h2 className="font-bold mb-2 text-lg">Who to follow</h2>
        <ul className="space-y-2">
          {suggestedUsers.map((user, i) => (
            <li key={i} className="flex justify-between items-center">
              <div>
                <p className="font-medium">{user.name}</p>
                <p className="text-neutral-500">{user.username}</p>
              </div>
              <button className="text-xs px-3 py-1 bg-blue-600 text-white rounded-full">
                Follow
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Links */}
      <div className="flex flex-wrap gap-3 text-xs text-neutral-500">
        {links.map((link, i) => (
          <span key={i} className="hover:underline cursor-pointer">
            {link}
          </span>
        ))}
      </div>
    </div>
  );
}
