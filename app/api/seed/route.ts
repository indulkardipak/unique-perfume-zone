import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import { connectDB } from "@/lib/mongodb";
import Admin from "@/models/Admin";

export async function GET() {
  try {
    await connectDB();

    const exists = await Admin.findOne({
      email: "admin@uniqueperfumezone.com",
    });

    if (exists) {
      return NextResponse.json({
        message: "Admin already exists",
      });
    }

    const hashedPassword = await bcrypt.hash("Admin@123", 10);

    await Admin.create({
      email: "admin@uniqueperfumezone.com",
      password: hashedPassword,
    });

    return NextResponse.json({
      message: "Admin created successfully",
    });
  } catch (error) {
    console.error("Seed Error:", error);

    return NextResponse.json(
      {
        message: "Failed",
        error: error instanceof Error ? error.message : "Unknown Error",
      },
      {
        status: 500,
      }
    );
  }
}
