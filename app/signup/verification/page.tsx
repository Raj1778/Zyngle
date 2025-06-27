"use client";

import React from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export default function InputOTPDemo() {
  const email = "you@example.com"; // Make dynamic if needed

  return (
    <div className="min-h-[100vh] flex items-center justify-center bg-zinc-900 text-white px-4">
      <div className="bg-zinc-800 p-8 rounded-xl shadow-md w-full max-w-md text-center space-y-8">
        <div>
          <p className="text-sm text-zinc-300 mb-2">
            Enter the OTP sent to your email ID:
          </p>
          <p className="text-base font-semibold text-white">{email}</p>
        </div>

        <div className="flex justify-center">
          <InputOTP maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>

        <div className="space-y-4">
          <button
            type="submit"
            className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] hover:opacity-90 transition"
          >
            Verify OTP
            <BottomGradient />
          </button>

          <button className="text-sm text-blue-400 underline hover:text-blue-300">
            Change email ID
          </button>
        </div>
      </div>
    </div>
  );
}

const BottomGradient = () => (
  <>
    <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
    <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
  </>
);
