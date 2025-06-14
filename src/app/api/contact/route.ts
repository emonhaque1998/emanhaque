import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import { categorySchema } from "@/lib/categorySchema";
import { contactSchema } from "@/lib/contactSchema";

export async function POST(req: NextRequest) {
  const data = await req.json();

  const parseResult = contactSchema.safeParse(data);

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
    const newContact = await prisma.contact.create({
      data: parseResult.data,
    });
    return NextResponse.json(
      { newContact, msg: "Message Submited" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Prisma error:", error);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const takeParam = searchParams.get("take");

  const take = takeParam ? parseInt(takeParam) : 10; // Default to 2 if not provided

  try {
    const allContact = await prisma.contact.findMany({
      take,
    });
    return NextResponse.json(allContact, { status: 200 });
  } catch (error) {
    console.error("Prisma error:", error);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
