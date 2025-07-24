import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import { postSchema } from "@/lib/postSchema";
import { auth } from "@clerk/nextjs/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ catSlug: string }> }
) {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "10", 10);
  const skip = (page - 1) * limit;
  const slug = (await params).catSlug;

  try {
    const [category, total] = await Promise.all([
      prisma.category.findFirst({
        where: { categorySlug: slug },
        include: {
          portfolio: {
            take: limit,
            skip: skip,
            include: {
              category: true,
              user: true,
            },
          },
        },
      }),
      prisma.portfolio.count({
        where: {
          category: {
            categorySlug: slug,
          },
        },
      }),
    ]);

    return NextResponse.json(
      {
        category: category,
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
