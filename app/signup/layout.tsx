// app/signup/layout.tsx
import React from "react";

export default function SignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dark bg-zinc-900 text-white min-h-screen py-10">{children}</div>
  );
}
