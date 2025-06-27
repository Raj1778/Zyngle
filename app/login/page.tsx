"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/Input";
import Link from "next/link";
import { cn } from "@/lib/utils";
import WorldMapDemo from "@/components/ui/WorldMapDemo";

export default function LoginPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    console.log("Login data:", { email, password });
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 z-0">
        <WorldMapDemo />
      </div>

      {/* Foreground: Login Form */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
          <h2 className="text-xl text-center font-bold text-neutral-800 dark:text-neutral-200">
            Welcome Back ✨
          </h2>
          <p className="mt-2 text-center max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
            Login to continue using Zyngle.
          </p>

          <form className="my-8" onSubmit={handleSubmit}>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                placeholder="you@example.com"
                type="email"
                required
              />
            </LabelInputContainer>

            <LabelInputContainer className="mb-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                placeholder="••••••••"
                type="password"
                required
              />
            </LabelInputContainer>

            <div className="text-right text-sm mb-4">
              <Link href="" className="text-blue-400 hover:underline">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
            >
              Login &rarr;
              <BottomGradient />
            </button>

            <p className="text-sm text-center mt-4 text-neutral-600 dark:text-neutral-400">
              Don’t have an account?{" "}
              <Link href="/signup" className="underline text-blue-400">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
