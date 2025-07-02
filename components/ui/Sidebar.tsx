// components/ui/Sidebar.tsx
import React from "react";
import {
  IconHome2,
  IconUser,
  IconSettings,
  IconTrendingUp,
  IconUsers,
} from "@tabler/icons-react";

const sidebarLinks = [
  {
    label: "Home",
    href: "/home",
    icon: <IconHome2 className="h-5 w-5 text-neutral-300" />,
  },
  {
    label: "Trending",
    href: "/trending",
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

const Sidebar: React.FC = () => {
  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-neutral-900 text-white p-4 z-40">
      <div className="space-y-4">
        {sidebarLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`flex items-center gap-2 text-md hover:text-white text-neutral-300 hover:bg-neutral-800  ${link.label === "Trending" && "bg-neutral-800 text-white bg-gradient-to-r from-fuchsia-700 via-pink-700 to-indigo-700 hover:text-red-500"} p-2 rounded-md transition-colors duration-200`}
          >
            {link.icon}
            <span>{link.label}</span>
          </a>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
