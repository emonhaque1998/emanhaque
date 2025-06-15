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

  const { title, content, image, userId, slug, categoryId } = parseResult.data;

  try {
    const newPost = await prisma.post.create({
      data: {
        title,
        content,
        image,
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
        category: true,
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
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "10", 10);
  const skip = (page - 1) * limit;

  try {
    const [posts, total] = await Promise.all([
      prisma.post.findMany({
        skip,
        take: limit,
        include: {
          user: true,
          category: true,
        },
        orderBy: { createdAt: "desc" },
      }),
      prisma.post.count(),
    ]);

    return NextResponse.json({
      posts: posts,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}
