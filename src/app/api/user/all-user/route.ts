import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import { postSchema } from "@/lib/postSchema";
import { auth } from "@clerk/nextjs/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const takeParam = searchParams.get("take");
  const take = takeParam ? parseInt(takeParam) : 2; // Default to 2 if not provided

  try {
    const allPost = await prisma.user.findMany({
      take,
    });
    return NextResponse.json(allPost, { status: 200 });
  } catch (error) {
    console.error("Prisma error:", error);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
