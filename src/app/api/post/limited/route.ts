import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const takeParam = searchParams.get("take");

  const take = takeParam ? parseInt(takeParam) : 2;

  try {
    const limitedPost = await prisma.post.findMany({
      take,
      include: {
        user: true,
        category: true,
      },
    });

    return NextResponse.json(limitedPost, { status: 200 });
  } catch (error) {
    console.error("Prisma error:", error);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
