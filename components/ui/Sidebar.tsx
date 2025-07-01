// components/ui/Sidebar.tsx
import React from "react";

type LinkType = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

type SidebarProps = {
  links: LinkType[];
};

const Sidebar: React.FC<SidebarProps> = ({ links }) => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-neutral-900 text-white p-4 z-40">
      <div className="space-y-4">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="flex items-center gap-2 text-sm hover:text-white text-neutral-300 hover:bg-neutral-800 p-2 rounded-md transition-colors duration-200"
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
