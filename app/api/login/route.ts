import { NextResponse } from "next/server";
import { User } from "@/models/User";
import connectDB from "@/lib/mongodb";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  await connectDB();
  const { email, password } = await req.json();

  const user = await User.findOne({ email });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  // ❌ Commented out: skip OTP check
  // if (!user.isVerified) {
  //   return NextResponse.json({ error: "Email not verified" }, { status: 403 });
  // }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  return NextResponse.json({ message: "Login successful" });
}
