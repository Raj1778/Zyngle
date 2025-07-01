"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/Input";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";

export default function SignupFormDemo() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("❌ Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Something went wrong");
        return;
      }

      alert("✅ Account created successfully");
      router.push("/login");
    } catch (err) {
      alert("⚠️ Server error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white flex items-center justify-center px-4">
      <div className="bg-[#1a1a1a] border border-[#2a2a2a] shadow-md rounded-2xl p-8 m-10 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center">Welcome to Zyngle ✨</h2>
        <p className="text-sm text-gray-400 text-center mt-1">
          Sign up to connect with real people.
        </p>

        <form className="mt-8" onSubmit={handleSubmit}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email" className="text-sm text-white">
              Email address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-[#2a2a2a] text-white placeholder-gray-400 border border-[#333]"
              required
            />
          </LabelInputContainer>

          <LabelInputContainer className="mb-6">
            <Label htmlFor="confirmpassword" className="text-sm text-white">
              Confirm password
            </Label>
            <Input
              id="confirmpassword"
              type="password"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="bg-[#2a2a2a] text-white placeholder-gray-400 border border-[#333]"
              required
            />
          </LabelInputContainer>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-white rounded-md hover:brightness-110 transition"
          >
            {loading ? "Signing up..." : "Sign up →"}
          </button>

          <p className="text-sm text-gray-400 text-center mt-4">
            Already have an account?{" "}
            <Link href="/login" className="text-purple-400 hover:underline">
              ⮞ Login
            </Link>
          </p>

          <div className="my-6 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-600 to-transparent" />
          <p className="text-md text-center mb-4">Or, sign up with</p>

          <div className="flex flex-col space-y-4">
            <button
              type="button"
              className="flex items-center justify-center space-x-2 rounded-md bg-[#2a2a2a] py-2 px-4 text-white hover:bg-[#333] transition"
            >
              <IconBrandGoogle className="h-4 w-4" />
              <span className="text-sm">Google</span>
            </button>

            <button
              type="button"
              className="flex items-center justify-center space-x-2 rounded-md bg-[#2a2a2a] py-2 px-4 text-white hover:bg-[#333] transition"
            >
              <IconBrandGithub className="h-4 w-4" />
              <span className="text-sm">GitHub</span>
            </button>
          </div>
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
}) => (
  <div className={cn("flex w-full flex-col space-y-2", className)}>
    {children}
  </div>
);
