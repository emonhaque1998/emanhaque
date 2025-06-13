import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import { postSchema } from "@/lib/postSchema";
import { auth } from "@clerk/nextjs/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ catSlug: string }> }
) {
  const slug = (await params).catSlug;

  try {
    const category = await prisma.category.findFirst({
      where: {
        categorySlug: slug,
      },
      include: {
        portfolio: {
          include: {
            category: true,
            user: true,
          },
        },
      },
    });
    return NextResponse.json(category, { status: 200 });
  } catch (error) {
    console.error("Prisma error:", error);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
