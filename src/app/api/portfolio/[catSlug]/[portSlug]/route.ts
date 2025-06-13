import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import { postSchema } from "@/lib/postSchema";
import { auth } from "@clerk/nextjs/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ portSlug: string }> }
) {
  const slug = (await params).portSlug;

  try {
    const portfolio = await prisma.portfolio.findFirst({
      where: {
        slug,
      },
      include: {
        user: true,
        category: true,
      },
    });
    return NextResponse.json(portfolio, { status: 200 });
  } catch (error) {
    console.error("Prisma error:", error);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
