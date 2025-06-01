import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import { postSchema } from "@/lib/postSchema";
import { auth } from "@clerk/nextjs/server";

export async function POST(req: NextRequest) {
  const data = await req.json();

  const parseResult = postSchema.safeParse(data);

  if (!parseResult.success) {
    return NextResponse.json(
      {
        error: "Validation failed",
        details: parseResult.error.flatten(),
      },
      { status: 400 }
    );
  }

  const { title, content, userId, slug, categoryId } = parseResult.data;

  try {
    const newPost = await prisma.post.create({
      data: {
        title,
        content,
        slug,
        user: {
          connect: { id: userId },
        },
        category: {
          connect: { id: categoryId },
        },
      },
      include: {
        user: true,
      },
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
    const allPost = await prisma.post.findMany({
      take,
      include: {
        user: true,
      },
    });
    return NextResponse.json({ allPost, msg: "Post created" }, { status: 200 });
  } catch (error) {
    console.error("Prisma error:", error);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
