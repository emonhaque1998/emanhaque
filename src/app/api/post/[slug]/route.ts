import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import { postSchema } from "@/lib/postSchema";
import { auth } from "@clerk/nextjs/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const slug = (await params).slug;

  try {
    const post = await prisma.post.findUnique({
      where: {
        slug,
      },
      include: {
        user: true,
      },
    });
    return NextResponse.json(
      { post, success: true, msg: "Post created" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Prisma error:", error);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
