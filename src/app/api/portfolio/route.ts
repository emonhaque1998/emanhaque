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
    return NextResponse.json(
      { newPost, msg: "Portfolio created" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Prisma error:", error);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "10", 10);
  const skip = (page - 1) * limit;

  try {
    const [portfolio, total] = await Promise.all([
      prisma.portfolio.findMany({
        skip,
        take: limit,
        include: {
          user: true,
          category: true,
        },
        orderBy: { createdAt: "desc" },
      }),
      prisma.portfolio.count(),
    ]);

    return NextResponse.json(
      {
        portfolio: portfolio,
        meta: {
          total,
          page,
          limit,
          totalPages: Math.ceil(total / limit),
        },
      },
      {
        status: 200,
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}
