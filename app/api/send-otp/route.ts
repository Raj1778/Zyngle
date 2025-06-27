import { NextResponse } from "next/server";
import { User } from "@/models/User";
import connectDB from "@/lib/mongodb";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  await connectDB();

  const { email, password } = await req.json();

  // Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  }

  // Generate OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const otpExpiry = new Date(Date.now() + 10 * 60 * 1000); // 10 min expiry

  // Create new user (unverified)
  const newUser = new User({
    email,
    password,
    otp,
    otpExpiry,
    isVerified: false,
  });

  await newUser.save();

  try {
    await resend.emails.send({
      from: "Zyngle <noreply@yourdomain.com>", // use a verified sender domain
      to: email,
      subject: "Zyngle - Your OTP Code",
      text: `Welcome to Zyngle!\n\nYour OTP is: ${otp}\n\nIt will expire in 10 minutes.`,
    });

    return NextResponse.json({ message: "OTP sent successfully" });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send OTP" }, { status: 500 });
  }
}
