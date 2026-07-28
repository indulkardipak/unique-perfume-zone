import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import { connectDB } from "@/lib/mongodb";
import Admin from "@/models/Admin";

export async function POST(request: Request) {
  try {
    await connectDB();

    const { email, password } = await request.json();

    const admin = await Admin.findOne({
      email: email.toLowerCase(),
    });

    if (!admin) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      admin.password
    );

    if (!isPasswordValid) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Login successful",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}