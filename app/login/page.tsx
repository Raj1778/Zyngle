"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/Input";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) {
      alert("❌ Please enter email and password");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "❌ Login failed");
        return;
      }

      alert("✅ Login successful");
      router.push("/dashboard");
    } catch (err) {
      alert("⚠️ Server error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white flex items-center justify-center px-4">
      <div className="bg-[#1a1a1a] border border-[#2a2a2a] shadow-md rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center">Welcome Back ✨</h2>
        <p className="text-sm text-gray-400 text-center mt-1">
          Login to continue using Zyngle.
        </p>

        <form className="mt-8" onSubmit={handleSubmit}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email" className="text-sm text-white">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              placeholder="you@example.com"
              type="email"
              className="bg-[#2a2a2a] text-white placeholder-gray-400 border border-[#333]"
              required
            />
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="password" className="text-sm text-white">
              Password
            </Label>
            <Input
              id="password"
              name="password"
              placeholder="••••••••"
              type="password"
              className="bg-[#2a2a2a] text-white placeholder-gray-400 border border-[#333]"
              required
            />
          </LabelInputContainer>

          <div className="text-right text-sm mb-4">
            <Link href="#" className="text-blue-400 hover:underline">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-white rounded-md hover:brightness-110 transition"
          >
            {loading ? "Logging in..." : "Login →"}
          </button>

          <p className="text-sm text-gray-400 text-center mt-4">
            Don’t have an account?{" "}
            <Link href="/signup" className="text-purple-400 hover:underline">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

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
