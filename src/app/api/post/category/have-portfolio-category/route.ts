import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const categoriesWithPosts = await prisma.category.findMany({
      where: {
        portfolio: {
          some: {}, // Only categories that have at least one post
        },
      },
      include: {
        portfolio: true, // Optional: include the posts in the result
      },
    });
    return NextResponse.json(categoriesWithPosts, { status: 200 });
  } catch (error) {
    console.error("Prisma error:", error);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
