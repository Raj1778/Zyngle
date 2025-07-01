"use client";

import React from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/Sidebar";
import { FloatingDock } from "@/components/ui/dock";
import {
  IconHome2,
  IconUser,
  IconSettings,
  IconSearch,
  IconDatabase,
  IconChartBar,
  IconRocket,
  IconCirclePlus,
  IconMessageCircle2,
} from "@tabler/icons-react";

export default function Home() {
  const sidebarLinks = [
    {
      label: "Home",
      href: "/dashboard",
      icon: <IconHome2 className="h-5 w-5 text-neutral-300" />,
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
    {
      label: "Analytics",
      href: "/analytics",
      icon: <IconChartBar className="h-5 w-5 text-neutral-300" />,
    },
    {
      label: "Projects",
      href: "/projects",
      icon: <IconRocket className="h-5 w-5 text-neutral-300" />,
    },
    {
      label: "Database",
      href: "/database",
      icon: <IconDatabase className="h-5 w-5 text-neutral-300" />,
    },
  ];

  const dockLinks = [
    {
      title: "Home",
      icon: <IconHome2 className="h-full w-full text-neutral-300" />,
      href: "/dashboard",
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
      <Sidebar>
        <div className="min-h-screen flex flex-col md:flex-row bg-gray-100 dark:bg-black text-black dark:text-white">
          <SidebarBody className="bg-gray-100 dark:bg-neutral-900">
            <div className="space-y-2">
              {sidebarLinks.map((link) => (
                <SidebarLink key={link.href} link={link} />
              ))}
            </div>
          </SidebarBody>

          <main className="flex-1 p-8">
            <h1 className="text-2xl font-bold mb-4">
              Welcome to Zyngle Dashboard 🚀
            </h1>
            <p className="text-neutral-600 dark:text-neutral-300">
              Here's your main dashboard content. Add charts, widgets, posts, or
              activity here.
            </p>
          </main>

          <div className="fixed bottom-6 left-0 right-0 flex justify-center md:justify-end md:pr-6 z-50">
            <FloatingDock items={dockLinks} />
          </div>
        </div>
      </Sidebar>
    </div>
  );
}
