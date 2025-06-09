import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import { portfolioSchema } from "@/lib/portfolioSchema";

export async function POST(req: NextRequest) {
  const data = await req.json();

  const parseResult = portfolioSchema.safeParse(data);

  if (!parseResult.success) {
    return NextResponse.json(
      {
        error: "Validation failed",
        details: parseResult.error.flatten(),
      },
      { status: 400 }
    );
  }

  try {
    const newPost = await prisma.portfolio.create({
      data: parseResult.data,
    });
    return NextResponse.json({ newPost, msg: "Post created" }, { status: 200 });
  } catch (error) {
    console.error("Prisma error:", error);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const takeParam = searchParams.get("take");
  const take = takeParam ? parseInt(takeParam) : 2; // Default to 2 if not provided

  try {
    const allPost = await prisma.portfolio.findMany({
      take,
      include: {
        user: true,
        category: true,
      },
    });
    return NextResponse.json(allPost, { status: 200 });
  } catch (error) {
    console.error("Prisma error:", error);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
