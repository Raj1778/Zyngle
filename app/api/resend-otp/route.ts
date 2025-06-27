import { NextResponse } from "next/server";
import { User } from "@/models/User";
import connectDB from "@/lib/mongodb";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  await connectDB();

  const { email } = await req.json();

  const user = await User.findOne({ email });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  if (user.isVerified) {
    return NextResponse.json(
      { error: "User already verified" },
      { status: 400 }
    );
  }

  // Generate new OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const otpExpiry = new Date(Date.now() + 10 * 60 * 1000); // 10 min

  user.otp = otp;
  user.otpExpiry = otpExpiry;
  await user.save();

  try {
    await resend.emails.send({
      from: "Zyngle <noreply@yourdomain.com>", // Must be verified on Resend
      to: email,
      subject: "Zyngle - Your OTP Code (Resent)",
      text: `Your OTP code is ${otp}. It will expire in 10 minutes.`,
    });

    return NextResponse.json({ message: "OTP resent successfully" });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send OTP" }, { status: 500 });
  }
}
