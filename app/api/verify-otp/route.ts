import { NextResponse } from "next/server";
import { User } from "@/models/User";
import connectDB from "@/lib/mongodb";

export async function POST(req: Request) {
  await connectDB();
  const { email, otp } = await req.json();

  const user = await User.findOne({ email });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  if (user.isVerified) {
    return NextResponse.json({ message: "User already verified" });
  }

  if (user.otp !== otp) {
    return NextResponse.json({ error: "Invalid OTP" }, { status: 400 });
  }

  if (user.otpExpiry < new Date()) {
    return NextResponse.json({ error: "OTP expired" }, { status: 400 });
  }

  user.isVerified = true;
  user.otp = null;
  user.otpExpiry = null;

  await user.save();

  return NextResponse.json({ message: "OTP verified successfully" });
}
