"use client";

import React from "react";
import Sidebar from "@/components/ui/Sidebar";
import { FloatingDock } from "@/components/ui/dock";
import ZyngleNavbar from "@/components/ui/Navbar";
import {
  IconHome2,
  IconUser,
  IconSettings,
  IconSearch,
  IconDatabase,
  IconRocket,
  IconCirclePlus,
  IconMessageCircle2,
  IconTrendingUp,
  IconUsers,
} from "@tabler/icons-react";

export default function Home() {
  const sidebarLinks = [
    {
      label: "Home",
      href: "/home",
      icon: <IconHome2 className="h-5 w-5 text-neutral-300" />,
    },
    {
      label: "Trending",
      href: "/tredning",
      icon: <IconTrendingUp className="h-5 w-5 text-neutral-300" />,
    },
    {
      label: "Match",
      href: "/match",
      icon: <IconUsers className="h-5 w-5 text-neutral-300" />,
    },
    {
      label: "Profile",
      href: "/profile",
      icon: <IconUser className="h-5 w-5 text-neutral-300" />,
    },

    {
      label: "Settings",
      href: "/settings",
      icon: <IconSettings className="h-5 w-5 text-neutral-300" />,
    },
  ];

  const dockLinks = [
    {
      title: "Home",
      icon: <IconHome2 className="h-full w-full text-neutral-300" />,
      href: "/home",
    },
    {
      title: "Search",
      icon: <IconSearch className="h-full w-full text-neutral-300" />,
      href: "/search",
    },
    {
      title: "Create",
      icon: <IconCirclePlus className="h-full w-full text-neutral-300" />,
      href: "/create",
    },
    {
      title: "Chat",
      icon: <IconMessageCircle2 className="h-full w-full text-neutral-300" />,
      href: "/chat",
    },
    {
      title: "Profile",
      icon: <IconUser className="h-full w-full text-neutral-300" />,
      href: "/profile",
    },
  ];

  return (
    <div className="dark">
      <ZyngleNavbar />
      {/* Sidebar */}
      <Sidebar links={sidebarLinks} />

      {/* Add left margin to accommodate fixed sidebar (width = 64 = 16rem) */}
      <div className="ml-64 pt-16 min-h-screen flex flex-col bg-gray-100 dark:bg-black text-black dark:text-white">
        <main className="flex-1 p-8">
          <h1 className="text-2xl font-bold mb-4">
            Welcome to Zyngle Home Page – This is your feed 🚀
          </h1>
          <p className="text-neutral-600 dark:text-neutral-300">
            You can view posts, chat with friends, and explore new content here.
          </p>
        </main>

        <div className="fixed bottom-6 left-0 right-0 flex justify-center md:justify-end md:pr-6 z-50">
          <FloatingDock items={dockLinks} />
        </div>
      </div>
    </div>
  );
}
