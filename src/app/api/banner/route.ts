import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import { bannerSchema } from "@/lib/bannerSchema";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET() {
  try {
    const banner = await prisma.banner.findFirst();
    if (!banner) {
      return NextResponse.json({ error: "Banner not found" }, { status: 404 });
    }
    return NextResponse.json(banner, { status: 200 });
  } catch (error) {
    console.error("Prisma error:", error);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const data = await req.json();

  const parseResult = bannerSchema.safeParse(data);

  if (!parseResult.success) {
    return NextResponse.json(
      {
        error: "Validation failed",
        details: parseResult.error.flatten(),
      },
      { status: 400 }
    );
  }

  const { title, slogan, url, image, youtube, facebook, github, linkdin } =
    parseResult.data;

  try {
    const existingBanner = await prisma.banner.findFirst();

    if (existingBanner != null) {
      if (image) {
        const banner = await prisma.banner.update({
          where: { id: existingBanner.id },
          data: {
            title,
            slogan,
            url,
            image,
            youtube,
            facebook,
            github,
            linkdin,
          },
        });
        return NextResponse.json(
          { success: "Banner is Updated", data: banner },
          { status: 201 }
        );
      }
      const banner = await prisma.banner.update({
        where: { id: existingBanner.id },
        data: {
          title,
          slogan,
          url,
          youtube,
          facebook,
          github,
          linkdin,
        },
      });
      return NextResponse.json(
        { success: "Banner is Updated", data: banner },
        { status: 201 }
      );
    } else {
      const banner = await prisma.banner.create({
        data: { title, slogan, url, image, youtube, facebook, github, linkdin },
      });
      return NextResponse.json(
        { banner, success: "Banner is updated" },
        { status: 201 }
      );
    }
  } catch (error) {
    console.error("Prisma error:", error);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
