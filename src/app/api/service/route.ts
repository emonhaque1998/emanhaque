import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import { serviceSchema } from "@/lib/serviceSchema";

export async function POST(req: NextRequest) {
  const data = await req.json();

  const parseResult = serviceSchema.safeParse(data);

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
    const exitsService = await prisma.service.findFirst({
      where: {
        categoryId: parseResult.data.categoryId,
      },
    });

    if (exitsService) {
      return NextResponse.json(
        { error: "This Service already Defined" },
        { status: 404 }
      );
    }

    const service = await prisma.service.create({
      data: parseResult.data,
    });

    return NextResponse.json(
      { service, msg: "Service Created" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Database Error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const services = await prisma.service.findMany({
      include: {
        category: true,
      },
    });
    return NextResponse.json(services, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch services" },
      { status: 500 }
    );
  }
}
