import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import { categorySchema } from "@/lib/categorySchema";
import { NextApiRequest, NextApiResponse } from "next";

export async function POST(req: NextRequest) {
  const data = await req.json();

  const parseResult = categorySchema.safeParse(data);

  if (!parseResult.success) {
    return NextResponse.json(
      {
        error: "Validation failed",
        details: parseResult.error.flatten(),
      },
      { status: 400 }
    );
  }

  const { categoryName, categorySlug } = parseResult.data;

  try {
    const category = await prisma.category.create({
      data: {
        categoryName,
        categorySlug,
      },
    });

    return NextResponse.json(
      { category, msg: "Category Created" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Database Error" }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const takeParam = searchParams.get("take");
  const take = takeParam ? parseInt(takeParam) : 10; // Default to 2 if not provided

  try {
    const allCategory = await prisma.category.findMany({
      take,
    });
    return NextResponse.json(
      { allCategory, msg: "Post created" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Prisma error:", error);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
