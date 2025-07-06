// app/ClientLayout.tsx
"use client";

import { usePathname } from "next/navigation";
import { FloatingDock } from "@/components/ui/dock";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const excludedRoutes = ["/", "/login", "/signup"];

  const showDock = !excludedRoutes.includes(pathname);

  return (
    <>
      {children}
      {showDock && (
        <div className="dark fixed bottom-6 left-0 right-0 flex justify-center md:justify-end md:pr-6 z-50">
          <FloatingDock />
        </div>
      )}
    </>
  );
}
